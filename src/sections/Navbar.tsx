import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Anasayfa', href: '#hero' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Hizmetlerimiz', href: '#services' },
    { name: 'Ürünler', href: '#products' },
    { name: 'İletişim', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-[#1e3a5f] text-white py-2 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+902124860202" className="flex items-center gap-2 hover:text-[#f97316] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+90 212 486 02 02</span>
            </a>
            <a href="mailto:info@arsendustriyel.com" className="flex items-center gap-2 hover:text-[#f97316] transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@arsendustriyel.com</span>
            </a>
          </div>
          <div className="text-xs text-gray-300">
            Küçükçekmece / İstanbul
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'top-0 bg-white/95 backdrop-blur-md shadow-lg' : 'top-10 bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#hero" onClick={() => scrollToSection('#hero')} className="flex items-center gap-3">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center font-bold text-xl ${isScrolled ? 'bg-[#1e3a5f] text-white' : 'bg-white text-[#1e3a5f]'}`}>
                ARS
              </div>
              <div className={`hidden md:block ${isScrolled ? 'text-[#1e3a5f]' : 'text-white'}`}>
                <div className="font-bold text-lg leading-tight">ARS ENDÜSTRİYEL</div>
                <div className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>Kontrol ve Otomasyon</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-medium transition-colors hover:text-[#f97316] ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-industrial text-sm"
              >
                Teklif Al
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-[#1e3a5f]' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-[#f97316] rounded-lg transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-industrial w-full mt-4 text-center"
            >
              Teklif Al
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
