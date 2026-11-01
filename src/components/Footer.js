import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const [notice, setNotice] = useState("");
  const navigate = useNavigate();

  // آدرس شبکه‌های اجتماعی را بعداً اینجا وارد کن
  const socials = {
    instagram: "",
    telegram: "https://t.me/Yassiin66",
    rubika: "https://rubika.ir/yasinchambari",
  };

  const handleSocialClick = (event, url) => {
    if (!url) {
      event.preventDefault();
      setNotice("هنوز صفحه‌ای در این شبکه اجتماعی ندارم.");
      return;
    }

    setNotice("");
  };

  const goToProjects = () => {
    navigate("/projects");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer" dir="rtl">
      {/* زحل تزئینی */}
      <div className="footer-saturn" aria-hidden="true">
        <div className="saturn-ring saturn-ring-back"></div>
        <div className="saturn-planet"></div>
        <div className="saturn-ring saturn-ring-front"></div>
      </div>

      <div className="footer-content">
        {/* لوگو و معرفی */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-symbol">✦</span>
            <span>YASIN</span>
          </Link>

          <p className="footer-description">
  برای ارتباط با من به صفحه ارتباط با من بروید
          </p>

          {/* نام دامنه را بعد از خرید دامنه جایگزین کن */}
          <span className="footer-domain">
            yourdomain.com
          </span>
        </div>

        {/* لینک‌های سایت */}
        <div className="footer-navigation">
          <h3>دسترسی سریع</h3>

          <Link to="/" className="footer-link">
            بازگشت به خانه
          </Link>


          <button
            type="button"
            className="footer-link footer-link-button"
            onClick={goToTop}
          >
            رفتن به بالای صفحه
            <span>↑</span>
          </button>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div className="footer-social">
          <h3>من را پیدا کن</h3>


          <div className="social-login-icons">
            {/* Instagram */}
            <a
              className="socialcontainer instagram"
              href={socials.instagram || "#instagram"}
              aria-label="Instagram"
              target={socials.instagram ? "_blank" : undefined}
              rel={socials.instagram ? "noreferrer" : undefined}
              onClick={(event) =>
                handleSocialClick(event, socials.instagram)
              }
            >
              <div className="icon social-icon-2-2">
                <InstagramIcon />
              </div>
              <div className="icon social-icon-2">
                <InstagramIcon />
              </div>
            </a>

            {/* Telegram */}
            <a
              className="socialcontainer telegram"
              href={socials.telegram || "https://t.me/Yassiin66"}
              aria-label="Telegram"
              target={socials.telegram ? "_blank" : undefined}
              rel={socials.telegram ? "noreferrer" : undefined}
              onClick={(event) =>
                handleSocialClick(event, socials.telegram)
              }
            >
              <div className="icon social-icon-2-2">
                <TelegramIcon />
              </div>
              <div className="icon social-icon-2">
                <TelegramIcon />
              </div>
            </a>

            {/* Rubika - آیکون موقت با حرف R */}
            <a
              className="socialcontainer rubika"
              href={socials.rubika || "#rubika"}
              aria-label="Rubika"
              onClick={(event) =>
                handleSocialClick(event, socials.rubika)
              }
            >
              
              <div className="icon social-icon-2-2 rubika-letter">
                R
              </div>
              <div className="icon social-icon-2 rubika-letter">
                R
              </div>
            </a>
          </div>

          {notice && (
            <p className="footer-notice" role="status">
              {notice}
            </p>
          )}
        </div>
      </div>

      {/* خط پایانی */}
      <div className="footer-bottom">
        <p>
        ساخته شده توسط<span>=</span> یاسین
        </p>

        <button
          type="button"
          className="footer-top-button"
          onClick={goToTop}
          aria-label="بازگشت به بالای صفحه"
          title="بازگشت به بالا"
        >
          ↑
        </button>

        <p className="footer-copy">
          © {new Date().getFullYear()} — تمام حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.7 3.3a1.4 1.4 0 0 0-1.5-.2L2.5 10.2c-1.3.5-1.3 1.4-.2 1.8l4.5 1.4 1.7 5.3c.2.6.4.8.8.8.3 0 .5-.1.8-.4l2.5-2.4 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.5c.2-.8-.1-1.4-.5-1.6ZM9.1 13l9-5.7c.4-.2.7-.1.4.2l-7.4 6.8-.3 3.2L9.1 13Z" />
    </svg>
  );
}

export default Footer;
