import { useState } from 'react';
import './index.css';
import screen1 from '../Screenshot_2026-04-27-11-50-41-664_com.example.myapplication.jpg';
import screen2 from '../Screenshot_2026-04-27-11-50-45-746_com.example.myapplication.jpg';
import screen3 from '../Screenshot_2026-04-27-11-51-05-396_com.example.myapplication.jpg';
import screen4 from '../Screenshot_2026-04-27-11-51-10-054_com.example.myapplication.jpg';
import screen5 from '../Screenshot_2026-04-27-11-51-19-776_com.example.myapplication.jpg';
import screen6 from '../Screenshot_2026-04-27-11-51-22-562_com.example.myapplication.jpg';
import demoVideo from '../Screenrecorder-2026-04-26-19-27-45-957.mp4';

const githubUrl = 'https://github.com/Mohking999/frontend-suggest';

const translations = {
  en: {
    heroEyebrow: 'Kotlin Android UI Preview',
    heroTitle: 'Enterprise-ready UI presentation',
    heroDescription: 'Preview this Kotlin-built Android app interface with screenshots and a widescreen demo video tailored for developers, product owners, and enterprise stakeholders.',
    heroMetaTitle: 'Preview for review',
    heroMetaBody: 'Static React + TypeScript presentation app shows the Android UI flow and helps teams validate design and functionality.',
    screenshots: 'App Screenshots',
    demoTitle: 'Demo Video',
    demoDescription: 'Watch the app flow in a standard widescreen layout designed for developer and enterprise review.',
    githubButton: 'View GitHub repo',
    githubNote: 'Source and app ideas on GitHub',
    languageLabel: 'Choose language',
    themeLabel: 'Theme',
    themeDark: 'Dark mode',
    themeLight: 'Light mode',
  },
  fr: {
    heroEyebrow: 'Aperçu de l’UI Android Kotlin',
    heroTitle: 'Présentation UI prête pour l’entreprise',
    heroDescription: 'Découvrez cette interface d’application Android construite en Kotlin avec des captures d’écran et une vidéo de démonstration pour les développeurs, les chefs de produit et les parties prenantes.',
    heroMetaTitle: 'Aperçu pour validation',
    heroMetaBody: 'Application de présentation React + TypeScript statique affichant le flux UI Android pour aider les équipes à valider le design et la fonctionnalité.',
    screenshots: 'Captures d’écran de l’application',
    demoTitle: 'Vidéo de démonstration',
    demoDescription: 'Regardez le flux de l’application dans un format grand écran conçu pour la révision des équipes.',
    githubButton: 'Voir le dépôt GitHub',
    githubNote: 'Sources et idées d’application sur GitHub',
    languageLabel: 'Choisir la langue',
    themeLabel: 'Thème',
    themeDark: 'Mode sombre',
    themeLight: 'Mode clair',
  },
  ar: {
    heroEyebrow: 'عرض واجهة أندرويد كوتلن',
    heroTitle: 'عرض واجهة جاهزة للمؤسسات',
    heroDescription: 'استعرض واجهة تطبيق أندرويد المبنية بكوتلن مع لقطات شاشة وفيديو تجربة مصمم للمطورين وأصحاب المنتجات وأصحاب القرار.',
    heroMetaTitle: 'عرض للمراجعة',
    heroMetaBody: 'تطبيق عرض ثابت باستخدام React + TypeScript يوضح تدفق واجهة أندرويد ويساعد الفرق على التحقق من التصميم والوظائف.',
    screenshots: 'لقطات شاشة التطبيق',
    demoTitle: 'فيديو العرض',
    demoDescription: 'شاهد تدفق التطبيق في وضعية شاشة عريضة مناسبة للمراجعة الفنية والمؤسسية.',
    githubButton: 'عرض المستودع على GitHub',
    githubNote: 'المصدر وأفكار التطبيق على GitHub',
    languageLabel: 'اختر اللغة',
    themeLabel: 'السمة',
    themeDark: 'الوضع الداكن',
    themeLight: 'الوضع الفاتح',
  }
};

const mediaItems = [
  { src: screen1, label: 'Welcome screen' },
  { src: screen2, label: 'Feature overview' },
  { src: screen3, label: 'Form flow' },
  { src: screen4, label: 'Detail view' },
  { src: screen5, label: 'Settings preview' },
  { src: screen6, label: 'User interaction' }
];

const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'ar', label: 'العربية' }
];

function App() {
  const [language, setLanguage] = useState<'en' | 'fr' | 'ar'>('en');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const locale = translations[language];
  const isRtl = language === 'ar';
  const isDark = theme === 'dark';
  const rootClass = isDark ? 'min-h-screen bg-app-hero text-slate-50' : 'min-h-screen bg-slate-100 text-slate-950';
  const outerPanelClass = isDark
    ? 'flex flex-col gap-5 rounded-[32px] border border-emerald-500/15 bg-slate-900/70 p-6 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-8'
    : 'flex flex-col gap-5 rounded-[32px] border border-slate-200 bg-white/90 p-6 shadow-[0_24px_80px_-40px_rgba(148,163,184,0.15)] sm:p-8';
  const panelClass = isDark
    ? 'flex min-w-full flex-col gap-4 rounded-3xl border border-emerald-400/15 bg-slate-950/60 p-4 sm:min-w-[320px]'
    : 'flex min-w-full flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:min-w-[320px]';
  const headerClass = isDark
    ? 'grid gap-6 rounded-[28px] border border-emerald-500/10 bg-emerald-950/20 p-6 sm:grid-cols-[1.3fr_0.9fr] sm:items-center'
    : 'grid gap-6 rounded-[28px] border border-slate-200 bg-slate-100 p-6 sm:grid-cols-[1.3fr_0.9fr] sm:items-center';
  const cardClass = isDark
    ? 'overflow-hidden rounded-3xl border border-emerald-500/10 bg-slate-950/70 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1'
    : 'overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-300/30 transition hover:-translate-y-1';
  const sectionClass = isDark
    ? 'grid gap-6 rounded-[28px] border border-emerald-500/10 bg-slate-950/70 p-6 shadow-xl shadow-slate-950/20 sm:grid-cols-[1fr_1.2fr]'
    : 'grid gap-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-300/20 sm:grid-cols-[1fr_1.2fr]';
  const infoCardClass = isDark
    ? 'rounded-3xl border border-emerald-400/10 bg-slate-900/85 p-6 text-slate-100 shadow-lg shadow-slate-950/20'
    : 'rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm shadow-slate-300/30';
  const themeBarClass = isDark
    ? 'flex items-center justify-between gap-3 rounded-3xl border border-slate-700/10 bg-slate-950/10 p-3 text-slate-200 sm:bg-slate-900/20 sm:border-slate-700/20'
    : 'flex items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-3 text-slate-950';
  const themeToggleLabel = isDark ? locale.themeLight : locale.themeDark;

  return (
    <div lang={language} dir={isRtl ? 'rtl' : 'ltr'} className={rootClass}>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className={outerPanelClass}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">{locale.heroEyebrow}</p>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{locale.heroTitle}</h1>
              <p className={`max-w-3xl sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{locale.heroDescription}</p>
            </div>

            <div className={panelClass}>
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">{locale.languageLabel}</p>
                <div className="flex flex-wrap gap-2">
                  {languageOptions.map((option) => (
                    <button
                      key={option.code}
                      type="button"
                      onClick={() => setLanguage(option.code as 'en' | 'fr' | 'ar')}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${language === option.code ? 'border-emerald-400 bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20' : isDark ? 'border-slate-700 bg-slate-900 text-slate-200 hover:border-emerald-300/50 hover:bg-slate-800' : 'border-slate-300 bg-white text-slate-950 hover:border-slate-400 hover:bg-slate-50'}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className={themeBarClass}>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">{locale.themeLabel}</p>
                <button
                  type="button"
                  onClick={() => setTheme(isDark ? 'light' : 'dark')}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${isDark ? 'border-slate-700 bg-slate-900 text-slate-200 hover:border-emerald-300/50 hover:bg-slate-800' : 'border-slate-300 bg-white text-slate-950 hover:border-slate-400 hover:bg-slate-50'}`}
                >
                  {themeToggleLabel}
                </button>
              </div>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                {locale.githubButton}
              </a>
              <p className="text-sm text-slate-400">{locale.githubNote}</p>
            </div>
          </div>

          <header className={headerClass}>
            <div className="space-y-4">
              <h2 className={`text-3xl font-semibold tracking-tight ${isDark ? 'text-slate-50' : 'text-slate-950'}`}>{locale.heroTitle}</h2>
              <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>{locale.heroDescription}</p>
            </div>
            <div className={infoCardClass}>
              <strong className="block text-xl font-semibold text-emerald-200">{locale.heroMetaTitle}</strong>
              <p className={`mt-3 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{locale.heroMetaBody}</p>
            </div>
          </header>

          <section className="space-y-6">
            <div>
              <h3 className={`text-2xl font-semibold tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-950'}`}>{locale.screenshots}</h3>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {mediaItems.map((item) => (
                <article key={item.label} className={cardClass}>
                  <img src={item.src} alt={item.label} className="aspect-[9/16] w-full object-cover" />
                  <div className="p-4">
                    <p className={`text-base font-medium ${isDark ? 'text-slate-100' : 'text-slate-950'}`}>{item.label}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={sectionClass}>
            <div className="space-y-4">
              <h3 className={`text-2xl font-semibold tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-950'}`}>{locale.demoTitle}</h3>
              <p className={`${isDark ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>{locale.demoDescription}</p>
            </div>
            <div>
              <video controls preload="metadata" poster={screen1} src={demoVideo} className={`w-full rounded-[26px] border border-emerald-500/15 ${isDark ? 'bg-slate-950' : 'bg-slate-100'}`} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
