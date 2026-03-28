import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Settings, Droplets, Gauge } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const parallaxElements = hero.querySelectorAll('.parallax');
      parallaxElements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '0.05');
        (el as HTMLElement).style.transform = `translate(${x * speed * 100}px, ${y * speed * 100}px)`;
      });
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://kimi-web-img.moonshot.cn/img/mitsubishifa.co.th/4a7a7a1f1006750311ec8ba5c6f730350ab2727d.jpg"
          alt="Industrial Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/95 via-[#1e3a5f]/85 to-[#1e3a5f]/70" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="parallax absolute top-20 left-10 w-64 h-64 bg-[#f97316]/10 rounded-full blur-3xl" data-speed="0.03" />
        <div className="parallax absolute bottom-20 right-10 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl" data-speed="0.05" />
        <div className="parallax absolute top-1/2 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl" data-speed="0.02" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Settings className="w-4 h-4 text-[#f97316]" />
              <span className="text-sm font-medium">Endüstriyel Çözümler</span>
            </div>

            <h1 className="heading-xl mb-6">
              <span className="block">Endüstriyel</span>
              <span className="block text-[#f97316]">Kontrol ve</span>
              <span className="block">Otomasyon</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Sürekli Atık Su İzleme Sistemi (SAİS), Buhar Analiz Sistemi ve endüstriyel 
              otomasyon çözümleri ile işletmenizin verimliliğini artırıyoruz.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => scrollToSection('#services')}
                className="btn-industrial flex items-center gap-2 group"
              >
                Hizmetlerimiz
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-industrial-outline border-white text-white hover:bg-white hover:text-[#1e3a5f]"
              >
                İletişime Geç
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#f97316]">10+</div>
                <div className="text-sm text-gray-400 mt-1">Yıllık Tecrübe</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#f97316]">100+</div>
                <div className="text-sm text-gray-400 mt-1">Tamamlanan Proje</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#f97316]">50+</div>
                <div className="text-sm text-gray-400 mt-1">Mutlu Müşteri</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4 animate-slideInRight">
            <div className="space-y-4 mt-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 card-hover">
                <div className="w-12 h-12 bg-[#f97316] rounded-xl flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">SAİS</h3>
                <p className="text-gray-300 text-sm">Sürekli Atık Su İzleme Sistemi ile çevre denetimlerinizi kolaylaştırın.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 card-hover">
                <div className="w-12 h-12 bg-[#f97316] rounded-xl flex items-center justify-center mb-4">
                  <Gauge className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Buhar Analizi</h3>
                <p className="text-gray-300 text-sm">Profesyonel buhar kalitesi test ve analiz sistemleri.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 card-hover">
                <div className="w-12 h-12 bg-[#f97316] rounded-xl flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Otomasyon</h3>
                <p className="text-gray-300 text-sm">Endüstriyel otomasyon sistemleri ve proses kontrolü.</p>
              </div>

              <div className="bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-2xl p-6 card-hover">
                <h3 className="text-white font-bold text-lg mb-2">7/24 Destek</h3>
                <p className="text-white/90 text-sm mb-4">Teknik servis ve bakım hizmetlerimizle yanınızdayız.</p>
                <a href="tel:+902124860202" className="text-white font-semibold text-sm flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +90 212 486 02 02
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

// Phone icon component for the CTA card
const Phone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export default Hero;
