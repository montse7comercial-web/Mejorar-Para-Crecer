import React from 'react';
import { X } from 'lucide-react';

export type LegalDocType = 'aviso-legal' | 'privacidad' | 'cookies' | null;

interface LegalModalProps {
  type: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    'aviso-legal': {
      title: 'Aviso Legal',
      body: (
        <div className="space-y-4 text-sm text-[#4e4147] leading-relaxed">
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de los datos identificativos del responsable del sitio web:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Denominación:</strong> Mejorar para Crecer</li>
            <li><strong>Titulares:</strong> [AÑADIR TITULAR / RAZÓN SOCIAL]</li>
            <li><strong>NIF/CIF:</strong> [AÑADIR NIF / CIF]</li>
            <li><strong>Domicilio:</strong> CEEIM, Campus Universitario de Espinardo, 30100 Murcia</li>
            <li><strong>Email de contacto:</strong> [AÑADIR EMAIL]</li>
            <li><strong>Teléfono:</strong> [AÑADIR TELÉFONO]</li>
          </ul>
          <p>
            El acceso y uso de este sitio web atribuye la condición de usuario, aceptando desde dicho acceso las condiciones de uso aquí reflejadas.
          </p>
        </div>
      )
    },
    'privacidad': {
      title: 'Política de Privacidad y Protección de Datos',
      body: (
        <div className="space-y-4 text-sm text-[#4e4147] leading-relaxed">
          <p>
            De conformidad con el Reglamento General de Protección de Datos (RGPD UE 2016/679) y la Ley Orgánica 3/2018 (LOPDGDD), le informamos del tratamiento de sus datos de carácter personal:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Responsable del tratamiento:</strong> Mejorar para Crecer</li>
            <li><strong>Finalidad:</strong> Gestión de inscripciones, reservas de plazas y comunicación con los participantes en relación al taller «Liderarte para liderar personas» y sesiones individuales de desarrollo profesional.</li>
            <li><strong>Legitimación:</strong> Consentimiento expreso de la persona interesada al enviar el formulario y ejecución de la relación contractual formativa.</li>
            <li><strong>Destinatarios:</strong> No se cederán datos a terceros salvo obligación legal o para la tramitación de bonificaciones de formación ante FUNDAE cuando la empresa participante lo solicite expresamente.</li>
            <li><strong>Derechos:</strong> Tiene derecho a acceder, rectificar y suprimir los datos, así como otros derechos reconocidos dirigiéndose a [AÑADIR EMAIL].</li>
          </ul>
        </div>
      )
    },
    'cookies': {
      title: 'Política de Cookies',
      body: (
        <div className="space-y-4 text-sm text-[#4e4147] leading-relaxed">
          <p>
            Este sitio web utiliza únicamente cookies técnicas indispensables para el correcto funcionamiento de la navegación y la gestión segura de formularios.
          </p>
          <p>
            No se instalan cookies de rastreo publicitario de terceros sin su consentimiento expreso previo. Puede configurar o bloquear las cookies en las preferencias de su navegador en cualquier momento.
          </p>
        </div>
      )
    }
  };

  const doc = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-[#e3dbd3] overflow-hidden max-h-[85vh] flex flex-col">
        <div className="px-6 py-4 bg-[#faf6e4] border-b border-[#ece3d3] flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#5c4b51]">{doc.title}</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#7c6d73] hover:text-[#5c4b51] hover:bg-black/5"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          {doc.body}
          <div className="mt-6 pt-4 border-t border-[#ece3d3] flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold bg-[#5c4b51] text-white rounded-lg hover:bg-[#45363c]"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
