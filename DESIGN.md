# Design System Document: The Radiant Sanctuary

## 1. Overview & Creative North Star
This design system is built to honor the profound journey of motherhood through a visual language that is both delicate and empowering. Our Creative North Star is **"The Radiant Sanctuary."** 

We move away from the "industrial" feel of standard SaaS products. Instead, we embrace a **High-End Editorial** aesthetic. This means breaking the rigid expectations of centered, boxed-in content. We utilize intentional asymmetry, significant breathing room (negative space), and overlapping elements to create a sense of organic growth and serenity. The interface should feel like a premium printed journal—tactile, sophisticated, and deeply empathetic.

---

### 2. Colors: Tonal Depth & Warmth
The palette is a harmonic bloom of deep pinks, sunsets, and golden earth tones. It is designed to feel "lit from within."

*   **The "No-Line" Rule:** To maintain a high-end feel, **1px solid borders are strictly prohibited** for sectioning or containment. Boundaries must be established through background color shifts. For example, a content block using `surface-container-low` (`#f7f3f0`) should sit directly on a `surface` (`#fdf9f6`) background to define its edges.
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of physical layers. Use the `surface-container` tiers to create depth. An outer section might be `surface`, while an inner reading card uses `surface-container-lowest` (`#ffffff`) to appear "lifted" and pure.
*   **The "Glass & Gradient" Rule:** To capture the "Radiant" aspect of our North Star, use Glassmorphism for floating elements like navigation bars or overlays. Apply a semi-transparent `surface` color with a `backdrop-blur` of 12px-20px.
*   **Signature Textures:** For high-impact areas like Hero sections or CTA buttons, utilize a subtle linear gradient (45 degrees) transitioning from `primary` (`#860040`) to `primary_container` (`#ad1457`). This adds a "soul" to the color that flat hex codes cannot achieve.

---

### 3. Typography: The Editorial Voice
Typography is our primary tool for conveying "Dream Avenue" sophistication.

*   **Display & Headlines (Noto Serif):** These are the "jewels" of the system. Use `display-lg` through `headline-sm` to create an authoritative, elegant voice. Ensure generous line-height (1.2–1.3) to let the letterforms breathe.
*   **Body & Labels (Manrope):** A clean, modern sans-serif that balances the ornate nature of the serif. It provides clarity and empathy in long-form content.
*   **Visual Hierarchy:** Use high-contrast scaling. Pair a large `display-md` headline with a much smaller, wide-tracked `label-md` in all-caps for categories to create a bespoke, curated look.

---

### 4. Elevation & Depth: Tonal Layering
We reject the heavy, muddy shadows of the early web. Our depth is "Ambient."

*   **The Layering Principle:** Softness is achieved by stacking. Place a `surface-container-highest` element behind a `surface-container-low` element to create a natural recessed effect.
*   **Ambient Shadows:** If an element *must* float (like a FAB or a Modal), use an extra-diffused shadow. 
    *   *Shadow Color:* Use a 10% opacity version of `on_surface` (`#1c1b1a`) or `primary` (`#860040`). 
    *   *Blur:* Minimum 24px-48px. 
    *   *Spread:* Negative values (e.g., -4px) to keep the shadow "tucked" under the element.
*   **The "Ghost Border" Fallback:** For input fields where accessibility requires a container, use a "Ghost Border": `outline_variant` (`#dfbec5`) at **15% opacity**. Never use 100% opaque lines.

---

### 5. Components: Graceful Interaction
Components follow a **4px grid system**. All margins and paddings must be multiples of 4 (e.g., 8, 16, 24, 32).

*   **Buttons:**
    *   *Primary:* Use the Signature Gradient (`primary` to `primary_container`). Radius: `full` (pill-shaped) to emphasize femininity and softness.
    *   *Secondary:* Text-only with an `outline_variant` underline that appears on hover, or a `surface_container_high` background.
*   **Cards:** Absolutely no borders. Use `xl` (1.5rem) or `lg` (1rem) roundedness. Content inside cards should have a minimum padding of 24px to ensure the "Minimalist" promise.
*   **Progressive Disclosure (Accordions):** Use these for "La voz en la maternidad" FAQs or lesson modules. The transition should be a slow, eased "slide and fade" to maintain a serene atmosphere.
*   **Input Fields:** Use "Floating Labels." The bottom border should be a subtle 1px line using `outline_variant` at 20% opacity. When active, the line should transition into the `primary` pink.
*   **Audio/Voice Player (Context Specific):** Since the brand is "The Voice," the audio player is a hero component. It should use a full-width `surface-container-low` bar with a waveform in `secondary` (`#944a00`).

---

### 6. Do's and Don'ts

**Do:**
*   **DO** use asymmetrical layouts. Place a headline on the left and the body text in a 2/3 column offset to the right.
*   **DO** leave more white space than you think is necessary. Space is a luxury in design.
*   **DO** use "Progressive Disclosure." Hide secondary information behind subtle icons or "Read More" links to keep the interface serene.
*   **DO** use the `secondary_container` (`#fc8f34`) for small "accent moments" like notification dots or active state indicators to add a touch of warmth.

**Don't:**
*   **DON'T** use black. Use `on_surface` (`#1c1b1a`) for text to maintain a softer, more premium contrast.
*   **DON'T** use sharp corners. Every element should have at least a `sm` (0.25rem) radius, but prefer `lg` (1rem) for containers.
*   **DON'T** use standard "divider lines" between list items. Use 16px of vertical space or a background color shift instead.
*   **DON'T** overcrowd the screen. If a user is in a "Serene" environment, they should never feel overwhelmed by choices. One primary action per view.

---

### 7. Grid & Spacing Scale
The system relies on a **4px base unit**.
*   **Micro-spacing:** 4px, 8px (for internal component elements).
*   **Macro-spacing:** 24px, 32px, 48px, 64px (for section spacing and margins).
*   **The "Breathing" Margin:** Mobile screens should have a minimum of 24px side margins. Desktop should utilize a centered "Editorial Column" of 800px-1000px to keep line lengths readable.