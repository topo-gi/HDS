"use client";
import React from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 10 + 5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }))
  );
  const philosophyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (philosophyRef.current) {
      observer.observe(philosophyRef.current);
    }

    return () => {
      if (philosophyRef.current) {
        observer.unobserve(philosophyRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-[#051936] min-h-screen flex flex-col relative">
      <link
        rel="icon"
        type="image/png"
        href="https://ucarecdn.com/4a0eee17-3df3-4e67-bcb5-188617e86711/-/format/auto/"
      />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&display=swap');

        .writing-vertical {
          writing-mode: vertical-rl;
        }

        .font-garamond {
          font-family: 'EB Garamond', serif;
        }

        @keyframes fadeInLogo {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes twinkle {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.5);
          }
        }

        .logo-type {
          opacity: 0;
          animation: fadeInLogo 1.5s ease-out forwards;
          animation-delay: 1s;
        }

        .particle {
          position: absolute;
          background: #eea501;
          border-radius: 50%;
          opacity: 0;
          box-shadow: 0 0 5px #eea501, 0 0 10px #eea501, 0 0 15px #eea501;
          animation: twinkle 4s infinite ease-in-out;
          animation-delay: calc(var(--delay) * 2s + 4s);
        }

        .light-trail {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
          filter: blur(4px);
          transform-origin: left;
          animation: lightTrail 3s ease-out infinite;
        }

        .light-trail::after {
          content: '';
          position: absolute;
          top: 50%;
          right: 0;
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          transform: translate(50%, -50%);
          box-shadow: 0 0 10px white, 0 0 20px white, 0 0 30px white;
          animation: sparkle 3s ease-out infinite;
        }

        .slide-in {
          opacity: 0;
          transform: translateX(-100%);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .slide-in.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .slide-in.visible.delayed {
          transition-delay: 0.5s;
        }
      `}</style>
      <nav className="fixed w-full bg-transparent z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#home" className="flex items-center">
                <img
                  src="https://ucarecdn.com/c940aaee-226f-4329-af39-b647bb75e3dc/-/format/auto/"
                  alt="Hotarubi Design Studio"
                  className="h-[20px] md:h-[30px] w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed bottom-6 right-6 z-50 md:hidden bg-[#ee8601] rounded-full p-3 shadow-lg"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="white"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div
          className={`fixed inset-0 bg-[#051936] z-40 transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#eea501] hover:text-white/70 text-xl font-garamond"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#eea501] hover:text-white/70 text-xl font-garamond"
            >
              About us
            </a>
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#eea501] hover:text-white/70 text-xl font-garamond"
            >
              Service
            </a>
            <a
              href="#works"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#eea501] hover:text-white/70 text-xl font-garamond"
            >
              Works
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#eea501] hover:text-white/70 text-xl font-garamond"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
      <nav className="fixed w-auto right-8 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="space-y-8">
          <a
            href="#home"
            className="block font-garamond text-[#eea501] hover:text-white/70 transform writing-vertical text-sm"
          >
            Home
          </a>
          <a
            href="#about"
            className="block font-garamond text-[#eea501] hover:text-white/70 transform writing-vertical text-sm"
          >
            About us
          </a>
          <a
            href="#services"
            className="block font-garamond text-[#eea501] hover:text-white/70 transform writing-vertical text-sm"
          >
            Service
          </a>
          <a
            href="#works"
            className="block font-garamond text-[#eea501] hover:text-white/70 transform writing-vertical text-sm"
          >
            Works
          </a>
          <a
            href="#contact"
            className="block font-garamond text-[#eea501] hover:text-white/70 transform writing-vertical text-sm"
          >
            Contact
          </a>
        </div>
      </nav>
      <main className="flex flex-col flex-grow">
        <section
          id="home"
          className="relative h-screen overflow-hidden bg-[#051936]"
        >
          <div className="absolute inset-0">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="particle"
                style={{
                  width: `${particle.size * 0.6}px`,
                  height: `${particle.size * 0.6}px`,
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  "--delay": particle.delay,
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[320px] md:w-[500px]">
              <img
                src="https://ucarecdn.com/a330ab07-3145-498c-bf59-2152d9ab564e/-/format/auto/"
                alt="Hotarubi Design Studio"
                className="logo-type w-full h-auto relative z-10"
              />
            </div>
          </div>
        </section>
        <section className="bg-[#051936] text-white py-16 px-4 md:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-12 items-center">
              <div className="max-w-full" ref={philosophyRef}>
                <h2
                  className={`text-3xl md:text-4xl mb-12 tracking-wider font-garamond text-[#eea501] slide-in ${
                    isVisible ? "visible" : ""
                  }`}
                  style={{
                    textShadow: "0 0 10px rgba(238, 165, 1, 0.2)",
                  }}
                >
                  Glow with Elegance,
                  <br />
                  Design with Passion.
                </h2>
                <div className="space-y-2 text-base leading-relaxed">
                  <p
                    className={`text-sm leading-tight font-serif text-white slide-in ${
                      isVisible ? "visible" : ""
                    }`}
                  >
                    Hotarubi Design
                    Studioは、繊細で洗練されたデザインを通じて、世界に美しさとやすらぎを届けます。
                  </p>
                  <p
                    className={`text-sm leading-tight font-serif text-white slide-in delayed ${
                      isVisible ? "visible" : ""
                    }`}
                  >
                    穏やかで美しい水辺がなければ生きられない蛍のように、繊細な感性を大切にし、また自ら光を放つ蛍火のように、内に秘めた情熱をもって、心を動かす体験を生み出していきます。
                  </p>
                  <p
                    className={`text-sm leading-tight font-serif text-white slide-in delayed ${
                      isVisible ? "visible" : ""
                    }`}
                  >
                    小さな存在かもしれませんが、確かなエネルギーで、少しでも世界を美しく、穏やかに照らせるようなデザインを目指しています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="works"
          className="bg-[#051936] text-white py-16 px-4 md:px-24"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-16 font-garamond text-[#eea501]">
              Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden bg-white p-8 shadow-lg border border-gray-700">
                <img
                  src="https://ucarecdn.com/53de6810-4291-4bd6-8195-4db2e5c031a0/-/format/auto/"
                  alt="Solar Care Logo"
                  className="w-4/5 h-48 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#051936] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-garamond mb-2 text-white">
                      Logo Design
                    </h3>
                    <p className="text-sm text-gray-200">
                      ロゴデザイン / 太陽光パネル関連企業様
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-white p-8 shadow-lg border border-gray-700">
                <img
                  src="https://ucarecdn.com/5cbdef84-bee3-478d-8bcf-e5bcb405c34a/-/format/auto/"
                  alt="Fuji Hokuroku Logo"
                  className="w-4/5 h-48 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#051936] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-garamond mb-2 text-white">
                      Logo Design
                    </h3>
                    <p className="text-sm text-gray-200">
                      ロゴデザイン / ペット関連企業様
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-white p-8 shadow-lg border border-gray-700">
                <img
                  src="https://ucarecdn.com/ef6b6f56-7fb9-4ea7-a055-37f556b603b1/-/format/auto/"
                  alt="Men's Duo Logo"
                  className="w-4/5 h-48 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#051936] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-garamond mb-2 text-white">
                      Logo Design
                    </h3>
                    <p className="text-sm text-gray-200">
                      ロゴデザイン / メンズ美容関連企業様
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-white p-8 shadow-lg border border-gray-700">
                <img
                  src="https://ucarecdn.com/1a18fa86-a53e-4760-a781-dd44da9d5bee/-/format/auto/"
                  alt="Podcast Thumbnail"
                  className="w-4/5 h-48 object-contain mx-auto transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#051936] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-xl font-garamond mb-2 text-white">
                      Thumbnail
                    </h3>
                    <p className="text-sm text-gray-200">
                      サムネイル / Podcast番組
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="bg-[#051936] text-white py-16 px-4 md:px-24"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-16 font-garamond text-[#eea501]">
              Service
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-[#eea501]/20 rounded-lg p-8 space-y-4 hover:border-[#eea501] hover:shadow-lg transition-all duration-300">
                <div className="text-[#eea501] text-4xl mb-4">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3 className="text-lg font-serif text-[#051936]">ロゴ制作</h3>
                <p className="text-sm text-gray-600 font-serif">
                  ブランドの個性を引き出す、印象的なロゴデザインを制作いたします。
                </p>
              </div>

              <div className="bg-white border border-[#eea501]/20 rounded-lg p-8 space-y-4 hover:border-[#eea501] hover:shadow-lg transition-all duration-300">
                <div className="text-[#eea501] text-4xl mb-4">
                  <i className="fas fa-image"></i>
                </div>
                <h3 className="text-lg font-serif text-[#051936]">
                  バナー・アイコン
                </h3>
                <p className="text-sm text-gray-600 font-serif">
                  目を引く効果的なWebバナーで、クリック率の向上を実現します。
                </p>
              </div>

              <div className="bg-white border border-[#eea501]/20 rounded-lg p-8 space-y-4 hover:border-[#eea501] hover:shadow-lg transition-all duration-300">
                <div className="text-[#eea501] text-4xl mb-4">
                  <i className="fas fa-file-alt"></i>
                </div>
                <h3 className="text-lg font-serif text-[#051936]">
                  チラシ制作
                </h3>
                <p className="text-sm text-gray-600 font-serif">
                  情報を効果的に伝える、魅力的なチラシデザインを提供します。
                </p>
              </div>

              <div className="bg-white border border-[#eea501]/20 rounded-lg p-8 space-y-4 hover:border-[#eea501] hover:shadow-lg transition-all duration-300">
                <div className="text-[#eea501] text-4xl mb-4">
                  <i className="fas fa-id-card"></i>
                </div>
                <h3 className="text-lg font-serif text-[#051936]">名刺制作</h3>
                <p className="text-sm text-gray-600 font-serif">
                  ビジネスの第一印象を決める、洗練された名刺デザインを制作します。
                </p>
              </div>

              <div className="bg-white border border-[#eea501]/20 rounded-lg p-8 space-y-4 hover:border-[#eea501] hover:shadow-lg transition-all duration-300">
                <div className="text-[#eea501] text-4xl mb-4">
                  <i className="fas fa-video"></i>
                </div>
                <h3 className="text-lg font-serif text-[#051936]">動画編集</h3>
                <p className="text-sm text-gray-600 font-serif">
                  魅力的な映像コンテンツで、より効果的な情報発信をサポートします。
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="company-info"
          className="bg-[#051936] text-white py-16 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="md:pl-16 pt-32">
                <h2 className="text-2xl md:text-3xl mb-16 font-garamond text-[#eea501] text-left">
                  <span className="text-lg md:text-xl">About Us</span>
                </h2>
                <div className="flex flex-col items-start space-y-8">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <img
                      src="https://ucarecdn.com/2fde39bc-5412-46ed-804e-d1c0b15c76a9/-/format/auto/"
                      alt="小沼聡美"
                      className="w-48 h-64 object-cover object-top"
                    />
                    <div className="flex flex-col">
                      <div className="mb-4">
                        <h3 className="text-sm text-gray-300 font-garamond mb-1">
                          代表/デザイナー
                        </h3>
                        <h4 className="text-base font-garamond">小沼聡美</h4>
                      </div>
                      <div className="text-sm leading-relaxed text-gray-300 space-y-4">
                        <p className="font-serif">
                          法政大学卒業後、美容関連企業や広告代理店において、広告ディレクション、広報、マーケティング、デザイン業務など、クリエイティブ分野で経験を積む。
                        </p>
                        <p className="font-serif">
                          <span className="font-sans">2025</span>
                          <span className="font-serif">
                            年、独立。企業ロゴデザイン、Webバナー制作など、幅広いビジュアルコミュニケーションを手掛けている。
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-32">
                <h2 className="text-2xl md:text-3xl mb-16 font-garamond text-[#eea501] text-left">
                  <span className="text-lg md:text-xl">Company Info</span>
                </h2>
                <div className="max-w-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left text-sm">
                    <div className="font-garamond text-gray-300">商号</div>
                    <div className="md:col-span-2 text-gray-300 font-serif">
                      合同会社 Hotarubi Design Studio
                    </div>

                    <div className="font-garamond text-gray-300">所在地</div>
                    <div className="md:col-span-2 text-gray-300">
                      〒<span>242-0025</span>
                      <br />
                      <span className="font-serif">神奈川県大和市代官</span>
                      <span>2-12-24</span>
                    </div>

                    <div className="font-garamond text-gray-300">設立</div>
                    <div className="md:col-span-2 text-gray-300">
                      <span>2025</span>
                      <span className="font-serif">年</span>
                      <span>3</span>
                      <span className="font-serif">月</span>
                    </div>

                    <div className="font-garamond text-gray-300">代表</div>
                    <div className="md:col-span-2 text-gray-300 font-serif">
                      小沼聡美
                    </div>

                    <div className="font-garamond text-gray-300">資本金</div>
                    <div className="md:col-span-2 text-gray-300">
                      <span>30</span>
                      <span className="font-serif">万円</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-[#051936] py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl mb-16 font-garamond text-[#eea501]">
              Contact
            </h2>
            <p className="text-white mb-12 text-lg font-serif">
              お問い合わせは
              <br className="md:hidden" />
              以下のSNSからお願いいたします。
            </p>
            <div className="flex justify-center space-x-8 mb-4">
              <a
                href="https://x.com/HotarubiDesignS"
                className="text-white hover:text-[#FFE4D6] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter text-3xl"></i>
              </a>
              <a
                href="https://www.instagram.com/hotarubi_design_studio/"
                className="text-white hover:text-[#FFE4D6] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-3xl"></i>
              </a>
            </div>
          </div>
        </section>

        <footer className="text-white bg-[#051936] w-full">
          <div className="max-w-7xl mx-auto relative">
            <div className="fixed left-4 bottom-24 flex flex-col space-y-4">
              <a
                href="https://x.com/HotarubiDesignS"
                className="text-white hover:text-[#FFE4D6] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="https://www.instagram.com/hotarubi_design_studio/"
                className="text-white hover:text-[#FFE4D6] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
            <div className="text-center py-4 border-t border-gray-800">
              <p className="font-montserrat text-xs">
                &copy; 2025 Hotarubi Design Studio. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default MainComponent;
