# Hampstead Renovations Platform
# Hampstead Renovations — London Renovation Platform (NW3 6DN)

**Hampstead Renovations** is a premium renovation and refurbishment company serving **Hampstead (NW3)** and wider **North West / North London** premium areas.

This repository contains the unified website platform that combines:

1) High-end renovation marketing site (services, case studies, journal)  
2) Conversion-focused local tools (cost calculator, feasibility checks, party wall kit, leasehold toolkit, logistics planner, etc.)  
3) Lead capture + CRM + automated follow-up integrations (HubSpot/WhatsApp/Calendar/Email)  
4) A “trust + transparency” sales experience (client portal demo, case study library, clinic + email course)

> **Business Address (NAP for SEO)**
>
> Hampstead Renovations  
> Unit 3, Palace Court  
> 250 Finchley Rd  
> London NW3 6DN  
> United Kingdom

---

## Table of Contents

- [Why this site exists](#why-this-site-exists)
- [Primary Goals](#primary-goals)
- [Main Navigation (Menus)](#main-navigation-menus)
- [Tools & Lead Funnels (10 conversion assets)](#tools--lead-funnels-10-conversion-assets)
- [Core Service Pages](#core-service-pages)
- [SEO Strategy (London + NW3 focused)](#seo-strategy-london--nw3-focused)
- [Lead Capture + CRM + Automation](#lead-capture--crm--automation)
- [Tech Stack](#tech-stack)
- [Repository Structure (recommended)](#repository-structure-recommended)
- [Getting Started (Local Development)](#getting-started-local-development)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Analytics & Tracking](#analytics--tracking)
- [Privacy, GDPR & Legal Disclaimers](#privacy-gdpr--legal-disclaimers)
- [Roadmap](#roadmap)

---

## Why this site exists

London renovation clients (especially in NW3/Camden) choose contractors based on:

- **Certainty** (budget ranges, timelines, process clarity)
- **Planning & heritage confidence** (conservation areas, listed buildings, Article 4, local policy)
- **Neighbour + logistics risk management** (Party Wall, access, skips/scaffolds, parking suspensions)
- **Proof** (local case studies, constraints handled, quality standards)
- **Professional project management** (reporting, variation control, documentation)

This website is designed to be the **single hub** where prospects can:
- learn services,
- understand costs/risks,
- self-qualify using tools,
- and convert into booked surveys.

---

## Primary Goals

### Business goals
- Increase qualified leads in NW3 + premium North West/North London areas
- Raise conversion rate from “researcher” → “booked survey”
- Pre-sell trust via tools, templates, and transparency

### User goals
- Understand likely budget/timeline early (without wasting weeks)
- Reduce planning/party wall/leasehold uncertainty
- See real case studies and a clear build process

---

## Main Navigation (Menus)

This is the recommended top navigation for the unified website.

### 1) Renovation Services
- Full House Renovation & Refurbishment
- Extensions (Rear / Side Return)
- Loft Conversions
- Basement Projects (if applicable)
- Kitchens
- Bathrooms
- Decorating / Finishes
- Maintenance & Small Works (optional, premium positioning)

### 2) Tools & Checkers (Lead-Generation Hub)
Each tool is branded as a Hampstead Renovations resource and includes clear CTAs.

- Renovation Cost & Timeline Calculator
- Rightmove / Floorplan Feasibility Report
- Camden / NW3 Planning & Policy Risk Checker
- Party Wall Notice Generator + Neighbour-Proof Build Kit
- Leasehold & Mansion Block Renovation Permissions Toolkit
- London Site Logistics Planner (skip/scaffold/parking suspensions)
- Case Study Library + Interactive Map (“Renovations Near You”)
- Period Home Comfort / Retrofit Planner (damp/heat/noise)
- Client Portal Demo (“How we manage your build”)
- Renovation Clinic + 7-Day Email Course (nurture funnel)

### 3) Case Studies
- Filterable library
- Budget band + timeline + constraints included (where appropriate)

### 4) Hampstead Journal
Design + renovation guidance and local-specific advice (Camden, NW3 stock, planning constraints).

### 5) Areas We Cover
Premium North West + North London location pages:
- Hampstead (NW3)
- Belsize Park
- Primrose Hill
- St John’s Wood
- West Hampstead
- Highgate
- Kentish Town (premium pockets)
- Queen’s Park (selected)
- Maida Vale (selected)
- Swiss Cottage / South Hampstead
…and any other strategic locations.

### 6) About
- Company story, approach, process, quality standards

### 7) Contact / Book a Survey
- High-conversion enquiry form
- Calendar booking (optional)
- Phone + WhatsApp
- Address + map + trust signals

---

## Tools & Lead Funnels (10 conversion assets)

Each tool must:
- carry Hampstead Renovations branding + address in footer
- capture leads (email/phone/postcode) where appropriate
- output something useful (PDF/checklist/report)
- end with a strong CTA: **Book a Survey / Feasibility Call**

Below are the 10 tools to implement as pages (and/or multi-step wizards).

---

### 1) Renovation Cost & Timeline Calculator
**URL:** `/tools/renovation-cost-calculator`

**Inputs**
- Postcode (NW3/NW6/NW8/N2/N6 etc.)
- Property type (flat/terrace/semi/detached)
- Scope (full refurb / loft / extension / kitchen+bathrooms)
- Spec level (standard / premium / high-end)
- Constraints (conservation area, access issues, live-in build)

**Outputs**
- Budget range (banded, not a fake precise quote)
- Timeline range
- Key risk notes + next steps

**Lead capture**
- “Email me the breakdown PDF”

---

### 2) Rightmove / Floorplan Feasibility Report
**URL:** `/tools/rightmove-feasibility-report`

**Inputs**
- Rightmove/Zoopla link OR floorplan upload
- Basic goals (extra bedroom, open-plan, office, etc.)
- Postcode + email/phone

**Outputs**
- Instant on-screen summary
- Downloadable “Feasibility Pack” PDF (lead gated)
- Suggested next step: paid/refundable feasibility call

> Note: Keep outputs conservative. This is guidance, not architectural advice.

---

### 3) Camden / NW3 Planning & Policy Risk Checker
**URL:** `/tools/camden-planning-risk-checker`

This tool should go beyond “heritage yes/no” and surface:
- conservation area context
- listed building prompts
- Article 4 prompts
- basement sensitivity prompts (where relevant)
- likely documents/checklists required

**Outputs**
- Risk rating (low/medium/high) + why
- Action checklist: “What to do next”

**Lead capture**
- “Get the full PDF report”

---

### 4) Party Wall Notice Generator + Neighbour-Proof Build Kit
**URL:** `/tools/party-wall-kit`

**Includes**
- Guided Party Wall notice template generator
- Timeline explanation
- Neighbour letter template
- Dust/noise mitigation plan template (client-facing)

**Important**
- Clear disclaimer: templates are informational, not legal advice.
- Encourage using a Party Wall surveyor.

**Lead capture**
- Email required to download templates

---

### 5) Leasehold & Mansion Block Permissions Toolkit
**URL:** `/tools/leasehold-renovation-permissions`

**Includes**
- “Do I need a Licence to Alter?” checker
- Typical freeholder requirements checklist
- Sample scope of works pack contents (drawings, RAMS, insurance)
- Common restrictions (working hours, soundproofing expectations)

**Lead capture**
- Download checklist + “Book a flat refurbishment survey”

---

### 6) London Site Logistics Planner
**URL:** `/tools/site-logistics-planner`

**Includes**
- Skip licence overview + typical lead times
- Scaffold licensing prompts
- Parking suspension guidance
- Delivery & waste plan checklist
- Site setup plan ideas for narrow streets

**Lead capture**
- “Get a logistics plan for your street” (postcode required)

---

### 7) Case Study Library + Interactive Map
**URL:** `/case-studies` and `/case-studies/map`

**Must include**
- Real project constraints (planning/party wall/access)
- Timeline ranges + budget bands (where possible)
- Before/after gallery + short walkthrough video (optional)

**Map**
- Do not reveal exact addresses; show approximate area pins.

**Lead capture**
- “Request the full case study pack PDF”

---

### 8) Period Home Comfort / Retrofit Planner
**URL:** `/tools/period-home-retrofit-planner`

**Focus**
- thermal comfort, noise reduction, condensation/damp risk reduction
- “heritage-appropriate” retrofit guidance (conservative language)

**Outputs**
- Comfort upgrade plan (tiered options)
- Suggested survey type: “comfort audit visit”

---

### 9) Client Portal Demo (Transparency)
**URL:** `/how-we-manage-your-project` (and/or `/tools/client-portal-demo`)

**Show**
- sample weekly report
- project schedule example
- variation/change-order log example
- payment schedule example
- snagging checklist example
- QA process snapshot

**Goal**
- reduce fear of hidden costs & chaos
- make Hampstead Renovations feel “enterprise-grade” in process

---

### 10) Renovation Clinic + 7-Day Email Course
**URL:** `/clinic` and `/learn/7-day-renovation-course`

**Clinic**
- monthly webinar / small local event
- topic-driven: planning, budgeting, party wall, timelines

**Email course**
- structured nurture sequence, pushing toward survey booking

**Lead capture**
- registration form + automated follow-up emails

---

## Core Service Pages

Recommended service URLs:
- `/services/full-house-renovation`
- `/services/extension-builders-london`
- `/services/loft-conversion`
- `/services/kitchen-renovation`
- `/services/bathroom-renovation`
- `/services/painting-decorating`
- `/services/property-maintenance`

Each service page should include:
- What’s included (scope clarity)
- Typical timeline ranges
- Typical budget bands (where safe)
- Case study links
- Trust blocks (reviews, guarantees, process steps)
- CTA: Book a survey / call / WhatsApp

---

## SEO Strategy (London + NW3 focused)

### Local SEO essentials (NAP consistency)
- Footer sitewide includes:
  - **Hampstead Renovations**
  - **Unit 3, Palace Court, 250 Finchley Rd, London NW3 6DN**
  - Phone, email (consistent with Google Business Profile)
- Add `LocalBusiness` schema with address, opening hours, service area.

### Programmatic / scalable pages
- Area pages (NW3/NW6/NW8/N2/N6 etc.)
- Tool pages (each targets “cost”, “planning”, “party wall” intent)
- Journal articles that link back into tools (content → conversion)

### Intent-based keywords (examples)
- “house renovation Hampstead”
- “full refurbishment NW3”
- “extension builders Camden”
- “loft conversion West Hampstead”
- “party wall notice template London”
- “leasehold licence to alter checklist”
- “renovation cost calculator London”

---

## Lead Capture + CRM + Automation

Recommended flow:
1. User uses tool → submits details (email/phone/postcode)
2. Lead created in HubSpot (or CRM)
3. Auto-response email sent with PDF/report
4. Follow-up task created + optional WhatsApp message
5. Booking link offered (survey / feasibility call)
6. Attribution stored (which tool/page generated lead)

Integrations (optional based on your stack):
- HubSpot CRM
- WhatsApp Business
- Microsoft/Google Calendar booking
- Resend/Postmark for emails
- PDF generation microservice

---

## Tech Stack

This repo is designed to support:
- **Next.js** (App Router) for marketing site + tools
- **TypeScript**
- **TailwindCSS** (or your preferred design system)
- **PostgreSQL** (Supabase or hosted)
- **Mapbox** (for map + boundary visualisations)
- **PDF generation** (server-side)
- **Email provider** (Resend recommended)
- **CRM** (HubSpot)

---

## Repository Structure (recommended)

Monorepo (recommended if you already have multiple services/tools):

```txt
/apps
  /web               # Next.js website (marketing + tools + journal)
  /api               # Optional: FastAPI/Node API for PDFs, integrations, etc.
/packages
  /ui                # Shared components (buttons, forms, nav)
  /lib               # Shared utilities (validation, CRM, pricing logic)
  /config            # ESLint/TS configs
/services
  /pdf               # PDF generation service (optional)
  /voice-agent       # Voice/WhatsApp agent (optional)
/docs
  /brand             # Logo usage, tone of voice, NAP
  /legal             # disclaimers, privacy policy templates
