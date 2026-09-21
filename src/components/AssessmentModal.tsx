import React, { useState } from 'react';
import { X, Check, Loader2, Calendar, User, Mail, Phone, Building2, HelpCircle } from 'lucide-react';
import { INDIVIDUAL_PROGRAM_AREAS } from '../data/workshopData';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPrivacyPolicy: () => void;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  isOpen,
  onClose,
  onOpenPrivacyPolicy
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyAndRole, setCompanyAndRole] = useState('');
  const [selectedArea, setSelectedArea] = useState(INDIVIDUAL_PROGRAM_AREAS[0]);
  const [timePreference, setTimePreference] = useState('indiferente');
  const [notes, setNotes] = useState('');
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const err: Record<string, string> = {};
    if (!fullName.trim()) err.fullName = 'Introduce tu nombre y apellidos.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      err.email = 'Introduce un email válido.';
    }
    if (!phone.trim()) err.phone = 'Introduce tu teléfono de contacto.';
    if (!companyAndRole.trim()) err.companyAndRole = 'Indica tu empresa y puesto.';
    if (!acceptPrivacy) err.acceptPrivacy = 'Debes aceptar la política de privacidad.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      console.log('Sesión de valoración solicitada:', {
        fullName,
        email,
        phone,
        companyAndRole,
        selectedArea,
        timePreference,
        notes
      });
    }, 800);
  };

  const handleCloseAndReset = () => {
    setIsSuccess(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setCompanyAndRole('');
    setNotes('');
    setAcceptPrivacy(false);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-xl border border-[#e3dbd3] overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#faf6e4] border-b border-[#ece3d3] flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#f06060]">
              Programa Individual de Desarrollo Profesional
            </span>
            <h3 id="modal-title" className="text-xl font-bold text-[#5c4b51] mt-0.5">
              Solicitar sesión de valoración
            </h3>
          </div>
          <button
            onClick={handleCloseAndReset}
            className="p-1.5 rounded-lg text-[#7c6d73] hover:text-[#5c4b51] hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-[#8cbeb2]/20 text-[#5c4b51] rounded-full flex items-center justify-center mx-auto">
                <Check className="w-7 h-7 text-[#5c4b51] stroke-[2.5]" />
              </div>
              <h4 className="text-2xl font-bold text-[#5c4b51]">
                Solicitud enviada correctamente
              </h4>
              <p className="text-sm text-[#57494f] leading-relaxed max-w-md mx-auto">
                Muchas gracias, <strong>{fullName}</strong>. Nos pondremos en contacto contigo para agendar una breve conversación de 20 minutos donde analizaremos tu contexto profesional y te explicaremos cómo estructurar las 4 sesiones de trabajo individual.
              </p>
              <button
                onClick={handleCloseAndReset}
                className="mt-4 px-6 py-2.5 rounded-lg bg-[#5c4b51] text-white font-semibold text-sm hover:bg-[#45363c] transition-colors"
              >
                Cerrar ventana
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <p className="text-xs text-[#6e5f65] leading-relaxed mb-4">
                Una sesión individual y confidencial para valorar tus prioridades y adaptar el programa de 4 sesiones a las necesidades específicas de tu puesto y de tu empresa.
              </p>

              <div>
                <label className="block text-xs font-semibold text-[#5c4b51] mb-1">
                  Nombre y apellidos <span className="text-[#f06060]">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Tu nombre y apellidos"
                  className={`w-full px-3.5 py-2 text-sm rounded-lg border bg-[#fdfdfb] ${
                    errors.fullName ? 'border-[#f06060]' : 'border-[#dcd3cb]'
                  }`}
                />
                {errors.fullName && <p className="text-xs text-[#f06060] mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#5c4b51] mb-1">
                    Correo electrónico <span className="text-[#f06060]">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="correo@empresa.com"
                    className={`w-full px-3.5 py-2 text-sm rounded-lg border bg-[#fdfdfb] ${
                      errors.email ? 'border-[#f06060]' : 'border-[#dcd3cb]'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-[#f06060] mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5c4b51] mb-1">
                    Teléfono de contacto <span className="text-[#f06060]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="600 000 000"
                    className={`w-full px-3.5 py-2 text-sm rounded-lg border bg-[#fdfdfb] ${
                      errors.phone ? 'border-[#f06060]' : 'border-[#dcd3cb]'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-[#f06060] mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5c4b51] mb-1">
                  Empresa y puesto actual <span className="text-[#f06060]">*</span>
                </label>
                <input
                  type="text"
                  value={companyAndRole}
                  onChange={(e) => setCompanyAndRole(e.target.value)}
                  placeholder="Ej. Gerente en Grupo ABC"
                  className={`w-full px-3.5 py-2 text-sm rounded-lg border bg-[#fdfdfb] ${
                    errors.companyAndRole ? 'border-[#f06060]' : 'border-[#dcd3cb]'
                  }`}
                />
                {errors.companyAndRole && <p className="text-xs text-[#f06060] mt-1">{errors.companyAndRole}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5c4b51] mb-1">
                  Área prioritaria de desarrollo
                </label>
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#dcd3cb] bg-[#fdfdfb] text-[#42353a]"
                >
                  {INDIVIDUAL_PROGRAM_AREAS.map((area, idx) => (
                    <option key={idx} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5c4b51] mb-1">
                  Preferencia de horario para contactarte
                </label>
                <div className="flex gap-4 text-xs text-[#4e4046]">
                  {['Mañanas (09:00 - 14:00)', 'Tardes (16:00 - 19:00)', 'Indiferente'].map((pref) => (
                    <label key={pref} className="inline-flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="timePref"
                        checked={timePreference === pref}
                        onChange={() => setTimePreference(pref)}
                        className="accent-[#f06060]"
                      />
                      <span>{pref.split(' ')[0]}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5c4b51] mb-1">
                  Breve contexto o situación que deseas trabajar (opcional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="¿Cuál es el reto o reto principal de tu equipo?"
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#dcd3cb] bg-[#fdfdfb]"
                />
              </div>

              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#5c4b51]">
                  <input
                    type="checkbox"
                    checked={acceptPrivacy}
                    onChange={(e) => setAcceptPrivacy(e.target.checked)}
                    className="mt-0.5 accent-[#f06060]"
                  />
                  <span>
                    He leído y acepto la{' '}
                    <button
                      type="button"
                      onClick={onOpenPrivacyPolicy}
                      className="underline font-medium hover:text-[#f06060]"
                    >
                      política de privacidad
                    </button>{' '}
                    para la gestión de esta solicitud. <span className="text-[#f06060]">*</span>
                  </span>
                </label>
                {errors.acceptPrivacy && <p className="text-xs text-[#f06060] mt-1">{errors.acceptPrivacy}</p>}
              </div>

              <div className="pt-3 border-t border-[#eee8e2] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleCloseAndReset}
                  className="px-4 py-2 text-xs font-semibold text-[#66565c] hover:text-[#42353a]"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-lg bg-[#5c4b51] hover:bg-[#43363b] text-white text-xs font-bold transition-all shadow-xs cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-1.5">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" /> Enviando...
                    </span>
                  ) : (
                    'Solicitar valoración'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
