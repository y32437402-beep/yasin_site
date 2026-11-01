import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import png from "../pages/png.jpg";

const introTexts = [
  ' درود',
  "علاقه‌مند به دنیای برنامه‌نویسی، موسیقی، هنر و ورزش."

];

const banners = [
  {
    id: "programming",
    icon: "</>",
    title: " برنامه‌نویسی",
    label: "EXPLORE MY JOURNEY",
    path: "/programming",
    theme: "purple",
  },
  {
    id: "projects",
    icon: "✧",
    title: "پروژه‌های من",
    description: "از ایده تا ساخت؛ نگاهی به کارهای من.",
    label: "DISCOVER MY PROJECTS",
    path: "/programming",
    theme: "blue",
  },
  {
    id: "about",
    icon: "✦",
    title: " درباره‌ی من",
    label: "GET TO KNOW ME",
    path: "/about",
    theme: "pink",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const bannerTimerRef = useRef(null);
  const bannerHideRef = useRef(null);
  const navigationTimerRef = useRef(null);

  const [textIndex, setTextIndex] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [bannerVisible, setBannerVisible] = useState(false);

  const currentBanner = banners[bannerIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((previous) => (previous + 1) % introTexts.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  // نمایش دوره‌ای بنرهای تبلیغاتی
  useEffect(() => {
    let cancelled = false;

    const clearBannerTimers = () => {
      clearTimeout(bannerTimerRef.current);
      clearTimeout(bannerHideRef.current);
    };

    const showNextBanner = () => {
      if (cancelled) return;

      setBannerIndex((previous) => {
        const next = (previous + 1) % banners.length;
        return next;
      });

      setBannerVisible(true);

      bannerHideRef.current = setTimeout(() => {
        if (!cancelled) setBannerVisible(false);
      }, 6500);

      bannerTimerRef.current = setTimeout(() => {
        if (!cancelled) {
          setBannerVisible(false);
          bannerTimerRef.current = setTimeout(showNextBanner, 3500);
        }
      }, 10000);
    };

    bannerTimerRef.current = setTimeout(showNextBanner, 3500);

    return () => {
      cancelled = true;
      clearBannerTimers();
    };
  }, []);

  // انتقال مشترک برای دکمه و بنرها
  useEffect(() => {
    return () => clearTimeout(navigationTimerRef.current);
  }, []);

  const navigateWithTransition = (path) => {
    if (isLeaving) return;

    setIsLeaving(true);
    setBannerVisible(false);

    navigationTimerRef.current = setTimeout(() => {
      navigate(path);
    }, 500);
  };

  const handleMouseMove = (event) => {
    const name = nameRef.current;

    if (!name || window.matchMedia("(pointer: coarse)").matches) return;

    const rect = name.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);

    name.style.setProperty(
      "--mouse-x",
      `${Math.max(-5, Math.min(5, dx / 45))}px`
    );

    name.style.setProperty(
      "--mouse-y",
      `${Math.max(-4, Math.min(4, dy / 45))}px`
    );
  };

  return (
    <main
      className={`home-page ${isLeaving ? "is-leaving" : ""}`}
      onMouseMove={handleMouseMove}
      dir="rtl"
    >
    
      <div className="bg" aria-hidden="true" />

      <div className="star-field" aria-hidden="true">
        <div className="layer" />
        <div className="layer" />
        <div className="layer" />
        <span className="natural-meteor meteor-a" />
        <span className="natural-meteor meteor-b" />
      </div>

      <section className="home-main-layout">
        <div className="home-copy">
          <div className="hero-status">
            <span className="status-dot" />
            <span>WELCOME TO MY UNIVERSE</span>
          </div>


          <h1 className="hero-name" ref={nameRef} dir="ltr">
            YASIN<span className="hero-name-dot">.</span>
          </h1>

          <div className="hero-divider" aria-hidden="true">
            <span />
                 <h2>طراح وب</h2>
            <span className="divider-star">✦</span>
            <span />
          </div>

          <div className="hero-intro-animation" aria-live="polite">
            <p key={textIndex}>{introTexts[textIndex]}</p>
          </div>


          {/* دکمه‌ی اصلی زحل */}
          <button
            className="cosmic-cta"
            type="button"
            onClick={() => navigateWithTransition("/programming")}
            disabled={isLeaving}
          >
            <span className="saturn-art" aria-hidden="true">
              <span className="saturn-planet" />
              <span className="saturn-ring saturn-ring-back" />
              <span className="saturn-ring saturn-ring-front" />
              <span className="saturn-spark">✦</span>
            </span>

            <span className="cosmic-cta-text">
              <small>YOUR NEXT DESTINATION</small>
              <strong> برای همکاری کلیک کنید  </strong>
            </span>

            <span className="cosmic-cta-arrow" aria-hidden="true">
              →
            </span>
          </button>

          <div className="home-trust-line">
          </div>
        </div>

        <div className="home-visual">
          <div className="visual-glow" />
<div className="visual-image-frame">
  <img
    className="developer-image"
     src={png}
    alt="تصویر هنری از برنامه‌نویسی پشت میز کار"
    // loading="eager"
  />
  <div className="image-vignette" />
</div>

          <div className="visual-floating-label visual-label-top">
            <span className="floating-label-dot" />
            <span>CREATIVE MINDSET</span>
          </div>

          <div className="visual-floating-label visual-label-bottom">
            <span className="floating-label-code">&lt;/&gt;</span>
            <span>
              <strong>Code & Create</strong>
              <small>Always learning something new</small>
            </span>
          </div>
        </div>
      </section>

      {/* بنر تبلیغاتی فضایی */}
      <aside
        className={`promo-banner promo-${currentBanner.theme} ${bannerVisible && !isLeaving ? "promo-visible" : ""
          }`}
        aria-hidden={!bannerVisible}
      >
        <button
          className="promo-dismiss"
          type="button"
          aria-label="بستن بنر"
          tabIndex={bannerVisible ? 0 : -1}
          onClick={() => setBannerVisible(false)}
        >
          ×
        </button>

        <div className="promo-stars" aria-hidden="true">
          <span>✦</span>
          <span>·</span>
          <span>✧</span>
          <span>·</span>
          <span>✦</span>
        </div>

        <div className="promo-planet" aria-hidden="true">
          <span className="promo-planet-ring" />
          <span className="promo-planet-core">
            {currentBanner.icon}
          </span>
        </div>

        <div className="promo-copy">
          <span className="promo-eyebrow">
            {currentBanner.label}
          </span>
          <strong>{currentBanner.title}</strong>
          <small>{currentBanner.description}</small>
        </div>

        <button
          className="promo-action"
          type="button"
          tabIndex={bannerVisible ? 0 : -1}
          disabled={isLeaving}
          onClick={() => navigateWithTransition(currentBanner.path)}
        >
          <span aria-hidden="true">←</span>
        </button>

        <span className="promo-meteor" aria-hidden="true" />
        <span className="promo-border-glow" aria-hidden="true" />
      </aside>

      <div className="warp-overlay" aria-hidden="true" />
    </main>
  );
}
