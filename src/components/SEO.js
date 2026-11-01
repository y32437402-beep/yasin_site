import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "یاسین چمبری";
const PAGE_SEO = {
  "/": { title: "یاسین چمبری | وب‌سایت شخصی", description: "وب‌سایت شخصی یاسین چمبری؛ آشنایی با مسیر برنامه‌نویسی، پروژه‌ها، موسیقی و کاراته." },
  "/programming": { title: "برنامه‌نویسی | یاسین چمبری", description: "مسیر یادگیری برنامه‌نویسی یاسین چمبری، مهارت‌ها و زمینه‌های مورد علاقه در توسعه وب." },
  "/projects": { title: "پروژه‌ها | یاسین چمبری", description: "نگاهی به پروژه‌ها و تجربه‌های برنامه‌نویسی یاسین چمبری." },
  "/about": { title: "درباره من | یاسین چمبری", description: "با یاسین چمبری، علایق، مسیر یادگیری و زمینه‌های فعالیت او بیشتر آشنا شوید." },
  "/music": { title: "موسیقی | یاسین چمبری", description: "درباره علاقه یاسین چمبری به موسیقی، گیتار و مسیر یادگیری موسیقی." },
  "/karate": { title: "کاراته | یاسین چمبری", description: "بخشی درباره علاقه یاسین چمبری به کاراته، تمرین، نظم و پیشرفت." },
  "/contact": { title: "ارتباط با من | یاسین چمبری", description: "راه‌های ارتباط با یاسین چمبری را در صفحه تماس مشاهده کنید." },
};

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function SEO() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = PAGE_SEO[pathname] || {
      title: `صفحه پیدا نشد | ${SITE_NAME}`,
      description: "صفحه‌ای که دنبالش هستید پیدا نشد. مسیر را بررسی کنید یا به صفحه اصلی برگردید.",
    };
    document.title = page.title;
    setMeta("name", "description", page.description);
    setMeta("name", "robots", PAGE_SEO[pathname] ? "index,follow" : "noindex,follow");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:locale", "fa_IR");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("name", "twitter:card", "summary");
    setMeta("name", "twitter:title", page.title);
    setMeta("name", "twitter:description", page.description);
  }, [pathname]);
  return null;
}
