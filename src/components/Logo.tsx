import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'dark' = dark text for light bg (cabecera), 'light' = white/crema text for dark bg (pie de página)
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md'
}) => {
  const [imgError, setImgError] = useState(false);

  // Responsive heights matching header & footer hierarchy without distortion
  const heights = {
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10 md:h-11',
    lg: 'h-12 sm:h-14 md:h-16'
  };

  const textColor = variant === 'light' ? '#fbf8f2' : '#5c4b51';
  const arrowColor = '#f06060';
  const logoSrc = variant === 'light' ? '/logo-completo-negativo.svg' : '/logo-completo.svg';

  return (
    <div
      className={`inline-flex items-center select-none overflow-visible shrink-0 ${className}`}
      style={{ lineHeight: 0 }}
    >
      {!imgError ? (
        <img
          src={logoSrc}
          alt="Mejorar para Crecer - Logotipo"
          onError={() => setImgError(true)}
          className={`${heights[size]} w-auto max-w-full object-contain block`}
          loading="eager"
          decoding="async"
        />
      ) : (
        /* Resilient inline SVG fallback with generous safe-area viewBox */
        <svg
          viewBox="-4 0 252 110"
          className={`${heights[size]} w-auto max-w-full overflow-visible block`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Logotipo Mejorar para Crecer"
        >
          <text
            x="2"
            y="30"
            fill={textColor}
            fontSize="28"
            fontWeight="800"
            letterSpacing="-0.5"
            fontFamily="'Montserrat', system-ui, -apple-system, sans-serif"
          >
            Mejorar
          </text>
          <text
            x="38"
            y="60"
            fill={textColor}
            fontSize="28"
            fontWeight="800"
            letterSpacing="-0.5"
            fontFamily="'Montserrat', system-ui, -apple-system, sans-serif"
          >
            para
          </text>
          <text
            x="2"
            y="91"
            fill={textColor}
            fontSize="28"
            fontWeight="800"
            letterSpacing="-0.5"
            fontFamily="'Montserrat', system-ui, -apple-system, sans-serif"
          >
            Crecer
          </text>

          {/* Upward diagonal arrow in Coral */}
          <path
            d="M 233.70 10.40 V 62.60 C 233.70 66.61, 228.86 68.60, 226.02 65.78 L 213.45 53.20 L 170.02 96.64 C 167.90 98.74, 164.48 98.74, 162.37 96.64 L 152.86 87.13 C 150.76 85.03, 150.76 81.60, 152.86 79.48 L 196.30 36.05 L 183.72 23.48 C 180.90 20.64, 182.89 15.80, 186.90 15.80 H 228.30 C 231.28 15.80, 233.70 13.38, 233.70 10.40 Z"
            fill={arrowColor}
          />
        </svg>
      )}
    </div>
  );
};

