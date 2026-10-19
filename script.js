/* =====================================================
   PORTFOLIO SCRIPT
===================================================== */


/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("hide");

    }, 800);

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        menuButton.classList.toggle("open");
        navLinks.classList.toggle("active");

    });


    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            menuButton.classList.remove("open");
            navLinks.classList.remove("active");

        });

    });

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   ROLE TEXT ANIMATION
===================================================== */

const roleText = document.getElementById("roleText");

const roles = [
    "Full Stack Developer",
    "Data Analyst",
    "UI / UX Creator",
    "GenAI Explorer",
    "AI Agent Builder",
    "Creative Problem Solver"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeRole() {

    if (!roleText) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        roleText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeRole, 1800);

            return;

        }

        setTimeout(typeRole, 70);

    } else {

        roleText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

            setTimeout(typeRole, 400);

            return;

        }

        setTimeout(typeRole, 40);

    }

}


setTimeout(typeRole, 1200);


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(8, 8, 23, 0.92)";

    } else {

        navbar.style.background =
            "rgba(8, 8, 23, 0.7)";

    }

});


/* =====================================================
   PROJECT CARD TILT
===================================================== */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -3;

        const rotateY =
            ((x - centerX) / centerX) * 3;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-6px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "%c Sarubala B Portfolio ",
    "background:#8b5cf6;color:white;font-size:16px;font-weight:bold;padding:8px;"
);

console.log(
    "%c Build. Analyze. Design. Evolve. ",
    "color:#38d9ff;font-size:13px;font-weight:bold;"
);
/* =========================================================
   SKILLS FILTER INTERACTION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const filters =
        document.querySelectorAll(".skill-filter");

    filters.forEach(filter => {

        filter.addEventListener("click", () => {

            filters.forEach(item => {
                item.classList.remove("active");
            });

            filter.classList.add("active");

        });

    });


    /* =====================================================
       CARD 3D TILT
    ===================================================== */

    const cards =
        document.querySelectorAll(".skill-modern-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const rotateX =
                ((y / rect.height) - .5) * -4;

            const rotateY =
                ((x / rect.width) - .5) * 4;

            card.style.transform =
                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-4px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    /* =====================================================
       FLOATING NODE HOVER
    ===================================================== */

    const nodes =
        document.querySelectorAll(".floating-skill");

    nodes.forEach(node => {

        node.addEventListener("mouseenter", () => {

            node.style.transform = "scale(1.15)";
            node.style.boxShadow =
                "0 0 30px rgba(99,102,241,.45)";

        });

        node.addEventListener("mouseleave", () => {

            node.style.transform = "";
            node.style.boxShadow = "";

        });

    });

});
// ==========================================
// PROJECT FILTER SYSTEM
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const projectFilters = document.querySelectorAll(".project-filter");
    const projectCards = document.querySelectorAll(".project-card");

    if (!projectFilters.length || !projectCards.length) {
        return;
    }

    projectFilters.forEach(filter => {

        filter.addEventListener("click", () => {

            projectFilters.forEach(button => {
                button.classList.remove("active");
            });

            filter.classList.add("active");

            const selectedFilter =
                filter.getAttribute("data-filter");

            projectCards.forEach(card => {

                const categories =
                    card.getAttribute("data-category") || "";

                if (
                    selectedFilter === "all" ||
                    categories.includes(selectedFilter)
                ) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });

    });

});
/* ===== CERTIFICATE 3D COVERFLOW ===== */
const certs = [
    { title: 'Full Stack Development Internship', issuer: 'NoviTech R&D Pvt. Ltd.', date: 'December 2025', type: 'Internship', img: 'certificates/novitech-fullstack.jpeg' },
    { title: 'Machine Learning Internship', issuer: 'Arttifai Tech', date: 'July 2025', type: 'Internship', img: 'certificates/arttifai-ml.jpeg' },
    { title: 'Blockchain', issuer: 'ITronix Solutions', date: 'May 2026', type: 'Certification', img: 'certificates/blockchain.jpeg' },
    { title: 'Python for Data Science', issuer: 'ITronix Solutions', date: 'May 2026', type: 'Certification', img: 'certificates/python-ds.jpeg' },
    { title: 'Microsoft Advanced Excel', issuer: 'ITronix Solutions', date: 'January 2025', type: 'Certification', img: 'certificates/excel.jpeg' },
    { title: 'C & C++ Programming', issuer: 'ITronix Solutions', date: 'January 2025', type: 'Certification', img: 'certificates/cpp.jpeg' },
    { title: 'Generative AI Fundamentals', issuer: 'GUVI – SAWIT.AI Learnathon', date: '2024', type: 'Learnathon', img: 'certificates/guvi-genai.jpeg' }
];

const certStage = document.getElementById('certStage');
const certInfo = document.getElementById('certInfo');
const certDots = document.getElementById('certDots');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let current = 0;
let autoPlay;
const slides = [];
const dots = [];

certs.forEach((c, i) => {
    const slide = document.createElement('div');
    slide.className = 'cert-slide';
    slide.innerHTML = `<img src="${c.img}" alt="${c.title} certificate" draggable="false">`;

    slide.addEventListener('click', () => {
        if (i === current) openLightbox();
        else goTo(i);
    });

    slide.addEventListener('mousemove', (e) => {
        const r = slide.getBoundingClientRect();
        slide.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
        slide.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });

    certStage.appendChild(slide);
    slides.push(slide);

    const dot = document.createElement('span');
    dot.addEventListener('click', () => goTo(i));
    certDots.appendChild(dot);
    dots.push(dot);
});

function renderCerts() {
    const n = certs.length;

    slides.forEach((slide, i) => {
        let o = i - current;
        if (o > n / 2) o -= n;
        if (o < -n / 2) o += n;
        const a = Math.abs(o);

        slide.style.setProperty('--o', o);
        slide.style.setProperty('--a', Math.min(a, 3));
        slide.style.zIndex = 10 - a;
        slide.classList.toggle('active', o === 0);
        slide.classList.toggle('hidden', a > 2);
    });

    dots.forEach((d, i) => d.classList.toggle('active', i === current));

    const c = certs[current];
    document.getElementById('certBadge').textContent = c.type;
    document.getElementById('certTitle').textContent = c.title;
    document.getElementById('certIssuer').textContent = c.issuer;
    document.getElementById('certDate').textContent = c.date;

    const dl = document.getElementById('certDownload');
    dl.href = c.img;
    dl.download = c.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase() + '-certificate.jpeg';

    certInfo.classList.remove('swap');
    void certInfo.offsetWidth;
    certInfo.classList.add('swap');
}

function goTo(i) {
    current = (i + certs.length) % certs.length;
    renderCerts();
    restartAuto();
}

function restartAuto() {
    clearInterval(autoPlay);
    autoPlay = setInterval(() => goTo(current + 1), 4500);
}

function openLightbox() {
    lightboxImg.src = certs[current].img;
    lightbox.classList.add('open');
}

document.getElementById('certPrev').addEventListener('click', () => goTo(current - 1));
document.getElementById('certNext').addEventListener('click', () => goTo(current + 1));
document.getElementById('certView').addEventListener('click', openLightbox);

lightbox.addEventListener('click', () => lightbox.classList.remove('open'));

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') lightbox.classList.remove('open');
    if (e.key === 'ArrowLeft') goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
});

/* pause on hover */
const showcase = document.querySelector('.cert-showcase');
showcase.addEventListener('mouseenter', () => clearInterval(autoPlay));
showcase.addEventListener('mouseleave', restartAuto);

/* swipe for phones */
let startX = 0;
certStage.addEventListener('pointerdown', (e) => { startX = e.clientX; });
certStage.addEventListener('pointerup', (e) => {
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 50) goTo(current + (dx < 0 ? 1 : -1));
});

renderCerts();
restartAuto();s
/* Counter animation */
const statNums = document.querySelectorAll('.cert-stat b');

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const target = +el.dataset.count;
        let n = 0;

        const timer = setInterval(() => {
            n++;
            el.textContent = n;
            if (n >= target) clearInterval(timer);
        }, 150);

        statObserver.unobserve(el);
    });
}, { threshold: 0.6 });

statNums.forEach(el => statObserver.observe(el));
/* ===== CONTACT ===== */
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
const MY_EMAIL = 'YOUR_EMAIL@gmail.com';

/* click to copy */
document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
        const tag = btn.querySelector('.ct-tag');
        try {
            await navigator.clipboard.writeText(btn.dataset.copy);
            tag.textContent = 'Copied ✓';
        } catch {
            tag.textContent = 'Copy manually';
        }
        tag.style.opacity = 1;
        setTimeout(() => {
            tag.textContent = 'Click to copy';
            tag.style.opacity = '';
        }, 1800);
    });
});

/* form */
const ctForm = document.getElementById('ctForm');
const ctMsg = document.getElementById('ctMsg');
const ctCount = document.getElementById('ctCount');
const ctSend = document.getElementById('ctSend');

ctMsg.addEventListener('input', () => {
    ctCount.textContent = ctMsg.value.length + ' / 500';
});

ctForm.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('input', () => {
        el.closest('.ct-field')?.classList.remove('error');
    });
});

function ctFinish() {
    setTimeout(() => ctForm.classList.add('sent'), 600);
}

ctForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let ok = true;
    ctForm.querySelectorAll('.ct-field').forEach(field => {
        const input = field.querySelector('input, textarea');
        const value = input.value.trim();
        const bad = !value ||
            (input.type === 'email' && !/^\S+@\S+\.\S+$/.test(value));
        field.classList.toggle('error', bad);
        if (bad) ok = false;
    });
    if (!ok) return;

    ctSend.classList.add('sending');
    const data = new FormData(ctForm);

    if (FORM_ENDPOINT.includes('YOUR_FORM_ID')) {
        const subject = encodeURIComponent(
            '[Portfolio] ' + data.get('topic') + ' - ' + data.get('name')
        );
        const body = encodeURIComponent(
            data.get('message') + '\n\nFrom: ' + data.get('name') +
            ' (' + data.get('email') + ')'
        );
        window.location.href = 'mailto:' + MY_EMAIL +
            '?subject=' + subject + '&body=' + body;
        ctFinish();
        return;
    }

    try {
        const res = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            body: data,
            headers: { Accept: 'application/json' }
        });
        if (!res.ok) throw new Error('failed');
        ctFinish();
    } catch {
        ctSend.classList.remove('sending');
        alert('Could not send the message. Please email me directly.');
    }
});

document.getElementById('ctAgain').addEventListener('click', () => {
    ctForm.reset();
    ctCount.textContent = '0 / 500';
    ctForm.classList.remove('sent');
    ctSend.classList.remove('sending');
});
/* common header reveal */
document.querySelectorAll('.cert-head').forEach(head => {
    head.classList.add('js');

    const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            head.classList.add('show');
            io.disconnect();
        }
    }, { threshold: 0.25 });

    io.observe(head);
});
