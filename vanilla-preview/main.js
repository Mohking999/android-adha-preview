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
  { src: 'assets/Screenshot_2026-04-27-11-50-41-664_com.example.myapplication.jpg', label: 'Welcome screen' },
  { src: 'assets/Screenshot_2026-04-27-11-50-45-746_com.example.myapplication.jpg', label: 'Feature overview' },
  { src: 'assets/Screenshot_2026-04-27-11-51-05-396_com.example.myapplication.jpg', label: 'Form flow' },
  { src: 'assets/Screenshot_2026-04-27-11-51-10-054_com.example.myapplication.jpg', label: 'Detail view' },
  { src: 'assets/Screenshot_2026-04-27-11-51-19-776_com.example.myapplication.jpg', label: 'Settings preview' },
  { src: 'assets/Screenshot_2026-04-27-11-51-22-562_com.example.myapplication.jpg', label: 'User interaction' }
];

let currentLang = 'en';
let currentTheme = 'dark';

// DOM Elements
const gallery = document.getElementById('image-gallery');
const themeToggle = document.getElementById('theme-toggle');
const langButtons = document.querySelectorAll('#language-switcher .btn');

// Initial Render
function init() {
    renderGallery();
    updateTranslations();
    setupEventListeners();
}

function renderGallery() {
    gallery.innerHTML = mediaItems.map(item => `
        <article class="gallery-item">
            <img src="${item.src}" alt="${item.label}" loading="lazy">
            <div class="gallery-meta">${item.label}</div>
        </article>
    `).join('');
}

function updateTranslations() {
    const locale = translations[currentLang];
    
    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (locale[key]) {
            el.textContent = locale[key];
        }
    });

    // Handle special cases
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    // Update active button state
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });

    // Update theme toggle text based on current theme and language
    themeToggle.textContent = currentTheme === 'dark' ? locale.themeLight : locale.themeDark;
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.classList.toggle('dark-theme', currentTheme === 'dark');
    document.body.classList.toggle('light-theme', currentTheme === 'light');
    updateTranslations();
}

function setupEventListeners() {
    themeToggle.addEventListener('click', toggleTheme);
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = btn.getAttribute('data-lang');
            updateTranslations();
        });
    });
}

// Run on load
document.addEventListener('DOMContentLoaded', init);
