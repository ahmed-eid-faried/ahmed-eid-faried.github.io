// ========== DATA ==========
// Skills categories (from CV)
const skillCategories = [
    { name: 'Dart & core', skills: ['Dart', 'OOP', 'SOLID', 'Problem Solving', 'Data Structures'] },
    { name: 'Flutter & UI', skills: ['Animations', 'Notifications', 'Deployment', 'Lottie', 'Responsive Design', 'Material/Cupertino', 'Splash Screen'] },
    { name: 'State management', skills: ['GetX', 'Provider', 'BLoC', 'MVC', 'Clean Code', 'Clean Architecture'] },
    { name: 'Firebase', skills: ['Authentication', 'Cloud Firestore', 'Realtime DB', 'Cloud Messaging', 'Analytics', 'Crashlytics', 'App Distribution'] },
    { name: 'API & backend', skills: ['RESTful APIs', 'JSON', 'Postman', 'Thunder Client', 'MySQL', 'PHP (API)', 'JWT', 'OAuth2'] },
    { name: 'Local storage', skills: ['SQLite', 'Shared Preferences', 'Hive', 'GetStorage'] },
    { name: 'Testing & tools', skills: ['Unit Testing', 'Widget Testing', 'Integration Testing', 'Firebase Crashlytics', 'Flutter DevTools'] },
    { name: 'CI/CD & versioning', skills: ['Git', 'GitHub', 'Codemagic', 'Flutter CLI', 'Flutterfire CLI', 'Agile/Jira'] },
    { name: 'Location & maps', skills: ['Geolocator', 'Geocoding', 'Google Maps', 'Polyline'] },
    { name: 'Additional', skills: ['i18n', 'Localization', 'Middleware', 'Webviews', 'URL Launcher', 'CachedNetworkImage', 'ImagePicker', 'Fluttertoast'] },
    { name: 'Design & IDE', skills: ['UI/UX', 'Adobe XD', 'Figma', 'VSCode', 'Android Studio', 'Xcode'] },
    { name: 'Store & deployment', skills: ['App Store Connect', 'Google Play Console', 'Firebase App Distribution'] }
];

// Experience
const experiences = [
    {
        title: 'Bishyaka',
        date: 'Nov 2023 – present',
        subtitle: 'Flutter Developer · On‑site, Egypt',
        details: [
            'Building e‑commerce solutions for Bishyaka (consumer & vendor) – iOS, Android, web.',
            'Implement BLoC, SOLID, clean architecture for high performance & maintainability.',
            'Integrate real‑time notifications, OAuth2, third‑party APIs, and animations.',
            'Optimize responsive layouts and collaborate closely with the team.'
        ]
    },
    {
        title: 'Freelance',
        date: 'Nov 2021 – present',
        subtitle: 'Flutter Developer · Remote',
        details: [
            'Delivered end‑to‑end apps using MVC, Clean Architecture, GetX, Provider, BLoC.',
            'Integrated REST APIs, Firebase, MySQL, PHP, maps, payments (Stripe/PayPal).',
            'Applied SOLID principles, clean code, and version control with Git/GitHub.',
            'Collaborated with clients to understand needs, deployed to stores.'
        ]
    }
];

// Projects data (12 projects)
const projects = [
    { name: 'Bishyaka Fashion', desc: 'E‑commerce fashion for iOS/Android/web. BLoC, Firebase, SQLite, OAuth2.', tech: ['BLoC', 'Dio', 'OAuth2', 'Codemagic'], links: { appStore: 'https://apps.apple.com/eg/app/bishyaka-fashion/id6738314712', playStore: 'https://play.google.com/store/apps/details?id=com.bishyaka.consumer.work&hl=ar' } },
    { name: 'Bishyaka Vendors', desc: 'Store management for sellers – product upload, order tracking. (Under development)', tech: ['BLoC', 'Firebase', 'SQLite', 'Clean Arch'], links: {} },
    { name: 'Happy Shop', desc: 'Shopping with maps, notifications, GetX, Stripe/PayPal.', tech: ['GetX', 'Geolocator', 'Lottie', 'Payments'], links: { github: 'https://github.com/ahmed-eid-faried/happyshop', youtube: 'https://www.youtube.com/watch?v=RuvCCDwtgtQ' } },
    { name: 'Delivery', desc: 'Live order tracking, polyline, GetX, Firebase notifications.', tech: ['GetX', 'Maps', 'Polyline', 'Geolocator'], links: { github: 'https://github.com/ahmed-eid-faried/delivery', youtube: 'https://www.youtube.com/watch?v=tg2oO5aPWwI' } },
    { name: 'Foodease', desc: 'Food delivery (WIP): BLoC, clean architecture, FCM, local notifs.', tech: ['BLoC', 'Clean Arch', 'Dio', 'FCM'], links: { github: 'https://github.com/ahmed-eid-faried/foodease' } },
    { name: 'Doctors', desc: 'Telemedicine, WebRTC, BLoC, maps, localization.', tech: ['BLoC', 'WebRTC', 'Firebase', 'Maps'], links: { github: 'https://github.com/ahmed-eid-faried/doctor' } },
    { name: 'Shafi\'i Poems', desc: 'Religious poems, Provider, screen utils, native splash.', tech: ['Provider', 'ScreenUtil', 'Assets'], links: { github: 'https://github.com/ahmed-eid-faried/shafii', youtube: 'https://www.youtube.com/watch?v=dQrDuOSBGrA' } },
    { name: 'Islamic Songs', desc: 'Audio streaming, GetX, just_audio, Firebase Crashlytics.', tech: ['GetX', 'Just Audio', 'StreamBuilder'], links: { youtube: 'https://www.youtube.com/watch?v=rgzgK5Q07lY' } },
    { name: 'Portfolio App', desc: 'Flutter portfolio with animations, GetX, Lottie, URL launcher.', tech: ['GetX', 'Animate_do', 'Lottie'], links: { github: 'https://github.com/ahmed-eid-faried/my_portfolio', site: 'https://ahmed-eid-faried.github.io' } },
    { name: 'My Tasks', desc: 'Task manager with Provider, calendar, animations.', tech: ['Provider', 'Syncfusion', 'GetStorage'], links: { github: 'https://github.com/ahmed-eid-faried/mytasks', youtube: 'https://www.youtube.com/watch?v=qkkB0egPwqU' } },
    { name: 'Weather', desc: 'Weather forecasts with GetX, geolocation, shared_prefs.', tech: ['GetX', 'Geocoding', 'HTTP'], links: { github: 'https://github.com/ahmed-eid-faried/weather', youtube: 'https://www.youtube.com/watch?v=4jHMKkqxFQw' } },
    { name: 'News App', desc: 'News with GetX, webviews, Lottie, location services.', tech: ['GetX', 'Webview', 'Lottie', 'Geolocator'], links: { github: 'https://github.com/ahmed-eid-faried/news-app', youtube: 'https://www.youtube.com/watch?v=Nj2HyHwXijg' } }
];

// Summary text (from CV)
const summaryText = `Experienced Flutter Developer skilled in Dart, OOP, and Solid Principles, proficient in problem-solving and data structures. Demonstrated expertise in Flutter, including animations, notifications, and deployment, coupled with strong proficiency in handling RESTful APIs, JSON, Postman, and Thunder Client, along with MySQL and PHP for API integration. Well-versed in state management techniques, including Getx, Provider, and Bloc pattern, with a solid grasp of design patterns, such as MVC, and a commitment to clean code and clean architecture. Proficient in Firebase services, debugging, various testing methodologies, Git, GitHub, UI/UX tools like Adobe XD and Figma, and adept in communication in English. Experienced in CI/CD, Agile development methodologies, and working with Jira for efficient project management.`;

// ========== RENDER FUNCTIONS ==========
function renderSkills() {
    const container = document.getElementById('skillsGrid');
    if (!container) return;
    skillCategories.forEach(cat => {
        const div = document.createElement('div');
        div.className = 'skill-cat';
        div.innerHTML = `<h3>${cat.name}</h3><div class="skill-pills">${cat.skills.map(s => `<span class="skill-pill">${s}</span>`).join('')}</div>`;
        container.appendChild(div);
    });
}

function renderExperience() {
    const container = document.getElementById('expCards');
    if (!container) return;
    experiences.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'exp-card';
        card.innerHTML = `
      <h3>${exp.title} <span class="exp-date">${exp.date}</span></h3>
      <p style="color:#3b82f6; margin-bottom: 8px;">${exp.subtitle}</p>
      <div class="exp-desc"><ul>${exp.details.map(d => `<li>${d}</li>`).join('')}</ul></div>
    `;
        container.appendChild(card);
    });
    // freelance note
    const noteDiv = document.getElementById('freelanceNote');
    if (noteDiv) noteDiv.innerHTML = '<p><strong>Freelance highlights:</strong> 10+ published apps including Happy Shop, Delivery, Weather, Islamic Songs, Shafi\'i Poems, My Tasks, Foodease, Doctors, and more.</p>';
}

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    projects.forEach((proj, idx) => {
        const mockup = document.createElement('div');
        mockup.className = 'phone-mockup';
        mockup.innerHTML = `
      <div class="phone-notch"><div class="notch-speaker"></div><div class="notch-camera"></div></div>
      <div class="phone-screen">
        <div class="lottie-flutter" id="lottieProj${idx}"></div>
        <div class="project-title">${proj.name}</div>
        <div class="project-links">
          ${proj.links.github ? `<a href="${proj.links.github}" target="_blank">GitHub</a>` : ''}
          ${proj.links.youtube ? `<a href="${proj.links.youtube}" target="_blank">YouTube</a>` : ''}
          ${proj.links.appStore ? `<a href="${proj.links.appStore}" target="_blank">App Store</a>` : ''}
          ${proj.links.playStore ? `<a href="${proj.links.playStore}" target="_blank">Google Play</a>` : ''}
          ${proj.links.site ? `<a href="${proj.links.site}" target="_blank">Web</a>` : ''}
        </div>
        <div class="project-desc">${proj.desc}</div>
        <div class="tech-pills">${proj.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}</div>
      </div>
    `;
        grid.appendChild(mockup);
        // load lottie after element added
        setTimeout(() => loadLottie(`lottieProj${idx}`, idx), 20);
    });
}

function renderSummary() {
    const sumDiv = document.getElementById('summaryCard');
    if (sumDiv) sumDiv.innerHTML = `<h3 style="font-size:1.8rem; font-weight:600; margin-bottom:16px;">📋 summary</h3><p style="color:#1f3a5f; font-size:1rem;">${summaryText}</p>`;
}

// ========== LOTTIE HELPER ==========
const lottiePaths = [
    'https://assets2.lottiefiles.com/packages/lf20_p1qiuao7.json',
    'https://assets9.lottiefiles.com/packages/lf20_yr6pp3.json',
    'https://assets4.lottiefiles.com/packages/lf20_q5e3yqij.json',
    'https://assets6.lottiefiles.com/packages/lf20_tfbztqlg.json',
    'https://assets1.lottiefiles.com/packages/lf20_ikxLpT.json'
];

function loadLottie(containerId, index) {
    const el = document.getElementById(containerId);
    if (el && typeof lottie !== 'undefined') {
        lottie.loadAnimation({ container: el, renderer: 'svg', loop: true, autoplay: true, path: lottiePaths[index % lottiePaths.length] });
    }
}

// ========== CURSOR ==========
function initCursor() {
    const cursor = document.getElementById('customCursor');
    if (!cursor) return;
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    document.querySelectorAll('a, .phone-mockup, .skill-pill, .nav-links a').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor--active'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor--active'));
    });
}

// ========== NAV SCROLL ==========
function initNavScroll() {
    const nav = document.getElementById('floatingNav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });
}

// ========== REVEAL ON SCROLL ==========
function initReveal() {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('reveal');
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -80px 0px' });
    sections.forEach(s => observer.observe(s));
    // force check after load
    setTimeout(() => {
        sections.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) sec.classList.add('reveal');
        });
    }, 200);
}

// ========== SMOOTH ANCHOR ==========
function initSmoothAnchor() {
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const id = anchor.getAttribute('href').substring(1);
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// ========== CONTACT FORM SUBMISSION (Using Formspree) ==========
function initContactForm() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerText = 'Sending...';
        status.textContent = 'Processing your message...';
        status.style.color = '#3b82f6';

        try {
            // Using Formspree - You can replace the email here if needed
            // To use Formspree without a hash, you just send to this URL
            // and you will receive a verification email to activate it.
            const response = await fetch('https://formspree.io/f/ahmed_mady22@icloud.com', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.textContent = '✅ Message sent successfully! I will get back to you soon.';
                status.style.color = '#10b981';
                form.reset();
            } else {
                const data = await response.json();
                if (data.errors) {
                    status.textContent = '❌ Error: ' + data.errors.map(error => error.message).join(', ');
                } else {
                    status.textContent = '❌ Failed to send message. Please try again.';
                }
                status.style.color = '#ef4444';
            }
        } catch (error) {
            status.textContent = '❌ An error occurred. Please check your connection.';
            status.style.color = '#ef4444';
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerText = 'Send Message';
        }
    });
}

// ========== INIT ==========
window.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderExperience();
    renderProjects();
    renderSummary();
    // load contact lottie
    loadLottie('contactLottie', 2);
    initCursor();
    initNavScroll();
    initReveal();
    initSmoothAnchor();
    initContactForm();
});