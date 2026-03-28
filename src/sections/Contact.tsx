import { useEffect, useRef, useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Halkalı Merkez Mah. Şehit Yılmaz Özdemir Cd. Sönmez Sk. No:6/1A',
      subContent: 'Küçükçekmece / İstanbul',
      link: 'https://maps.google.com/?q=ARS+Endüstriyel+Kontrol'
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+90 212 486 02 02',
      subContent: '+90 212 486 03 30 (Faks)',
      link: 'tel:+902124860202'
    },
    {
      icon: Mail,
      title: 'E-posta',
      content: 'info@arsendustriyel.com',
      subContent: 'satış@arsendustriyel.com',
      link: 'mailto:info@arsendustriyel.com'
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      content: 'Pazartesi - Cuma: 08:30 - 18:00',
      subContent: 'Cumartesi: 09:00 - 13:00',
      link: null
    }
  ];

  const services = [
    'Sürekli Atık Su İzleme Sistemi (SAİS)',
    'Buhar Analiz Sistemi',
    'Endüstriyel Otomasyon',
    'SAİS Kabin İmalatı',
    'Bakım ve Onarım',
    'Proses Ekipmanları',
    'Diğer'
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-[#f1f5f9] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f97316]/10 rounded-full mb-4">
            <span className="text-[#f97316] font-semibold text-sm">İletişim</span>
          </div>
          <h2 className="heading-lg text-[#1e3a5f] mb-4">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Projeleriniz için teknik destek, fiyat teklifi veya detaylı bilgi almak 
            için bize ulaşın.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="scroll-animate bg-white rounded-xl p-6 shadow-lg card-hover"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f97316]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-[#f97316]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#1e3a5f] mb-1">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-600 hover:text-[#f97316] transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                    {info.subContent && (
                      <p className="text-gray-500 text-sm mt-1">{info.subContent}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="scroll-animate bg-white rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.595826063914!2d28.7852569!3d41.0394113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caaf6d05af38b7%3A0x532b67ebdd9ec85b!2sARS%20End%C3%BCstriyel%20Kontrol%20A.%C5%9E.!5e0!3m2!1str!2str!4v1704067200000!5m2!1str!2str"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ARS Endüstriyel Konum"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 scroll-animate">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">
                Teklif Formu
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#1e3a5f] mb-2">
                    Teşekkürler!
                  </h4>
                  <p className="text-gray-600">
                    Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700">
                        Ad Soyad <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Adınız ve soyadınız"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-gray-700">
                        Firma Adı
                      </Label>
                      <Input
                        id="company"
                        placeholder="Firma adınız"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">
                        E-posta <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ornek@firma.com"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700">
                        Telefon <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+90 5XX XXX XX XX"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-gray-700">
                      İlgilendiğiniz Hizmet
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Hizmet seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700">
                      Mesajınız <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Projeniz hakkında kısa bir bilgi verin..."
                      required
                      className="min-h-[120px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-lg rounded-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Gönder
                      </>
                    )}
                  </Button>

                  <p className="text-gray-500 text-sm text-center">
                    Formu göndererek kişisel verilerinizin işlenmesini kabul etmiş olursunuz.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
