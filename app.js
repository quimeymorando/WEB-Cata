/**
 * La Vos en la Maternidad — App Logic
 * Módulos: NavbarScroll | IntersectionObserver | FormValidation | FormSubmit
 * Arquitectura: Clean | Humble Object | Sin dependencias externas
 */

'use strict';

/* ═══════════════════════════════════════════════════════
   1. UTILITY HELPERS
═══════════════════════════════════════════════════════ */
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const addClass    = (el, cls) => el?.classList.add(cls);
const removeClass = (el, cls) => el?.classList.remove(cls);
const hasClass    = (el, cls) => el?.classList.contains(cls);
const toggleClass = (el, cls) => el?.classList.toggle(cls);


/* ═══════════════════════════════════════════════════════
   2. NAVBAR — Scroll behavior
═══════════════════════════════════════════════════════ */
const NavbarModule = (() => {
  const navbar = $('.navbar');
  let ticking = false;

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY > 40;
        scrolled
          ? addClass(navbar, 'scrolled')
          : removeClass(navbar, 'scrolled');
        ticking = false;
      });
      ticking = true;
    }
  };

  return {
    init() {
      if (!navbar) return;
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll(); // Initial check
    }
  };
})();


/* ═══════════════════════════════════════════════════════
   3. SCROLL ANIMATIONS — Intersection Observer
═══════════════════════════════════════════════════════ */
const ScrollAnimationsModule = (() => {
  const VISIBLE_CLASS = 'is-visible';
  const THRESHOLD = 0.15;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Staggered delay based on card-delay CSS variable
          const delay = getComputedStyle(entry.target)
            .getPropertyValue('--card-delay')
            .trim() || '0ms';

          setTimeout(() => {
            addClass(entry.target, VISIBLE_CLASS);
          }, parseInt(delay, 10) || 0);

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: THRESHOLD, rootMargin: '0px 0px -40px 0px' }
  );

  return {
    init() {
      $$('.animate-on-scroll').forEach(el => observer.observe(el));
    }
  };
})();


/* ═══════════════════════════════════════════════════════
   4. FAQ ACCORDION — Una pregunta abierta a la vez
═══════════════════════════════════════════════════════ */
const FaqModule = (() => {
  const items = $$('.faq-item');

  const closeAll = (except = null) => {
    items.forEach(item => {
      if (item === except) return;
      item.classList.remove('is-open');
      const btn = $('.faq-item__btn', item);
      const panel = $('.faq-item__panel', item);
      if (btn) btn.setAttribute('aria-expanded', 'false');
      if (panel) panel.style.maxHeight = '0px';
    });
  };

  const togglePanel = (item) => {
    const btn = $('.faq-item__btn', item);
    const panel = $('.faq-item__panel', item);
    if (!btn || !panel) return;

    const isOpen = item.classList.contains('is-open');
    if (isOpen) {
      item.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      panel.style.maxHeight = '0px';
    } else {
      closeAll(item);
      item.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  };

  return {
    init() {
      items.forEach(item => {
        const btn = $('.faq-item__btn', item);
        const panel = $('.faq-item__panel', item);
        if (!btn || !panel) return;
        panel.style.maxHeight = '0px';
        btn.addEventListener('click', () => togglePanel(item));
      });
    }
  };
})();


/* ═══════════════════════════════════════════════════════
   5. SMOOTH SCROLL — Anchor links
═══════════════════════════════════════════════════════ */
const SmoothScrollModule = (() => {
  const NAVBAR_OFFSET = 80; // px — compensate for fixed navbar

  const handleAnchorClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (!href?.startsWith('#')) return;

    e.preventDefault();
    const target = $(href);
    if (!target) return;

    const targetY = target.getBoundingClientRect().top
                  + window.scrollY
                  - NAVBAR_OFFSET;

    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return {
    init() {
      $$('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleAnchorClick);
      });
    }
  };
})();


/* ═══════════════════════════════════════════════════════
   7. BOOT — Initialize all modules
═══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  NavbarModule.init();
  ScrollAnimationsModule.init();
  FaqModule.init();
  SmoothScrollModule.init();

  console.log('🌸 La Vos de la Maternidad — programa iniciado correctamente');
});
