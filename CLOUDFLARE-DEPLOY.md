# راهنمای انتشار پروژه در Cloudflare Workers

این پروژه با Create React App ساخته شده و خروجی تولید آن در پوشه `build/` قرار می‌گیرد.

## علت اصلی صفحه سفید در Cloudflare

در نسخه قبلی، `BrowserRouter` با `basename="/yasin_site"` تنظیم شده بود. این مسیر فقط برای GitHub Pages پروژه‌ای مناسب است. آدرس Worker در ریشه دامنه قرار می‌گیرد؛ بنابراین Router در مسیر `/` چیزی رندر نمی‌کرد. در نسخه اصلاح‌شده، basename حذف شده است.

## تنظیمات Wrangler

فایل `wrangler.jsonc` در ریشه پروژه تنظیمات زیر را دارد:

- Worker name: `yasin-site`
- Static assets directory: `./build`
- SPA fallback: `single-page-application`

حالت SPA باعث می‌شود درخواست مستقیم یا Refresh مسیرهایی مثل `/about` و `/programming` به `index.html` هدایت شوند تا React Router صفحه را نمایش دهد.

## تنظیمات Workers Builds در داشبورد Cloudflare

در زمان اتصال GitHub repository:

- Git repository: `yasin_site`
- Production branch: `cloudflare-host`
- Root directory: `/`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

مهم: نام Worker در داشبورد Cloudflare باید دقیقاً `yasin-site` باشد تا با مقدار `name` در `wrangler.jsonc` مطابقت داشته باشد. اگر Worker موجود شما نام دیگری دارد، مقدار `name` در `wrangler.jsonc` را به همان نام تغییر دهید.

## انتشار از طریق Git

پس از اینکه فایل‌های این نسخه را روی Branch به نام `cloudflare-host` قرار دادید، Cloudflare با هر Push به همان Branch، Build و Deploy را خودکار اجرا می‌کند.

## اجرای محلی

```bash
npm install
npm run build
```

پس از Build باید پوشه `build/` شامل `index.html` و پوشه `static/` باشد.

نکته: ZIP دریافتی شامل `package-lock.json` نبود. هنگام اعمال این نسخه روی مخزن فعلی، فایل `package-lock.json` موجود در مخزن GitHub را حفظ کنید و آن را حذف نکنید. اگر در پوشه محلی فایل lock وجود ندارد، با اجرای `npm install` در همان پوشه می‌توانید آن را بسازید.
