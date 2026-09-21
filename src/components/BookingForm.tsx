import React, { useState } from 'react';
import { Check, AlertCircle, Loader2, Calendar, MapPin, Users, Sparkles, Building2, User, Mail, Phone, FileText } from 'lucide-react';
import { WORKSHOP_DETAILS } from '../data/workshopData';

interface BookingFormData {
  fullName: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  spots: number;
  needInvoice: 'si' | 'no';
  cifOrTaxId: string;
  invoiceAddress: string;
  fundaeInterest: 'si' | 'no';
  notes: string;
  acceptPrivacy: boolean;
  acceptMarketing: boolean;
}

interface BookingFormProps {
  onOpenPrivacyPolicy: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ onOpenPrivacyPolicy }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    spots: 1,
    needInvoice: 'no',
    cifOrTaxId: '',
    invoiceAddress: '',
    fundaeInterest: 'no',
    notes: '',
    acceptPrivacy: false,
    acceptMarketing: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const pricePerSpot = WORKSHOP_DETAILS.pricing.earlyBird.price;
  const totalPrice = formData.spots * pricePerSpot;

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Por favor, introduce tu nombre y apellidos.';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Por favor, indica el nombre de tu empresa u organización.';
    }

    if (!formData.role.trim()) {
      newErrors.role = 'Por favor, indica tu puesto o responsabilidad profesional.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, introduce tu correo electrónico.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Introduce una dirección de correo electrónico válida.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Por favor, introduce tu número de teléfono de contacto.';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Introduce un número de teléfono válido (mínimo 8 dígitos).';
    }

    if (!formData.acceptPrivacy) {
      newErrors.acceptPrivacy = 'Debes aceptar la política de privacidad para tramitar la reserva.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const firstError = document.querySelector('.form-error-field');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);
    // Simulating prepared async dispatch hook for CRM / backend integration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Optional logging for developer integration
      console.log('Reserva registrada lista para envío a pasarela o CRM:', formData);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      company: '',
      role: '',
      email: '',
      phone: '',
      spots: 1,
      needInvoice: 'no',
      cifOrTaxId: '',
      invoiceAddress: '',
      fundaeInterest: 'no',
      notes: '',
      acceptPrivacy: false,
      acceptMarketing: false
    });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border border-[#e4ded5] p-8 md:p-12 shadow-sm text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-[#8cbeb2]/20 text-[#5c4b51] rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-[#5c4b51] stroke-[2.5]" />
        </div>
        <span className="inline-block px-3 py-1 bg-[#8cbeb2]/15 text-[#5c4b51] text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
          Solicitud de reserva recibida
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-[#5c4b51] mb-4">
          ¡Gracias por tu inscripción, {formData.fullName}!
        </h3>
        <p className="text-[#554a4f] text-base leading-relaxed mb-6">
          Hemos registrado tu solicitud de reserva para <strong>{formData.spots} {formData.spots === 1 ? 'plaza' : 'plazas'}</strong> en el taller presencial <strong>«Liderarte para liderar personas»</strong>.
        </p>

        <div className="bg-[#faf6e4] rounded-xl p-5 mb-8 text-left border border-[#e8decb] text-sm text-[#473b40] space-y-2">
          <div className="flex items-center gap-2 font-semibold text-[#5c4b51] border-b border-[#ded2bd] pb-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#f06060]" /> Resumen de tu solicitud
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
            <div><strong className="text-[#5c4b51]">Fecha:</strong> 30 de octubre de 2026</div>
            <div><strong className="text-[#5c4b51]">Horario:</strong> 16:00 a 20:30 h</div>
            <div><strong className="text-[#5c4b51]">Lugar:</strong> CEEIM Murcia</div>
            <div><strong className="text-[#5c4b51]">Plazas solicitadas:</strong> {formData.spots}</div>
            <div><strong className="text-[#5c4b51]">Importe previsto:</strong> {totalPrice} € (tarifa anticipada)</div>
            <div><strong className="text-[#5c4b51]">Bonificación FUNDAE:</strong> {formData.fundaeInterest === 'si' ? 'Sí, solicitada' : 'No'}</div>
          </div>
        </div>

        <p className="text-sm text-[#6b5c62] mb-8 leading-relaxed">
          En las próximas horas nos pondremos en contacto contigo a través de <strong>{formData.email}</strong> o por teléfono para confirmar los detalles prácticos, resolver cualquier duda sobre FUNDAE y facilitarte los datos de pago para asegurar formalmente tu plaza.
        </p>

        <button
          onClick={handleReset}
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#cfc3bc] text-[#5c4b51] font-semibold hover:bg-[#faf8f3] transition-colors text-sm"
        >
          Realizar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <div id="formulario-reserva" className="bg-white rounded-2xl border border-[#e3dbd3] p-6 sm:p-8 md:p-10 shadow-xs max-w-3xl mx-auto">
      {/* Header of Form */}
      <div className="mb-8 border-b border-[#eee8e2] pb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#f06060]/10 text-[#f06060]">
            <Users className="w-3.5 h-3.5" /> Edición limitada a 10 participantes
          </span>
          <span className="text-xs font-medium text-[#736369]">
            Tarifa anticipada válida hasta 23 de octubre
          </span>
        </div>
        <h3 className="text-2xl font-bold text-[#5c4b51]">
          Formulario de inscripción al taller
        </h3>
        <p className="text-sm text-[#66575d] mt-1.5">
          Completa tus datos para reservar tu plaza. Te contactaremos personalmente para formalizar tu asistencia.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Row 1: Nombre y Apellidos */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-[#5c4b51] mb-1.5">
            Nombre y apellidos <span className="text-[#f06060]">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#9c8d93] absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Ej. María Navarro García"
              className={`w-full pl-10 pr-4 py-2.5 rounded-lg border bg-[#fdfdfb] text-sm text-[#403439] placeholder:text-[#a89ba1] focus:outline-none focus:ring-2 focus:ring-[#f06060]/30 transition-all ${
                errors.fullName ? 'border-[#f06060] form-error-field bg-red-50/20' : 'border-[#dcd3cb]'
              }`}
            />
          </div>
          {errors.fullName && (
            <p className="mt-1 text-xs text-[#f06060] flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
            </p>
          )}
        </div>

        {/* Row 2: Empresa y Puesto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-[#5c4b51] mb-1.5">
              Empresa <span className="text-[#f06060]">*</span>
            </label>
            <div className="relative">
              <Building2 className="w-4 h-4 text-[#9c8d93] absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Nombre de la empresa"
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border bg-[#fdfdfb] text-sm text-[#403439] placeholder:text-[#a89ba1] focus:outline-none focus:ring-2 focus:ring-[#f06060]/30 transition-all ${
                  errors.company ? 'border-[#f06060] form-error-field bg-red-50/20' : 'border-[#dcd3cb]'
                }`}
              />
            </div>
            {errors.company && (
              <p className="mt-1 text-xs text-[#f06060] flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.company}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-semibold text-[#5c4b51] mb-1.5">
              Puesto profesional <span className="text-[#f06060]">*</span>
            </label>
            <div className="relative">
              <FileText className="w-4 h-4 text-[#9c8d93] absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                placeholder="Ej. Responsable de Operaciones"
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border bg-[#fdfdfb] text-sm text-[#403439] placeholder:text-[#a89ba1] focus:outline-none focus:ring-2 focus:ring-[#f06060]/30 transition-all ${
                  errors.role ? 'border-[#f06060] form-error-field bg-red-50/20' : 'border-[#dcd3cb]'
                }`}
              />
            </div>
            {errors.role && (
              <p className="mt-1 text-xs text-[#f06060] flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.role}
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Email y Teléfono */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-[#5c4b51] mb-1.5">
              Correo electrónico <span className="text-[#f06060]">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#9c8d93] absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tu.correo@empresa.com"
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border bg-[#fdfdfb] text-sm text-[#403439] placeholder:text-[#a89ba1] focus:outline-none focus:ring-2 focus:ring-[#f06060]/30 transition-all ${
                  errors.email ? 'border-[#f06060] form-error-field bg-red-50/20' : 'border-[#dcd3cb]'
                }`}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-xs text-[#f06060] flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-[#5c4b51] mb-1.5">
              Teléfono de contacto <span className="text-[#f06060]">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-[#9c8d93] absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="600 000 000"
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border bg-[#fdfdfb] text-sm text-[#403439] placeholder:text-[#a89ba1] focus:outline-none focus:ring-2 focus:ring-[#f06060]/30 transition-all ${
                  errors.phone ? 'border-[#f06060] form-error-field bg-red-50/20' : 'border-[#dcd3cb]'
                }`}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-xs text-[#f06060] flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Row 4: Número de plazas */}
        <div className="bg-[#faf8f3] p-4 rounded-xl border border-[#ece3db]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <label htmlFor="spots" className="block text-sm font-semibold text-[#5c4b51]">
                Número de plazas a reservar
              </label>
              <span className="text-xs text-[#736369]">
                Tarifa aplicable: 89 € / persona (precio anticipado hasta el 23 de octubre)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <select
                id="spots"
                name="spots"
                value={formData.spots}
                onChange={(e) => setFormData({ ...formData, spots: Number(e.target.value) })}
                className="px-3.5 py-2 rounded-lg border border-[#cfc3bc] bg-white text-sm font-semibold text-[#5c4b51] focus:ring-2 focus:ring-[#f06060]/30 focus:outline-none"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'plaza' : 'plazas'} ({num * pricePerSpot} €)
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Row 5: Radio buttons Factura y FUNDAE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
          {/* Necesidad de factura */}
          <div className="p-4 rounded-xl border border-[#ece3db] bg-white">
            <span className="block text-sm font-semibold text-[#5c4b51] mb-2">
              ¿Necesitas factura a nombre de empresa?
            </span>
            <div className="flex items-center gap-6">
              <label className="inline-flex items-center gap-2 text-sm text-[#4f4247] cursor-pointer">
                <input
                  type="radio"
                  name="needInvoice"
                  value="si"
                  checked={formData.needInvoice === 'si'}
                  onChange={() => setFormData({ ...formData, needInvoice: 'si' })}
                  className="accent-[#f06060]"
                />
                <span>Sí</span>
              </label>
              <label className="inline-flex items-center gap-2 text-sm text-[#4f4247] cursor-pointer">
                <input
                  type="radio"
                  name="needInvoice"
                  value="no"
                  checked={formData.needInvoice === 'no'}
                  onChange={() => setFormData({ ...formData, needInvoice: 'no' })}
                  className="accent-[#f06060]"
                />
                <span>No</span>
              </label>
            </div>

            {formData.needInvoice === 'si' && (
              <div className="mt-3 pt-3 border-t border-[#f0eae4] space-y-2">
                <input
                  type="text"
                  placeholder="CIF / NIF de la empresa"
                  value={formData.cifOrTaxId}
                  onChange={(e) => setFormData({ ...formData, cifOrTaxId: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs rounded-md border border-[#dcd3cb] bg-[#fdfdfb]"
                />
                <input
                  type="text"
                  placeholder="Dirección fiscal (opcional)"
                  value={formData.invoiceAddress}
                  onChange={(e) => setFormData({ ...formData, invoiceAddress: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs rounded-md border border-[#dcd3cb] bg-[#fdfdfb]"
                />
              </div>
            )}
          </div>

          {/* Interés FUNDAE */}
          <div className="p-4 rounded-xl border border-[#ece3db] bg-white">
            <span className="block text-sm font-semibold text-[#5c4b51] mb-2">
              ¿Deseas tramitar la bonificación de FUNDAE?
            </span>
            <div className="flex items-center gap-6">
              <label className="inline-flex items-center gap-2 text-sm text-[#4f4247] cursor-pointer">
                <input
                  type="radio"
                  name="fundaeInterest"
                  value="si"
                  checked={formData.fundaeInterest === 'si'}
                  onChange={() => setFormData({ ...formData, fundaeInterest: 'si' })}
                  className="accent-[#f06060]"
                />
                <span>Sí</span>
              </label>
              <label className="inline-flex items-center gap-2 text-sm text-[#4f4247] cursor-pointer">
                <input
                  type="radio"
                  name="fundaeInterest"
                  value="no"
                  checked={formData.fundaeInterest === 'no'}
                  onChange={() => setFormData({ ...formData, fundaeInterest: 'no' })}
                  className="accent-[#f06060]"
                />
                <span>No</span>
              </label>
            </div>
            <p className="text-xs text-[#7d6e74] mt-2">
              El taller es bonificable para empresas mediante la Fundación Estatal para la Formación en el Empleo.
            </p>
          </div>
        </div>

        {/* Row 6: Observaciones */}
        <div>
          <label htmlFor="notes" className="block text-sm font-semibold text-[#5c4b51] mb-1.5">
            Observaciones o requerimientos especiales (opcional)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={2}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Comentarios sobre asistentes, dudas o necesidades específicas..."
            className="w-full px-4 py-2.5 rounded-lg border border-[#dcd3cb] bg-[#fdfdfb] text-sm text-[#403439] placeholder:text-[#a89ba1] focus:outline-none focus:ring-2 focus:ring-[#f06060]/30 transition-all"
          ></textarea>
        </div>

        {/* Row 7: Legal checkboxes */}
        <div className="space-y-3 pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="acceptPrivacy"
              checked={formData.acceptPrivacy}
              onChange={(e) => setFormData({ ...formData, acceptPrivacy: e.target.checked })}
              className="mt-1 h-4 w-4 rounded-sm border-[#c9bdb6] text-[#f06060] focus:ring-[#f06060]/30 accent-[#f06060]"
            />
            <span className="text-xs text-[#55474c] leading-normal">
              He leído y acepto la{' '}
              <button
                type="button"
                onClick={onOpenPrivacyPolicy}
                className="underline hover:text-[#f06060] font-medium"
              >
                política de privacidad
              </button>{' '}
              para la gestión de mi inscripción y contacto. <span className="text-[#f06060]">*</span>
            </span>
          </label>
          {errors.acceptPrivacy && (
            <p className="text-xs text-[#f06060] flex items-center gap-1 pl-7">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.acceptPrivacy}
            </p>
          )}

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="acceptMarketing"
              checked={formData.acceptMarketing}
              onChange={(e) => setFormData({ ...formData, acceptMarketing: e.target.checked })}
              className="mt-1 h-4 w-4 rounded-sm border-[#c9bdb6] text-[#f06060] focus:ring-[#f06060]/30 accent-[#f06060]"
            />
            <span className="text-xs text-[#6e5f65] leading-normal">
              Acepto recibir comunicaciones informativas de valor sobre próximas ediciones y programas de liderazgo de Mejorar para Crecer (opcional).
            </span>
          </label>
        </div>

        {/* Submit button */}
        <div className="pt-4 border-t border-[#eee8e2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-sm text-[#5c4b51]">
            <span className="text-xs block text-[#7e6e74]">Total a abonar:</span>
            <span className="text-2xl font-extrabold text-[#5c4b51]">{totalPrice} €</span>
            <span className="text-xs text-[#7e6e74] ml-2">({formData.spots} {formData.spots === 1 ? 'plaza' : 'plazas'})</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#f06060] hover:bg-[#d94949] text-white font-bold text-base shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Tramitando reserva...
              </>
            ) : (
              <>
                Reservar mi plaza
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
