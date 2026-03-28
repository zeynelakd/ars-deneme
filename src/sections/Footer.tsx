import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Settings,
  Droplets,
  Gauge,
  Wrench
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Anasayfa', href: '#hero' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Hizmetlerimiz', href: '#services' },
    { name: 'Ürünler', href: '#products' },
    { name: 'İletişim', href: '#contact' },
  ];

  const services = [
    { name: 'Sürekli Atık Su İzleme', icon: Droplets },
    { name: 'Buhar Analiz Sistemi', icon: Gauge },
    { name: 'Endüstriyel Otomasyon', icon: Settings },
    { name: 'Bakım ve Onarım', icon: Wrench },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1e3a5f] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#f97316] rounded-xl flex items-center justify-center font-bold text-xl">
                ARS
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">ARS ENDÜSTRİYEL</div>
                <div className="text-gray-400 text-xs">Kontrol ve Otomasyon</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              2013 yılından bu yana endüstriyel kontrol ve otomasyon sistemleri 
              alanında profesyonel hizmet sunmaktayız.
            </p>
            <div className="space-y-3">
              <a 
                href="tel:+902124860202"
                className="flex items-center gap-3 text-gray-400 hover:text-[#f97316] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">+90 212 486 02 02</span>
              </a>
              <a 
                href="mailto:info@arsendustriyel.com"
                className="flex items-center gap-3 text-gray-400 hover:text-[#f97316] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">info@arsendustriyel.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Halkalı Merkez Mah. Sönmez Sk. No:6/1A<br />
                  Küçükçekmece / İstanbul
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Hızlı Linkler</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#f97316] transition-colors text-sm"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => scrollToSection('#services')}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#f97316] transition-colors text-sm"
                  >
                    <service.icon className="w-4 h-4" />
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours & CTA */}
          <div>
            <h4 className="font-bold text-lg mb-6">Çalışma Saatleri</h4>
            <div className="space-y-3 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Pazartesi - Cuma</span>
                <span className="text-white">08:30 - 18:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Cumartesi</span>
                <span className="text-white">09:00 - 13:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Pazar</span>
                <span className="text-red-400">Kapalı</span>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full btn-industrial"
            >
              Teklif Al
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {currentYear} ARS Endüstriyel Kontrol A.Ş. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-6">
              <button className="text-gray-400 hover:text-white text-sm transition-colors">
                Gizlilik Politikası
              </button>
              <button className="text-gray-400 hover:text-white text-sm transition-colors">
                KVKK Aydınlatma Metni
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
