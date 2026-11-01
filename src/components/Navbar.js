import { NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  {
    label: "خانه",
    path: "/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3 10 9-7 9 7" />
        <path d="M5.5 9v12h13V9M9.5 21v-6h5v6" />
      </svg>
    ),
  },
  {
    label: " برنامه‌نویسی من",
    path: "/programming",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
      </svg>
    ),
  },
  {
    label: "درباره من",
    path: "/about",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
      </svg>
    ),
  },
  {
    label: "ارتباط با من",
    path: "/contact",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
];

export default function Navbar() {
  return (
    <header className="cosmic-header" dir="rtl">
      <nav className="cosmic-navbar" aria-label="منوی اصلی">
        <NavLink
          to="/"
          className="cosmic-brand"
          aria-label="صفحه اصلی یاسین"
        >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
            </svg>

          <span className="cosmic-brand-name">YASIN</span>
          <span className="cosmic-brand-dot">.</span>
        </NavLink>

        <span className="navbar-divider" aria-hidden="true" />

        <div className="cosmic-nav-links">
          {links.map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `cosmic-nav-link ${isActive ? "active-link" : ""}`
              }
              style={{ "--nav-index": index }}
            >
              <span className="nav-link-icon">{link.icon}</span>
              <span className="nav-link-label">{link.label}</span>
              <span className="nav-link-indicator" />
            </NavLink>
          ))}
        </div>

      
      </nav>
    </header>
  );
}