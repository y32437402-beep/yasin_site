import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page-intro" aria-labelledby="not-found-title">
      <div className="container">
        <span className="eyebrow">خطای ۴۰۴</span>
        <h1 id="not-found-title">این صفحه پیدا نشد.</h1>
        <p className="lead">آدرسی که باز کرده‌اید وجود ندارد یا ممکن است تغییر کرده باشد.</p>
        <div className="button-row"><Link className="button" to="/">بازگشت به صفحه اصلی</Link></div>
      </div>
    </section>
  );
}
