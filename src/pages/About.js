
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".about-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-page" dir="rtl">
      <div className="about-decoration about-decoration-one"></div>
      <div className="about-decoration about-decoration-two"></div>

      {/* معرفی اصلی */}
      <section className="about-hero">
        <div className="about-hero-content about-reveal">
          <span className="about-eyebrow">
            <span className="about-status-dot"></span>
            کمی بیشتر درباره من
          </span>

         


          <h2>
            علاقه‌مند به <span>دنیای برنامه‌نویسی</span>
          </h2>

          <p>
            درود! من یاسین چمبری هستم؛ کسی که به یادگیری، تجربه کردن،چیزهای جدید علاقه داره 
           
          </p>

       

            <Link to="/contact" className="about-secondary-button">
              ارتباط با من
              <span>↗</span>
            </Link>
          </div>



        {/* جایگاه عکس شخصی */}
        <div className="about-photo-area about-reveal">
          <div className="about-photo-glow"></div>

          <div className="about-photo-frame">
            <img
              src="/images/yasin.jpg"
              alt="عکس یاسین چمبری"
              className="about-photo"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />

            <div className="about-photo-placeholder">
              <span className="about-camera-icon">＋</span>
              <strong></strong>
              <span></span>
            </div>

            <span className="about-photo-badge">
              <span></span>
           
            </span>
          </div>

          <div className="about-floating-card">
            <span>✦</span>
     
          </div>
        </div>
      </section>

      {/* درباره من */}
      <section id="about-me" className="about-story about-reveal">
        <div className="about-section-label">
          <span>01</span>
          درباره من
        </div>

       <p>من برنامه نویسی رو با زبان پایتون شروع کردم </p>
       <p>و با فریمورک جنگو اشنا شدم </p>
       <p>و بعد از مدتی متوجه شدم که به سمت فرامت علاقه دارم و شروع به یادگیری htmlوcssکردم</p>
       <p>و  زبان جاوا اسکریپت شروع کردم و با فریمورک ری اکت  React اشنا شدم ، و درحال حاظر تخصص من روی ری اکت و جی اس js هست</p>


      </section>

      {/* علاقه‌مندی‌ها */}
      <section className="about-interests">
  

        <div className="about-interest-grid">
        

   

     
        </div>
      </section>

      {/* پایان صفحه */}
      <section className="about-contact-banner about-reveal">
        <div className="about-banner-orb"></div>

        <span className="about-banner-label">LET'S CONNECT</span>




        <Link to="/contact" className="about-banner-button">
          رفتن به صفحه ارتباط
          <span>↗</span>
        </Link>
      </section>
    </main>
  );
}

export default About;
