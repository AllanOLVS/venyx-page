---
name: Venyx Technology
description: Engineer-run software studio; a dark, precise engineering room lit by one electric blue, with the founders in front.
colors:
  electric-blue: "#2563eb"
  electric-blue-bright: "#3b82f6"
  signal-blue: "#60a5fa"
  code-blue: "#93c5fd"
  indigo-depth: "#4f46e5"
  indigo-glow: "#6366f1"
  night: "#030712"
  panel: "#0a0f1a"
  abyss: "#010308"
  text-strong: "#ffffff"
  text-body: "#e2e8f0"
  text-soft: "#cbd5e1"
  text-muted: "#94a3b8"
  text-faint: "#64748b"
  surface-veil: "rgba(255, 255, 255, 0.02)"
  surface-veil-raised: "rgba(255, 255, 255, 0.05)"
  hairline: "rgba(255, 255, 255, 0.1)"
  hairline-faint: "rgba(255, 255, 255, 0.05)"
  electric-tint: "rgba(37, 99, 235, 0.1)"
  whatsapp-green: "#25d366"
  success: "#4ade80"
  error: "#f87171"
typography:
  display:
    fontFamily: '"Archivo Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "4.75rem"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "wdth 112"
  display-mobile:
    fontFamily: '"Archivo Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "2.5rem"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "wdth 112"
  numeral:
    fontFamily: '"Archivo Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "5rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontVariation: "wdth 115"
  headline:
    fontFamily: '"Archivo Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "3.5rem"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "wdth 112"
  headline-mobile:
    fontFamily: '"Archivo Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "2rem"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "wdth 112"
  modal-title:
    fontFamily: '"Archivo Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "2.125rem"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "wdth 112"
  title-lg:
    fontFamily: '"Archivo Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1.75rem"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "-0.012em"
  title:
    fontFamily: '"Archivo Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1.25rem"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "-0.012em"
  wordmark:
    fontFamily: '"Archivo Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1.375rem"
    fontWeight: 750
    lineHeight: 1.2
    letterSpacing: "-0.02em"
    fontVariation: "wdth 110"
  body-lead:
    fontFamily: '"Archivo Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0.005em"
  body-plus:
    fontFamily: '"Archivo Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0.005em"
  body:
    fontFamily: '"Archivo Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0.005em"
  small:
    fontFamily: '"Archivo Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.005em"
  label:
    fontFamily: '"Archivo Variable", ui-sans-serif, system-ui, sans-serif'
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.1em"
    fontVariation: "wdth 110"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  section: "96px"
  section-lg: "128px"
components:
  button-primary:
    backgroundColor: "{colors.electric-blue}"
    textColor: "{colors.text-strong}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.electric-blue-bright}"
    textColor: "{colors.text-strong}"
  button-secondary:
    backgroundColor: "{colors.surface-veil-raised}"
    textColor: "{colors.text-body}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "16px 28px"
  button-secondary-hover:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.text-strong}"
  button-pill-cta:
    backgroundColor: "{colors.electric-tint}"
    textColor: "{colors.signal-blue}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  button-pill-cta-hover:
    backgroundColor: "{colors.electric-blue}"
    textColor: "{colors.text-strong}"
  input-field:
    backgroundColor: "{colors.night}"
    textColor: "{colors.text-strong}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "14px 16px"
  card-project:
    backgroundColor: "{colors.surface-veil}"
    rounded: "{rounded.lg}"
    padding: "24px"
  card-panel:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.lg}"
    padding: "24px"
  chip-tech:
    backgroundColor: "{colors.surface-veil-raised}"
    textColor: "{colors.text-soft}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
---

# Design System: Venyx Technology

## Overview

**Creative North Star: "A Sala de Engenharia" (The Engineering Room)**

The site is a dark, quiet workroom where software gets built, and the people who build it stand at the front. The room is near-black navy (`night`), the work surfaces are slightly lighter panels, and the only light that matters is one electric blue that marks where you can act. The founders' real faces open the page; engineering shows through honest detail (the shared stack, process steps, technology chips), never through costume code or decoration.

Density is generous. Sections breathe on a 96–128px vertical rhythm. Section headers split on desktop (a wide, heavy headline on the left, the intro on the right), and content lives in a 1280px container. Two moments are peaks: the process diagram on its own panel band, and the closing contact spread. Precision comes from thin hairline borders, consistent corner radii, and restrained color. Nothing is loud except the action.

The look must never read as a generic agency template or as a playful, childish startup. Seriousness comes from engineering detail, not from corporate coldness: real faces and direct contact stay visible.

**Key Characteristics:**
- Dark tonal layers (`abyss` → `night` → `panel`) separated by white hairlines at 5–10% opacity.
- One accent family: Azul Elétrico, with indigo used only as the far end of a blue gradient bar or avatar ring.
- Blue glow is reserved for primary actions and the WhatsApp button.
- Headings carry one key word or phrase in solid `signal-blue`; no gradient text.
- Archivo in two registers: wide and heavy for headings, normal width for reading; no monospace costume.
- One authored motion moment (the founders' portraits revealing in the hero); everything else is feedback.

## Colors

A near-monochrome night palette with a single electric blue doing all the signaling.

### Primary
- **Azul Elétrico / Electric Blue** (`electric-blue`): the action color. Primary buttons, the submit button, active carousel dots, hover fill of pills and icon buttons. If something is solid blue, it is clickable.
- **Electric Blue Bright** (`electric-blue-bright`): hover state of primary buttons, input focus border, and the "Technology" half of the wordmark.
- **Signal Blue** (`signal-blue`): blue as text. Highlighted heading words, step numbers, links, icons, team role lines, the active nav item, modal section labels, focus rings.
- **Code Blue** (`code-blue`): the softest blue, for technology tags inside the project modal.

### Secondary
- **Indigo Depth** (`indigo-depth`) and **Indigo Glow** (`indigo-glow`): only as the end stop of blue→indigo gradients (4px accent bars on the form and modal, avatar rings). Never used on its own.

### Neutral
- **Night** (`night`): the page itself, the mobile menu, and recessed fields (inputs, modal tech tags).
- **Panel** (`panel`): raised work surfaces: team cards, the contact form, the project modal, the WhatsApp tooltip.
- **Abyss** (`abyss`): the deepest layer. Footer and modal scrim (at 80%).
- **Surface Veil** (`surface-veil`) / **Surface Veil Raised** (`surface-veil-raised`): translucent white washes for project cards, secondary buttons, chips. The "Como funciona" band uses an even fainter 1.5% wash.
- **Hairline** (`hairline`) / **Hairline Faint** (`hairline-faint`): every border and divider. Section seams and in-card dividers use the faint one; components and list rules use the full one.
- **Text Strong** (`text-strong`): headings and button text. **Text Body** (`text-body`): default page text and nav links. **Text Soft** (`text-soft`): form labels, chip text, service descriptions, modal prose. **Text Muted** (`text-muted`): intros, descriptions, placeholders, small labels, footer. **Text Faint** (`text-faint`) is retired for text: it fails AA on `night` (about 4.2:1).

### Functional
- **WhatsApp Green** (`whatsapp-green`): the floating WhatsApp button and the WhatsApp icon in the hero's secondary button. Brand-owned color; never repurposed.
- **Success** (`success`) and **Error** (`error`): form submission feedback only.

### Named Rules
**The One Light Rule.** Blue is the only chromatic color in the interface. Indigo exists only inside a gradient that starts in blue; green belongs only to WhatsApp and success messages.

**The Solid Means Clickable Rule.** A solid `electric-blue` fill appears only on interactive elements (at rest or on hover). Decorative blue uses `electric-tint`, `signal-blue` text, or a gradient bar.

## Typography

**Family:** Archivo Variable (`"Archivo Variable", ui-sans-serif, system-ui, sans-serif`), self-hosted with `@fontsource-variable/archivo` (`wdth.css`: weight 100–900, width 62–125%). Only the Latin subset downloads for pt-BR text (about 90 KB), with `font-display: swap`.

**Character:** One family in two registers. Headings use Archivo widened to 112% and set heavy (800) with tight tracking: industrial and confident, the engineering room's signage. Reading text uses Archivo at normal width, 400, with +0.005em tracking to compensate for light text on dark. Labels are widened (110%), uppercase, and spaced at 0.1em. No monospace.

### Hierarchy
- **Display** (`.type-display`; 800, width 112%, `clamp(2.5rem, 1.25rem + 3.9vw, 4.75rem)`, line-height 0.98, tracking -0.035em): the hero headline only. Two phrases on their own lines: white "Você conversa com quem", then solid `signal-blue` "escreve o código.", each balanced.
- **Numeral** (`.type-numeral`; 800, width 115%, 4.5rem mobile / 5rem from 768px, tabular): the process step numbers ("01"–"04") and portrait initials.
- **Headline** (`.type-headline`; 800, width 112%, `clamp(2rem, 1.35rem + 2.5vw, 3.5rem)`, line-height 1.02, tracking -0.03em, balanced): section titles, with one key word in `signal-blue`. The modal title uses the same role at 1.75rem / 2.125rem.
- **Title** (`.type-title`; 650, line-height 1.25, tracking -0.012em): service rows at 1.5rem / 1.75rem; steps at 1.25rem / 1.5rem; cards, team names, and the stack panel at 1.25rem (team names drop to 1rem on mobile).
- **Wordmark** (`.type-wordmark`; 750, width 110%, 1.25rem / 1.375rem): "Venyx **Technology**" in the nav and footer.
- **Body Lead** (400, 1.125rem / 1.25rem from 768px, line-height 1.625): the hero lead in `text-soft`, capped at 36rem; section intros at 1.125rem in `text-muted`, capped at 36rem.
- **Body Plus** (400, 1.0625rem): service descriptions, contact promises and direct links.
- **Body** (400, 1rem, line-height 1.625): step descriptions and modal prose. Project card blurbs drop to 0.875rem.
- **Label** (`.type-label`; 600, width 110%, 0.75rem, tracking 0.1em, uppercase): the hero fact strip, chip-group labels ("Exemplos", "Front-end"), footer column titles, modal section headings, "Prefere conversar agora?". Never above a section heading.

### Named Rules
**The One Blue Word Rule.** A heading highlights exactly one word or short phrase in solid `signal-blue`. Never two highlights, never gradient text.

**The No Eyebrow Rule.** No kicker, badge, or label sits above a heading. The heading carries its own weight.

**The Two Widths Rule.** Width is a role signal: 110–115% for display, headlines, numerals, wordmark, and labels; 100% for anything people read in sentences.

## Layout

- **Container:** 1280px max (`max-w-7xl`), centered, with 24px side gutters on mobile and 48px from 768px up.
- **Section rhythm:** 96px top and bottom on mobile, 128px from 768px. Section content starts 64px below the header (80px from 768px).
- **Section header:** from 1024px a 12-column split, with the headline across 7 columns and the intro across 5, aligned to the headline's baseline. Stacked below 1024px. The contact header is always stacked.
- **Order:** Hero → O que construímos → Como funciona → Projetos em Destaque → Os Especialistas → Contato → Footer.
- **Hero:** full viewport height. On mobile the copy comes first, with full-width stacked buttons, and the four portraits follow in one row of four. From 1024px it splits into two columns (copy 1.15fr, a 2×2 portrait mosaic 0.85fr). A full-width fact strip closes the hero under a hairline: three confirmed facts in label type, each with a 6px blue dot, separated by vertical hairlines from 768px.
- **Services:** a ruled list instead of cards. Each row is a 12-column grid from 768px: icon and title (4), plain-language description (5), and example chips under a small "Exemplos" label (3).
- **Como funciona (peak):** a `panel` band with hairlines top and bottom. Four steps (1 column on mobile, 2 at 768px, 4 at 1024px), each led by a large blue numeral ("01"–"04") and a 10px blue node. From 1024px one continuous hairline runs through all four nodes, like a process diagram. A closing row under a hairline pairs "Começa por uma conversa." with a pill CTA.
- **Portfolio:** a static 3-column grid from 768px. Below that, a horizontal snap-scrolling row with cards at 82% width (58% from 640px), so the next card peeks in.
- **Team:** 4 equal-height cards (2 compact columns on mobile with 96px avatars, 4 columns from 1024px), followed by one full-width "Uma stack, todas as camadas" panel grouping the shared stack by layer.
- **Contact (peak):** from 1024px a 5/7 split. The left side holds the stacked headline, a ruled list of three promises (each with a line icon), and direct WhatsApp and e-mail links under a "Prefere conversar agora?" label; the form sits on the right. Stacked on smaller screens, in the same order.
- **Breakpoints:** Tailwind defaults: 640 / 768 / 1024 / 1280px. The desktop nav appears at 1024px; below that, a menu button.
- **Fixed chrome:** the navbar is fixed at the top (transparent; after 50px of scroll it gains `night` at 85% with blur). The WhatsApp button is fixed bottom-right, 20–24px from the edges, and hides while the contact section is on screen or the modal is open.
- **Anchors:** `html` has 88px `scroll-padding-top` so anchored sections clear the fixed nav.

## Elevation & Depth

Depth comes from tonal layering, not shadows. The page stacks `abyss` → `night` → `panel`, and translucent veils sit on top, each separated by hairline borders. Floating surfaces (the project modal, contact form, mobile menu, tooltip) add a soft, offset drop shadow. Blue glow is a response to action, not decoration.

### Shadow Vocabulary
- **Floating** (`box-shadow: 0 24px 48px -16px rgba(0, 0, 0, 0.6)`): contact form, mobile menu.
- **Modal** (`box-shadow: 0 32px 64px -16px rgba(0, 0, 0, 0.7)`): the project modal.
- **Action Glow** (`box-shadow: 0 8px 24px -10px rgba(37, 99, 235, 0.7)` → hover `0 12px 32px -10px rgba(37, 99, 235, 0.9)`): the hero primary button and the contact submit button.
- **WhatsApp Glow** (`box-shadow: 0 10px 24px -8px rgba(37, 211, 102, 0.6)` → hover `0 14px 32px -8px rgba(37, 211, 102, 0.8)`): the floating WhatsApp button.

### Named Rules
**The Action Glow Rule.** Only the primary action buttons and the WhatsApp button glow, and the glow is offset downward like light falling from the control. Static content, cards, icons, and the page background never glow. The design detector flags these three glows as `dark-glow`; they are a deliberate, user-confirmed exception.

## Shapes

Softened rectangles with a strict radius ladder:

- **8px** (`rounded.sm`): buttons, inputs, modal tech tags, the menu button.
- **12px** (`rounded.md`): the modal CTA and the hero portraits on mobile.
- **16px** (`rounded.lg`): every card and large panel (project cards, team cards, the stack panel, the form, the modal, desktop hero portraits).
- **Full** (`rounded.full`): pills (nav CTA, chips), circular icon buttons, avatars, carousel dots.

Borders are always 1px hairlines. Two accent shapes recur: a 4px blue→indigo gradient bar across the top edge of the form and modal, and a short blue rule (64×4px under the modal title, 48×1px over each process step). Team avatars are circles inside a 4px blue→indigo gradient ring, separated from it by a 4px `panel`-colored gap.

## Components

Precise and confident: thin borders, soft corners, a clear response on hover and focus, nothing oversized.

### Buttons
- **Shape:** gently rounded (8px) for rectangular buttons; fully rounded for pills.
- **Primary:** `electric-blue` fill, white semibold text, 16px × 28px padding, Action Glow. The trailing arrow nudges 4px right on hover. Hover brightens to `electric-blue-bright` and strengthens the glow. Full width on mobile.
- **Secondary:** `surface-veil-raised` fill, 1px hairline border, `text-body` text; the hero's WhatsApp button carries the green WhatsApp mark. Hover raises the fill to 10% white and the text to white.
- **Pill CTA (nav "Iniciar Projeto", modal "Quero construir o meu"):** `electric-tint` fill, `signal-blue` text, 1px blue border at 30%. Hover fills solid `electric-blue` with white text. No glow.
- **Submit:** primary styling with uppercase label type. While sending it shows a spinner and "Enviando...", dims to 60%, and is disabled.
- **Icon buttons:** 44px circles, `surface-veil-raised` fill, `text-soft` icon; hover fills `electric-blue`. Each has a screen-reader name. Modal controls use black at 50% with blur.
- **Focus:** every interactive element shows a 2px `signal-blue` outline offset 3px on `:focus-visible`.
- **Transitions:** 300ms for color and shadow.

### Chips
- **Tech / example chip:** `surface-veil-raised` fill, hairline border, `text-soft` 12px medium text, fully rounded. Grouped under a small uppercase `text-muted` label when the set needs a name.
- **Tech tag (modal):** `night` fill, hairline border, `code-blue` text, 8px radius, with a 12px code icon in blue.

### Cards / Containers
- **Corner Style:** 16px everywhere.
- **Service row:** not a card. A ruled list row with a 22px `signal-blue` line icon beside the title, a description, and example chips.
- **Project card:** `surface-veil` fill, border at 8% white. A 16:10 image with a blue multiply overlay, then the title (the title button stretches over the whole card), a 3-line description, chips, and an always-visible "Ver detalhes" link pinned to the bottom. Hover turns the border blue at 40% and scales the image to 103%. Keyboard focus draws a `signal-blue` border and ring.
- **Team card:** `panel` fill, hairline border, 24px padding, centered content, equal heights. Static: no hover effect.
- **Stack panel:** transparent with a hairline border. A title and explanation, then the stack grouped by layer as a definition list.
- **Shadow Strategy:** see Elevation & Depth; cards are flat.

### Inputs / Fields
- **Style:** `night` fill, 1px hairline border, 8px radius, 14px × 16px padding, 16px white text, `text-muted` placeholder. Labels sit above, linked with `for`/`id`, in 14px semibold `text-soft`. Required fields show a blue asterisk plus "(obrigatório)" for screen readers.
- **Focus:** border and a 1px ring both switch to `electric-blue-bright`; the caret is `signal-blue`.
- **Feedback:** success and error appear in a polite live region under the submit button, with an icon, in `success` or `error`. They stay until the person edits the form again. The error keeps the typed values and links to WhatsApp.

### Navigation
- **Desktop (≥1024px):** logo (44px) and wordmark "Venyx **Technology**" on the left; four 14px medium links plus the pill CTA on the right, 28px apart. Links hover to `signal-blue`, and the section in view is marked in `signal-blue` with `aria-current`.
- **Scroll state:** transparent with 20px vertical padding at the top. After 50px it gains `night` at 85%, a backdrop blur, a faint bottom hairline, and tightens to 12px padding (500ms).
- **Mobile:** a 44px menu button with a name and `aria-expanded` toggles an opaque full-width `night` panel with 18px links. It closes on link tap, Esc, or a tap outside.

### Hero Founders Mosaic (signature)
The four founders' portraits, in real photos (initials on `#0f172a` while a photo is missing), with each name on a dark bottom gradient. It is a 2×2 grid of 4:5 tiles with 16px radius on desktop, and one row of four 3:4 tiles with first names on mobile. A caption underneath links to the team section. This replaces any decorative hero art: the people are the proof.

### Project Modal (signature)
A 1152px-max dialog (`role="dialog"`, `aria-modal`) over an `abyss` 80% scrim with a light blur; the page behind becomes `inert`. The image carousel takes the left 60% (stacked on top on mobile, where the whole dialog scrolls), with details on the right 40% under the gradient accent bar.
- **Opening:** focus moves to the close button.
- **While open:** Tab cycles inside the dialog, and the arrow keys change images.
- **Closing:** Esc or the scrim closes it, and focus returns to the card that opened it.
- **Carousel dots:** 8px circles inside 24px hit areas; the active one stretches to a 32px blue pill.

### Motion
- **Focal moment:** on load, the hero copy rises 16px and fades in over 800ms. The portraits then reveal one after another: a clip from the bottom, an 8px blur clearing, and a 16px rise over 1000ms, staggered by 90ms, all with `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Feedback:** 300ms for hover color, border, and shadow; 200ms fade for menus, status messages, and image swaps; the modal enters over 320ms with an 8px rise and a scale from 98%.
- **No ambient loops:** no marquees, spinning decorations, or scroll-triggered reveals on every section.
- **Reduced motion:** with `prefers-reduced-motion: reduce`, the hero and modal use a 250ms fade only. Hover transforms are motion-safe only, and smooth anchor scrolling is off.

## Do's and Don'ts

### Do:
- **Do** keep every surface on the `abyss` / `night` / `panel` ladder and separate layers with 1px white hairlines at 5% or 10%.
- **Do** reserve solid `electric-blue` for interactive elements, and glow for primary actions and WhatsApp only (The Solid Means Clickable Rule, The Action Glow Rule).
- **Do** highlight exactly one word or phrase per heading in solid `signal-blue`.
- **Do** use 16px radius for cards and panels, 8px for buttons and inputs, full rounding for pills, avatars, and icon buttons.
- **Do** show engineering through honest specifics: the shared stack, the process, technology chips, real faces.
- **Do** keep real faces and direct contact (WhatsApp, e-mail) visible; they are part of the look.
- **Do** keep body and placeholder text at `text-muted` or brighter (≥4.5:1 on `night`).

### Don't:
- **Don't** make it look like a generic agency template: no interchangeable stock-photo heroes, no grid of same-size icon-plus-heading cards, no buzzword sections without specifics.
- **Don't** drift toward a childish startup look: no pastel palettes, cute mascots or illustrations, rocket icons, bouncing animations, or playful bubbly shapes.
- **Don't** introduce a second accent hue. Indigo appears only as the end of a blue gradient; green only for WhatsApp and success.
- **Don't** add glows, blurred color blobs, or textures to static content or the page background.
- **Don't** use gradient text, eyebrow labels above headings, or fake code as decoration.
- **Don't** add auto-scrolling marquees or looping ambient animation.
- **Don't** use shadows for depth on cards at rest; depth comes from tonal layers and hairlines.
