
import React, { useEffect, useState } from "react";
import "./Concat.css";


const contacts = [
    ,
    {
        id: "telegram",
        title: "Telegram",
        subtitle: "پیام مستقیم به من،",
        description: "،برای گفت‌وگو و ارتباط سریع، روی کارت کلیک کن ",
        value: "@Yassiin66",
        url: "https://t.me/Yassiin66",
        action: "ارسال پیام",
        hoverText: "پیام بده",
    },
    {
        id: "instagram",
        title: "Instagram",
        subtitle: "no activity",
        description: "درحال حاظر در اینستا فعالیت ندارم",
        value: "no activity",

        action: "مشاهده صفحه",
        hoverText: "دنبال کن",
    }
    ,
    {
        id: "rubika",
        title: "Rubika",
        subtitle: "من در روبیکا",
        description: "از طریق روبیکا با من در ارتباط باش",
        value: "@yasinchambari",
        url: "https://rubika.ir/yasinchambari",
        action: "رفتن به روبیکا",
        hoverText: "پیدام کن",
    },
    {
        id: "phone",
        title: "شماره تماس",
        subtitle: "ارتباط تلفنی",
        description: "برای تماس با من",
        value: "09307262497",
        url: "tel:09307262497",
        action: "تماس با من",
        hoverText: "تماس بگیر",
    },
    {
        id: "email",
        title: "ایمیل",
        subtitle: "ارتباط از طریق ایمیل",
        description: "برای پیام‌ها و موضوعات کاری",
        value: "yasinchambari01@gmail.com",
        url: "yasinchambari01@gmail.com",
        action: "ارسال ایمیل",
        hoverText: "ایمیل بفرست",
    },
];

function ContactIcon({ type }) {
    const common = {
        width: 34,
        height: 34,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": true,
    };

    switch (type) {
        case "instagram":
            return (
                <svg {...common}>
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                        cx="17.5"
                        cy="6.5"
                        r="0.9"
                        fill="currentColor"
                        stroke="none"
                    />
                </svg>
            );

        case "telegram":
            return (
                <svg {...common}>
                    <path d="M21 3 3.7 9.8c-1.2.5-1.2 1.2-.2 1.5l4.4 1.4 1.7 5.2c.2.6.1.9.7.9.5 0 .8-.2 1.1-.5l2.1-2 4.4 3.2c.8.4 1.4.2 1.6-.8L22 4.2c.3-1.1-.4-1.6-1-1.2Z" />
                    <path d="m8 12.6 9.6-6.1-7.6 7.3-.3 3" />
                </svg>
            );

        case "rubika":
            return (
                <svg {...common}>
                    <path
                        d="M7 3.5h10a3.5 3.5 0 0 1 3.5 3.5v7.5a3.5 3.5 0 0 1-3.5 3.5h-4.5L7 21v-3H7a3.5 3.5 0 0 1-3.5-3.5V7A3.5 3.5 0 0 1 7 3.5Z"
                        fill="currentColor"
                        fillOpacity=".12"
                    />
                    <path d="M7 3.5h10a3.5 3.5 0 0 1 3.5 3.5v7.5a3.5 3.5 0 0 1-3.5 3.5h-4.5L7 21v-3H7a3.5 3.5 0 0 1-3.5-3.5V7A3.5 3.5 0 0 1 7 3.5Z" />
                    <path d="m8 8 8 8M16 8l-8 8" strokeWidth="2.3" />
                    <circle cx="8" cy="8" r="1" fill="currentColor" />
                    <circle cx="16" cy="8" r="1" fill="currentColor" />
                </svg>
            );

        case "phone":
            return (
                <svg {...common}>
                    <path d="M21 16.5v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 10.2 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.8 3.2 2 2 0 0 1 3.8 1h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7.7 9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1 2.6Z" />
                </svg>
            );

        case "email":
            return (
                <svg {...common}>
                    <rect x="2.5" y="4" width="19" height="16" rx="3" />
                    <path d="m3.5 6 8.5 7 8.5-7" />
                </svg>
            );

        default:
            return null;
    }
}

function Contact() {
    const [copied, setCopied] = useState("");

    useEffect(() => {
        const elements = document.querySelectorAll(".contact-reveal");

        if (typeof IntersectionObserver === "undefined") {
            elements.forEach((element) =>
                element.classList.add("contact-visible")
            );
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("contact-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    async function copyContact(contact) {
        try {
            await navigator.clipboard.writeText(contact.value);
            setCopied(contact.id);

            window.setTimeout(() => {
                setCopied((current) =>
                    current === contact.id ? "" : current
                );
            }, 1800);
        } catch {
            window.prompt("اطلاعات زیر را کپی کن:", contact.value);
        }
    }

    return (
        <main id="top" className="contact-page" dir="rtl">
            <div className="contact-white-glow contact-glow-one" />
            <div className="contact-white-glow contact-glow-two" />



            <section className="contact-section">
                <div className="contact-section-heading contact-reveal">
                    <span className="contact-section-kicker">
                        STAY CONNECTED
                    </span>
                    <h2>
                        
                        <span>🌌</span>
                    </h2>
                    <p>راه ارتباطی موردنظرت رو انتخاب کن.</p>
                </div>

                <div className="contact-grid">
                    {contacts.map((contact, index) => (
                        <article
                            className={`contact-card contact-${contact.id} contact-reveal`}
                            key={contact.id}
                            style={{ "--contact-delay": `${index * 100}ms` }}
                        >
                            <a
                                className="contact-card-link"
                                href={contact.url}
                                target={
                                    ["instagram", "telegram", "rubika"].includes(contact.id)
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    ["instagram", "telegram", "rubika"].includes(contact.id)
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                aria-label={`${contact.action} - ${contact.title}`}
                            >
                                <div className="contact-card-top">
                                    <div className="contact-icon">
                                        <ContactIcon type={contact.id} />
                                    </div>

                                    <span className="contact-card-number">
                                        0{index + 1}
                                    </span>
                                </div>

                                <div className="contact-card-text">
                                    <span className="contact-card-subtitle">
                                        {contact.subtitle}
                                    </span>

                                    <strong className="contact-card-title">
                                        {contact.title}
                                    </strong>

                                    <p>{contact.description}</p>
                                </div>

                                <div className="contact-card-action">
                                    <span>{contact.action}</span>
                                    <span className="contact-arrow">↗</span>
                                </div>

                                <span className="contact-card-hover">
                                    <span className="contact-hover-icon">
                                        <ContactIcon type={contact.id} />
                                    </span>
                                    <strong>{contact.hoverText}</strong>
                                    <span className="contact-hover-hint">
                                        برای ادامه کلیک کن ↗
                                    </span>
                                </span>
                            </a>

                            <button
                                className="contact-copy-button"
                                type="button"
                                onClick={() => copyContact(contact)}
                                aria-label={`کپی ${contact.title}`}
                            >
                                {copied === contact.id ? (
                                    <>
                                        <span aria-hidden="true">✓</span>
                                        کپی شد
                                    </>
                                ) : (
                                    <>
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                        >
                                            <rect x="8" y="8" width="13" height="13" rx="2" />
                                            <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
                                        </svg>
                                        کپی اطلاعات
                                    </>
                                )}
                            </button>
                        </article>
                    ))}
                </div>
            </section>

            <section className="contact-saturn-section contact-reveal">
                <div className="contact-saturn-stars" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                </div>

                <div className="contact-saturn" aria-hidden="true">
                    <div className="contact-saturn-ring contact-saturn-ring-back" />
                    <div className="contact-saturn-planet">
                        <span />
                    </div>
                    <div className="contact-saturn-ring contact-saturn-ring-front" />
                </div>

                <span className="contact-saturn-label">
                    SIGNAL RECEIVED?
                </span>

                <h2> </h2>


                <a href="#top" className="contact-back-top">
                    بازگشت به بالای صفحه ↑
                </a>
            </section>
        </main>
    );
}

export default Contact;
