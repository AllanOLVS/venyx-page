# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Anyone who needs software built and is deciding who to trust with it: individuals, founders and startups, small businesses, and large established companies. Venyx does not prioritize one segment over another.

The same page has to work for two opposite readers at once:

- **Technical or established buyers** (CTOs, managers at larger companies) who check for engineering credibility: architecture, scale, integrations, stack.
- **Non-technical clients** (a business owner or someone with an idea) who need to understand what Venyx does, what it would cost them in effort, and how to start, without jargon.

Their job on the site: judge whether Venyx can build what they need, then make contact.

## Product Purpose

Venyx Technology is a Brazilian software studio founded and run by its engineers. It builds any kind of software: websites and landing pages, mobile apps (iOS and Android), SaaS products, and custom complex systems (CRMs, ERPs, APIs, platforms).

This site is the studio's front door. Success means a qualified visitor reaches out through the contact form, WhatsApp, or email to start a project.

## Positioning

- **The founders write the code.** Clients talk directly to the engineers who build their product; there is no handoff to juniors or outsourcing.
- **One team, every layer.** Web, mobile, backend, and infrastructure (AWS) are handled by the same team.
- **Close, human contact.** Direct WhatsApp access and plain-language communication.
- **Engineering quality.** Software built to scale and be maintained, not throwaway work.

The site has to show range (from a simple site to a complex system) without reading as a generic "we do everything" agency.

## Operating Context

- Visitors arrive, scan services, portfolio, and team, then contact Venyx.
- Contact channels: the on-page form (sent via EmailJS), WhatsApp `+55 75 98816-9508`, email `venyxtechnology@gmail.com`, and a Linktree (`linktr.ee/venyxtechnology`).
- Working process (confirmed): 1) conversation via WhatsApp or the form; 2) proposal with scope and timeline; 3) development in stages with deliveries the client follows; 4) launch and ongoing maintenance.
- The first conversation is free and without commitment. Venyx replies within 24 business hours.
- All four founders are fullstack engineers with the same shared stack: Java, Spring, Python, JavaScript, Node.js, React, Tailwind, AWS, SQL.
- Portfolio items open in a modal with an image carousel and a longer plain-language description.
- Team members link to their GitHub and LinkedIn profiles.

## Capabilities and Constraints

- Single-page landing site: React 19 + Vite + Tailwind CSS 3, icons from lucide-react, form email via `@emailjs/browser`.
- Site copy is in Brazilian Portuguese (pt-BR).
- Sections today: Navbar, Hero, Serviços, Portfólio, Time ("Os Especialistas"), Contato, Footer.
- Service lines as currently stated: Web & Landing Pages; Aplicativos Mobile; Sistemas & Arquitetura.

## Brand Commitments

- Name: **Venyx Technology** (often split as "Venyx" + "Technology").
- Logo files: `src/assets/logos/logo-venyx-sfundo.png` (transparent), `src/assets/logos/logo-venyx-cfundo.png` (with background), `src/assets/logos/logo-com-nome.png` (with wordmark); favicon `public/logo-venyx-sfundo.png`.
- Voice: confident about engineering, approachable toward non-technical readers.

## Evidence on Hand

- **Team (four co-founders, all "Co-Founder & Software Engineer"):** Allan Oliveira, Gabriel Leal, Lucas Torres, Uillian Leal. Professional photos exist for Allan, Gabriel, and Lucas in `src/assets/image-profile-team/`; Uillian has no photo or GitHub link yet.
- **Contact details:** real (see Operating Context).
- **Portfolio:** the three current projects (Sistema de Gestão Logística, App Fintech, Plataforma de E-commerce B2B) are **placeholders** with Unsplash stock images. They are not real client work and must not be presented as such. Real company projects exist; the user will swap them in later, so future work keeps the placeholders in place (structure ready for real content) instead of rewriting or removing the section.
- **Absent:** no client names, logos, testimonials, case-study metrics, pricing, or press. Future work must not invent any of these.

## Product Principles

1. **Credible to experts, clear to beginners.** Every section should satisfy a technical evaluator and stay readable for someone with no tech background.
2. **Real people, real engineers.** The founders building the work is the core proof; keep them visible and direct.
3. **Range with specificity.** Show the breadth of what Venyx builds through concrete examples, not generic agency claims.
4. **Honest proof only.** Use real evidence or clearly mark placeholders; never fabricate clients, results, or numbers.
5. **Contact is always close.** Starting a conversation should take one step from anywhere on the page.

## Accessibility & Inclusion

No product-specific standard was set. Note: `index.html` declares `lang="en"` while the content is pt-BR.
