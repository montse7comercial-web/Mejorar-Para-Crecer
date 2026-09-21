import React, { useState } from 'react';
import { RADAR_COMPETENCIES } from '../data/workshopData';

interface RadarChartProps {
  className?: string;
  onSelectCompetency?: (comp: typeof RADAR_COMPETENCIES[0]) => void;
}

export const RadarChart: React.FC<RadarChartProps> = ({ className = '', onSelectCompetency }) => {
  const [activeCompetency, setActiveCompetency] = useState<number | null>(null);

  const size = 520;
  const center = size / 2;
  const radius = 175;
  const total = RADAR_COMPETENCIES.length;

  // Calculate coordinates for a point given index and ratio (0 to 1)
  const getCoordinates = (index: number, ratio: number) => {
    // Start from top (index 0 at -90 deg)
    const angle = (Math.PI * 2 / total) * index - Math.PI / 2;
    const x = center + radius * ratio * Math.cos(angle);
    const y = center + radius * ratio * Math.sin(angle);
    return { x, y, angle };
  };

  // Concentric levels (20%, 40%, 60%, 80%, 100%)
  const levels = [0.2, 0.4, 0.6, 0.8, 1.0];

  // Decorative neutral benchmark area representing the holistic 10-dimension radar framework
  // Balanced sample polygon to illustrate the diagnostic structure without fake individual score
  const sampleRatios = [0.75, 0.85, 0.7, 0.65, 0.8, 0.7, 0.85, 0.65, 0.75, 0.7];
  const samplePolygonPoints = sampleRatios
    .map((ratio, i) => {
      const { x, y } = getCoordinates(i, ratio);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <div className="w-full max-w-[500px] aspect-square relative">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full h-full drop-shadow-sm select-none"
          role="img"
          aria-label="Gráfico representativo del Radar de Desarrollo Profesional con diez competencias clave"
        >
          {/* Subtle background glow circle */}
          <circle
            cx={center}
            cy={center}
            r={radius * 1.12}
            fill="#faf6e4"
            opacity="0.6"
          />

          {/* Concentric grid webs */}
          {levels.map((level, idx) => {
            const points = Array.from({ length: total }, (_, i) => {
              const { x, y } = getCoordinates(i, level);
              return `${x.toFixed(1)},${y.toFixed(1)}`;
            }).join(' ');

            return (
              <polygon
                key={idx}
                points={points}
                fill={idx === levels.length - 1 ? '#ffffff' : 'none'}
                stroke="#dcd2cc"
                strokeWidth={idx === levels.length - 1 ? '1.5' : '1'}
                strokeDasharray={idx === levels.length - 1 ? 'none' : '3 3'}
                opacity="0.85"
              />
            );
          })}

          {/* Radial Axis lines */}
          {RADAR_COMPETENCIES.map((comp, i) => {
            const outer = getCoordinates(i, 1.0);
            const isHovered = activeCompetency === comp.id;

            return (
              <g key={comp.id}>
                <line
                  x1={center}
                  y1={center}
                  x2={outer.x}
                  y2={outer.y}
                  stroke={isHovered ? '#f06060' : '#cfc3bd'}
                  strokeWidth={isHovered ? '2' : '1'}
                  className="transition-colors duration-200"
                />
              </g>
            );
          })}

          {/* Illustrative Assessment Area (soft teal & coral boundary) */}
          <polygon
            points={samplePolygonPoints}
            fill="rgba(140, 190, 178, 0.3)"
            stroke="#5c4b51"
            strokeWidth="2"
            strokeLinejoin="round"
            className="transition-all duration-300"
          />

          {/* Data Points on vertices */}
          {sampleRatios.map((ratio, i) => {
            const { x, y } = getCoordinates(i, ratio);
            const isHovered = activeCompetency === RADAR_COMPETENCIES[i].id;

            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={isHovered ? 6 : 4}
                fill={isHovered ? '#f06060' : '#8cbeb2'}
                stroke="#5c4b51"
                strokeWidth="1.5"
                className="transition-all duration-200 cursor-pointer"
              />
            );
          })}

          {/* Center pivot point */}
          <circle cx={center} cy={center} r={4} fill="#5c4b51" />

          {/* Outer Competency Labels */}
          {RADAR_COMPETENCIES.map((comp, i) => {
            const labelCoord = getCoordinates(i, 1.18);
            const isHovered = activeCompetency === comp.id;
            
            // Text anchor calculation based on position
            let anchor: 'start' | 'middle' | 'end' = 'middle';
            if (labelCoord.x > center + 30) anchor = 'start';
            else if (labelCoord.x < center - 30) anchor = 'end';

            return (
              <g
                key={comp.id}
                className="cursor-pointer group"
                onMouseEnter={() => {
                  setActiveCompetency(comp.id);
                  if (onSelectCompetency) onSelectCompetency(comp);
                }}
                onMouseLeave={() => setActiveCompetency(null)}
                onClick={() => {
                  setActiveCompetency(comp.id);
                  if (onSelectCompetency) onSelectCompetency(comp);
                }}
              >
                {/* Visual marker dot */}
                <circle
                  cx={getCoordinates(i, 1.04).x}
                  cy={getCoordinates(i, 1.04).y}
                  r={isHovered ? 4.5 : 2.5}
                  fill={isHovered ? '#f06060' : '#8cbeb2'}
                  className="transition-all duration-200"
                />
                <text
                  x={labelCoord.x}
                  y={labelCoord.y + 4}
                  textAnchor={anchor}
                  fill={isHovered ? '#f06060' : '#5c4b51'}
                  fontSize={isHovered ? '12.5' : '11.5'}
                  fontWeight={isHovered ? '700' : '600'}
                  fontFamily="Montserrat, system-ui, sans-serif"
                  className="transition-all duration-200"
                >
                  {comp.id}. {comp.name}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Small tooltip / hint at bottom of chart */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full border border-[#e5ded6] text-xs text-[#5c4b51] font-medium shadow-xs">
          10 competencias clave · Evaluación personalizada en el taller
        </div>
      </div>
    </div>
  );
};
