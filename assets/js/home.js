document.documentElement.classList.add("js");

// --- language toggle ---
function applyLang(lang) {
  const isEn = lang !== 'zh';
  const current = isEn ? 'en' : 'zh';

  document.documentElement.setAttribute('data-lang-active', current);
  document.documentElement.lang = current;

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang-btn') === current);
  });

  const thumb = document.querySelector('[data-lang-thumb]');
  if (thumb) thumb.style.transform = isEn ? 'translateX(0%)' : 'translateX(100%)';
}

document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
  btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang-btn')));
});

applyLang('en');

// --- scroll progress ---
const progressBar = document.querySelector("[data-progress]");

function updateProgress() {
  const root = document.documentElement;
  const available = root.scrollHeight - root.clientHeight;
  const progress = available > 0 ? root.scrollTop / available : 0;

  if (progressBar) {
    progressBar.style.transform = `scaleX(${Math.min(1, progress)})`;
  }
}

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

// --- reveal on scroll ---
const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// --- nav scroll-spy ---
const navLinks = [...document.querySelectorAll("[data-nav]")];
const sections = navLinks
  .map((link) => document.getElementById(link.dataset.nav))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const navigationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.dataset.nav === entry.target.id);
        });
      });
    },
    { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
  );

  sections.forEach((section) => navigationObserver.observe(section));
}

// --- cursor glow ---
const cursor = document.querySelector("[data-cursor]");
if (cursor && window.matchMedia && window.matchMedia("(pointer: fine)").matches) {
  let cx = 0, cy = 0, tx = 0, ty = 0, raf = null;
  const loop = () => {
    cx += (tx - cx) * 0.12;
    cy += (ty - cy) * 0.12;
    cursor.style.transform = `translate(${cx}px, ${cy}px)`;
    raf = requestAnimationFrame(loop);
  };
  window.addEventListener("mousemove", (ev) => {
    tx = ev.clientX;
    ty = ev.clientY;
    cursor.style.opacity = "1";
    if (!raf) loop();
  }, { passive: true });
}
