import type { Project, Block, TitleBlock, SceneBlock, RevealBlock, QuoteBlock, KeyPointBlock, CardGridBlock, NumberedListBlock, ImageBlock, BlackoutBlock, TwoColumnBlock, FooterBlock } from '../types/blocks';

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Allow safe HTML tags in body content
function safeHtml(s: string): string {
  return s;
}

function renderBlock(block: Block, index: number): string {
  switch (block.type) {
    case 'title': return renderTitle(block);
    case 'scene': return renderScene(block);
    case 'reveal': return renderReveal(block);
    case 'quote': return renderQuote(block);
    case 'keypoint': return renderKeyPoint(block);
    case 'cardgrid': return renderCardGrid(block);
    case 'numberedlist': return renderNumberedList(block);
    case 'image': return renderImage(block);
    case 'blackout': return renderBlackout(block);
    case 'divider': return renderDivider();
    case 'twocolumn': return renderTwoColumn(block);
    case 'footer': return renderFooter(block);
    default: return '';
  }
}

function renderTitle(b: TitleBlock): string {
  return `
  <section class="title-screen" id="title-screen">
    <div class="title-content">
      <h1 class="main-title" id="main-title">${esc(b.title)}</h1>
      ${b.subtitle ? `<p class="subtitle">${esc(b.subtitle)}</p>` : ''}
      ${b.dateLine ? `<p class="date-line">${esc(b.dateLine)}</p>` : ''}
      <button class="start-btn" id="start-btn" onclick="startLesson()">Begin</button>
    </div>
  </section>`;
}

function renderScene(b: SceneBlock): string {
  return `
  <section class="scene reveal-on-scroll">
    ${b.countdown ? `<div class="countdown-stamp">${esc(b.countdown)}</div>` : ''}
    <div class="scene-line"></div>
    ${b.marker ? `<div class="scene-marker">${esc(b.marker)}</div>` : ''}
    ${b.title ? `<h2 class="scene-title">${esc(b.title)}</h2>` : ''}
    <div class="scene-body">${safeHtml(b.body)}</div>
  </section>`;
}

function renderReveal(b: RevealBlock): string {
  return `
  <div class="reveal-block reveal-on-scroll">
    <button class="reveal-trigger" onclick="this.parentElement.classList.toggle('open')">
      <span class="reveal-label">${esc(b.triggerLabel)}</span>
      <span class="reveal-arrow">▸</span>
    </button>
    <div class="reveal-content">${safeHtml(b.hiddenContent)}</div>
  </div>`;
}

function renderQuote(b: QuoteBlock): string {
  const cls = b.style === 'gold' ? 'quote-gold' : 'quote-blood';
  return `
  <blockquote class="quote-block ${cls} reveal-on-scroll">
    <p class="quote-text">${safeHtml(b.text)}</p>
    ${b.attribution ? `<cite class="quote-attr">${esc(b.attribution)}</cite>` : ''}
  </blockquote>`;
}

function renderKeyPoint(b: KeyPointBlock): string {
  return `
  <div class="key-point reveal-on-scroll">
    <p>${safeHtml(b.text)}</p>
  </div>`;
}

function renderCardGrid(b: CardGridBlock): string {
  const cards = b.cards.map((c, i) => `
    <div class="card" onclick="this.classList.toggle('expanded')">
      <div class="card-front">
        <h3 class="card-name">${esc(c.name)}</h3>
        ${c.subtitle ? `<p class="card-subtitle">${esc(c.subtitle)}</p>` : ''}
        <p class="card-body">${safeHtml(c.body)}</p>
      </div>
      ${c.detail ? `<div class="card-detail">${safeHtml(c.detail)}</div>` : ''}
    </div>`).join('');
  return `
  <div class="card-grid card-grid-${b.cards.length} reveal-on-scroll">
    ${cards}
  </div>`;
}

function renderNumberedList(b: NumberedListBlock): string {
  const items = b.items.map((it, i) => `
    <div class="num-item" onclick="this.classList.toggle('open')">
      <div class="num-item-header">
        <span class="num-badge">${i + 1}</span>
        <span class="num-title">${esc(it.title)}</span>
        <span class="num-arrow">▸</span>
      </div>
      <div class="num-detail">${safeHtml(it.details)}</div>
    </div>`).join('');
  return `
  <div class="numbered-list reveal-on-scroll">
    ${items}
  </div>`;
}

function renderImage(b: ImageBlock): string {
  if (!b.dataUrl) return '';
  return `
  <figure class="image-block reveal-on-scroll">
    <img src="${b.dataUrl}" alt="${esc(b.caption)}" />
    ${b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ''}
  </figure>`;
}

function renderBlackout(b: BlackoutBlock): string {
  return `
  <section class="blackout reveal-on-scroll">
    <p>${safeHtml(b.text)}</p>
  </section>`;
}

function renderDivider(): string {
  return `<div class="scene-divider reveal-on-scroll"><div class="divider-line"></div></div>`;
}

function renderTwoColumn(b: TwoColumnBlock): string {
  return `
  <div class="two-col reveal-on-scroll">
    <div class="two-col-inner">
      <div class="two-col-side">
        ${b.leftHeader ? `<div class="two-col-header" style="background:${b.leftColor || '#2d5a2d'}">${esc(b.leftHeader)}</div>` : ''}
        <div class="two-col-body">${safeHtml(b.leftBody)}</div>
      </div>
      <div class="two-col-side">
        ${b.rightHeader ? `<div class="two-col-header" style="background:${b.rightColor || '#8a2a2a'}">${esc(b.rightHeader)}</div>` : ''}
        <div class="two-col-body">${safeHtml(b.rightBody)}</div>
      </div>
    </div>
  </div>`;
}

function renderFooter(b: FooterBlock): string {
  return `<footer class="lesson-footer reveal-on-scroll"><p>${esc(b.text)}</p></footer>`;
}

const CSS = `
:root {
  --bg: #06060a;
  --bg-section: #0b0b12;
  --bg-reveal: #0e0e18;
  --border: #1a1520;
  --border-active: #6b2020;
  --text: #b0a89e;
  --text-head: #d4cdc4;
  --text-dim: #4a4440;
  --text-blood: #8a2a2a;
  --text-blood-bright: #c44030;
  --text-gold: #a08848;
  --text-ash: #606870;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  background: var(--bg);
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 18px;
  line-height: 1.8;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

/* Film grain overlay */
.grain {
  position: fixed;
  top: -50%; left: -50%;
  width: 200%; height: 200%;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.035;
  animation: grain 8s steps(10) infinite;
}
.grain svg { width: 100%; height: 100%; }

@keyframes grain {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-5%, -10%); }
  20% { transform: translate(-15%, 5%); }
  30% { transform: translate(7%, -25%); }
  40% { transform: translate(-5%, 25%); }
  50% { transform: translate(-15%, 10%); }
  60% { transform: translate(15%, 0%); }
  70% { transform: translate(0%, 15%); }
  80% { transform: translate(3%, 35%); }
  90% { transform: translate(-10%, 10%); }
}

/* Ember canvas */
#ember-canvas {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 0;
}

/* Content wrapper */
.content {
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Title screen */
.title-screen {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}
.title-content { max-width: 720px; }
.main-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: var(--text-head);
  letter-spacing: 0.04em;
  line-height: 1.2;
  margin-bottom: 1rem;
  opacity: 0;
  transition: opacity 0.5s;
}
.main-title.visible { opacity: 1; }
.main-title.typewriting {
  opacity: 1;
  border-right: 2px solid var(--text-blood);
  animation: blink-cursor 0.7s step-end infinite;
}
@keyframes blink-cursor { 50% { border-color: transparent; } }
.subtitle {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.15rem;
  color: var(--text-dim);
  font-style: italic;
  font-weight: 300;
  margin-bottom: 0.5rem;
  opacity: 0;
  transition: opacity 1s 0.5s;
}
.date-line {
  font-family: 'Cinzel', serif;
  font-size: 0.8rem;
  color: var(--text-blood);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 1s 1s;
}
.start-btn {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.6rem 2.5rem;
  font-family: 'Cinzel', serif;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-blood);
  background: transparent;
  border: 1px solid var(--text-blood);
  cursor: pointer;
  transition: all 0.3s;
}
.start-btn:hover {
  background: var(--text-blood);
  color: var(--bg);
}
.title-screen.started .subtitle,
.title-screen.started .date-line { opacity: 1; }
.title-screen.started .start-btn { display: none; }

/* Scene sections */
.scene {
  padding: 4rem 0 3rem;
  max-width: 720px;
  margin: 0 auto;
}
.countdown-stamp {
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-blood);
  text-align: center;
  margin-bottom: 1.5rem;
  opacity: 0.7;
}
.scene-line {
  width: 1px;
  height: 60px;
  background: var(--text-blood);
  margin: 0 auto 1.5rem;
  opacity: 0.4;
}
.scene-marker {
  font-family: 'Cinzel', serif;
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--text-ash);
  text-align: center;
  margin-bottom: 0.75rem;
}
.scene-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(1.3rem, 3vw, 1.8rem);
  font-weight: 600;
  color: var(--text-head);
  text-align: center;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}
.scene-body {
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--text);
}
.scene-body b, .scene-body strong { color: var(--text-head); font-weight: 600; }

/* Reveal / Accordion */
.reveal-block {
  margin: 1.5rem auto;
  max-width: 720px;
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  background: var(--bg-section);
}
.reveal-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.2rem;
  background: transparent;
  border: none;
  color: var(--text-head);
  font-family: 'Cinzel', serif;
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  cursor: pointer;
  transition: background 0.2s;
}
.reveal-trigger:hover { background: var(--bg-reveal); }
.reveal-arrow {
  transition: transform 0.3s;
  color: var(--text-blood);
  font-size: 0.9rem;
}
.reveal-block.open .reveal-arrow { transform: rotate(90deg); }
.reveal-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
  padding: 0 1.2rem;
  color: var(--text);
  font-size: 0.95rem;
  line-height: 1.8;
}
.reveal-block.open .reveal-content {
  max-height: 2000px;
  padding: 0.5rem 1.2rem 1rem;
}

/* Quotes */
.quote-block {
  margin: 2rem auto;
  max-width: 720px;
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  border-left: 3px solid var(--text-blood);
  background: var(--bg-section);
}
.quote-gold { border-left-color: var(--text-gold); }
.quote-text {
  font-size: 1.1rem;
  font-style: italic;
  font-weight: 300;
  line-height: 1.8;
  color: var(--text-head);
}
.quote-gold .quote-text { color: var(--text-gold); }
.quote-blood .quote-text { color: var(--text-blood-bright); }
.quote-attr {
  display: block;
  margin-top: 0.75rem;
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-dim);
  font-style: normal;
}

/* Key point */
.key-point {
  margin: 2.5rem auto;
  max-width: 720px;
  padding: 1.5rem 2rem;
  border-top: 1px solid var(--text-blood);
  border-bottom: 1px solid var(--text-blood);
  text-align: center;
}
.key-point p {
  font-family: 'Cinzel', serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-head);
  letter-spacing: 0.03em;
  line-height: 1.6;
}

/* Card grid */
.card-grid {
  display: grid;
  gap: 1rem;
  margin: 2rem auto;
  max-width: 720px;
}
.card-grid-2 { grid-template-columns: 1fr 1fr; }
.card-grid-3 { grid-template-columns: 1fr 1fr 1fr; }
.card-grid-4 { grid-template-columns: 1fr 1fr 1fr 1fr; }
.card {
  background: var(--bg-section);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 1.2rem;
  cursor: pointer;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.card:hover { border-color: var(--border-active); }
.card-name {
  font-family: 'Cinzel', serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-head);
  margin-bottom: 0.25rem;
}
.card-subtitle {
  font-size: 0.75rem;
  color: var(--text-blood);
  font-family: 'Cinzel', serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}
.card-body {
  font-size: 0.85rem;
  color: var(--text);
  line-height: 1.7;
}
.card-detail {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, margin 0.4s ease;
  font-size: 0.85rem;
  color: var(--text);
  line-height: 1.7;
  margin-top: 0;
  border-top: 0 solid var(--border);
}
.card.expanded .card-detail {
  max-height: 1000px;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top-width: 1px;
}

/* Numbered list */
.numbered-list {
  margin: 2rem auto;
  max-width: 720px;
}
.num-item {
  border: 1px solid var(--border);
  border-radius: 4px;
  margin-bottom: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  background: var(--bg-section);
  transition: border-color 0.3s;
}
.num-item:hover { border-color: var(--border-active); }
.num-item-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 1rem;
}
.num-badge {
  width: 24px; height: 24px;
  border-radius: 50%;
  background: var(--text-blood);
  color: var(--bg);
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.num-title {
  font-family: 'Cinzel', serif;
  font-size: 0.85rem;
  color: var(--text-head);
  flex: 1;
}
.num-arrow {
  color: var(--text-blood);
  transition: transform 0.3s;
  font-size: 0.8rem;
}
.num-item.open .num-arrow { transform: rotate(90deg); }
.num-detail {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
  padding: 0 1rem 0 3rem;
  font-size: 0.9rem;
  color: var(--text);
  line-height: 1.8;
}
.num-item.open .num-detail {
  max-height: 2000px;
  padding-bottom: 1rem;
}

/* Image block */
.image-block {
  margin: 2rem auto;
  max-width: 720px;
  text-align: center;
}
.image-block img {
  max-width: 100%;
  border: 1px solid var(--border);
  border-radius: 4px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.4);
}
.image-block figcaption {
  margin-top: 0.75rem;
  font-size: 0.8rem;
  color: var(--text-dim);
  font-style: italic;
}

/* Blackout */
.blackout {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}
.blackout p {
  font-family: 'Cinzel', serif;
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  font-weight: 400;
  color: var(--text-blood-bright);
  letter-spacing: 0.06em;
  line-height: 1.6;
}

/* Divider */
.scene-divider {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
}
.divider-line {
  width: 1px;
  height: 80px;
  background: var(--text-blood);
  opacity: 0.3;
}

/* Two-column table */
.two-col {
  margin: 2rem auto;
  max-width: 720px;
}
.two-col-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
}
.two-col-side { }
.two-col-side:first-child { border-right: 1px solid var(--border); }
.two-col-header {
  padding: 0.6rem 1rem;
  font-family: 'Cinzel', serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #d4cdc4;
  text-align: center;
}
.two-col-body {
  padding: 1rem;
  font-size: 0.9rem;
  color: var(--text);
  line-height: 1.8;
}

/* Footer */
.lesson-footer {
  padding: 4rem 0 3rem;
  text-align: center;
}
.lesson-footer p {
  font-family: 'Cinzel', serif;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-dim);
}

/* Scroll reveal animation */
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.reveal-on-scroll.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
  .card-grid-2, .card-grid-3, .card-grid-4 {
    grid-template-columns: 1fr;
  }
  .two-col-inner {
    grid-template-columns: 1fr;
  }
  .two-col-side:first-child {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}
`;

const JS = `
// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('revealed');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

// Typewriter effect
function startLesson() {
  const screen = document.querySelector('.title-screen');
  const titleEl = document.getElementById('main-title');
  if (!screen || !titleEl) return;
  const text = titleEl.textContent || '';
  titleEl.textContent = '';
  titleEl.classList.add('typewriting');
  screen.classList.add('started');
  let i = 0;
  const interval = setInterval(() => {
    titleEl.textContent = text.slice(0, i + 1);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      titleEl.classList.remove('typewriting');
      titleEl.classList.add('visible');
    }
  }, 60);
}

// Ember particles
function initEmbers() {
  const canvas = document.getElementById('ember-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  const embers = [];
  for (let i = 0; i < 35; i++) {
    embers.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(Math.random() * 0.5 + 0.2),
      o: Math.random() * 0.5 + 0.1,
      life: Math.random() * 200 + 100,
      age: 0,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    embers.forEach(e => {
      e.x += e.vx;
      e.y += e.vy;
      e.age++;
      if (e.age > e.life || e.y < -10) {
        e.x = Math.random() * W;
        e.y = H + 10;
        e.age = 0;
        e.life = Math.random() * 200 + 100;
      }
      const fade = e.age < 20 ? e.age / 20 : e.age > e.life - 20 ? (e.life - e.age) / 20 : 1;
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
      const r = 200 + Math.random() * 55;
      const g = 60 + Math.random() * 40;
      const b = 20;
      ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + (e.o * fade) + ')';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

initEmbers();
`;

export function generateHTML(project: Project): string {
  const hasTitle = project.blocks.some(b => b.type === 'title');
  const titleBlock = project.blocks.find(b => b.type === 'title') as TitleBlock | undefined;
  const showEmbers = titleBlock ? titleBlock.showEmbers : true;

  const blocksHtml = project.blocks.map((b, i) => renderBlock(b, i)).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(project.name)}</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap');
${CSS}
</style>
</head>
<body>

<div class="grain">
  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" opacity="1"/>
  </svg>
</div>

${showEmbers ? '<canvas id="ember-canvas"></canvas>' : ''}

<div class="content">
${blocksHtml}
</div>

<script>
${JS}
</script>
</body>
</html>`;
}
