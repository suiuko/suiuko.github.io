document.documentElement.classList.add("js");

const HP_TXT = {
  en: {
    navAbout: 'About', navResearch: 'Research', navEducation: 'Education', navNews: 'News', navPapers: 'Papers', navDemos: 'Demos', navHonors: 'Honors',
    heroEyebrow: 'Embodied Intelligence · Robotics',
    heroDescPre: 'PhD student in ', heroDescBold: 'embodied intelligence',
    heroDescPost: ' at the University of Sussex (CSC-funded), and visiting researcher at Shanghai Jiao Tong University · HIROL Lab. Building the bridge from language to low-level robot control.',
    heroTagline: "Funny performer · Nature's recorder · Novice of embodied intelligence",
    ctaScholar: 'Google Scholar →', ctaGithub: 'GitHub', ctaEmail: 'Email',
    statPapersLabel: 'Papers', statLabsLabel: 'Labs', statLocationValue: 'Shanghai', statLocationLabel: 'Based in China',
    openCollab: 'Open to collab',
    aboutTitle: 'About',
    aboutP1: 'I am a PhD student at the University of Sussex (funded by CSC), where I received my MSc in Robotics in June 2025. I conduct research on embodied intelligence in the Autonomous Intelligence & Robotic Embodiment Lab, supervised by Prof. Bao Kha Nguyen.',
    aboutP2: "I am also a visiting doctoral student at the School of Artificial Intelligence, Shanghai Jiao Tong University (HIROL Lab), supervised by Prof. Lian Wenzhao. As a newcomer to embodied intelligence, I'm eager to learn from senior researchers and peers — if you're interested in my work, please feel free to reach out.",
    researchTitle: 'Research Orientation', researchSubtitle: 'Embodied AI & Multimodal Foundation Models',
    research1: 'Leveraging Large Vision-Language Models (LVLMs) for embodied reasoning and decision-making.',
    research2: 'Instruction following and long-horizon planning in complex environments (VLN).',
    research3: 'Parameter-efficient fine-tuning (PEFT) and alignment of foundation models for robotics tasks.',
    research4: 'Bridging the gap between high-level linguistic instructions and low-level control policies.',
    research5: 'Cross-modal representation learning for embodied agents in 3D environments.',
    eduExpTitle: 'Education & Experience',
    edu1Date: '2025.10 — Present', edu1Title: 'PhD Student', edu1Sub: 'University of Sussex, UK',
    edu2Date: '2023.09 — 2025.06', edu2Title: 'MSc in Robotics', edu2Sub: 'University of Sussex, UK',
    edu3Date: '2017.09 — 2021.06', edu3Title: 'BEng, Computer Science & Technology', edu3Sub: 'Henan Normal University, China',
    exp1Date: '2025.09 — Now', exp1Title: 'Visiting Student', exp1Sub: 'SJTU · School of AI · HIROL Lab',
    exp2Date: '2025.03 — 2025.09', exp2Title: 'Research Assistant', exp2Sub: 'SJTU · School of AI · HIROL Lab',
    exp2Desc: 'Embodied intelligence platform: hand-eye calibration, underlying interface programming for different robots, motion-capture system, object marking & data acquisition.',
    newsTitle: 'News', news1Date: '2026.02', news1Text: 'One paper accepted by ICRA 2026 🎉',
    news2Date: '2025.06', news2Text: 'Received funding from the China Scholarship Council (CSC) 🎉',
    pubsTitle: 'Publications', readPaper: 'Read paper →',
    demosTitle: 'Demos', demoShowLink: 'DemoShow →', watchYoutube: '▶ Watch on YouTube',
    honorsTitle: 'Honors & Awards',
    honor1Date: '2025', honor1Text: 'CSC Government Scholarship for Doctoral Studies Abroad',
    honor2Date: '2025 · Top 1%', honor2Text: "Sussex University Dean's Scholarship",
    honor3Date: '2025 · Top 5%', honor3Text: 'Sussex University International Doctoral Scholarship',
    reviewerFor: 'Reviewer for',
    footerTitle: "Let's build embodied intelligence together.",
    footerDesc: "Interested in my work, or thinking about collaboration? I'd love to hear from you.",
    footerBottomLeft: 'Gaojing Zhang · Shanghai, China', footerBottomRight: 'Embodied Intelligence · Robotics · © 2026'
  },
  zh: {
    navAbout: '关于', navResearch: '研究方向', navEducation: '教育经历', navNews: '动态', navPapers: '论文', navDemos: 'Demo', navHonors: '荣誉',
    heroEyebrow: '具身智能 · 机器人',
    heroDescPre: '', heroDescBold: '具身智能',
    heroDescPost: ' 方向博士生,苏塞克斯大学(国家留学基金委资助),上海交通大学 HIROL 实验室访问研究员。致力于打通语言指令与底层机器人控制之间的桥梁。',
    heroTagline: '有趣的表演者 · 自然的记录者 · 具身智能的新人',
    ctaScholar: '谷歌学术 →', ctaGithub: 'GitHub', ctaEmail: '邮箱',
    statPapersLabel: '论文', statLabsLabel: '实验室', statLocationValue: '上海', statLocationLabel: '常驻中国',
    openCollab: '欢迎交流合作',
    aboutTitle: '关于我',
    aboutP1: '我是英国苏塞克斯大学的博士生(由国家留学基金委资助),已于2025年6月获得该校机器人学硕士学位。目前在“自主智能与机器人具身实验室”从事具身智能相关研究,导师为 Bao Kha Nguyen 教授。',
    aboutP2: '同时,我也是上海交通大学人工智能学院(HIROL 实验室)的访问博士生,导师为廉文兆教授。作为具身智能领域的新人,我渴望向前辈和同行学习——如果你对我的研究感兴趣,欢迎随时联系我。',
    researchTitle: '研究方向', researchSubtitle: '具身智能 & 多模态基础模型',
    research1: '利用大型视觉-语言模型(LVLM)进行具身推理与决策。',
    research2: '复杂环境下的指令跟随与长时程规划(视觉语言导航,VLN)。',
    research3: '面向机器人任务的基础模型参数高效微调(PEFT)与对齐。',
    research4: '弥合高层语言指令与底层控制策略之间的鸿沟。',
    research5: '面向具身智能体的三维环境跨模态表征学习。',
    eduExpTitle: '教育经历 & 科研经历',
    edu1Date: '2025.10 — 至今', edu1Title: '博士研究生', edu1Sub: '英国苏塞克斯大学',
    edu2Date: '2023.09 — 2025.06', edu2Title: '机器人学硕士', edu2Sub: '英国苏塞克斯大学',
    edu3Date: '2017.09 — 2021.06', edu3Title: '计算机科学与技术学士', edu3Sub: '河南师范大学',
    exp1Date: '2025.09 — 至今', exp1Title: '访问学生', exp1Sub: '上海交通大学 · 人工智能学院 · HIROL实验室',
    exp2Date: '2025.03 — 2025.09', exp2Title: '科研助理', exp2Sub: '上海交通大学 · 人工智能学院 · HIROL实验室',
    exp2Desc: '具身智能平台建设:手眼标定模块、多类型机器人底层接口编程、动作捕捉系统、物体标注与数据采集。',
    newsTitle: '最新动态', news1Date: '2026.02', news1Text: '一篇论文被 ICRA 2026 录用 🎉',
    news2Date: '2025.06', news2Text: '获得国家留学基金委(CSC)资助 🎉',
    pubsTitle: '论文发表', readPaper: '阅读论文 →',
    demosTitle: 'Demo 演示', demoShowLink: '查看 DemoShow →', watchYoutube: '▶ 前往 YouTube 观看',
    honorsTitle: '荣誉与奖项',
    honor1Date: '2025', honor1Text: '国家留学基金委公派出国攻读博士学位奖学金',
    honor2Date: '2025 · 前1%', honor2Text: '苏塞克斯大学院长奖学金',
    honor3Date: '2025 · 前5%', honor3Text: '苏塞克斯大学国际博士奖学金',
    reviewerFor: '担任审稿人',
    footerTitle: '一起探索具身智能的未来。',
    footerDesc: '如果你对我的研究感兴趣,或想探讨合作机会,欢迎随时与我联系。',
    footerBottomLeft: 'Gaojing Zhang · 中国上海', footerBottomRight: '具身智能 · 机器人 · © 2026'
  }
};

const HP_PUBS = [
  { badge: 'IROS 2026', img: 'images/FSAG.png', hasLink: true, link: 'https://arxiv.org/abs/2601.08246',
    title: 'FSAG: Enhancing Human-to-Dexterous-Hand Finger-Specific Affordance Grounding via Diffusion Models',
    desc: { en: 'A data-efficient framework that bypasses robot grasp-data collection by exploiting the rich, object-centric semantic priors latent in pretrained generative diffusion models.',
            zh: '提出一种数据高效框架,利用预训练生成式扩散模型中蕴含的丰富、以物体为中心的语义先验,从而绕过机器人抓取数据的采集过程。' } },
  { badge: 'ICRA 2026', img: 'images/SAGE.png', hasLink: true, link: 'https://arxiv.org/abs/2509.21928',
    title: 'SAGE: Scene Graph-Aware Guidance and Execution for Long-Horizon Manipulation Tasks',
    desc: { en: 'A novel framework for scene graph-aware guidance and execution, targeting reliable long-horizon manipulation.',
            zh: '提出 SAGE——一种面向长时程操作任务、具备场景图感知能力的引导与执行新框架。' } },
  { badge: 'ICRA 2025', img: 'images/1.png', hasLink: true, link: 'https://arxiv.org/pdf/2503.18640',
    title: 'LLGS: Unsupervised Gaussian Splatting for Image Enhancement and Reconstruction in Pure Dark Environment',
    desc: { en: 'An unsupervised multi-view stereoscopic system based on Gaussian Splatting — Low-Light Gaussian Splatting — for reconstruction in near-total darkness.',
            zh: '提出一种基于高斯泼溅(Gaussian Splatting)的无监督多视角立体视觉系统——低光高斯泼溅,用于纯黑暗环境下的图像增强与重建。' } },
  { badge: 'SMC 2026', img: 'images/Meta-scoop.png', hasLink: false, link: '',
    title: 'Meta-Scoop: A Coarse-to-Precise Policy Learning Framework for Precision Scooping Across Task Variations',
    desc: { en: 'A coarse-to-precise framework enabling precise scooping operations across diverse task variations.',
            zh: '提出一种由粗到精的策略学习框架,在多种任务变化下实现精确的舀取操作。' } },
  { badge: 'SMC 2026', img: 'images/triplet2track.png', hasLink: false, link: '',
    title: 'Triplet2Track: A Hierarchical System with Object-Centric Representations for Reliable Long-Horizon Manipulation',
    desc: { en: 'The Triplet-to-Track System (TTS): a closed-loop long-horizon imitation-learning system that uses human videos to reduce reliance on robot-collected data.',
            zh: '提出 Triplet-to-Track 系统(TTS)——一种闭环长时程模仿学习系统,利用人类视频演示降低对机器人采集数据的依赖。' } }
];

const HP_DEMOS = [
  { badge: 'DEMO 01', img: 'images/demo1.png', video: 'https://youtu.be/GQYh7c9oYgs',
    caption: { en: 'Using a Franka arm to complete the tangram puzzle.', zh: '使用 Franka 机械臂完成七巧板拼图任务。' } },
  { badge: 'DEMO 02', img: 'images/demo2.png', video: 'https://youtu.be/jhvoWl9s4Rs',
    caption: { en: 'A dual-arm robot (Monte) completing pick-and-place via GraspNet.', zh: '使用双臂机器人 Monte,通过 GraspNet 完成抓取放置任务。' } },
  { badge: 'DEMO 03', img: 'images/demo3.png', video: 'https://youtu.be/dRTGVeQAtf0',
    caption: { en: 'Using a VLM to make the decision: should we suck or grab?', zh: '利用视觉语言模型(VLM)进行决策:该吸取还是抓取?' } }
];

let currentLang = 'en';
let revealObserver = null;

function attachRevealObserver(scope) {
  if (!scope) return;
  const items = scope.hasAttribute && scope.hasAttribute('data-reveal') ? [scope] : scope.querySelectorAll('[data-reveal]');

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
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
  }

  items.forEach((item) => revealObserver.observe(item));
}

function renderLists(lang) {
  const t = HP_TXT[lang];

  const pubList = document.querySelector('[data-list="publications"]');
  if (pubList) {
    pubList.innerHTML = HP_PUBS.map((pub) => {
      const titleMarkup = pub.hasLink
        ? `<a class="pub-title" href="${pub.link}" target="_blank" rel="noopener">${pub.title}</a>`
        : `<span class="pub-title">${pub.title}</span>`;
      const readMore = pub.hasLink
        ? `<a class="mono-link" href="${pub.link}" target="_blank" rel="noopener">${t.readPaper}</a>`
        : '';
      return `<article class="glass-card pub-card" data-reveal>
        <div class="pub-image">
          <div class="pub-badge">${pub.badge}</div>
          <img src="${pub.img}" alt="${pub.title}">
        </div>
        <div class="pub-body">
          ${titleMarkup}
          <p class="pub-desc">${pub.desc[lang]}</p>
          ${readMore}
        </div>
      </article>`;
    }).join('');
  }

  const demoGrid = document.querySelector('[data-list="demos"]');
  if (demoGrid) {
    demoGrid.innerHTML = HP_DEMOS.map((demo) => `
      <article class="glass-card demo-card" data-reveal>
        <div class="demo-image">
          <div class="demo-badge">${demo.badge}</div>
          <img src="${demo.img}" alt="${demo.caption[lang]}">
        </div>
        <div class="demo-body">
          <p class="demo-caption">${demo.caption[lang]}</p>
          <a class="mono-link" href="${demo.video}" target="_blank" rel="noopener">${t.watchYoutube}</a>
        </div>
      </article>`).join('');
  }

  attachRevealObserver(pubList);
  attachRevealObserver(demoGrid);
}

function applyLang(lang) {
  currentLang = lang === 'zh' ? 'zh' : 'en';
  const t = HP_TXT[currentLang];
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  const isEn = currentLang === 'en';
  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang-btn') === currentLang);
  });
  const thumb = document.querySelector('[data-lang-thumb]');
  if (thumb) thumb.style.transform = isEn ? 'translateX(0%)' : 'translateX(100%)';

  renderLists(currentLang);
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
attachRevealObserver(document.body);

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
