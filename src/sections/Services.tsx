import { useEffect, useRef, useState } from 'react';
import { 
  Droplets, 
  Gauge, 
  Settings, 
  Wrench, 
  Cpu, 
  Shield,
  ChevronRight,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  image: string;
}

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

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

  const services: Service[] = [
    {
      id: 'sais',
      icon: Droplets,
      title: 'Sürekli Atık Su İzleme Sistemi (SAİS)',
      shortDesc: 'Çevre denetimlerinizi otomatikleştirin, verilerinizi gerçek zamanlı izleyin.',
      fullDesc: `Sürekli Atık Su İzleme Sistemi (SAİS), atık su arıtma tesislerinin çıkış suyunda 
        sürekli ve otomatik olarak pH, sıcaklık, çözünmüş oksijen, iletkenlik, debi, 
        Kimyasal Oksijen İhtiyacı (KOI) ve Askıda Katı Madde (AKM) parametrelerini ölçer. 
        Ölçüm sonuçları periyodik ve gerçek zamanlı olarak Bakanlık merkezi veri tabanına aktarılır.`,
      features: [
        'pH, sıcaklık, çözünmüş oksijen ölçümü',
        'İletkenlik ve debi monitoring',
        'KOI ve AKM parametre analizi',
        'Otomatik numune alma cihazı',
        'Bakanlık veri tabanı entegrasyonu',
        'Gerçek zamanlı veri aktarımı',
        '7/24 kesintisiz izleme',
        'Uzaktan erişim ve kontrol'
      ],
      image: 'https://kimi-web-img.moonshot.cn/img/www.enotek.com.tr/fbed2ff08ccfcfb8149749ad39c8c001a055104a.jpg'
    },
    {
      id: 'buhar',
      icon: Gauge,
      title: 'Buhar Analiz Sistemi',
      shortDesc: 'Buhar kalitesi test ve analiz sistemleri ile üretim güvenliğini artırın.',
      fullDesc: `Buhar Analiz Sistemi, endüstriyel tesislerde kullanılan buharın kalitesini 
        ölçmek ve analiz etmek için kullanılan profesyonel bir sistemdir. Buhar kalitesi 
        testleri, sterilizasyon proseslerinin etkinliğini sağlamak ve ürün kalitesini 
        korumak için kritik öneme sahiptir.`,
      features: [
        'Buhar kalitesi testi (SQ1)',
        'Buharın kuruliği ölçümü',
        'Süper ısınma değeri analizi',
        'Kondensat kalite kontrolü',
        'Otomatik numune alma',
        'Hijyenik tasarım',
        'EN 285 standardına uygunluk',
        'Detaylı raporlama'
      ],
      image: 'https://kimi-web-img.moonshot.cn/img/content.spiraxsarco.com/9cdf0ecf5baf8d4a49231201c9cb5a2a624c7597.ashx'
    },
    {
      id: 'otomasyon',
      icon: Cpu,
      title: 'Endüstriyel Otomasyon',
      shortDesc: 'PLC, SCADA ve DCS sistemleri ile üretim süreçlerinizi optimize edin.',
      fullDesc: `Endüstriyel otomasyon çözümlerimiz ile üretim süreçlerinizi kontrol altına 
        alın. PLC programlama, SCADA sistemleri, DCS kontrol sistemleri ve proses 
        otomasyonu konularında uzman kadromuzla hizmetinizdeyiz.`,
      features: [
        'PLC programlama ve devreye alma',
        'SCADA/HMI sistem tasarımı',
        'DCS kontrol sistemleri',
        'Proses otomasyonu',
        'Motor kontrol sistemleri',
        'VFD/Sürücü entegrasyonu',
        'Sensör ve enstrümantasyon',
        'Network ve haberleşme'
      ],
      image: 'https://kimi-web-img.moonshot.cn/img/i0.wp.com/616e140e25baec231feb0b654d805e94221e911f.png'
    },
    {
      id: 'kabinet',
      icon: Settings,
      title: 'SAİS Kabin İmalatı',
      shortDesc: 'Özel tasarım paslanmaz çelik SAİS kabinleri ile dayanıklı çözümler.',
      fullDesc: `Firmamız tarafından imalatı yapılan SAİS kabinleri, çevre izleme sistemleri 
        için özel olarak tasarlanmış, paslanmaz çelik malzemeden üretilmiş, dayanıklı 
        ve uzun ömürlü çözümler sunar. Her türlü hava koşuluna uygun, izole edilmiş 
        kabin tasarımlarımız mevcuttur.`,
      features: [
        'Paslanmaz çelik malzeme',
        'İzolasyon ve klima sistemi',
        'Yangın tüpü ve güvenlik ekipmanları',
        'Kesintisiz güç kaynağı (UPS)',
        'Hareket sensörlü kamera sistemi',
        'Otomatik yıkama sistemi',
        'Paratoner koruma',
        'Özel ölçü ve tasarım'
      ],
      image: 'https://kimi-web-img.moonshot.cn/img/www.enotek.com.tr/2dc9ce8faf46ea44f3d0705aba504c0437cadbc4.jpg'
    },
    {
      id: 'bakim',
      icon: Wrench,
      title: 'Bakım ve Onarım',
      shortDesc: 'Periyodik bakım ve arıza onarım hizmetleri ile kesintisiz üretim.',
      fullDesc: `Sistemlerinizin sürekli ve sorunsuz çalışabilmesi için periyodik bakım 
        hizmetleri sunuyoruz. Deneyimli teknik ekibimiz ile arıza durumlarında hızlı 
        müdahale ve etkili çözümler sağlıyoruz.`,
      features: [
        'Periyodik bakım sözleşmeleri',
        '7/24 arıza müdahale',
        'Yedek parça temini',
        'Sistem güncelleme ve yükseltme',
        'Kalibrasyon hizmetleri',
        'Performans testleri',
        'Teknik danışmanlık',
        'Eğitim hizmetleri'
      ],
      image: 'https://kimi-web-img.moonshot.cn/img/mitsubishifa.co.th/4a7a7a1f1006750311ec8ba5c6f730350ab2727d.jpg'
    },
    {
      id: 'proses',
      icon: Shield,
      title: 'Proses Ekipmanları',
      shortDesc: 'Endüstriyel proses ekipmanları temini ve entegrasyonu.',
      fullDesc: `Endüstriyel tesisleriniz için ihtiyaç duyduğunuz tüm proses ekipmanlarının 
        temini, montajı ve devreye alma işlemlerini gerçekleştiriyoruz. Pompa, vana, 
        sensör ve diğer ekipmanların seçiminden kurulumuna kadar komple çözümler.`,
      features: [
        'Pompa ve kompresör sistemleri',
        'Vana ve aktüatörler',
        'Sensör ve transmitterler',
        'Analizör cihazları',
        'Filtrasyon sistemleri',
        'Isıtma/soğutma ekipmanları',
        'Tank ve reaktörler',
        'Borulama ve bağlantı elemanları'
      ],
      image: 'https://kimi-web-img.moonshot.cn/img/www.endress.com/2e8980c424f29da27f0feb1d1e82f4027b3ba79d.jpg'
    }
  ];

  return (
    <section
      id="services"
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
            <span className="text-[#f97316] font-semibold text-sm">Hizmetlerimiz</span>
          </div>
          <h2 className="heading-lg text-[#1e3a5f] mb-4">
            Endüstriyel Çözümler
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Sürekli Atık Su İzleme Sistemi, Buhar Analiz Sistemi ve endüstriyel otomasyon 
            çözümleri ile işletmenizin verimliliğini artırıyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="scroll-animate group bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-[#f97316] rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-3 line-clamp-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {service.shortDesc}
                </p>

                {/* Features Preview */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#f97316] flex-shrink-0" />
                      <span className="text-gray-600 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full flex items-center justify-center gap-2 py-3 border-2 border-[#f97316] text-[#f97316] rounded-lg font-semibold transition-all duration-300 hover:bg-[#f97316] hover:text-white group/btn"
                >
                  Detaylı Bilgi
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center scroll-animate">
          <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Projeniz için Teklif Alın
            </h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Size özel çözümlerimiz hakkında detaylı bilgi almak ve fiyat teklifi 
              istemek için bize ulaşın.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 btn-industrial"
            >
              Hemen İletişime Geç
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Service Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#f97316] rounded-xl flex items-center justify-center">
                    <selectedService.icon className="w-7 h-7 text-white" />
                  </div>
                  <DialogTitle className="text-2xl text-[#1e3a5f]">
                    {selectedService.title}
                  </DialogTitle>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                {/* Image */}
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Description */}
                <DialogDescription className="text-gray-600 text-base leading-relaxed">
                  {selectedService.fullDesc}
                </DialogDescription>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-bold text-[#1e3a5f] mb-4">Özellikler</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-[#f1f5f9] rounded-lg">
                        <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-4 pt-4">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedService(null);
                      setTimeout(() => {
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="flex-1 btn-industrial text-center"
                  >
                    Teklif Al
                  </a>
                  <a
                    href="tel:+902124860202"
                    className="flex-1 btn-industrial-outline text-center"
                  >
                    Hemen Ara
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
