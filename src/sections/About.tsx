import { useEffect, useRef } from 'react';
import { CheckCircle, Target, Eye, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    const elements = section.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    'Çevre dostu çözümler',
    'Yüksek kalite standartları',
    'Uzman teknik kadro',
    '7/24 teknik destek',
    'Garantili hizmet',
    'Hızlı kurulum'
  ];

  const values = [
    {
      icon: Target,
      title: 'Misyonumuz',
      description: 'Endüstriyel tesislere en kaliteli ve güvenilir kontrol sistemlerini sunarak, çevre koruma ve sürdürülebilir üretim süreçlerine katkıda bulunmak.'
    },
    {
      icon: Eye,
      title: 'Vizyonumuz',
      description: 'Türkiye\'nin önde gelen endüstriyel kontrol ve otomasyon firması olarak, sektörde yenilikçi çözümlerle öncü olmak.'
    },
    {
      icon: Award,
      title: 'Kalite Politikamız',
      description: 'Müşteri memnuniyetini ön planda tutarak, ulusal ve uluslararası standartlara uygun, kaliteli ürün ve hizmet sunmak.'
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#f1f5f9] to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f97316]/10 rounded-full mb-4">
            <span className="text-[#f97316] font-semibold text-sm">Hakkımızda</span>
          </div>
          <h2 className="heading-lg text-[#1e3a5f] mb-4">
            ARS Endüstriyel Kontrol
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            2013 yılından bu yana endüstriyel kontrol ve otomasyon sistemleri alanında 
            hizmet vermekteyiz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image */}
          <div className="relative scroll-animate">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://kimi-web-img.moonshot.cn/img/jetaendustriyel.com/cae1d9d2fc79b80fcf6080a7b7ff96844cc5cf56.jpg"
                alt="Industrial Automation"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/50 to-transparent" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#f97316] text-white rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm">Yıllık<br />Tecrübe</div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-[#f97316]/30 rounded-2xl" />
          </div>

          {/* Right - Content */}
          <div className="scroll-animate">
            <h3 className="heading-md text-[#1e3a5f] mb-4">
              Güvenilir Endüstriyel Çözüm Ortağınız
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ARS Endüstriyel Kontrol A.Ş., paslanmaz çelik mamuller, makine ve endüstriyel 
              elektrik otomatik kontrol sistemleri üzerine faaliyet göstermek amacıyla 
              İstanbul'da kurulmuştur.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Firmamızın otomatik kontrol grubu; endüstriyel otomasyon ürünleri, proses 
              ekipmanları temini ve satışı, otomasyon taahhüt işleri, bakım ve onarım 
              hizmetleri, anahtar teslimi işler yapmak ve bu sahalarda var olan hizmet 
              temini konusundaki eksiklikleri gidermek amacıyla kurulmuştur.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-[#f1f5f9] rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="scroll-animate bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-[#f97316]/10 rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-[#f97316]" />
              </div>
              <h4 className="text-xl font-bold text-[#1e3a5f] mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 bg-[#1e3a5f] rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="w-8 h-8 text-[#f97316] mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
              <div className="text-gray-400 text-sm mt-1">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-[#f97316] mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-white">100+</div>
              <div className="text-gray-400 text-sm mt-1">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-[#f97316] mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-white">10+</div>
              <div className="text-gray-400 text-sm mt-1">Yıllık Tecrübe</div>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-[#f97316] mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-white">%100</div>
              <div className="text-gray-400 text-sm mt-1">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
