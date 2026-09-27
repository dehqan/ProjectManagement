# خارجی‌های در دسترس: ابزارهای خوداستقرار و ابزارهای ابری غیرقابل‌اتکا

**وضعیت:** پیش‌نویس اول. **تاریخ بررسی منابع:** ۲۰۲۶/۰۹/۲۷.
**پرسش این فایل:** تیم ایرانی که امروز ابزار خارجی می‌خواهد، چه چیزی واقعاً می‌تواند اجرا کند، چند ابزار باید کنار هم بگذارد تا «کار + سند + گفتگو + تأیید + پورتال مشتری» را پوشش دهد، و کدام‌ها طبق D-14 «موتور بسته‌بندی‌شدنی» هستند و کدام‌ها رقیب.

**برچسب شواهد:** **خوانده‌شده** (صفحه کامل خوانده شد)، **خلاصهٔ جست‌وجو** (فقط چکیدهٔ نتیجهٔ جست‌وجو)، **فرض**. شمارهٔ منبع [S-F-xx] به جدول پایان فایل اشاره می‌کند.
**محدودیت تحقیق:** سایت‌های ایرانی (parsinasoft.ir، ratosan.com، balootsoft.com، chabokan.net، liara.ir، hostiran.net) از محیط تحقیق ۵۰۳ برگرداندند و jirasolutions.ir و epm-solution.ir DNS نداشتند؛ فقط dezhafzar.com و iranserver.com خوانده شدند. ادعای فروشندگان ایرانی از **چکیدهٔ جست‌وجو** آمده و باید با صفحهٔ اصلی تطبیق شود. منابع انگلیسی (GitHub، GitLab، Atlassian، Mattermost، Nextcloud، OpenProject) عمدتاً خوانده شدند.

**چرا این دسته مهم است:** T1 می‌گوید Jira خوداستقرار در شرکت‌های متوسط و بزرگ غالب است (A2، فرض) و تیم‌ها همین امروز GitLab را دستی به Jira و چت وصل می‌کنند [S-T1-16، S-T1-17]. این فایل همان «پشته» را می‌شمارد.

---

## ۱. Jira Data Center (استقرار توسط فروشندگان ایرانی با فارسی‌ساز و شمسی‌ساز)

| فیلد | محتوا |
|---|---|
| جایگاه | Atlassian: «ابزار شمارهٔ یک توسعهٔ نرم‌افزار برای تیم‌های چابک». در ایران: «سامانهٔ مدیریت و کنترل پروژه» که شرکت‌های واسطه نصب، فارسی‌سازی، شمسی‌سازی، آموزش و افزونه‌نویسی می‌کنند [S-F-03، S-F-04]. مخاطب واقعی در ایران: شرکت نرم‌افزاری متوسط و بزرگ و واحد IT سازمان‌ها (A2 در T1، فرض). |
| پوشش کاتالوگ | **کامل:** WRK-01 (نوع کار، گردش‌کار و فیلد سفارشی؛ قوی‌ترین موتور گردش‌کار این دسته)، PLT-01، PLT-09 (Automation در DC)، PLT-05 (REST و Webhook)، DOM-02 (بک‌لاگ، اسپرینت، نسخه)، REL-06 (نسخه و Release notes)، COL-01. **سطحی یا وابسته به محصول دیگر:** WRK-03 (بورد و تایم‌لاین؛ گانت واقعی با افزونهٔ پولی مثل BigPicture یا WBS Gantt [S-F-04])، RES-04 (فقط با Tempo)، REP-01/REP-02 (داشبورد گجتی؛ گزارش‌ساز جدی با افزونه)، COL-03 (تأیید فقط به شکل وضعیت گردش‌کار؛ حدنصاب، جانشین و مهلت ندارد). **نیست:** DOC-02 (Confluence جدا)، WRK-06 و COL-04 و OPS-04 (Jira Service Management جدا)، COL-08 و COL-11 (چت و تماس ندارد)، DMS-*، COL-15/D-16. |
| اتصال | REST API کامل، Webhook، بازارچهٔ افزونه (در DC همچنان فعال)، اتصال رسمی به Bitbucket و GitLab و GitHub، افزونهٔ رسمی Jira برای Mattermost، Confluence و JSM از همان خانواده. تیم ایرانی همین اتصال GitLab→Jira را دستی برقرار می‌کند [S-T1-17]. **پیام‌رسان‌های ایرانی (بله، ایتا) و اتوماسیون اداری داخلی: هیچ اتصال آماده‌ای؛ ساخت سفارشی توسط فروشنده.** |
| فارسی و شمسی | **وصله.** Atlassian خودش فارسی ندارد؛ درخواست رسمی «Persian language» برای Jira Data Center در ۲۰۱۷ ثبت و در ۲۰۱۹ با «Won't Fix» بسته شد [S-F-05، خوانده‌شده]. در Marketplace بستهٔ زبان عربی با RTL هست ولی بستهٔ فارسی رسمی پیدا نشد [S-F-06، خلاصهٔ جست‌وجو]. فارسی و شمسی از فروشندهٔ ایرانی می‌آید: پارسینا «جیرای فارسی و شمسی‌ساز»، آریانا (jirasolutions) «جیرای فارسی به همراه تقویم شمسی»، دژافزار «فارسی‌سازی کامل، تبدیل تقویم میلادی به شمسی»، بالوت «آخرین نسخه + فارسی‌ساز (v10)»، EPM-solution «بستهٔ بومی‌شدهٔ جیرا» با ورود و نمایش تاریخ شمسی در فیلدهای تاریخی [S-F-03، S-F-04، S-F-07، خلاصهٔ جست‌وجو؛ فقط دژافزار خوانده‌شده]. حتی افزونهٔ مرورگر «Jira Persian Improver» برای تبدیل تاریخ و فونت وجود دارد [S-F-07] که خودش نشانهٔ وصله‌بودن است. **پیامد:** هر ارتقای Jira، وصلهٔ فارسی را می‌شکند و تیم به فروشنده وابسته می‌ماند (فرض، هم‌راستا با A2: «اکثر نسخه‌ها به‌روز نیستند»). |
| استقرار و مدل عرضه | فقط نصب سازمانی (Data Center) پس از پایان نسخهٔ Server در بهمن ۱۴۰۲ [S-T1-08، خلاصهٔ جست‌وجو]. قیمت عمومی DC: از ۵۱٬۰۰۰ دلار در سال برای پلهٔ ۵۰۰ کاربر؛ از ۲۰۲۶/۰۲ به ۵۹٬۰۰۰ دلار؛ پلهٔ ۱۰۰۰ کاربر ۸۷ به ۱۰۰ هزار دلار [S-F-08، خلاصهٔ جست‌وجو]. پلهٔ زیر ۵۰۰ کاربر وجود ندارد. در ایران فروشندگان به‌جای اشتراک، «نصب و پشتیبانی» می‌فروشند و قیمت را اعلام نمی‌کنند [S-F-03، خوانده‌شده]. |
| نقطهٔ قوت واقعی | موتور گردش‌کار با فیلد، شرط، اعتبارسنجی و post-function برای هر نوع کار؛ JQL به‌عنوان زبان جست‌وجوی مشترک بین بورد، فیلتر، داشبورد و اتوماسیون؛ اکوسیستم آموزش و مشاور در ایران که برای هیچ ابزار خارجی دیگری به این اندازه نیست. برای ما درس WRK-01 و PLT-01: شخصی‌سازی نوع کار باید از روز اول عمیق باشد. |
| شکاف نسبت به تز ما | Jira خودش هیچ‌کدام از «سند، گفتگو، مشتری» را ندارد؛ Atlassian آن‌ها را به‌صورت سه محصول جدا (Confluence، JSM، به‌علاوهٔ چت شخص ثالث) می‌فروشد و در ایران هر سه باید جدا نصب و فارسی‌سازی شوند. تصمیم در چت دفن می‌شود و به Issue وصل نیست [S-T1-19]. تأیید (COL-03) فقط تغییر وضعیت است؛ حدنصاب و جانشین و مهلت ندارد. پرونده و روال (D-35) مدل ندارند؛ همه «Issue» هستند. شمسی و فارسی وصلهٔ شخص ثالث است. همکاری بین‌سازمانی (D-16) با پورتال JSM فقط یک‌طرفه و تیکتی است. |
| شواهد | Atlassian JRASERVER-65012 خوانده‌شده؛ دژافزار خوانده‌شده؛ پارسینا، راتوسان، بالوت، آریانا، EPM چکیده (۵۰۳/DNS)؛ قیمت DC خلاصهٔ جست‌وجو؛ سهم بازار فرض. |

## ۲. GitLab خوداستقرار (Issue، Board، Wiki، Service Desk؛ نه فقط کد)

| فیلد | محتوا |
|---|---|
| جایگاه | «پلتفرم DevSecOps یکپارچه». برای تیم نرم‌افزاری که Git را داخل کشور نگه می‌دارد و مدیریت کار را هم به همان می‌سپارد تا ابزار دوم نخرد [S-T1-16]. |
| پوشش کاتالوگ | **کامل:** DOM-02 (Issue، Milestone، Iteration، MR)، REL-06 (Release)، REL-05 (CI؛ بیرون از دامنهٔ ما)، COL-01 (کامنت و رشته روی Issue و MR). **سطحی:** WRK-01 (گردش‌کار با برچسب شبیه‌سازی می‌شود؛ فیلد سفارشی و نوع کار سفارشی در Free نیست)، WRK-03 (بورد در Free؛ swimlane و Epic و Roadmap در Premium [S-F-09، خلاصهٔ جست‌وجو])، DOC-02 (Wiki مارک‌داونی، بدون مالک و بازبینی دوره‌ای)، WRK-06 (Service Desk در Free ولی «در حال توسعهٔ فعال نیست» و فقط ایمیلی است؛ پورتال وب برای مشتری ندارد [S-F-09])، RES-04 (زمان روی Issue، بدون تأیید و صورت‌وضعیت)، COL-03 (Approval فقط برای Merge Request). **نیست:** COL-08/COL-11 (چت و تماس)، DMS-*، COL-04 (پورتال)، COL-02 (جلسه)، D-16، شمسی. |
| اتصال | REST و GraphQL کامل، Webhook روی همهٔ رویدادها، اتصال آماده به Mattermost (اعلان و slash command)، Jira، Redmine (به‌عنوان ردیاب بیرونی)، Telegram، Matrix. Rocket.Chat از سمت خودش با Webhook اسکریپتی وصل می‌شود [S-F-10، خلاصهٔ جست‌وجو]. **این همان اتصالی است که D-20 برای ما لازم می‌کند: ما Git را نمی‌سازیم، به GitLab وصل می‌شویم.** |
| فارسی و شمسی | **وصله/هیچ.** رابط کاربری فارسی ندارد (فهرست زبان‌های GitLab فارسی ندارد؛ **فرض قوی**، صفحهٔ تنظیمات زبان‌ها را برنمی‌شمارد [S-F-11]). متن فارسی در Issue و Wiki با جهت خودکار (dir=auto) درست نمایش داده می‌شود؛ درخواست RTL برای Wiki در ۲۰۱۵ ثبت و ۲۰۱۸ بسته شد [S-F-12، خوانده‌شده از API]؛ فایل‌های .org هنوز چپ‌چین‌اند [S-F-13]. تقویم شمسی وجود ندارد و افزونه‌ای هم برایش دیده نشد. |
| استقرار و مدل عرضه | خوداستقرار (Free/Premium/Ultimate) یا میزبانی ایرانی: چابکان (مستندات CI/CD با GitLab و Runner)، هم‌روش (Runner)، 7ho.st («سرویس گیت‌لب اختصاصی و ابری») [S-F-14، خلاصهٔ جست‌وجو]. GitLab.com برای IP ایران مسدود است و حساب‌های با سابقهٔ IP ایران بسته شده‌اند [S-F-02، خوانده‌شده؛ S-F-15]؛ پس فقط خوداستقرار معنا دارد. Free خوداستقرار بدون سقف کاربر است. |
| نقطهٔ قوت واقعی | کار، کد، بازبینی و انتشار روی یک موجودیت: بستن Issue از commit، نمایش MR و pipeline روی کار. برای ما الگوی DOM-02 و REL-06 است که باید از راه اتصال به دست بیاید، نه ساخت. Service Desk نشان می‌دهد «ایمیل → Issue» بدون پورتال چقدر ناقص است (T1 درد ۳). |
| شکاف نسبت به تز ما | فقط برای یکی از شش تیم نمونه معنا دارد (D-20). گردش‌کار برچسبی برای تیم غیرنرم‌افزاری کافی نیست؛ پرونده و روال (D-35) ندارد؛ چت ندارد؛ سند فقط Wiki بدون چرخهٔ عمر؛ مشتری فقط از راه ایمیل. شمسی هیچ. |
| شواهد | API عمومی GitLab برای Issue #1901 خوانده‌شده؛ مستندات GitLab خلاصهٔ جست‌وجو؛ میزبان‌های ایرانی خلاصهٔ جست‌وجو (چابکان ۵۰۳). |

## ۳. OpenProject

| فیلد | محتوا |
|---|---|
| جایگاه | «نرم‌افزار مدیریت پروژهٔ متن‌باز برای تیم‌های کلاسیک، چابک و ترکیبی»؛ آلمانی، حاکمیت داده، جایگزین MS Project و Jira. |
| پوشش کاتالوگ | **کامل:** PLN-02 (گانت با وابستگی و مایلستون؛ بهترین گانت این دسته)، WRK-01 (نوع کار، وضعیت، گردش‌کار، فیلد سفارشی در Community)، RES-04 (زمان و هزینه)، COL-02 (ماژول جلسه: دستورجلسه و صورت‌جلسه متصل به بستهٔ کاری؛ **نزدیک‌ترین نمونهٔ «دفتر تصمیم» در این دسته**)، PLN-03 (Baseline از نسخهٔ ۱۳)، CTL-01 (ریسک با نوع کار)، DOC-02 (Wiki). **سطحی یا فقط Enterprise:** WRK-03 (بورد پایه Community؛ بورد عملی و Team planner در Enterprise)، PLT-03 (SSO فقط Premium)، COL-04 (اشتراک بستهٔ کاری با کاربر بیرونی فقط Premium)، REP-03 (Portfolio فقط Premium)، DMS (فقط از راه اتصال به Nextcloud/OneDrive) [S-F-16، خوانده‌شده]. **نیست:** COL-08/COL-11، COL-03 (تأیید مستقل)، WRK-06/OPS-04، D-16، شمسی. |
| اتصال | API v3 و Webhook؛ اتصال رسمی Nextcloud در Community (پوشهٔ پروژه، فایل روی بستهٔ کاری) [S-F-17]؛ GitHub و GitLab؛ OIDC برای Nextcloud Hub و XWiki فقط در پلهٔ Corporate [S-F-16]. Mattermost فقط با افزونهٔ اجتماعی غیررسمی [S-F-10]. |
| فارسی و شمسی | **ترجمهٔ ناقص، بدون RTL، بدون شمسی.** فارسی در Crowdin هست (درصد پیشرفت از محیط تحقیق قابل‌خواندن نبود) [S-F-18]. تیم OpenProject در انجمن خود گفته RTL «به‌طور خاص پشتیبانی نمی‌شود»؛ زبان فعال می‌شود ولی جای نوار ناوبری و عناصر تغییر نمی‌کند [S-F-19، خلاصهٔ جست‌وجو؛ صفحه اکنون ۴۰۴]. درخواست «Support Jalali Calendar» (OP-4494) در انجمن ثبت است و پاسخی دیده نشد [S-F-20، صفحه پشت ورود]. افزونهٔ فارسی/شمسی ایرانی پیدا نشد [S-F-21]. |
| استقرار و مدل عرضه | Community رایگان و بدون سقف کاربر؛ Enterprise on-premises ۵٫۹۵ تا ۱۵٫۹۵ یورو برای هر کاربر در ماه با حداقل ۲۵/۱۰۰/۲۵۰ کاربر [S-F-16، خوانده‌شده]. میزبان یا فروشندهٔ ایرانی پیدا نشد (فرض: تیم‌ها خودشان با Docker نصب می‌کنند). |
| نقطهٔ قوت واقعی | جلسه و صورت‌جلسهٔ متصل به کار (COL-02)، Baseline و مقایسهٔ برنامه (PLN-03)، اتصال فایل به بستهٔ کاری از راه Nextcloud (الگوی DMS-14 «پیوند سند به کار»). |
| شکاف نسبت به تز ما | «کار، سند، گفتگو، مشتری» را با سه محصول (OpenProject + Nextcloud + پیام‌رسان) می‌دهد و همان‌جا ورود یکپارچه را پولی می‌کند. چت ندارد. تأیید مستقل ندارد. پورتال مشتری فقط Premium و تک‌سویه. RTL ندارد؛ برای تیم ایرانی عملاً رابط انگلیسی است. پرونده و روال (D-35) ندارد. |
| شواهد | صفحهٔ قیمت خوانده‌شده؛ RTL و شمسی خلاصهٔ جست‌وجو؛ اتصال Nextcloud خلاصهٔ جست‌وجو. |

## ۴. Mattermost

| فیلد | محتوا |
|---|---|
| جایگاه | «همکاری امن برای تیم‌های فنی و عملیاتی»؛ جایگزین خوداستقرار Slack؛ در ایران پرکاربردترین چت خودمیزبان تیم‌های نرم‌افزاری (فرض؛ [S-T1-10، S-T1-16]). |
| پوشش کاتالوگ | **کامل:** COL-08 (کانال، گروه، پیام مستقیم)، COL-01 (رشته، واکنش، فایل؛ ولی روی پیام، نه روی کار)، COL-16 (جست‌وجو)، COL-11 (Calls داخلی). **سطحی/وابسته به پلن:** WRK-08 و OPS-09 (Playbooks: چک‌لیست و روال؛ در Team Edition از نسخهٔ ۱۱ حذف شد [S-F-22، خوانده‌شده])، WRK-03 (Boards/Focalboard از ۲۰۲۳ فقط با پشتیبانی اجتماعی [S-F-22، S-F-23])، COL-09 (پین و اعلان کانال). **نیست:** WRK-01، DOC-*، COL-03، COL-04، سند، شمسی. |
| اتصال | Webhook ورودی/خروجی، slash command، چارچوب افزونه؛ افزونهٔ رسمی GitLab و Jira [S-F-10]؛ SSO با GitLab (از Team Edition در نسخهٔ ۱۱ حذف شد [S-F-22])؛ ربات بله/ایتا: هیچ. |
| فارسی و شمسی | **وصلهٔ ایرانی.** هسته RTL ندارد؛ افزونهٔ «mattermost-rtl» تیم کوئرا (۸۲ ستاره) جهت خودکار پیام و ورودی را اضافه می‌کند و افزونهٔ فونت وزیرمتن جدا نصب می‌شود [S-F-24، خوانده‌شده]؛ افزونهٔ بتای دوم «Persian & RTL Support» در ۲۰۲۶ [S-F-25]. ترجمهٔ فارسی در وضعیت «work in progress» است [S-F-26، خلاصهٔ جست‌وجو] و Mattermost اعلام کرده در نسخهٔ ۱۲ (مهر ۱۴۰۵) ترجمه‌های WIP حذف و فقط ۲۲ زبان رسمی می‌مانند [S-F-22، خوانده‌شده]؛ **یعنی فارسی رابط Mattermost در معرض حذف است.** شمسی: هیچ. |
| استقرار و مدل عرضه | خوداستقرار. پلن رایگان جدید «Entry» (مهر ۱۴۰۴): همهٔ قابلیت‌ها ولی سقف ۱۰٬۰۰۰ پیام تاریخچه و تا ۱۰۰ کاربر (توصیه زیر ۵۰) [S-F-27، خلاصهٔ جست‌وجو]؛ Team Edition قدیمی محدودتر شده. میزبان ایرانی: لیارا (اپ یک‌کلیکی)، چابکان («سرویس ابری Mattermost»)، هاست‌ایران (بازارچه)، راهنمای نصب سرور.ir، مبین‌هاست و پارس‌پک؛ برآورد یک راهنما: سرور مناسب تیم ۵۰ نفره ماهانه یک تا دو میلیون تومان [S-F-28، خلاصهٔ جست‌وجو؛ صفحات ۵۰۳]. |
| نقطهٔ قوت واقعی | تجربهٔ موبایل و دسکتاپ بالغ، رشته‌ها، جست‌وجو، اعلان قابل‌تنظیم، اکوسیستم افزونه. برای R1 (D-26) مرجع سنجش است: چت داخلی ما باید دست‌کم به این حد برسد تا تیم از تلگرام بیاید [S-T1-16]. Playbooks الگوی خوبی برای «روال» D-35 است. |
| شکاف نسبت به تز ما | پیام به کار وصل نیست؛ «تصمیم در چت دفن می‌شود» دقیقاً همین‌جاست. سند و تأیید و مشتری ندارد. Boards و Playbooks که می‌توانستند پل باشند، از پلن رایگان بیرون رفته یا رها شده‌اند. فارسی وصله و در معرض حذف است. |
| شواهد | صفحهٔ Deprecated Features خوانده‌شده؛ مخزن کوئرا خوانده‌شده؛ Entry و میزبان‌ها خلاصهٔ جست‌وجو. |

## ۵. Rocket.Chat

| فیلد | محتوا |
|---|---|
| جایگاه | «پلتفرم ارتباط امن با Omnichannel»؛ چت تیمی + پاسخ‌گویی به مشتری از کانال‌های بیرونی؛ در ایران به‌عنوان پیام‌رسان سازمانی و چت آنلاین سایت فروخته می‌شود [S-F-29]. |
| پوشش کاتالوگ | **کامل:** COL-08، COL-01 (روی پیام)، COL-16، COL-11 (با Jitsi/Pexip). **سطحی:** OPS-04 و COL-04 (Omnichannel/Livechat: صف، ارجاع، کانال‌های بیرونی؛ ولی بدون کار، SLA با تقویم و پروندهٔ مشتری)، COL-09. **نیست:** WRK-*, DOC-*, COL-03، شمسی. |
| اتصال | REST API، Webhook، Apps Engine؛ اتصال GitLab با Webhook اسکریپتی [S-F-10]؛ اپ Nextcloud (ورود و فایل) [S-F-10]؛ کانال‌های Omnichannel (واتساپ از راه واسطه، تلگرام اجتماعی؛ **فرض**، بله و ایتا هیچ). |
| فارسی و شمسی | **بومی‌ترین این دسته ولی شکننده.** فارسی در «Tier 1» (بیش از ۸۰٪ ترجمه) [S-F-30، خوانده‌شده]؛ RTL در هسته هست ولی در ۶٫۴ صفحات فارسی چپ‌چین شدند و مسئله باز و بسته شد [S-F-31، خوانده‌شده]؛ یعنی RTL با هر نسخه باید دوباره آزموده شود. شمسی: هیچ. |
| استقرار و مدل عرضه | خوداستقرار Community؛ اعلان موبایل از درگاه Rocket.Chat سقف ۱۰٬۰۰۰ در ماه دارد مگر تیم درگاه اعلان خودش را بسازد [S-F-32، خلاصهٔ جست‌وجو]. ایران‌سرور «پیام‌رسان سازمانی Rocket.Chat» را به‌عنوان اپ آمادهٔ مدیریت‌شده می‌فروشد [S-F-29، خوانده‌شده]؛ راهنمای نصب مبین‌هاست، مارال‌هاست، پارس‌دو [S-F-28]. |
| نقطهٔ قوت واقعی | Omnichannel: مشتری از کانال خودش می‌نویسد، تیم در چت جواب می‌دهد. این همان الگوی D-31 است (ورود پیام از پیام‌رسان بیرونی) با این تفاوت که ما آن را به کار و تیکت و مشتری وصل می‌کنیم، نه فقط به یک اتاق. |
| شکاف نسبت به تز ما | گفتگو و مشتری را دارد ولی کار، سند و تأیید ندارد؛ پیام مشتری به تیکت و کار تبدیل نمی‌شود مگر با ابزار سوم. RTL پایدار نیست؛ شمسی هیچ؛ اعلان موبایل رایگان سقف دارد. |
| شواهد | Localization و Issue #30261 خوانده‌شده؛ ایران‌سرور خوانده‌شده؛ سقف اعلان و کانال‌ها خلاصهٔ جست‌وجو/فرض. |

## ۶. Nextcloud (با Deck، Talk، Office، Approval)

| فیلد | محتوا |
|---|---|
| جایگاه | «پلتفرم همکاری محتوای خودمیزبان» (Hub): فایل، سند، تقویم، چت و تماس، فرم، جدول، کانبان؛ جایگزین Google Workspace/Microsoft 365. نزدیک‌ترین «یک محصول برای همه» در این دسته، از سمت سند نه از سمت کار. |
| پوشش کاتالوگ | **کامل:** DMS-04 (نسخه)، DMS-10 (اشتراک، لینک محدود و منقضی، مهمان)، DMS-06 (ویرایش هم‌زمان با Collabora داخلی یا OnlyOffice)، COL-08 و COL-11 (Talk؛ تماس گروهی با HPB)، PLT-07 (جست‌وجوی سراسری)، COL-13 و WRK-05 (Forms). **سطحی:** WRK-03 و WRK-01 (Deck: کانبان با کارت و برچسب؛ بدون اسپرینت، فیلد سفارشی، گردش‌کار، گانت)، DMS-05 و DMS-08 (اپ Approval: تأیید/رد فایل با برچسب، بدون ترتیب، حدنصاب، جانشین [S-F-33، خوانده‌شده])، PLT-09 (Flow)، DOC-02 (Collectives/Text). **نیست:** DOM-02، PLN-*, WRK-06/OPS-04 (تیکت)، D-16 (فدراسیون فایل هست ولی مدل مالکیت/اشتراک شیءمحور نیست)، شمسی. |
| اتصال | WebDAV/CalDAV/CardDAV، OCS API، Webhook (اپ webhook_listeners)، اتصال رسمی OpenProject [S-F-17]، اپ Rocket.Chat [S-F-10]، Collabora و OnlyOffice، مهمان (Guests). **این همان «مخزن بیرونی» است که DMS-19 برای ما پیش‌بینی کرده.** |
| فارسی و شمسی | **در حال بومی‌شدن، بدون شمسی.** رشته‌ها فارسی‌اند؛ چیدمان تا نسخهٔ ۳۰ فقط چپ‌به‌راست بود [S-F-34]. Nextcloud 31 (Hub 10، بهمن ۱۴۰۳) همهٔ استایل‌های سرور را به موقعیت منطقی برد تا چیدمان RTL ممکن شود و مسئلهٔ RTL (از ۲۰۲۲) با مایل‌استون ۳۱ بسته شد؛ اپ‌ها باید جدا مهاجرت کنند [S-F-35، خوانده‌شده؛ S-F-36، خلاصهٔ جست‌وجو]. شمسی: درخواست «Persian (Shamsi) & Arabic (Hijri) date» از ۲۰۲۲ باز و بدون پاسخ نگهدارنده [S-F-37، خوانده‌شده]؛ اپ‌های اجتماعی تقویم جلالی و «Nextcloud-Persian» برای ۱۹٫۰ قدیمی‌اند [S-F-38]. ویرایشگر: OnlyOffice از ۸٫۰ (۲۰۲۴) RTL بتا و از ۸٫۳ (۲۰۲۵) جهت پاراگراف [S-F-39، خلاصهٔ جست‌وجو]؛ گزارش جداشدن حروف فارسی در OnlyOffice در انجمن Nextcloud [S-F-40]؛ Collabora بر پایهٔ LibreOffice و RTL بالغ (فرض). |
| استقرار و مدل عرضه | خوداستقرار رایگان؛ Enterprise با اشتراک پشتیبانی. ایران‌سرور «پلتفرم ابری NextCloud» مدیریت‌شده [S-F-29، خوانده‌شده]؛ راهنمای لیارا، پارس‌پک، سرور.ir؛ «OnlyOffice for Nextcloud» در اعلان Cloudamo [S-F-28، S-F-40، خلاصهٔ جست‌وجو]. |
| نقطهٔ قوت واقعی | یک ورود، یک جست‌وجو، یک اپ موبایل برای فایل + چت + تقویم؛ Talk و Office داخل همان صفحه؛ اپ Approval نشان می‌دهد تأیید روی سند خواسته‌ای واقعی است. مهاجرت RTL در ۳۱ نمونهٔ خوب «RTL از پایه». |
| شکاف نسبت به تز ما | کار در Nextcloud (Deck) اسباب‌بازی است؛ تیم برای اسپرینت و گردش‌کار باز به OpenProject یا Plane می‌رود و اتصال OpenProject همین را تأیید می‌کند. تأیید فقط روی فایل است، نه روی کار و درخواست. تیکت و پورتال مشتری ندارد. شمسی هیچ. متادیتا و نسخهٔ سند مال Nextcloud است، نه ما؛ طبق D-14 «متادیتا و نسخهٔ سند» باید مال ما باشد، پس Nextcloud حداکثر مخزن بیرونی (DMS-19) است، نه موتور داخل بسته. |
| شواهد | Issue #31420 و #33665 و اپ Approval خوانده‌شده؛ ایران‌سرور خوانده‌شده؛ OnlyOffice و میزبان‌ها خلاصهٔ جست‌وجو. |

## ۷. Redmine

| فیلد | محتوا |
|---|---|
| جایگاه | ردیاب مسئله و مدیریت پروژهٔ متن‌باز (Ruby on Rails) با سابقهٔ ۱۵ ساله؛ در سازمان‌های ایرانی که پیش از Jira یا کنار آن ابزار رایگان می‌خواستند رایج بود (فرض). |
| پوشش کاتالوگ | **کامل:** WRK-01 (Tracker، وضعیت، گردش‌کار به‌ازای نقش، فیلد سفارشی)، RES-04 (ثبت زمان با فعالیت)، DOC-02 (Wiki)، PLN-02 (گانت پایه و تقویم)، COL-01 (یادداشت روی مسئله). **سطحی:** WRK-03 (بورد چابک فقط با افزونه)، DOC-01 (ماژول Documents و Files ساده)، REP-02 (گزارش زمان). **نیست:** COL-08، COL-03، COL-04 (مشتری فقط کاربر با نقش)، DMS-*, D-16، شمسی. |
| اتصال | REST API، ایمیل ورودی به مسئله، اتصال به مخزن Git؛ GitLab آن را «ردیاب مسئلهٔ بیرونی» می‌شناسد [S-F-10]؛ افزونه‌های اجتماعی برای Mattermost/Rocket.Chat (فرض). |
| فارسی و شمسی | **ترجمه بومی، شمسی و RTL وصلهٔ رهاشده.** ترجمهٔ فارسی از ۲۰۱۱ در هسته [S-F-41]. درخواست تقویم جلالی (#7711 و #12889) سال‌ها باز [S-F-42، خلاصهٔ جست‌وجو]. شمسی و فونت و RTL با شاخه‌های اجتماعی «redmine-persian» (چند فورک، ۱ ستاره، بدون تاریخ نسخهٔ پشتیبانی‌شده؛ یکی حذف‌شده) و پوستهٔ RTL بر پایهٔ Basecamp [S-F-43، خوانده‌شده؛ S-F-44، خلاصهٔ جست‌وجو]؛ عملاً هر ارتقای Redmine وصله را می‌شکند. |
| استقرار و مدل عرضه | رایگان، خوداستقرار. شرکت mbs.co.ir در مخزن فارسی‌ساز ارجاع شده [S-F-43]؛ میزبان ایرانی مشخصی پیدا نشد (فرض: نصب داخلی). |
| نقطهٔ قوت واقعی | مدل ساده و قابل‌فهم: پروژه، Tracker، وضعیت، نقش؛ گردش‌کار به‌ازای نقش و Tracker در چند دقیقه؛ ایمیل به مسئله. الگوی WRK-01 با کمترین پیچیدگی. |
| شکاف نسبت به تز ما | تنها «کار و ویکی» را دارد؛ گفتگو، تأیید مستقل، سند با چرخهٔ عمر و مشتری ندارد. رابط قدیمی و موبایل ندارد. فارسی/شمسی وصلهٔ بی‌نگهدارنده. |
| شواهد | مخزن mohsensaeedi خوانده‌شده؛ redmine.org و پوسته‌ها خلاصهٔ جست‌وجو. |

## ۸. Taiga، Plane، Focalboard (کارت مشترک کوتاه)

| فیلد | محتوا |
|---|---|
| جایگاه | ابزارهای چابک سبک و متن‌باز: Taiga (اسکرام/کانبان، اسپانیایی)، Plane (جایگزین مدرن Jira/Linear با Pages و Intake)، Focalboard (کانبان شبیه Notion از Mattermost). |
| پوشش کاتالوگ | همه: WRK-01 سطحی تا متوسط، WRK-03، DOM-02 (بک‌لاگ و اسپرینت/Cycle)، COL-01. Plane علاوه بر آن: DOC-02 (Pages)، WRK-05 (Intake: ورودی درخواست بدون فرم‌ساز)، PLN-02 (گانت پایه) در Community Edition [S-F-45، خلاصهٔ جست‌وجو]. Taiga: Wiki و Epic. Focalboard: فقط کانبان و جدول. هیچ‌کدام: COL-08، COL-03، COL-04، DMS، شمسی. |
| اتصال | Plane: API و Webhook در Community؛ اتصال‌ها (GitHub، Slack…) در نسخهٔ تجاری [S-F-45]. Taiga: API و Webhook، اتصال GitLab/GitHub. Focalboard: به‌عنوان افزونهٔ Mattermost. |
| فارسی و شمسی | **Taiga:** RTL دارد و فارسی «اولین زبان RTL» آن بود (۲۰۲۱) [S-F-46، خلاصهٔ جست‌وجو]؛ شمسی ندارد. **Plane:** فارسی هنوز در هسته نیست؛ PR اول (خرداد ۱۴۰۵) به سود PR دوم (#9299، باز در شهریور ۱۴۰۵) بسته شد که ۳٬۸۳۷ کلید ترجمه و جهت RTL سراسری و فونت وزیرمتن برای PDF می‌آورد؛ نگهدارنده: «فارسی بخشی از گفتگوی ماست» [S-F-47، S-F-48، خوانده‌شده]. **Focalboard:** هیچ. شمسی در هیچ‌کدام. |
| استقرار و مدل عرضه | Taiga: Kaleidos از توسعه کنار رفت و فقط Penpot می‌سازد؛ «Taiga Cloud Services» نگهداری می‌کند (۶٫۱۰٫۱، اردیبهشت ۱۴۰۵)؛ نسل بعدی (Tenzu) با شرکت دیگر [S-F-49، خلاصهٔ جست‌وجو]. Plane: Community Edition (AGPL) رایگان خوداستقرار؛ Pro ۶ دلار/صندلی/ماه [S-F-45]. Focalboard مستقل: «در حال حاضر نگهداری نمی‌شود»، فراخوان نگهدارنده (مرداد ۱۴۰۳) [S-F-23، خوانده‌شده]. میزبان ایرانی برای هیچ‌کدام دیده نشد. |
| نقطهٔ قوت واقعی | Plane: رابط سریع، پنج نمای هم‌داده (لیست/بورد/تقویم/گانت/جدول) که همان WRK-03 ماست؛ Intake الگوی سبک WRK-05؛ Pages کنار کار. Taiga: RTL واقعی بدون وصله. |
| شکاف نسبت به تز ما | فقط «کار» چابک؛ نه سند با چرخهٔ عمر، نه چت، نه تأیید، نه مشتری، نه پرونده و روال. دو تای سه‌تا مسئلهٔ تداوم نگهداری دارند. |
| شواهد | PR های Plane و Focalboard خوانده‌شده؛ Taiga خلاصهٔ جست‌وجو. |

## ۹. ابزارهای ابری خارجی غیرقابل‌اتکا (Trello، Slack، Notion، Asana، ClickUp، monday)

| فیلد | محتوا |
|---|---|
| جایگاه | ابزارهای ابری که تیم‌های ایرانی به‌خاطر کیفیت و رایگان‌بودن پلهٔ اول می‌خواهند، ولی سرویس‌دهنده صریحاً یا عملاً به کاربر داخل ایران سرویس نمی‌دهد. |
| پوشش کاتالوگ | برای این فایل اهمیتی ندارد؛ نکته «دسترسی» است. برای مقایسهٔ قابلیتی با ابزار ایرانی به `work-management.md` و [S-T1-02]. |
| مستندات مسدودیت | **Trello (Atlassian):** صفحهٔ رسمی «Sanctioned countries»: سرویس به «organizations or users located in … Crimea Region of Ukraine, Cuba, Iran, North Korea, Syria, Sudan and Venezuela» داده نمی‌شود؛ دسترسی فقط پس از «بازگشت به کشور غیرمحدود» برمی‌گردد [S-F-01، خوانده‌شده؛ S-T1-06]. **Slack:** آذر ۱۳۹۷ حساب‌های مرتبط با ایران را غیرفعال کرد و بعد سیاست شد: حساب تا زمانی که از IP ایران وارد شود معلق است [S-F-50، خلاصهٔ جست‌وجو]. **Notion:** «ناگهان تصمیم گرفتند همهٔ دادهٔ کاربران مقیم ایران را پاک کنند» و حتی پس از خروج از کشور بازیابی نکردند [S-F-02، خوانده‌شده]. **Asana:** «not currently able to provide access … Cuba, Iran, North Korea, Syria, and the Crimea, Donetsk, or Luhansk regions» [S-F-51، خلاصهٔ جست‌وجوی صفحهٔ رسمی]. **ClickUp:** صفحهٔ Global Trade Compliance فقط روسیه را نام می‌برد ولی پیام عمومی «unable to provide ClickUp access to your location» را نمایش می‌دهد [S-F-52، خوانده‌شده]؛ وضعیت ایران **فرض** (مسدود). **monday.com:** در گزارش‌های رسمی خود می‌گوید تابع محدودیت‌های تحریمی آمریکا، اسرائیل و اتحادیهٔ اروپاست [S-F-53، خلاصهٔ جست‌وجو]؛ از داخل ایران عملاً در دسترس نیست (**فرض**). همان gist: GitHub (بازگشت با مجوز)، GitLab.com (حساب‌های با IP ایران بسته، برنگشته) [S-F-02]. |
| فارسی و شمسی | هیچ‌کدام رابط فارسی یا تقویم شمسی ندارند (فرض؛ monday فقط درخواست RTL در انجمن دارد [S-F-54]). |
| پیامد برای تیم | پرداخت دلاری ممکن نیست [S-T1-11]؛ ۲۷٪ برنامه‌نویسان حدود ۱۰٪ روز و ۱۱٫۵٪ بیش از نصف روز را صرف دور زدن محدودیت می‌کنند [S-T1-13، S-T1-14]؛ تجربهٔ مهاجرت اجباری Trello→تسکولو→میزیتو [S-T1-15]. **خطر اصلی حذف بی‌هشدار داده است، نه کیفیت.** |
| شکاف نسبت به تز ما | این‌ها رقیب نیستند؛ «شواهد» تز هستند: هر ابزاری که در جریان روزانهٔ کار باشد باید داخل کشور و در کنترل اپراتور باشد (D-09، D-14: «اتصال به سرویس ابری خارجی گزینهٔ اصلی نیست»). |
| شواهد | Atlassian، gist، ClickUp خوانده‌شده؛ Slack، Asana، monday خلاصهٔ جست‌وجو. |

---

## ۱۰. شمارش پشته: تیم نرم‌افزاری برای «کار + سند + گفتگو + تأیید + پورتال مشتری» امروز چند ابزار لازم دارد؟

مبنای شمارش: هر «نصب جدا با پایگاه‌داده، ورود و اپ موبایل خودش» یک ابزار است. Git طبق D-20 بیرون است ولی برای T1 لازم است و در ستون آخر آمده.

| ترکیب رایج | کار و اسپرینت | سند/ویکی | گفتگو و تماس | تأیید | پورتال/تیکت مشتری | Git | تعداد نصب | آنچه باز هم نیست |
|---|---|---|---|---|---|---|---|---|
| **Atlassian‌محور** (الگوی A2) | Jira DC | Confluence DC | Mattermost یا Rocket.Chat | وضعیت گردش‌کار Jira (سطحی) | Jira Service Management DC | GitLab/Bitbucket | **۵** | شمسی در هر پنج جدا وصله؛ چت به کار وصل نیست؛ SSO جدا |
| **GitLab‌محور** (الگوی S-T1-16) | GitLab Issues | GitLab Wiki | Mattermost | فقط Approval روی MR | Service Desk ایمیلی (بدون پورتال) | همان GitLab | **۲ تا ۳** | فیلد و گردش‌کار سفارشی ندارد؛ سند بدون چرخهٔ عمر؛ تأیید غیرفنی ندارد؛ پورتال ندارد؛ شمسی هیچ؛ فارسی رابط هیچ |
| **OpenProject‌محور** | OpenProject | Nextcloud (فایل و Office) + Wiki | Mattermost/Rocket.Chat یا Nextcloud Talk | اپ Approval فقط روی فایل | Rocket.Chat Livechat یا ابزار تیکت جدا | GitLab | **۴ تا ۵** | RTL در OpenProject نیست؛ SSO یکپارچه پولی؛ تأیید روی کار نیست |
| **Nextcloud‌محور** | Deck (سطحی) → در عمل + Plane/OpenProject | Nextcloud Office/Collectives | Talk | اپ Approval (فایل) | لینک مهمان؛ تیکت ندارد | GitLab | **۳ تا ۴** | مدیریت کار واقعی ندارد؛ شمسی هیچ؛ تیکت ندارد |

**نتیجهٔ شمارش:** کمینهٔ واقع‌بینانه ۳ نصب، الگوی معمول ۴ تا ۵؛ به این عدد یک سرویس هویت (Keycloak یا مشابه) اضافه می‌شود اگر تیم ورود یکپارچه بخواهد، چون SSO در OpenProject پولی است و از Team Edition مترموست حذف شده. هیچ ترکیبی «تأیید ترتیبی/موازی با حدنصاب و جانشین» (COL-03)، «پرونده و روال» (D-35)، «صندوق تعهد پاسخ» (COL-07) یا «اشتراک شیءمحور بین دو سازمان» (D-16) را نمی‌دهد. تقویم شمسی در **هیچ‌یک از هشت ابزار** بومی نیست؛ برای Jira و Redmine وصلهٔ شخص ثالث، برای بقیه هیچ.

**درزهای بین ابزارها (هزینهٔ اتصال که تیم می‌پردازد):**
1. **هویت و دسترسی:** هر ابزار مدل نقش خودش را دارد؛ عضویت مشتری/مهمان در هر یک جدا تعریف می‌شود؛ D-16 عملاً ناممکن.
2. **اعلان و صندوق:** پنج منبع اعلان، پنج اپ موبایل؛ «چه چیزی منتظر من است» جایی جمع نمی‌شود (COL-07).
3. **پیوند یک‌طرفه:** اتصال‌ها اعلان می‌فرستند (GitLab→Mattermost) یا لینک می‌چسبانند (Nextcloud→OpenProject)؛ وضعیت دوطرفه همگام نمی‌شود؛ تصمیم چت به کار برنمی‌گردد.
4. **جست‌وجو:** هر ابزار جست‌وجوی خودش؛ سند، کار و گفتگو در یک نتیجه نمی‌آیند (PLT-07).
5. **شمسی و فارسی:** هر ابزار وصلهٔ جدا، هر ارتقا شکستن جدا؛ Mattermost حتی ترجمهٔ فارسی را در ۱۲ حذف می‌کند.
6. **عملیات:** چند پایگاه‌داده، چند برنامهٔ پشتیبان، چند چرخهٔ ارتقا؛ برای تیم ۱۰ نفره یک نفر نیمه‌وقت (فرض).

## ۱۱. جایگاه هر ابزار نسبت به D-14 و D-17

| ابزار | مؤلفهٔ بسته‌بندی؟ | چرا | نسبت درست با ما |
|---|---|---|---|
| Jira DC | **نه** | متن‌باز نیست؛ رابط و مدل داده‌اش تمایز خودش است؛ سنگین | **رقیب اصلی در شرکت متوسط/بزرگ** و **منبع مهاجرت** (PLT-06: ورود پروژه، نوع کار، تاریخچه از Jira) |
| GitLab | **نه** (D-20) | Git بیرون است؛ بستهٔ چند‌گیگابایتی با UX خودش | **همسایهٔ روز اول:** اتصال دوطرفهٔ Issue/MR/pipeline به کار و نسخه (DOM-02، REL-06)؛ رقیب فقط برای مدیریت کار T1 |
| OpenProject | **نه** | هستهٔ کار و برنامه باید مال ما و بهترین باشد (D-30) | رقیب در تیم مهندسی/پیمانکاری (T3)؛ **درس:** جلسه متصل به کار، Baseline |
| Mattermost | **نه** (D-26) | چت داخلی ساخت داخلی است | **مرجع سنجش R1** (تجربهٔ موبایل)؛ منبع مهاجرت تاریخچهٔ چت؛ الگوی Playbooks برای «روال» |
| Rocket.Chat | **نه** (D-26) | همان | مرجع Omnichannel برای D-31؛ رقیب چت |
| Nextcloud | **نه به‌عنوان بسته؛ بله به‌عنوان مخزن بیرونی** | متادیتا و نسخهٔ سند باید مال ما باشد (D-14)؛ Nextcloud خودش این‌ها را دارد و رقابت می‌کند | **DMS-19:** اتصال به Nextcloud سازمان به‌عنوان مخزن؛ رقیب برای «سند + چت» در سازمان‌های حاکمیت‌داده‌محور |
| Redmine | **نه** | قدیمی، Rails، UX خودش | رقیب رو به افول؛ منبع مهاجرت |
| Taiga/Plane/Focalboard | **نه** | همان دلیل D-30؛ دو تا مسئلهٔ تداوم دارند | Plane مرجع طراحی WRK-03 (پنج نمای هم‌داده) و Intake |
| **موتورهای دیده‌شده در همین پشته‌ها که کاندید D-17 هستند** | **بله، بررسی شود** | Collabora و OnlyOffice (داخل Nextcloud؛ OnlyOffice RTL از ۸٫۳) → DMS-06؛ Jitsi (کنار Mattermost/Rocket.Chat؛ راهنمای نصب ایرانی) → COL-11؛ Metabase (ایران‌سرور مدیریت‌شده می‌فروشد) → REP-02 | کارت ارزیابی در `component-evaluation.md`؛ **هیچ‌کدام از هشت «محصول» این فایل خودش مؤلفه نیست** |

---

## جمع‌بندی دسته

1. تیم نرم‌افزاری ایرانی برای «کار + سند + گفتگو + تأیید + پورتال مشتری» امروز **دست‌کم ۳ و معمولاً ۴ تا ۵ نصب جدا** لازم دارد، به‌علاوهٔ سرویس هویت اگر ورود یکپارچه بخواهد؛ این خودِ عدد، شاهد تز D-03 است.
2. هیچ ترکیبی تأیید واقعی (COL-03)، پرونده و روال (D-35)، صندوق تعهد پاسخ (COL-07) و اشتراک بین‌سازمانی (D-16) را نمی‌دهد؛ این‌ها همان «بافت اتصال» D-14 هستند که فقط با ساخت داخلی به دست می‌آیند.
3. **تقویم شمسی در هیچ‌یک از هشت ابزار بومی نیست**؛ Jira و Redmine وصلهٔ شخص ثالثِ حساس به ارتقا دارند، بقیه هیچ. فارسی و RTL فقط در Rocket.Chat و Taiga نزدیک به بومی است؛ Nextcloud تازه در ۳۱ پایهٔ RTL را ساخته؛ Mattermost ترجمهٔ فارسی را در نسخهٔ ۱۲ حذف می‌کند؛ Atlassian فارسی را «Won't Fix» کرده.
4. درزها ثابت‌اند: هویت، اعلان، پیوند یک‌طرفه، جست‌وجوی جدا، وصلهٔ فارسی جدا، عملیات چندگانه. اتصال‌های رسمی (GitLab↔Mattermost، Nextcloud↔OpenProject) فقط اعلان و لینک می‌دهند، نه وضعیت دوطرفه.
5. اکوسیستم ایرانی واقعی فقط دور **Jira** (چند فروشندهٔ فارسی‌ساز و مشاور) و **Mattermost/Rocket.Chat/Nextcloud** (اپ آماده در لیارا، چابکان، هاست‌ایران، ایران‌سرور) شکل گرفته؛ OpenProject، Redmine، Plane و Taiga فروشنده یا میزبان ایرانی ندارند.
6. ابزارهای ابری خارجی (Trello، Slack، Notion، Asana) با سند رسمی یا تجربهٔ مستند، کاربر داخل ایران را مسدود یا حذف کرده‌اند؛ آن‌ها رقیب نیستند، دلیل خرید‌اند (D-09، D-14).
7. **کاندید بسته‌بندی:** هیچ‌کدام از هشت محصول این فایل. موتورهایی که داخل همین پشته‌ها دیده شدند کاندیدند و باید کارت D-17 بگیرند: Collabora/OnlyOffice (DMS-06)، Jitsi یا LiveKit (COL-11)، Metabase (REP-02).
8. **رقیب:** Jira DC در شرکت متوسط و بزرگ، Nextcloud در سازمان حاکمیت‌داده‌محور برای سند و چت، Mattermost/Rocket.Chat برای چت (R1). **همسایه‌ای که باید به آن وصل شویم:** GitLab (D-20) و Nextcloud به‌عنوان مخزن (DMS-19). **منبع مهاجرت:** Jira، Redmine، Trello (PLT-06).
9. درس‌های طراحی: گردش‌کار و فیلد سفارشی عمیق (Jira)، جلسهٔ متصل به کار (OpenProject)، Omnichannel ورودی مشتری (Rocket.Chat)، پنج نمای هم‌داده (Plane)، Playbooks برای روال (Mattermost)، RTL از پایه (Nextcloud 31).
10. ریسک این فایل: ادعای فروشندگان ایرانی از چکیدهٔ جست‌وجو است (سایت‌ها ۵۰۳)؛ سهم بازار هر ابزار فرض است؛ شمارش پشته باید با مصاحبهٔ ۳ تا ۵ تیم آزموده شود.

---

## منابع

| شناسه | منبع | وضعیت |
|---|---|---|
| S-F-01 | Atlassian، Trello Sanctioned countries — https://support.atlassian.com/trello/docs/sanctioned-countries/ | **خوانده‌شده** |
| S-F-02 | avestura، «DELETE FROM users WHERE location = 'IRAN'» (gist: Notion، GitHub، GitLab، Microsoft) — https://gist.github.com/avestura/ce2aa6e55dad783b1aba946161d5fef4 | **خوانده‌شده** |
| S-F-03 | دژافزار نت، خدمات جیرا — https://dezhafzar.com/fa/jira-software/ | **خوانده‌شده** |
| S-F-04 | پارسینا، جیرای فارسی و شمسی — https://parsinasoft.ir/persian-jira/ ؛ راتوسان، افزونه‌های جیرا — https://ratosan.com/best-jira-addon-plugin/ ؛ آریانا — https://jirasolutions.ir/ | چکیده (۵۰۳ / DNS) |
| S-F-05 | Atlassian، JRASERVER-65012 «Persian language» (Won't Fix، ۲۰۱۹) — https://jira.atlassian.com/browse/JRASERVER-65012 | **خوانده‌شده** |
| S-F-06 | Atlassian Marketplace، Arabic for Jira (RTL) — https://marketplace.atlassian.com/apps/1215724/arabic-for-jira | خلاصهٔ جست‌وجو |
| S-F-07 | بالوت‌سافت، جیرا + فارسی‌ساز v10 — https://balootsoft.com/product/jira/ ؛ EPM-solution، جیرا فارسی — http://epm-solution.ir/ ؛ افزونهٔ Jira Persian Improver — https://chrome-stats.com/d/bnlbikbnkhjncbnalhnbehfahbgnlppp | چکیده (۵۰۳ / DNS) |
| S-F-08 | Adaptavist، تغییر قیمت Data Center از فوریهٔ ۲۰۲۵ — https://www.adaptavist.com/blog/atlassian-data-center-prices-february-2025 ؛ راهنماهای قیمت ۲۰۲۶ | خلاصهٔ جست‌وجو |
| S-F-09 | GitLab Docs: Service Desk — https://docs.gitlab.com/user/project/service_desk/ ؛ Issue boards — https://docs.gitlab.com/user/project/issue_board/ ؛ Wiki — https://docs.gitlab.com/user/project/wiki/wiki_for_planning/ | خلاصهٔ جست‌وجو |
| S-F-10 | Mattermost GitLab Plugin — https://mattermost.com/marketplace/gitlab-plugin/ ؛ Rocket.Chat GitLab — https://docs.rocket.chat/use-rocket.chat/workspace-administration/integrations/gitlab ؛ Rocket.Chat Nextcloud app (docs) ؛ OpenProject Integrations — https://www.openproject.org/integrations/ ؛ pm2mattermost — https://github.com/zaproo/pm2mattermost | خلاصهٔ جست‌وجو |
| S-F-11 | GitLab Docs، Preferences — https://docs.gitlab.com/user/profile/preferences/ | خوانده‌شده (زبان‌ها برشمرده نشده) |
| S-F-12 | GitLab FOSS Issue #1901 «RTL Support» (۲۰۱۵؛ بسته ۲۰۱۸) — https://gitlab.com/gitlab-org/gitlab-foss/-/work_items/1901 | **خوانده‌شده** (از API) |
| S-F-13 | GitLab Issue #24693، RTL در فایل .org — https://gitlab.com/gitlab-org/gitlab/-/issues/24693 | خلاصهٔ جست‌وجو |
| S-F-14 | چابکان، CI/CD با GitLab — https://docs.chabokan.net/cicd/gitlab/ ؛ 7ho.st، سرویس گیت‌لب — https://7ho.st/customized-hosting/gitlab ؛ هم‌روش [S-T1-05] | خلاصهٔ جست‌وجو |
| S-F-15 | GitLab Issue #260406، Cloudflare و IP ایران — https://gitlab.com/gitlab-org/gitlab/-/issues/260406 ؛ GitLab Forum «Gitlab Blocked IP» | خلاصهٔ جست‌وجو |
| S-F-16 | OpenProject Pricing — https://www.openproject.org/pricing/ | **خوانده‌شده** |
| S-F-17 | OpenProject × Nextcloud — https://www.openproject.org/integrations/nextcloud/ ؛ Nextcloud blog | خلاصهٔ جست‌وجو |
| S-F-18 | Crowdin، OpenProject Persian — https://crowdin.com/project/openproject/fa | خوانده‌شده (آمار نمایش نشد) |
| S-F-19 | OpenProject Community، «RTL Languages support» — https://community.openproject.org/topics/4841 | خلاصهٔ جست‌وجو (۴۰۴) |
| S-F-20 | OpenProject، Feature #27132 «Support Jalali Calendar» — https://community.openproject.org/work_packages/27132 | عنوان خوانده‌شده؛ متن پشت ورود |
| S-F-21 | جست‌وجوی «اوپن پروجکت فارسی شمسی» — بدون نتیجه | خلاصهٔ جست‌وجو |
| S-F-22 | Mattermost، Removed and Deprecated Features — https://docs.mattermost.com/product-overview/deprecated-features.html | **خوانده‌شده** |
| S-F-23 | Focalboard، Call for Maintainers #5038 — https://github.com/mattermost-community/focalboard/issues/5038 ؛ Boards in maintenance mode (KB) | **خوانده‌شده** |
| S-F-24 | QueraTeam/mattermost-rtl — https://github.com/QueraTeam/mattermost-rtl | **خوانده‌شده** |
| S-F-25 | MiRHaDi/mattermost-persian-rtl v0.1.0 Beta — https://github.com/MiRHaDi/mattermost-persian-rtl/releases/tag/v0.1.0 | خلاصهٔ جست‌وجو |
| S-F-26 | Mattermost Weblate، Persian (i18n-wip) — https://translate.mattermost.com/languages/fa/i18n-wip/ | خلاصهٔ جست‌وجو (۴۰۳) |
| S-F-27 | Mattermost، Entry tier press release — https://mattermost.com/newsroom/press-releases/mattermost-launches-free-entry-tier/ ؛ Editions — https://docs.mattermost.com/product-overview/editions-and-offerings | خلاصهٔ جست‌وجو |
| S-F-28 | لیارا Mattermost — https://liara.ir/one-click-apps/mattermost/ ؛ چابکان — https://chabokan.net/services/mattermost/ ؛ هاست‌ایران — https://hostiran.net/cloud/bazarche/mattermost ؛ سرور.ir Jitsi+Mattermost — https://server.ir/blog/install-jitsi-and-mattermost-on-iran-server/ ؛ مبین‌هاست، پارس‌پک، مارال‌هاست (راهنمای نصب) | چکیده (۵۰۳) |
| S-F-29 | ایران‌سرور، اپ‌های مدیریت‌شده (Rocket.Chat، NextCloud، Metabase، n8n، Grafana) — https://www.iranserver.com/managedapp/ | **خوانده‌شده** |
| S-F-30 | Rocket.Chat Localization — https://docs.rocket.chat/docs/localization | **خوانده‌شده** |
| S-F-31 | Rocket.Chat Issue #30261، Persian LTR در ۶٫۴ — https://github.com/RocketChat/Rocket.Chat/issues/30261 | **خوانده‌شده** |
| S-F-32 | Rocket.Chat Forums، سقف اعلان ۱۰٬۰۰۰ — https://forums.rocket.chat/t/about-the-mobile-notification-limit-on-community-plan/22658 | خلاصهٔ جست‌وجو |
| S-F-33 | Nextcloud App Store، Approval — https://apps.nextcloud.com/apps/approval | **خوانده‌شده** |
| S-F-34 | Nextcloud Community، Working Group for Bidirectional Text — https://help.nextcloud.com/t/working-group-for-adding-bidirectional-text-support/177753 | خلاصهٔ جست‌وجو |
| S-F-35 | Nextcloud Server Issue #31420، RTL (بسته، مایل‌استون ۳۱) — https://github.com/nextcloud/server/issues/31420 | **خوانده‌شده** |
| S-F-36 | Nextcloud Developer Manual، Upgrade to 31 (logical positioning) — https://docs.nextcloud.com/server/stable/developer_manual/release_notes/previous/upgrade_to_31.html | خلاصهٔ جست‌وجو |
| S-F-37 | Nextcloud Server Issue #33665، Shamsi/Hijri (باز از ۲۰۲۲) — https://github.com/nextcloud/server/issues/33665 | **خوانده‌شده** |
| S-F-38 | dev-am1/Nextcloud-Persian (۱۹٫۰٫۱) — https://github.com/dev-am1/Nextcloud-Persian ؛ Jalali calendar threads در help.nextcloud.com | خلاصهٔ جست‌وجو |
| S-F-39 | ONLYOFFICE 8.0 RTL beta؛ 8.3 paragraph direction — https://www.onlyoffice.com/blog/2025/02/onlyoffice-docs-8-3-faq | خلاصهٔ جست‌وجو |
| S-F-40 | Nextcloud Community، «Persian typing and character in onlyoffice» — https://help.nextcloud.com/t/persian-typing-and-character-in-onlyoffice/96758 ؛ Cloudamo، OnlyOffice for Nextcloud | خلاصهٔ جست‌وجو |
| S-F-41 | Redmine Patch #7418، Persian Translation (۲۰۱۱) — https://www.redmine.org/issues/7418 | خلاصهٔ جست‌وجو |
| S-F-42 | Redmine Feature #7711 و #12889، Jalali/Persian Solar Calendar — https://www.redmine.org/issues/12889 | خلاصهٔ جست‌وجو |
| S-F-43 | mohsensaeedi/redmine-persian — https://github.com/mohsensaeedi/redmine-persian (ارجاع به mbs.co.ir) ؛ sajjadgol/redmine-persian (۴۰۴) | **خوانده‌شده** |
| S-F-44 | behrang/redmine-themes، پوستهٔ RTL فارسی — https://github.com/behrang/redmine-themes | خلاصهٔ جست‌وجو |
| S-F-45 | Plane، Editions — https://developers.plane.so/self-hosting/editions-and-versions ؛ Plane Pricing Teardown 2026 | خلاصهٔ جست‌وجو |
| S-F-46 | Taiga، «Taiga supports RTL languages too» (۲۰۲۱) — https://x.com/taigaio/status/1466447994950234115 ؛ Google Groups، Add Persian Language | خلاصهٔ جست‌وجو |
| S-F-47 | Plane PR #9198، Persian localization (بسته، جانشین‌شده) — https://github.com/makeplane/plane/pull/9198 | **خوانده‌شده** |
| S-F-48 | Plane PR #9299، Persian + RTL (باز) — https://github.com/makeplane/plane/pull/9299 | **خوانده‌شده** |
| S-F-49 | Taiga Community، «State of Taiga as a whole» — https://community.taiga.io/t/state-of-taiga-as-a-whole/3831 ؛ Wikipedia Taiga | خلاصهٔ جست‌وجو |
| S-F-50 | TechCrunch، Slack will comply with sanctions (۲۰۱۸) — https://techcrunch.com/2018/12/22/slack-says-it-will-comply-with-sanctions/ | خلاصهٔ جست‌وجو |
| S-F-51 | Asana، Global Trade Compliance — https://help.asana.com/hc/en-us/articles/14139937067547-Asana-and-Global-Trade-Compliance | خلاصهٔ جست‌وجو (صفحه جاوااسکریپتی) |
| S-F-52 | ClickUp، Global Trade Compliance — https://clickup.com/global-trade-compliance | **خوانده‌شده** |
| S-F-53 | monday.com، Form 20-F FY2023 (بخش ریسک تحریم) — https://www.sec.gov/Archives/edgar/data/0001845338/000117891324000943/zk2431098.htm | خلاصهٔ جست‌وجو |
| S-F-54 | monday Community، Feature Request: Better Support for RTL Languages | خلاصهٔ جست‌وجو |
| S-T1-xx | ارجاع به منابع کارت T1 در `teams/T1-software-dev.md` (S-T1-02، 05، 06، 08، 10، 11، 13، 14، 15، 16، 17، 19) | — |
