import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  BookOpen,
  ArrowRight,
  Check,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  UserCheck,
  Building2,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Menu,
  X,
  Target,
  FileCheck,
  ChevronDown,
  Layers,
  ShieldAlert,
  MessageSquareOff,
  MessageCircleWarning,
  Gauge,
  GraduationCap,
  Compass,
  ArrowUpRight
} from 'lucide-react';

import { Logo } from './components/Logo';
import { ContentBlocks } from './components/ContentBlocks';
import { RadarChart } from './components/RadarChart';
import { BookingForm } from './components/BookingForm';
import { AssessmentModal } from './components/AssessmentModal';
import { LegalModal, LegalDocType } from './components/LegalModal';

import {
  WORKSHOP_DETAILS,
  LEADERSHIP_REALITY_PARAGRAPHS,
  SITUATIONS,
  TARGET_PROFILES,
  METHODOLOGY_POINTS,
  RADAR_COMPETENCIES,
  WHAT_YOU_TAKE_AWAY,
  TIMELINE,
  INDIVIDUAL_PROGRAM_AREAS,
  FACILITATORS
} from './data/workshopData';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<LegalDocType>(null);
  const [selectedRadarCompetency, setSelectedRadarCompetency] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Helper map for situation icons
  const renderSituationIcon = (name: string) => {
    switch (name) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-[#f06060]" />;
      case 'MessageSquareOff':
        return <MessageSquareOff className="w-5 h-5 text-[#f06060]" />;
      case 'MessageCircleWarning':
        return <MessageCircleWarning className="w-5 h-5 text-[#f06060]" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-[#f06060]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#f06060]" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-[#f06060]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#f06060]" />;
      case 'Compass':
      default:
        return <Compass className="w-5 h-5 text-[#f06060]" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f3] text-[#3f3539] font-sans antialiased">
      {/* 1. CABECERA (STICKY HEADER) */}
      <header
        id="cabecera"
        className="sticky top-0 z-40 bg-[#faf8f3]/95 backdrop-blur-md border-b border-[#e5ddd3] transition-all"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#cabecera"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group py-1"
            title="Mejorar para Crecer - Inicio"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-[#5c4b51]">
            <button
              onClick={() => scrollToSection('el-taller')}
              className="hover:text-[#f06060] transition-colors py-1 cursor-pointer"
            >
              El taller
            </button>
            <button
              onClick={() => scrollToSection('contenidos')}
              className="hover:text-[#f06060] transition-colors py-1 cursor-pointer"
            >
              Contenidos
            </button>
            <button
              onClick={() => scrollToSection('radar')}
              className="hover:text-[#f06060] transition-colors py-1 cursor-pointer"
            >
              Radar
            </button>
            <button
              onClick={() => scrollToSection('programa')}
              className="hover:text-[#f06060] transition-colors py-1 cursor-pointer"
            >
              Programa
            </button>
            <button
              onClick={() => scrollToSection('facilitadores')}
              className="hover:text-[#f06060] transition-colors py-1 cursor-pointer"
            >
              Facilitadores
            </button>
            <button
              onClick={() => scrollToSection('precio')}
              className="hover:text-[#f06060] transition-colors py-1 cursor-pointer"
            >
              Precio
            </button>
          </nav>

          {/* CTA Header Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('formulario-reserva')}
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#f06060] hover:bg-[#d94949] text-white font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              Reservar plaza
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#5c4b51] hover:bg-[#ece2d6] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#e5ddd3] bg-[#faf8f3] px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4 text-base font-semibold text-[#5c4b51]">
              <button
                onClick={() => scrollToSection('el-taller')}
                className="text-left py-2 border-b border-[#eee5dc] hover:text-[#f06060]"
              >
                El taller
              </button>
              <button
                onClick={() => scrollToSection('contenidos')}
                className="text-left py-2 border-b border-[#eee5dc] hover:text-[#f06060]"
              >
                Contenidos
              </button>
              <button
                onClick={() => scrollToSection('radar')}
                className="text-left py-2 border-b border-[#eee5dc] hover:text-[#f06060]"
              >
                Radar
              </button>
              <button
                onClick={() => scrollToSection('programa')}
                className="text-left py-2 border-b border-[#eee5dc] hover:text-[#f06060]"
              >
                Programa
              </button>
              <button
                onClick={() => scrollToSection('facilitadores')}
                className="text-left py-2 border-b border-[#eee5dc] hover:text-[#f06060]"
              >
                Facilitadores
              </button>
              <button
                onClick={() => scrollToSection('precio')}
                className="text-left py-2 border-b border-[#eee5dc] hover:text-[#f06060]"
              >
                Precio
              </button>
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection('formulario-reserva')}
                  className="w-full py-3 text-center rounded-xl bg-[#f06060] text-white font-bold text-sm shadow-xs"
                >
                  Reservar plaza (Solo 10 plazas)
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* 2. PORTADA PRINCIPAL O HERO */}
        <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Headlines, Info & CTAs */}
              <div className="lg:col-span-7">
                {/* Badge Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ebbf]/70 border border-[#e2d79d] text-[#5c4b51] text-xs font-semibold uppercase tracking-wider mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#f06060] animate-pulse"></span>
                  Taller presencial de liderazgo y gestión de personas
                </div>

                {/* Main H1 Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#5c4b51] leading-[1.18] tracking-tight mb-5">
                  Liderarte para liderar personas
                </h1>

                {/* Subtitle / Description */}
                <p className="text-lg sm:text-xl text-[#53464b] leading-relaxed mb-8 max-w-2xl font-normal">
                  Desarrolla las habilidades que necesitas para comunicarte mejor, gestionar situaciones difíciles y acompañar el crecimiento de tu equipo.
                </p>

                {/* Practical Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8 p-4 sm:p-5 rounded-2xl bg-white border border-[#e5ddd3] shadow-xs">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#f06060] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold text-[#7d6e74] uppercase tracking-wider">Fecha</span>
                      <span className="text-sm font-semibold text-[#5c4b51]">30 de octubre de 2026</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#f06060] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold text-[#7d6e74] uppercase tracking-wider">Horario</span>
                      <span className="text-sm font-semibold text-[#5c4b51]">De 16:00 a 20:30 h</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#f06060] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold text-[#7d6e74] uppercase tracking-wider">Lugar</span>
                      <span className="text-sm font-semibold text-[#5c4b51] leading-tight">
                        CEEIM Murcia
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTAs and spots pill */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => scrollToSection('formulario-reserva')}
                    className="px-7 py-3.5 rounded-xl bg-[#f06060] hover:bg-[#d94949] text-white font-bold text-base shadow-sm hover:shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
                  >
                    Reservar plaza
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => scrollToSection('programa')}
                    className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#faf7ee] text-[#5c4b51] border border-[#cfc3bb] font-semibold text-base transition-colors cursor-pointer"
                  >
                    Ver el programa
                  </button>

                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f06060]/10 border border-[#f06060]/20 text-[#f06060] text-xs font-bold">
                    <Users className="w-4 h-4" />
                    <span>Solo 10 plazas</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Photograph */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-md border-4 border-white aspect-[4/3] lg:aspect-[5/4] bg-[#faf6e4]">
                  <img
                    src="/src/assets/images/hero_liderazgo_1789581705909.jpg"
                    alt="Participantes y facilitadores en taller de liderazgo y gestión de personas"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle caption pill */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-[#e4ded6] shadow-xs text-xs text-[#5c4b51] flex items-center justify-between">
                    <span className="font-semibold">CEEIM Murcia</span>
                    <span className="text-[#f06060] font-bold">Grupo reducido · 10 personas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. EL LIDERAZGO CAMBIA CUANDO EMPIEZAS A DIRIGIR PERSONAS */}
        <section id="el-taller" className="py-16 md:py-24 bg-white border-y border-[#ece4db]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Text side (7 cols) */}
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8cbeb2] block mb-2">
                  La realidad de dirigir
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5c4b51] leading-tight mb-6">
                  El liderazgo cambia cuando empiezas a dirigir personas
                </h2>

                <p className="text-base sm:text-lg text-[#52444a] leading-relaxed mb-6">
                  Quieres resultados, y las personas que tienes a cargo no colaboran como tú quisieras. Dirigir un equipo exige capacidades que no solo van en el cargo.
                </p>

                {/* Destacado visual obligatorio */}
                <div className="my-7 p-6 rounded-2xl bg-[#faf6e4] border-l-4 border-[#5c4b51] shadow-xs">
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#5c4b51] font-display italic tracking-tight">
                    “Ser líder va en la persona”.
                  </p>
                </div>

                <p className="text-base text-[#52444a] leading-relaxed mb-5">
                  Hay que aprender a comunicar expectativas, gestionar conflictos, tomar decisiones, delegar, dar feedback y mantener el equilibrio en situaciones de presión.
                </p>

                <p className="text-base text-[#52444a] leading-relaxed">
                  Este taller está diseñado para ayudarte a comprender tu forma de liderar, identificar las habilidades que necesitas desarrollar y aplicar herramientas concretas a situaciones reales de tu día a día.
                </p>
              </div>

              {/* Horizontal Image side (5 cols) */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border-2 border-[#e8ded5] shadow-xs bg-[#faf6e4] aspect-[4/3]">
                  <img
                    src="/src/assets/images/reunion_profesionales_1789581722719.jpg"
                    alt="Reunión y diálogo de líderes de equipo en espacio de trabajo"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. ¿TE RECONOCES EN ALGUNA DE ESTAS SITUACIONES? */}
        <section id="situaciones" className="py-16 md:py-24 bg-[#faf8f3]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f06060] block mb-2">
                Diagnóstico de tu día a día
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5c4b51] tracking-tight">
                ¿Te reconoces en alguna de estas situaciones?
              </h2>
              <p className="text-sm sm:text-base text-[#6b5b62] mt-3">
                Identificar los puntos de fricción cotidianos es el primer paso para transformar la dinámica con tu equipo.
              </p>
            </div>

            {/* Grid of 8 Situations Cards (1 column on mobile, 2 cols on tablet, 4 cols on desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
              {SITUATIONS.map((sit) => (
                <div
                  key={sit.id}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-[#e4dcd3] hover:border-[#8cbeb2] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#faf6e4] flex items-center justify-center mb-4">
                      {renderSituationIcon(sit.iconName)}
                    </div>
                    <p className="text-sm sm:text-base text-[#473a3f] leading-snug font-medium">
                      {sit.text}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#f4eee8] flex items-center justify-between text-xs text-[#94838a]">
                    <span>Situación 0{sit.id}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8cbeb2]"></span>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing text and CTA */}
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-base sm:text-lg text-[#55474d] font-semibold mb-6 leading-relaxed">
                Si has vivido alguna de estas situaciones, el taller te permitirá entender qué ocurre y comenzar a desarrollar nuevas respuestas.
              </p>
              <button
                onClick={() => scrollToSection('formulario-reserva')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#f06060] hover:bg-[#d94949] text-white font-bold text-base shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                Quiero mejorar mi liderazgo
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* 5. ¿A QUIÉN VA DIRIGIDO? */}
        <section id="a-quien-va-dirigido" className="py-16 md:py-24 bg-white border-y border-[#ece4db]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Image side (5 cols) */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden border-2 border-[#e7ddd4] shadow-xs bg-[#faf6e4] aspect-[4/3] relative">
                  <img
                    src="/src/assets/images/reunion_profesionales_1789581722719.jpg"
                    alt="Distintos profesionales y mandos intermedios reunidos en formación de liderazgo"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                  <span className="absolute bottom-4 left-4 right-4 text-xs font-semibold text-white bg-black/50 backdrop-blur-xs px-3 py-2 rounded-lg">
                    Encuentro interprofesional con experiencias compartidas
                  </span>
                </div>
              </div>

              {/* Profiles side (7 cols) */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8cbeb2] block mb-2">
                  Perfil de los participantes
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5c4b51] leading-tight mb-4">
                  ¿A quién va dirigido?
                </h2>
                <p className="text-sm sm:text-base text-[#635359] mb-7">
                  Este taller está dirigido a profesionales con responsabilidad sobre personas o en transición hacia puestos de coordinación:
                </p>

                {/* 6 Profiles List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {TARGET_PROFILES.map((profile, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-xl bg-[#faf8f3] border border-[#e5ddd3] flex items-start gap-3 hover:border-[#8cbeb2] transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#8cbeb2]/20 text-[#5c4b51] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                        {idx + 1}
                      </div>
                      <span className="text-sm sm:text-base text-[#4a3d42] font-semibold leading-snug">
                        {profile}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Note required */}
                <div className="p-4 rounded-xl bg-[#f2ebbf]/40 border border-[#ded5a6] flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#f06060] shrink-0" />
                  <p className="text-xs sm:text-sm font-semibold text-[#5c4b51] leading-relaxed">
                    No es necesario tener conocimientos previos sobre liderazgo o inteligencia emocional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. LO QUE TRABAJARÁS DURANTE EL TALLER */}
        <section id="contenidos" className="py-16 md:py-24 bg-[#faf8f3]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f06060] block mb-2">
                Estructura del programa
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5c4b51] tracking-tight">
                Lo que trabajarás durante el taller
              </h2>
              <p className="text-sm sm:text-base text-[#6b5c63] mt-3">
                Cuatro bloques secuenciales diseñados para profundizar desde el autodiagnóstico hasta la acción efectiva con tu equipo.
              </p>
            </div>

            {/* Interactive Block Component */}
            <ContentBlocks />
          </div>
        </section>

        {/* 7. METODOLOGÍA PRÁCTICA Y PARTICIPATIVA */}
        <section id="metodologia" className="py-16 md:py-24 bg-white border-y border-[#ece4db]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8cbeb2] block mb-2">
                Enfoque formativo
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5c4b51] tracking-tight">
                Una metodología práctica y participativa
              </h2>
              <p className="text-base sm:text-lg text-[#52444a] mt-4 leading-relaxed">
                El taller combinará explicaciones breves con ejercicios de reflexión, análisis de situaciones reales y herramientas que cada participante podrá aplicar en su equipo.
              </p>
            </div>

            {/* 6 Methodology Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
              {METHODOLOGY_POINTS.map((point, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-[#faf8f3] border border-[#e4ded5] hover:border-[#8cbeb2] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-extrabold text-[#f06060] uppercase tracking-wider block mb-2">
                      Pilar 0{index + 1}
                    </span>
                    <h3 className="text-lg font-bold text-[#5c4b51] mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-[#615258] leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-[#eee5dc] flex items-center gap-2 text-xs font-semibold text-[#8cbeb2]">
                    <Check className="w-4 h-4" /> Aplicación directa en el aula
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom summary banner */}
            <div className="p-6 rounded-2xl bg-[#faf6e4] border border-[#e5dcbd] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-[#f06060] shrink-0" />
                <span className="text-sm sm:text-base font-semibold text-[#5c4b51]">
                  Menos teoría abstracta y más ejercicios vivenciales con situaciones reales traídas por los asistentes.
                </span>
              </div>
              <button
                onClick={() => scrollToSection('formulario-reserva')}
                className="shrink-0 px-5 py-2.5 rounded-xl bg-[#5c4b51] hover:bg-[#45363c] text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Inscribirme al taller
              </button>
            </div>
          </div>
        </section>

        {/* 8. RADAR DE DESARROLLO PROFESIONAL */}
        <section id="radar" className="py-16 md:py-24 bg-[#faf8f3]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f06060] block mb-2">
                Herramienta de autodiagnóstico
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5c4b51] tracking-tight">
                Tu Radar de Desarrollo Profesional
              </h2>
              <p className="text-base sm:text-lg text-[#55474c] mt-3">
                Cada participante realizará una autoevaluación de diez competencias clave para el desempeño de su rol.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
              {/* Radar Chart Visual (6 cols) */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full bg-white p-6 sm:p-8 rounded-3xl border border-[#e3ded6] shadow-sm">
                  <RadarChart
                    onSelectCompetency={(comp) => setSelectedRadarCompetency(comp.name)}
                  />
                  <p className="text-center text-xs text-[#827278] mt-4">
                    Pasa el cursor sobre los vértices para explorar las competencias del modelo
                  </p>
                </div>
              </div>

              {/* 10 Competencies List (6 cols) */}
              <div className="lg:col-span-6">
                <h3 className="text-xl font-bold text-[#5c4b51] mb-3">
                  Las diez competencias evaluadas:
                </h3>
                <p className="text-sm text-[#66565c] mb-6">
                  El radar permitirá visualizar tus fortalezas, identificar las competencias que requieren atención y establecer prioridades de desarrollo.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {RADAR_COMPETENCIES.map((comp) => (
                    <div
                      key={comp.id}
                      className={`px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold flex items-center gap-2.5 transition-all ${
                        selectedRadarCompetency === comp.name
                          ? 'bg-[#f06060] text-white border-[#f06060] shadow-xs'
                          : 'bg-white text-[#4f4147] border-[#e2dad2] hover:border-[#8cbeb2]'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-full bg-[#f2ebbf] text-[#5c4b51] flex items-center justify-center font-bold text-xs shrink-0">
                        {comp.id}
                      </span>
                      <span>{comp.name}</span>
                    </div>
                  ))}
                </div>

                {/* Destacado clave obligatorio */}
                <div className="p-5 rounded-2xl bg-[#faf6e4] border-l-4 border-[#f06060] shadow-xs mb-6">
                  <p className="text-xl sm:text-2xl font-extrabold text-[#5c4b51] font-display">
                    “Llévate tu radar y tu plan de acción”.
                  </p>
                  <p className="text-xs sm:text-sm text-[#635359] mt-2">
                    No se utilizará para comparar participantes. Su finalidad será ayudarte a comprender tu momento profesional y orientar tu propio plan de mejora.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. ¿QUÉ TE LLEVARÁS DEL TALLER? */}
        <section id="que-te-llevaras" className="py-16 md:py-24 bg-white border-y border-[#ece4db]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Text & Checklist side (7 cols) */}
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8cbeb2] block mb-2">
                  Resultados tangibles
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5c4b51] leading-tight mb-4">
                  ¿Qué te llevarás del taller?
                </h2>
                <p className="text-base text-[#5f5056] mb-8 font-normal">
                  Al finalizar la jornada de 4 horas y 30 minutos, habrás obtenido:
                </p>

                {/* 6 Takeaway items with checkmarks */}
                <div className="space-y-4 mb-8">
                  {WHAT_YOU_TAKE_AWAY.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#faf8f3] border border-[#e8dfd6]">
                      <div className="w-6 h-6 rounded-full bg-[#8cbeb2]/20 text-[#5c4b51] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-[#5c4b51] stroke-[2.5]" />
                      </div>
                      <span className="text-sm sm:text-base text-[#45393e] font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => scrollToSection('formulario-reserva')}
                    className="px-6 py-3 rounded-xl bg-[#f06060] hover:bg-[#d94949] text-white font-bold text-sm shadow-xs transition-colors cursor-pointer"
                  >
                    Reservar mi plaza
                  </button>
                  <span className="text-xs text-[#78696f]">
                    Incluye materiales impresos y certificado
                  </span>
                </div>
              </div>

              {/* Photo side (5 cols) */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden border-2 border-[#e7ddd4] shadow-md bg-[#faf6e4] aspect-[4/3] relative">
                  <img
                    src="/src/assets/images/radar_compromiso_1789581808437.jpg"
                    alt="Participantes revisando su radar y escribiendo su compromiso personal"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-[#e4dcd3] text-xs text-[#5c4b51]">
                    <span className="font-bold block text-[#f06060]">Compromiso personal</span>
                    Hoja de ruta individual para aplicar desde el día siguiente en tu empresa.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. PROGRAMA DE LA JORNADA */}
        <section id="programa" className="py-16 md:py-24 bg-[#faf8f3]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f06060] block mb-2">
                Cronograma detallado
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5c4b51] tracking-tight">
                Programa de la jornada
              </h2>
              <p className="text-sm sm:text-base text-[#6b5c63] mt-3">
                30 de octubre de 2026 · De 16:00 a 20:30 h en CEEIM Murcia
              </p>
            </div>

            {/* Vertical Timeline */}
            <div className="max-w-2xl mx-auto relative">
              {/* Vertical line connecting nodes */}
              <div className="absolute left-[29px] sm:left-32 top-4 bottom-4 w-0.5 bg-[#dcd2c9] z-0"></div>

              <div className="space-y-6 sm:space-y-7 relative z-10">
                {TIMELINE.map((item, idx) => {
                  const isBreak = item.type === 'break';
                  const isClose = item.type === 'close';
                  const isRadar = item.type === 'radar';

                  return (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pl-14 sm:pl-0 relative group"
                    >
                      {/* Left time label on desktop */}
                      <div className="sm:w-28 sm:text-right shrink-0">
                        <span className="text-xs sm:text-sm font-bold text-[#7d6d74] block">
                          {item.time}
                        </span>
                      </div>

                      {/* Timeline indicator node */}
                      <div className="absolute left-4 sm:relative sm:left-0 w-7 h-7 rounded-full flex items-center justify-center shrink-0 border-2 bg-white transition-all shadow-xs -translate-x-1 sm:translate-x-0 border-[#5c4b51]">
                        {isBreak ? (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#f3b562]"></div>
                        ) : isClose || isRadar ? (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#f06060]"></div>
                        ) : (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#8cbeb2]"></div>
                        )}
                      </div>

                      {/* Content Card */}
                      <div
                        className={`flex-1 p-4 rounded-xl border transition-all ${
                          isBreak
                            ? 'bg-[#faf6e4] border-[#e8dfc7]'
                            : 'bg-white border-[#e3dad1] shadow-xs'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-sm sm:text-base font-bold text-[#5c4b51]">
                            {item.title}
                          </h3>
                          {isBreak && (
                            <span className="text-[11px] font-bold text-[#b47a27] bg-[#f3b562]/20 px-2 py-0.5 rounded-full">
                              Pausa café
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 11. CONTINUIDAD DEL DESARROLLO */}
        <section id="continuidad" className="py-16 md:py-24 bg-white border-y border-[#ece4db]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-[#faf8f3] rounded-3xl border border-[#e5ded6] p-6 sm:p-10 md:p-12 shadow-xs">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#f06060] block mb-2">
                  Acompañamiento individual posterior
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#5c4b51] leading-tight">
                  El taller puede ser el comienzo de tu proceso de desarrollo
                </h2>
                <p className="text-sm sm:text-base text-[#57484e] mt-4 leading-relaxed">
                  El taller te permitirá tomar conciencia de tu situación actual e identificar una prioridad de mejora. Algunas competencias requieren práctica, seguimiento y un espacio individual en el que trabajar situaciones reales con mayor profundidad.
                </p>
                <p className="text-sm sm:text-base text-[#57484e] mt-3 leading-relaxed">
                  Por ello, las personas que deseen continuar podrán solicitar una sesión de valoración del <strong>Programa Individual de Desarrollo Profesional</strong>.
                </p>
              </div>

              {/* Explanatory Box */}
              <div className="bg-white p-6 rounded-2xl border border-[#e3d9cf] mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#8cbeb2]/20 text-[#5c4b51] flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#5c4b51]">
                    Estructura: Cuatro sesiones individuales
                  </h3>
                </div>
                <p className="text-sm text-[#615157] mb-5 leading-relaxed">
                  El programa consta de cuatro sesiones individuales y se adapta al contexto de la empresa, al puesto y a las necesidades de la persona participante.
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-[#796970] mb-3">
                  Áreas del programa individual:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {INDIVIDUAL_PROGRAM_AREAS.map((area, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#46383e]">
                      <Check className="w-4 h-4 text-[#8cbeb2] shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button to trigger Assessment Modal */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setIsAssessmentModalOpen(true)}
                  className="px-7 py-3.5 rounded-xl bg-[#5c4b51] hover:bg-[#43363b] text-white font-bold text-sm sm:text-base shadow-xs transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  Solicitar una sesión de valoración
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-[#807076] mt-3">
                  Sesión inicial de valoración sin compromiso para definir tus objetivos y calendario de sesiones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12. FACILITADORES */}
        <section id="facilitadores" className="py-16 md:py-24 bg-[#faf8f3]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8cbeb2] block mb-2">
                Equipo docente
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5c4b51] tracking-tight">
                Información sobre los facilitadores
              </h2>
              <p className="text-sm sm:text-base text-[#6b5c62] mt-3">
                Profesionales especializados en comportamiento organizacional, liderazgo directivo y desarrollo humano.
              </p>
            </div>

            {/* 2 Facilitators Balanced Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {FACILITATORS.map((f, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-[#e3d9cf] p-6 sm:p-8 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    {/* Facilitator Header with prepared photo space */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-20 h-20 rounded-2xl bg-[#faf6e4] border-2 border-[#e5dbd0] flex items-center justify-center shrink-0 text-[#5c4b51] font-display font-extrabold text-2xl shadow-xs">
                        {f.initials}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#5c4b51]">
                          {f.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-[#f06060] mt-0.5">
                          {f.role}
                        </p>
                        <span className="text-[11px] text-[#85767c] block mt-1">
                          Facilitador presencial CEEIM
                        </span>
                      </div>
                    </div>

                    {/* Literal descriptions from document */}
                    <div className="space-y-3.5 text-sm text-[#504348] leading-relaxed border-t border-[#f2eae3] pt-5">
                      {f.bio.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#f2eae3] flex items-center justify-between text-xs text-[#87787e]">
                    <span>Mejorar para Crecer</span>
                    <span className="font-semibold text-[#5c4b51]">Taller presencial</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 13. INFORMACIÓN PRÁCTICA Y PRECIO */}
        <section id="precio" className="py-16 md:py-24 bg-white border-y border-[#ece4db]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f06060] block mb-2">
                Convocatoria e inscripción
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5c4b51] tracking-tight">
                Información práctica y precio
              </h2>
              <p className="text-sm sm:text-base text-[#6b5c62] mt-3">
                Edición presencial exclusiva con plazas limitadas a 10 asistentes para garantizar máxima interacción y personalización.
              </p>
            </div>

            {/* Practical Info Grid */}
            <div className="bg-[#faf8f3] rounded-3xl border border-[#e4dad0] p-6 sm:p-8 mb-12 max-w-4xl mx-auto">
              <h3 className="text-lg font-bold text-[#5c4b51] mb-6 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#8cbeb2]" /> Ficha técnica del taller
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <span className="text-xs font-bold text-[#7d6e74] uppercase tracking-wider block mb-1">Fecha</span>
                  <span className="font-semibold text-[#5c4b51]">30 de octubre de 2026</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#7d6e74] uppercase tracking-wider block mb-1">Horario</span>
                  <span className="font-semibold text-[#5c4b51]">De 16:00 a 20:30 h</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#7d6e74] uppercase tracking-wider block mb-1">Duración</span>
                  <span className="font-semibold text-[#5c4b51]">4 horas y 30 minutos</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#7d6e74] uppercase tracking-wider block mb-1">Modalidad</span>
                  <span className="font-semibold text-[#5c4b51]">Presencial</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#7d6e74] uppercase tracking-wider block mb-1">Lugar</span>
                  <span className="font-semibold text-[#5c4b51] leading-tight block">
                    CEEIM, Centro Europeo de Empresas e Innovación de Murcia
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#7d6e74] uppercase tracking-wider block mb-1">Plazas</span>
                  <span className="font-bold text-[#f06060]">10 plazas (grupo reducido)</span>
                </div>
              </div>

              {/* Incluye y FUNDAE */}
              <div className="mt-6 pt-6 border-t border-[#ece2d8] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="flex items-start gap-2 text-[#514349]">
                  <Award className="w-4 h-4 text-[#8cbeb2] shrink-0 mt-0.5" />
                  <span>
                    <strong>Incluye:</strong> Material de trabajo, Radar de Desarrollo Profesional y certificado de participación.
                  </span>
                </div>
                <div className="flex items-start gap-2 text-[#514349]">
                  <Building2 className="w-4 h-4 text-[#8cbeb2] shrink-0 mt-0.5" />
                  <span>
                    <strong>Bonificación:</strong> Formación bonificable para empresas mediante <strong>FUNDAE</strong>.
                  </span>
                </div>
              </div>
            </div>

            {/* Pricing Cards Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Early Bird (Featured) */}
              <div className="bg-white rounded-3xl border-2 border-[#f06060] p-6 sm:p-8 shadow-sm relative flex flex-col justify-between">
                <div className="absolute -top-3.5 left-6 bg-[#f06060] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-xs">
                  Tarifa recomendada
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-2 mt-2">
                    <span className="text-sm font-bold text-[#5c4b51] uppercase tracking-wider">
                      Precio anticipado
                    </span>
                    <span className="text-3xl sm:text-4xl font-black text-[#f06060]">
                      89 €
                    </span>
                  </div>
                  <span className="text-xs text-[#7d6e74] block mb-4">
                    por persona · IVA incluido
                  </span>

                  <p className="text-sm font-medium text-[#504248] bg-[#faf6e4] p-3 rounded-xl border border-[#ede5ce] mb-6">
                    Para inscripciones realizadas antes del <strong>23 de octubre de 2026</strong>.
                  </p>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#524449] mb-8">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#8cbeb2]" /> Acceso completo al taller (4h 30m)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#8cbeb2]" /> Cuaderno y plantilla de trabajo
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#8cbeb2]" /> Radar de Desarrollo Profesional
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#8cbeb2]" /> Certificado de participación
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => scrollToSection('formulario-reserva')}
                  className="w-full py-3.5 rounded-xl bg-[#f06060] hover:bg-[#d94949] text-white font-bold text-sm shadow-xs transition-colors cursor-pointer text-center"
                >
                  Reservar plaza a 89 €
                </button>
              </div>

              {/* General Price */}
              <div className="bg-white rounded-3xl border border-[#ded5cb] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-2 mt-2">
                    <span className="text-sm font-bold text-[#7d6e74] uppercase tracking-wider">
                      Precio general
                    </span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#5c4b51]">
                      115 €
                    </span>
                  </div>
                  <span className="text-xs text-[#7d6e74] block mb-4">
                    por persona · IVA incluido
                  </span>

                  <p className="text-sm text-[#63545a] p-3 rounded-xl bg-[#faf8f3] border border-[#e8dfd6] mb-6">
                    Para inscripciones realizadas a partir del <strong>23 de octubre de 2026</strong>.
                  </p>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#66575d] mb-8">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#8cbeb2]" /> Acceso completo al taller (4h 30m)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#8cbeb2]" /> Material de trabajo y Radar
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#8cbeb2]" /> Certificado de asistencia
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => scrollToSection('formulario-reserva')}
                  className="w-full py-3.5 rounded-xl border border-[#cfc3ba] hover:bg-[#faf8f3] text-[#5c4b51] font-semibold text-sm transition-colors cursor-pointer text-center"
                >
                  Inscribirme al taller
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 14. FORMULARIO DE RESERVA */}
        <section id="reservar" className="py-16 md:py-24 bg-[#faf8f3]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <BookingForm
              onOpenPrivacyPolicy={() => setActiveLegalModal('privacidad')}
            />
          </div>
        </section>

        {/* 15. LLAMADA FINAL A LA ACCIÓN */}
        <section className="py-16 md:py-24 bg-[#5c4b51] text-white relative overflow-hidden">
          {/* Subtle decorative background circle */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#f06060]/10 pointer-events-none"></div>
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#8cbeb2]/10 pointer-events-none"></div>

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
              El desarrollo de tu equipo comienza por tu propio liderazgo
            </h2>

            <p className="text-base sm:text-lg text-[#f2ebbf] max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
              Reserva tu plaza y dedica una tarde a comprender tu forma de liderar, practicar nuevas herramientas y definir tu siguiente paso profesional.
            </p>

            <div className="mb-6">
              <button
                onClick={() => scrollToSection('formulario-reserva')}
                className="px-8 py-4 rounded-xl bg-[#f06060] hover:bg-[#d94949] text-white font-bold text-base shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
              >
                Reservar plaza
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-white/80 font-medium tracking-wide">
              30 de octubre de 2026 · CEEIM Murcia · Solo 10 plazas
            </p>
          </div>
        </section>
      </main>

      {/* 16. PIE DE PÁGINA (FOOTER) */}
      <footer className="bg-[#45363b] text-[#d6cbcf] border-t border-[#544349] pt-12 pb-8">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#5a484f]">
            {/* Logo & description (5 cols) */}
            <div className="md:col-span-5">
              <Logo variant="light" size="md" className="mb-4" />
              <p className="text-xs sm:text-sm text-[#c8bec3] leading-relaxed max-w-sm mb-4">
                Mejorar para Crecer: acompañamos a líderes, directivos y organizaciones en el desarrollo consciente de personas y la mejora del desempeño.
              </p>
              <p className="text-xs text-[#a99ba1]">
                Taller presencial: «Liderarte para liderar personas» · CEEIM Murcia
              </p>
            </div>

            {/* Editable Contact Information (4 cols) */}
            <div className="md:col-span-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f2ebbf] block mb-3">
                Contacto y sede
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#ded4d8]">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#8cbeb2] shrink-0 mt-0.5" />
                  <span>CEEIM, Campus Universitario de Espinardo, 30100 Murcia</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#8cbeb2] shrink-0" />
                  <a
                    href="mailto:contacto@mejorarparacrecer.com"
                    className="hover:text-white transition-colors"
                  >
                    contacto@mejorarparacrecer.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#8cbeb2] shrink-0" />
                  <span className="text-[#bfb2b7]">[AÑADIR TELÉFONO]</span>
                </li>
              </ul>
            </div>

            {/* Quick anchors & Social icons (3 cols) */}
            <div className="md:col-span-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f2ebbf] block mb-3">
                Navegación
              </span>
              <div className="flex flex-col gap-1.5 text-xs text-[#ded4d8] mb-5">
                <button
                  onClick={() => scrollToSection('el-taller')}
                  className="text-left hover:text-white transition-colors"
                >
                  El taller
                </button>
                <button
                  onClick={() => scrollToSection('contenidos')}
                  className="text-left hover:text-white transition-colors"
                >
                  Contenidos
                </button>
                <button
                  onClick={() => scrollToSection('radar')}
                  className="text-left hover:text-white transition-colors"
                >
                  Radar de desarrollo
                </button>
                <button
                  onClick={() => scrollToSection('precio')}
                  className="text-left hover:text-white transition-colors"
                >
                  Precios e inscripción
                </button>
              </div>

              {/* Editable Social media icons */}
              <span className="text-xs font-bold uppercase tracking-wider text-[#f2ebbf] block mb-2">
                Redes sociales
              </span>
              <div className="flex items-center gap-3 text-[#ded4d8]">
                <a
                  href="#footer"
                  title="LinkedIn Mejorar para Crecer [AÑADIR ENLACE]"
                  className="w-8 h-8 rounded-lg bg-[#55434a] hover:bg-[#f06060] flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#footer"
                  title="Instagram Mejorar para Crecer [AÑADIR ENLACE]"
                  className="w-8 h-8 rounded-lg bg-[#55434a] hover:bg-[#f06060] flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Legal bar & Dynamic Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#b0a2a7]">
            <p>
              © {new Date().getFullYear()} Mejorar para Crecer. Todos los derechos reservados.
            </p>

            <div className="flex items-center gap-4 text-xs">
              <button
                type="button"
                onClick={() => setActiveLegalModal('aviso-legal')}
                className="hover:text-white transition-colors"
              >
                Aviso legal
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => setActiveLegalModal('privacidad')}
                className="hover:text-white transition-colors"
              >
                Política de privacidad
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => setActiveLegalModal('cookies')}
                className="hover:text-white transition-colors"
              >
                Política de cookies
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Assessment Request Modal (Section 11) */}
      <AssessmentModal
        isOpen={isAssessmentModalOpen}
        onClose={() => setIsAssessmentModalOpen(false)}
        onOpenPrivacyPolicy={() => {
          setIsAssessmentModalOpen(false);
          setActiveLegalModal('privacidad');
        }}
      />

      {/* Legal & Privacy Modals (Section 16) */}
      <LegalModal
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}
