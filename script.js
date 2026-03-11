// ========== DATA ==========
let skillCategories = [];
let experiences = [];
let projects = [];
let summaryText = '';
let contactInfo = {};
let heroData = {};

async function loadData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Unable to fetch data.json');
        const data = await response.json();
        skillCategories = data.skillCategories || [];
        experiences = data.experiences || [];
        projects = data.projects || [];
        summaryText = data.summaryText || '';
        contactInfo = data.contact || {};
        heroData = data.hero || {};
    } catch (err) {
        console.error('Error loading data.json', err);
    }
}

// ========== RENDER FUNCTIONS ==========
function renderSkills() {
    const container = document.getElementById("skillsGrid");
    if (!container) return;

    container.innerHTML = "";

    skillCategories.forEach((cat) => {
        const div = document.createElement("div");
        div.className = "skill-card";

        div.innerHTML = `
      <div class="skill-header">
        <h3>${cat.name}</h3>
        <span class="skill-count">${cat.skills.length} Skills</span>
      </div>
      <div class="skill-pills">
        ${cat.skills
                .map((s) => `<span class="skill-pill">${s}</span>`)
                .join("")}
      </div>
    `;
        container.appendChild(div);
    });
}

function renderExperience() {
    const container = document.getElementById("expCards");
    if (!container) return;
    experiences.forEach((exp) => {
        const card = document.createElement("div");
        card.className = "exp-card";
        card.innerHTML = `
      <h3>${exp.title} <span class="exp-date">${exp.date}</span></h3>
      <p style="color:#3b82f6; margin-bottom: 8px;">${exp.subtitle}</p>
      <div class="exp-desc"><ul>${exp.details
                .map((d) => `<li>${d}</li>`)
                .join("")}</ul></div>
    `;
        container.appendChild(card);
    });
    // freelance note
    const noteDiv = document.getElementById("freelanceNote");
    if (noteDiv)
        noteDiv.innerHTML =
            "<p><strong>Freelance highlights:</strong> 10+ published apps including Happy Shop, Delivery, Weather, Islamic Songs, Shafi'i Poems, My Tasks, Foodease, Doctors, and more.</p>";
}

function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;
    projects.forEach((proj, idx) => {
        const mockup = document.createElement("div");
        mockup.className = "phone-mockup";
        mockup.innerHTML = `
      <div class="phone-notch"><div class="notch-speaker"></div><div class="notch-camera"></div></div>
      <div class="phone-screen">
        <div class="lottie-flutter" id="lottieProj${idx}"></div>
        <div class="project-title">${proj.name}</div>
        <div class="project-links">
          ${proj.links.github
                ? `<a href="${proj.links.github}" target="_blank">GitHub</a>`
                : ""
            }
          ${proj.links.youtube
                ? `<a href="${proj.links.youtube}" target="_blank">YouTube</a>`
                : ""
            }
          ${proj.links.appStore
                ? `<a href="${proj.links.appStore}" target="_blank">App Store</a>`
                : ""
            }
          ${proj.links.playStore
                ? `<a href="${proj.links.playStore}" target="_blank">Google Play</a>`
                : ""
            }
          ${proj.links.site
                ? `<a href="${proj.links.site}" target="_blank">Web</a>`
                : ""
            }
        </div>
        <div class="project-desc">${proj.desc}</div>
        <div class="tech-pills">${proj.tech
                .map((t) => `<span class="tech-pill">${t}</span>`)
                .join("")}</div>
      </div>
    `;
        grid.appendChild(mockup);
        // load lottie after element added
        setTimeout(() => loadLottie(`lottieProj${idx}`, idx), 20);
    });
}

function renderSummary() {
    const sumDiv = document.getElementById("summaryCard");
    if (sumDiv)
        sumDiv.innerHTML = `<h3 style="font-size:1.8rem; font-weight:600; margin-bottom:16px;">📋 summary</h3><p style="color:#1f3a5f; font-size:1rem;">${summaryText}</p>`;
}

function renderHero() {
    if (!heroData) return;
    // document title
    if (heroData.name && heroData.job) {
        document.title = `${heroData.name} · ${heroData.job}`;
    }
    const nameEl = document.getElementById("heroName");
    if (nameEl) nameEl.textContent = heroData.name || "";
    const jobEl = document.getElementById("heroJob");
    if (jobEl) jobEl.textContent = heroData.job || "";
    const badgeEl = document.getElementById("heroBadge");
    if (badgeEl) badgeEl.textContent = heroData.badge || "";
    const objEl = document.getElementById("heroObjective");
    if (objEl) objEl.innerHTML = `<p style=\"font-size: 1.1rem;\"><strong>🎯 Objective</strong><br>${heroData.objective || ""}</p>`;
    const eduEl = document.getElementById("heroEducation");
    if (eduEl && heroData.education) {
        eduEl.innerHTML = `<p><strong>🎓 ${heroData.education.university}</strong> (${heroData.education.years}) — ${heroData.education.degree}</p>`;
    }
    const snippetEl = document.getElementById("heroSnippet");
    if (snippetEl) {
        snippetEl.innerHTML = `
            <span class=\"keyword\">class</span> <span style=\"color:#2563eb;\">${heroData.snippetName || ""}</span> {<br>
            &nbsp;&nbsp;<span class=\"keyword\">final</span> name = <span class=\"string\">'${heroData.name}'</span>;<br>
            &nbsp;&nbsp;<span class=\"keyword\">final</span> experience = <span class=\"string\">'${heroData.snippetExperience}'</span>;<br>
            }
        `;
    }
}

function renderContacts() {
    if (!contactInfo) return;
    // hero bar
    const heroBar = document.getElementById("heroContacts");
    if (heroBar) {
        heroBar.innerHTML = `
            <span>📧 <a href="mailto:${contactInfo.email}">${contactInfo.email}</a></span>
            <span>📞 <a href="tel:${contactInfo.phone}">${contactInfo.phone}</a></span>
            <span>🔗 <a href="${contactInfo.linkedin}" target="_blank">LinkedIn</a></span>
            <span>🐙 <a href="${contactInfo.github}" target="_blank">GitHub</a></span>
            <span>🌐 <a href="${contactInfo.portfolio}" target="_blank">Portfolio</a></span>
        `;
    }
    // contact section left column
    const contactLeft = document.getElementById("contactLeft");
    if (contactLeft) {
        // show name too if desired
        contactLeft.innerHTML = `
            <h2>Let's connect</h2>
            <p style="color:#3e5982;">Open for freelance or full‑time opportunities.</p>
            <div class="contact-item"><span class="contact-icon">📧</span><a href="mailto:${contactInfo.email}">${contactInfo.email}</a></div>
            <div class="contact-item"><span class="contact-icon">📱</span><a href="tel:${contactInfo.phone}">${contactInfo.phone}</a></div>
            <div class="contact-item"><span class="contact-icon">💼</span><a href="${contactInfo.linkedin}" target="_blank">${contactInfo.linkedin.replace('https://', '')}</a></div>
            <div class="contact-item"><span class="contact-icon">🐙</span><a href="${contactInfo.github}" target="_blank">${contactInfo.github.replace('https://', '')}</a></div>
            <div class="contact-item"><span class="contact-icon">🌐</span><a href="${contactInfo.portfolio}" target="_blank">${contactInfo.portfolio.replace('https://', '')}</a></div>
        `;
    }
}

// ========== LOTTIE HELPER ==========
const lottiePaths = [
    "https://assets2.lottiefiles.com/packages/lf20_p1qiuao7.json",
    "https://assets9.lottiefiles.com/packages/lf20_yr6pp3.json",
    "https://assets4.lottiefiles.com/packages/lf20_q5e3yqij.json",
    "https://assets6.lottiefiles.com/packages/lf20_tfbztqlg.json",
    "https://assets1.lottiefiles.com/packages/lf20_ikxLpT.json"
];

function loadLottie(containerId, index) {
    const el = document.getElementById(containerId);
    if (el && typeof lottie !== "undefined") {
        lottie.loadAnimation({
            container: el,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: lottiePaths[index % lottiePaths.length]
        });
    }
}

// ========== CURSOR ==========
function initCursor() {
    const cursor = document.getElementById("customCursor");
    if (!cursor) return;
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
    document
        .querySelectorAll("a, .phone-mockup, .skill-pill, .nav-links a")
        .forEach((el) => {
            el.addEventListener("mouseenter", () =>
                cursor.classList.add("cursor--active")
            );
            el.addEventListener("mouseleave", () =>
                cursor.classList.remove("cursor--active")
            );
        });
}

// ========== NAV SCROLL ==========
function initNavScroll() {
    const nav = document.getElementById("floatingNav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
    });
}

// ========== REVEAL ON SCROLL ==========
function initReveal() {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("reveal");
            });
        },
        { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    // force check after load
    setTimeout(() => {
        sections.forEach((sec) => {
            const rect = sec.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) sec.classList.add("reveal");
        });
    }, 200);
}

// ========== SMOOTH ANCHOR ==========
function initSmoothAnchor() {
    document.querySelectorAll(".nav-links a").forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            const id = anchor.getAttribute("href").substring(1);
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        });
    });
}

// ========== CONTACT FORM SUBMISSION (Using mailto:) ==========
function initContactForm() {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const service = document.getElementById("service").value;
        const details = document.getElementById("details").value;

        const subject = encodeURIComponent(
            `Project Inquiry: ${service} from ${name}`
        );
        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Phone: ${phone}\n` +
            `Service/App Type: ${service}\n\n` +
            `Project Details:\n${details}`
        );

        const mailtoLink = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;

        // Show feedback
        status.textContent = "✅ Opening your email client...";
        status.style.color = "#10b981";

        // Open mailto link
        window.location.href = mailtoLink;

        // Reset form after a delay
        setTimeout(() => {
            form.reset();
        }, 1000);
    });
}

// ========== INIT ==========
window.addEventListener("DOMContentLoaded", async () => {
    await loadData();
    renderHero();
    renderContacts();
    renderSkills();
    renderExperience();
    renderProjects();
    renderSummary();
    // load contact lottie
    loadLottie("contactLottie", 2);
    initCursor();
    initNavScroll();
    initReveal();
    initSmoothAnchor();
    initContactForm();
});
document.addEventListener("click", (e) => {
    const card = e.target.closest(".skill-card");
    if (card) {
        card.classList.toggle("active");
    }
});
