import { useEffect, useRef } from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';

const Products = () => {
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

  const products = [
    {
      title: 'SAİS Kontrol Kabini',
      description: 'Paslanmaz çelikten imal edilmiş, izoleli ve klima sistemli SAİS kabini.',
      image: 'https://kimi-web-img.moonshot.cn/img/www.enotek.com.tr/2dc9ce8faf46ea44f3d0705aba504c0437cadbc4.jpg',
      features: [
        '304/316 Paslanmaz çelik',
        'İzolasyon ve klima',
        'UPS sistemi',
        'Kamera ve güvenlik'
      ]
    },
    {
      title: 'Buhar Kalite Test Kiti',
      description: 'EN 285 standardına uygun buhar kalitesi test ekipmanı.',
      image: 'https://kimi-web-img.moonshot.cn/img/www.ksapharma.com/d022c395607db54919e3ca9a18c0d020277d36e6.jpg',
      features: [
        'EN 285 uyumlu',
        'Taşınabilir tasarım',
        'Hassas ölçüm',
        'Kolay kullanım'
      ]
    },
    {
      title: 'Analizör Paneli',
      description: 'Endüstriyel proses analizörleri için kompakt panel çözümleri.',
      image: 'https://kimi-web-img.moonshot.cn/img/www.endress.com/2e8980c424f29da27f0feb1d1e82f4027b3ba79d.jpg',
      features: [
        'Modüler tasarım',
        'Kolay erişim',
        'Hijyenik bağlantılar',
        'Otomatik kalibrasyon'
      ]
    },
    {
      title: 'SWAS Kompakt Sistem',
      description: 'Buhar ve su analizi için kompakt ve ekonomik sistem.',
      image: 'https://kimi-web-img.moonshot.cn/img/www.tr.endress.com/b9c41eb87270ef80aa9224169198993ae806080d.jpg',
      features: [
        'Kompakt tasarım',
        'Düşük bakım',
        'Yüksek doğruluk',
        'Uzaktan izleme'
      ]
    }
  ];

  const brands = [
    'Endress+Hauser',
    'Siemens',
    'Schneider Electric',
    'ABB',
    'Yokogawa',
    'Emerson',
    'Honeywell',
    'Wika'
  ];

  return (
    <section
      id="products"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f97316]/10 rounded-full mb-4">
            <span className="text-[#f97316] font-semibold text-sm">Ürünler</span>
          </div>
          <h2 className="heading-lg text-[#1e3a5f] mb-4">
            Ürün ve Projelerimiz
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Endüstriyel kontrol ve otomasyon sistemleri için özel tasarım ürünlerimiz 
            ve başarıyla tamamladığımız projelerimiz.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {products.map((product, index) => (
            <div
              key={index}
              className="scroll-animate group bg-[#f1f5f9] rounded-2xl overflow-hidden card-hover"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="grid sm:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 sm:h-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#f1f5f9]/50 sm:bg-gradient-to-l" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#f97316] flex-shrink-0" />
                        <span className="text-gray-600 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-[#f97316] font-semibold text-sm hover:underline"
                  >
                    Detaylı Bilgi
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brands Section */}
        <div className="scroll-animate bg-[#1e3a5f] rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              İş Ortaklarımız
            </h3>
            <p className="text-gray-400">
              Dünya'nın önde gelen markaları ile çalışıyoruz
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors"
              >
                <span className="text-white font-semibold text-sm">{brand}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="scroll-animate text-center p-8 bg-gradient-to-br from-[#f97316]/10 to-[#f97316]/5 rounded-2xl">
            <div className="text-4xl font-bold text-[#f97316] mb-2">50+</div>
            <div className="text-gray-700 font-semibold">SAİS Kabini</div>
            <div className="text-gray-500 text-sm mt-1">Başarıyla Kuruldu</div>
          </div>
          <div className="scroll-animate text-center p-8 bg-gradient-to-br from-[#1e3a5f]/10 to-[#1e3a5f]/5 rounded-2xl" style={{ transitionDelay: '100ms' }}>
            <div className="text-4xl font-bold text-[#1e3a5f] mb-2">30+</div>
            <div className="text-gray-700 font-semibold">Buhar Analiz</div>
            <div className="text-gray-500 text-sm mt-1">Sistemi Devreye Alındı</div>
          </div>
          <div className="scroll-animate text-center p-8 bg-gradient-to-br from-[#f97316]/10 to-[#f97316]/5 rounded-2xl" style={{ transitionDelay: '200ms' }}>
            <div className="text-4xl font-bold text-[#f97316] mb-2">100+</div>
            <div className="text-gray-700 font-semibold">Otomasyon</div>
            <div className="text-gray-500 text-sm mt-1">Projesi Tamamlandı</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
