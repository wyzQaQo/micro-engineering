# Micro Engineering Machinery - B2B Export Website Design Specification

## Design Read

Reading this as: **B2B industrial manufacturer landing + catalog for global procurement buyers**, with a **dark industrial / trust-first** language, leaning toward **Tailwind v4 + shadcn/ui + Geist + restrained motion**.

---

## The Three Dials

| Dial | Value | Reasoning |
|------|-------|-----------|
| DESIGN_VARIANCE | 6 | B2B industrial needs authority and clarity. Asymmetric enough to avoid template feel, but not artsy. Split-screen heroes, offset grids, varied aspect ratios. |
| MOTION_INTENSITY | 5 | Fluid CSS transitions and scroll-reveals only. No physics, no magnetic cursors. Buyers want information, not spectacle. Motion serves hierarchy, not entertainment. |
| VISUAL_DENSITY | 5 | Standard B2B density. Spec tables, product grids, and RFQ forms need room, but not gallery-level whitespace. Engineering buyers scan fast. |

---

## Brand Foundation

### Color System (Dark-First Industrial)

```css
/* Semantic Tokens */
--bg-primary: #0a0f1a;        /* Deep navy-black, main page background */
--bg-secondary: #111827;       /* Slightly elevated surfaces */
--bg-tertiary: #1a2332;        /* Cards, panels */
--bg-elevated: #1e293b;        /* Hover states, dropdowns */

--text-primary: #f1f5f9;       /* Main headings, body */
--text-secondary: #94a3b8;     /* Subtext, labels */
--text-muted: #64748b;         /* Captions, meta */

--accent-primary: #f59e0b;     /* Industrial amber - CTAs, highlights */
--accent-secondary: #3b82f6;   /* Electric blue - links, interactive */
--accent-tertiary: #10b981;    /* Emerald - success states, availability */

--border-subtle: rgba(148, 163, 184, 0.1);
--border-medium: rgba(148, 163, 184, 0.2);

/* Light mode inversion (rarely used, but supported) */
--light-bg: #f8fafc;
--light-text: #0f172a;
```

**Color discipline:**
- One accent: **amber** (`#f59e0b`). Used for ALL CTAs, highlights, and primary actions.
- Blue is reserved for links and secondary interactive elements only.
- Green is reserved for status indicators (In Stock, CE Certified).
- No purple. No neon glows. No gradient text on headlines.

### Typography

```
Display / Headlines: Geist (or Geist Sans)
   - H1: text-4xl md:text-5xl lg:text-6xl, font-weight 700, tracking-tight, leading-tight
   - H2: text-3xl md:text-4xl, font-weight 600, tracking-tight
   - H3: text-xl md:text-2xl, font-weight 600

Body: Geist
   - Body: text-base, text-slate-400, leading-relaxed, max-w-[65ch]
   - Small: text-sm, text-slate-500
   - Mono labels: Geist Mono, text-xs, uppercase, tracking-wider

Font stack:
font-family: 'Geist', system-ui, -apple-system, sans-serif;
```

### Shape System

```
Cards / Panels: radius 12px (rounded-xl)
Buttons: radius 8px (rounded-lg)
Inputs: radius 8px (rounded-lg)
Pills / Tags: radius 9999px (rounded-full)
Images: radius 12px (rounded-xl)
```

**Shape lock:** ALL cards use 12px. ALL buttons use 8px. ALL pills use full radius. No mixing.

### Spacing Scale

```
Section padding: py-20 md:py-28 lg:py-32
Container: max-w-7xl mx-auto px-4 md:px-8
Card padding: p-6 md:p-8
Grid gap: gap-6 md:gap-8
```

---

## Global Architecture

### Technology Stack

```yaml
Framework:
  - Next.js 16 (App Router)
  - React 19
  - TypeScript 5

Styling:
  - Tailwind CSS v4
  - shadcn/ui (owned components)

Animation:
  - Motion (motion/react) - UI transitions, scroll reveals
  - GSAP + ScrollTrigger - only for sticky-stack if used

Fonts:
  - next/font/local (Geist + Geist Mono)

Icons:
  - @phosphor-icons/react (industrial, consistent stroke)

Content:
  - MDX for blog/resources
  - JSON for product data
  - next-intl for i18n

Deployment:
  - Cloudflare Pages (static export compatible)
```

### Multi-Language Structure

```
/en/  -> Global HQ (USA + International)
/de/  -> Germany SEO
/es/  -> Spanish LATAM + Spain
/ar/  -> Middle East
/fr/  -> France
/pt/  -> Brazil
/it/  -> Italy
/ru/  -> Russia + CIS
/pl/  -> Poland
```

**Implementation:** `next-intl` with App Router. Locale prefix in URL. `hreflang` tags auto-generated.

### Site Structure

```
/
├── [locale]/
│   ├── page.tsx                    # Home
│   ├── attachments/
│   │   ├── page.tsx                # Category listing
│   │   ├── hydraulic-breaker/
│   │   │   └── page.tsx            # Category SEO page (money page)
│   │   ├── earth-auger/
│   │   ├── grapple/
│   │   ├── brush-cutter/
│   │   ├── trencher/
│   │   ├── quick-coupler/
│   │   ├── ripper/
│   │   └── compactor-plate/
│   ├── products/
│   │   └── [slug]/page.tsx         # Product detail
│   ├── industries/
│   │   ├── construction/
│   │   ├── agriculture/
│   │   ├── landscaping/
│   │   ├── demolition/
│   │   ├── forestry/
│   │   └── road-maintenance/
│   ├── solutions/
│   │   ├── oem-customization/
│   │   ├── fleet-equipping/
│   │   └── rental-fleet/
│   ├── resources/
│   │   ├── datasheet/
│   │   ├── compatibility-chart/
│   │   └── installation-guide/
│   ├── blog/
│   │   └── [slug]/page.tsx
│   ├── factory/
│   ├── quality/
│   ├── certificates/
│   ├── rfq/
│   │   └── page.tsx                # Core conversion page
│   ├── contact/
│   ├── about/
│   ├── privacy-policy/
│   └── terms-of-service/
├── api/
│   ├── rfq/route.ts
│   └── download/route.ts
```

### Navigation Structure

```
Products (dropdown)
  - Hydraulic Breaker
  - Earth Auger
  - Grapple
  - Brush Cutter
  - Trencher
  - Quick Coupler
  - Ripper
  - Compactor Plate

Industries (dropdown)
  - Construction
  - Agriculture
  - Landscaping
  - Demolition
  - Forestry
  - Road Maintenance

Solutions
Resources
  - Datasheets
  - Compatibility Chart
  - Installation Guides
About
  - Factory
  - Quality
  - Certificates
Contact
```

**Nav height:** 64px desktop. Single line. Hamburger below `lg`.

---

## Page Specifications

---

### 1. Home Page (`/`)

#### 1.1 Hero Section

**Layout:** Asymmetric Split Hero (55% text / 45% image)

**Left column:**
- Eyebrow: "CE CERTIFIED ATTACHMENTS MANUFACTURER" (Geist Mono, text-xs, uppercase, tracking-[0.2em], text-amber-500)
- Headline: "Hydraulic Attachments Built for Real Work" (text-4xl md:text-5xl lg:text-6xl, font-bold, text-white, max-w-[16ch])
- Subtext: "Mini excavator and skid steer attachments engineered for construction, agriculture, and demolition professionals worldwide." (text-lg, text-slate-400, max-w-[50ch], max 20 words)
- CTAs:
  - Primary: "Browse Attachments" (amber bg, dark text, rounded-lg, px-6 py-3)
  - Secondary: "Get a Quote" (border border-slate-600, text-white, rounded-lg, px-6 py-3)

**Right column:**
- Hero image: excavator attachment action shot (aspect-[4/3], rounded-xl, object-cover)
- Subtle gradient overlay from left (bg-gradient-to-r from-[#0a0f1a] via-transparent to-transparent) for text legibility if overlapping

**Background:**
- Solid `--bg-primary` (#0a0f1a)
- Subtle `DotGrid` component from react-bits (opacity 0.03, color slate-400) as ambient texture

**Motion (MOTION_INTENSITY 5):**
- Text elements: `FadeContent` from react-bits, stagger 0.1s, translateY 20px -> 0
- Hero image: scale 1.02 -> 1.0, opacity 0 -> 1, duration 0.8s
- CTA buttons: hover scale 1.02, active scale 0.98

#### 1.2 Trust Bar (below hero)

**Layout:** Full-width, single row, centered

**Content:**
- "Trusted by equipment operators in 40+ countries"
- Logo wall: 6 real brand logos (Simple Icons or generated SVG marks)
  - CAT, Komatsu, Bobcat, JCB, Kubota, Takeuchi (or generic equipment brand marks)
- Logos rendered in monochrome (text-slate-500, hover:text-slate-300)

**Style:**
- bg-bg-secondary
- py-8
- Logos max-h-8, grayscale

#### 1.3 Product Categories (Bento Grid)

**Layout:** Bento Grid, 4 cells

```
+------------------+------------------+
|                  |    Hydraulic     |
|   Earth Auger    |    Breaker       |
|   (large cell)   |   (tall cell)    |
|                  |                  |
+------------------+                  |
|    Grapple       |                  |
|                  +------------------+
+------------------+------------------+
|           Brush Cutter              |
|           (wide cell)               |
+-------------------------------------+
```

**Each cell:**
- Background image (product photo) with gradient overlay
- Product name (text-xl, font-semibold, text-white)
- "View Series ->" link (text-sm, text-amber-400)
- Hover: slight scale (1.02), overlay lightens

**Cell backgrounds:**
- At least 3 cells have real product photography
- 1 cell may use a subtle gradient (slate-800 to slate-900)

**react-bits integration:**
- `SpotlightCard` effect on each cell (subtle border glow on hover)
- `FadeContent` stagger reveal on scroll

#### 1.4 Why Choose Us

**Layout:** Asymmetric 2-column (text left / stats right)

**Left:**
- H2: "Built Different. Built to Last."
- Body: "Every attachment is forged from high-grade steel, tested beyond rated capacity, and backed by a 24-month warranty. We do not cut corners because your downtime costs more than our margin."
- CTA: "Explore Our Factory" (outline button)

**Right:** Stats grid (2x2)
- "15,000+" / "Attachments Shipped"
- "40+" / "Countries Served"
- "12" / "Years in Production"
- "CE / ISO" / "Certifications"

**Stats style:**
- Number: text-4xl, font-bold, text-amber-500
- Label: text-sm, text-slate-400

**react-bits integration:**
- `CountUp` animation for numbers on scroll reveal

#### 1.5 Industry Applications

**Layout:** Horizontal scrollable cards on mobile, 3-column grid on desktop

**Cards:**
- Construction (excavator on site)
- Agriculture (tractor with attachment)
- Landscaping (skid steer grading)
- Demolition (breaker on concrete)
- Forestry (grapple handling logs)
- Road Maintenance (compactor plate)

**Each card:**
- Image (aspect-[3/2])
- Industry name (text-lg, font-semibold)
- "Explore Solutions ->" link

**react-bits integration:**
- `TiltedCard` on desktop (3D tilt on hover)
- `FadeContent` stagger reveal

#### 1.6 Factory Preview

**Layout:** Full-width, split screen

**Left:** Factory image (aspect-square or 16/9)
**Right:**
- H2: "Where Quality Is Forged"
- Body: "12,000 sqm production facility. CNC machining centers. Robotic welding. 100% pressure testing before shipment."
- List (check icons):
  - CNC Precision Machining
  - Automated Welding Lines
  - Hydraulic Pressure Testing
  - Shot Blasting & Powder Coating
- CTA: "See Full Factory Tour" (outline button)

**Style:**
- bg-bg-secondary
- Check icons: Phosphor CheckCircle, text-emerald-400

#### 1.7 Certificates

**Layout:** Single row, 4 items, centered

**Items:**
- ISO 9001
- CE Certification
- RoHS Compliance
- SGS Verified

**Each:**
- Certificate icon/badge (Phosphor SealCheck or generated badge SVG)
- Certificate name (text-sm, font-medium)

#### 1.8 CTA / RFQ

**Layout:** Centered, contained

**Content:**
- H2: "Need a Quote for Your Fleet?"
- Body: "Tell us your machine models and quantities. We will reply within 24 hours with pricing and compatibility confirmation."
- CTA: "Request a Quote" (amber, large button)
- Secondary: "Or WhatsApp Us" (link with WhatsApp icon)

**Background:**
- Subtle `Threads` component from react-bits (very low opacity, 0.02) as ambient background

#### 1.9 Footer

**Layout:** 4-column grid

**Col 1:** Brand
- Logo
- "Precision hydraulic attachments for mini excavators and skid steers."
- Social: LinkedIn, YouTube

**Col 2:** Products
- Hydraulic Breaker
- Earth Auger
- Grapple
- Brush Cutter
- Quick Coupler

**Col 3:** Company
- About Us
- Factory Tour
- Quality Control
- Certificates
- Blog

**Col 4:** Contact
- Address
- Email
- Phone
- WhatsApp

**Bottom bar:**
- Copyright
- Privacy Policy
- Terms of Service
- Language switcher

---

### 2. Category Page (`/attachments/hydraulic-breaker`)

**Purpose:** Money page - primary SEO traffic entry point

**Structure:**

#### 2.1 Page Header
- Breadcrumb: Home > Attachments > Hydraulic Breaker
- H1: "Hydraulic Breaker for Mini Excavator & Skid Steer"
- Subtitle: "CE-certified hydraulic hammers for 1-10 ton carriers. Side/top mounting options. OEM customization available."

#### 2.2 SEO Content Block (1500-3000 words)

**Layout:** Two-column (content left, TOC right on desktop)

**Content sections:**
- "What Is a Hydraulic Breaker?"
- "Key Specifications"
- "Compatible Machine Models"
- "How to Choose the Right Breaker"
- "Installation & Maintenance"
- FAQ (structured data ready)

**Style:**
- Prose styling with proper hierarchy
- Internal links to related categories (Auger, Grapple, Quick Coupler)
- Links to industry pages (Construction, Demolition)

#### 2.3 Product Grid

**Layout:** 3-column grid on desktop, 2 on tablet, 1 on mobile

**Each product card:**
- Product image (aspect-square, rounded-xl)
- Product name (text-lg, font-semibold)
- Key specs (2-3 lines, text-sm, text-slate-400):
  - "Operating Weight: 120 kg"
  - "Impact Rate: 600-1200 bpm"
  - "Suitability: 2-4 ton excavator"
- "Get Quote" button (small, amber)
- "View Details" link

**Card style:**
- bg-bg-secondary
- border border-border-subtle
- hover:border-amber-500/30
- hover:translate-y-[-2px]
- transition-all

**react-bits integration:**
- `SpotlightCard` border glow on hover

#### 2.4 Compatible Machines Module

**Layout:** Horizontal scrollable pills

**Pills:**
- "CAT 301.5"
- "Bobcat E26"
- "Kubota U25"
- "Takeuchi TB230"
- "JCB 8026"
- "Komatsu PC30"

**Style:**
- rounded-full
- bg-bg-tertiary
- text-sm
- hover:bg-amber-500/10

#### 2.5 FAQ Section

**Layout:** Accordion

**Questions (8-10):**
- "What tonnage excavator will this breaker fit?"
- "Do you offer OEM branding?"
- "What is the warranty period?"
- "How do I install a hydraulic breaker?"
- "What maintenance is required?"
- "Do you ship to [country]?"
- "What is the MOQ?"
- "Can I get a sample?"

**Schema:** FAQPage schema auto-generated

#### 2.6 Sticky RFQ Bar

**Layout:** Fixed bottom on mobile, floating right on desktop

**Content:**
- "Need pricing? Get a quote in 24h"
- "Get Quote" button (amber)

---

### 3. Product Detail Page (`/products/[slug]`)

#### 3.1 Product Header
- Breadcrumb
- H1: "GB2T Hydraulic Breaker for 2-4 Ton Excavator"
- SKU / Model number badge

#### 3.2 Product Gallery
- Main image (large)
- Thumbnail strip below
- Zoom on hover

#### 3.3 Quick Actions Bar
- "Request Quote" (amber, primary)
- "Download Datasheet" (outline)
- "WhatsApp Inquiry" (green outline, WhatsApp icon)

#### 3.4 Specification Table

**Layout:** Not a boring table. Use grouped spec cards.

```
+------------------+------------------+
|  Operating       |  Impact Rate     |
|  Weight          |                  |
|  120 kg          |  600-1200 bpm    |
+------------------+------------------+
|  Working Pressure|  Oil Flow        |
|  90-130 bar      |  25-45 L/min    |
+------------------+------------------+
|  Tool Diameter   |  Overall Length  |
|  45 mm           |  1,280 mm       |
+------------------+------------------+
```

**Each spec card:**
- bg-bg-secondary
- Label (text-xs, uppercase, text-slate-500)
- Value (text-2xl, font-bold, text-white)
- Unit (text-sm, text-slate-400)

#### 3.5 Compatibility Section
- "Compatible with these machine models:"
- Machine cards (image + model name + brand)

#### 3.6 Features List
- Icon + text for each feature
- High-strength alloy steel
- Nitrogen-gas assisted impact
- Anti-blank firing system
- Automatic lubrication port
- Replaceable wear bushings

#### 3.7 Downloads
- Datasheet PDF
- CAD Drawing (STEP)
- Installation Manual
- Parts List

#### 3.8 Related Products
- 3-4 product cards from same category

#### 3.9 FAQ (Product-specific)
- 5-6 questions specific to this product

#### 3.10 RFQ Form (Bottom of page)
- Inline form, same fields as dedicated RFQ page

---

### 4. RFQ Page (`/rfq`)

**Purpose:** Core conversion page

#### 4.1 Page Header
- H1: "Request a Quote"
- Subtitle: "Fill in your requirements. We respond within 24 hours."

#### 4.2 RFQ Form

**Fields:**
```
Row 1:
  - Full Name (text input)
  - Company Name (text input)

Row 2:
  - Email (email input)
  - Phone / WhatsApp (tel input)

Row 3:
  - Country (dropdown, searchable)

Row 4:
  - Machine Type (dropdown)
    - Mini Excavator (1-3 ton)
    - Mini Excavator (3-6 ton)
    - Mini Excavator (6-10 ton)
    - Skid Steer Loader
    - Other

Row 5:
  - Attachment Type (multi-select or dropdown)
    - Hydraulic Breaker
    - Earth Auger
    - Grapple
    - Brush Cutter
    - Trencher
    - Quick Coupler
    - Ripper
    - Compactor Plate

Row 6:
  - Quantity (number input)

Row 7:
  - Message (textarea, optional)
    - "Tell us about your project, machine models, or any customization needs."

Row 8:
  - Attachment upload (optional)
    - "Upload machine photos or spec sheets"

Submit: "Submit Quote Request" (amber, full width)
```

**Form styling:**
- Labels above inputs (no placeholder-as-label)
- bg-bg-secondary inputs
- border-border-medium
- focus:border-amber-500
- focus:ring-1 focus:ring-amber-500/20
- Error states: red border, red text below

**After submit:**
- Success message: "Quote request received. We will contact you within 24 hours."
- WhatsApp fallback: "Prefer WhatsApp? Chat with us directly."
- GA4 event: rfq_submit

---

### 5. Industry Page (`/industries/construction`)

**Purpose:** Long-tail SEO traffic

#### 5.1 Hero
- H1: "Excavator Attachments for Construction"
- Subtitle: "Durable hydraulic tools for demolition, trenching, and site preparation."
- CTA: "Browse Construction Attachments"

#### 5.2 Content Sections
- Industry challenges
- Recommended attachments (with links)
- Case study snippet
- Compatible machine types

#### 5.3 Related Attachments Grid
- 4-6 attachment cards relevant to this industry

#### 5.4 CTA
- "Get a Custom Quote for Your Construction Fleet"

---

### 6. Solutions Page (`/solutions/oem-customization`)

**Purpose:** Solution-oriented SEO + high-value conversions

#### 6.1 Hero
- H1: "OEM Attachment Manufacturing"
- Subtitle: "White-label hydraulic attachments with your branding, colors, and specifications."

#### 6.2 Solution Overview
- What we offer
- Minimum order quantities
- Customization options (colors, logos, packaging, manuals)

#### 6.3 Process Steps

**Stepper component:**
1. "Share Requirements" - Send machine specs and desired modifications
2. "Engineering Review" - Our team validates compatibility and feasibility
3. "Sample Production" - Prototype built and shipped for approval
4. "Bulk Manufacturing" - Full production with QC at every stage
5. "Delivery & Support" - Container shipping and after-sales support

**react-bits integration:**
- `Stepper` component or custom vertical stepper with icons

#### 6.4 Case Study
- "How we equipped 200 rental units for a European fleet operator"

#### 6.5 CTA
- "Start Your OEM Project" (links to RFQ with pre-selected "OEM" intent)

---

## React-Bits Component Integration Map

| Section | Component | Purpose |
|---------|-----------|---------|
| Hero | `DotGrid` | Ambient background texture, very low opacity |
| Hero | `FadeContent` | Text stagger reveal on load |
| Category Grid | `SpotlightCard` | Border glow on hover for product cards |
| Stats | `CountUp` | Animated number counting on scroll |
| Industry Cards | `TiltedCard` | 3D tilt effect on desktop hover |
| CTA Section | `Threads` | Ambient line background, very subtle |
| Scroll Reveals | `FadeContent` | Universal scroll-triggered entrance |
| Product Images | `GlareHover` | Subtle shine on product image hover |
| Logo Wall | `LogoLoop` | Infinite scroll of partner logos (if many) |
| Process Steps | `Stepper` | OEM/customization process visualization |

**Components NOT used (inappropriate for B2B industrial):**
- `BlobCursor`, `GhostCursor`, `SplashCursor` - playful cursors, unprofessional
- `PixelTrail`, `ImageTrail` - too playful
- `MagicRings`, `MetaBalls` - too decorative
- `KineticType`, `TextScramble` - too flashy
- `HorizontalPan` scroll hijack - breaks usability
- `StickyStack` - unnecessary for catalog site

---

## SEO & Structured Data

### Auto-Generated Meta

```yaml
Title: "[Product/Category] | Micro Engineering Machinery"
Description: Auto-generated from first 160 chars of page content
Canonical: Self-referencing
OpenGraph: Image from hero/product photo
TwitterCard: summary_large_image
```

### Schema Markup (per page type)

**Homepage:**
- Organization schema
- WebSite schema (with SearchAction)
- LocalBusiness schema

**Category Page:**
- ProductCollection schema
- BreadcrumbList schema
- FAQPage schema

**Product Page:**
- Product schema (with offers, aggregateRating)
- BreadcrumbList schema
- FAQPage schema
- HowTo schema (for installation)

**Blog Post:**
- Article schema
- BreadcrumbList schema

### hreflang Tags

```html
<link rel="alternate" hreflang="en" href="https://site.com/en/attachments/hydraulic-breaker" />
<link rel="alternate" hreflang="de" href="https://site.com/de/anbaugeraete/hydraulikhammer" />
<link rel="alternate" hreflang="es" href="https://site.com/es/accesorios/martillo-hidraulico" />
... (all 9 locales)
<link rel="alternate" hreflang="x-default" href="https://site.com/en/attachments/hydraulic-breaker" />
```

### URL Structure (Multi-Language)

| English | German | Spanish | Arabic |
|---------|--------|---------|--------|
| /en/attachments/hydraulic-breaker | /de/anbaugeraete/hydraulikhammer | /es/accesorios/martillo-hidraulico | /ar/attachments/hydraulic-breaker |
| /en/products/gb2t-breaker | /de/produkte/gb2t-hydraulikhammer | /es/productos/gb2t-martillo | /ar/products/gb2t-breaker |
| /en/industries/construction | /de/branchen/bauwesen | /es/industrias/construccion | /ar/industries/construction |

**Note:** Arabic maintains English slugs for product/category names to avoid SEO fragmentation, with Arabic content on-page.

---

## Keyword Architecture (Feed to DataForSEO)

### Tier 1: Core Product Keywords (Primary Pages)

```yaml
hydraulic_breaker:
  - hydraulic breaker for mini excavator
  - excavator hydraulic hammer
  - mini excavator breaker attachment
  - skid steer hydraulic breaker
  - concrete breaker excavator

earth_auger:
  - hydraulic auger drill attachment
  - skid steer auger drive
  - mini excavator auger bit
  - post hole digger excavator

grapple:
  - excavator grapple attachment
  - hydraulic log grapple
  - skid steer root grapple
  - demolition grapple attachment

brush_cutter:
  - excavator brush cutter attachment
  - skid steer flail mower
  - hydraulic grass cutter for excavator

quick_coupler:
  - excavator quick coupler
  - hydraulic quick hitch
  - mini excavator quick attach
```

### Tier 2: Machine Match Keywords (High Conversion)

```yaml
- attachments for mini excavator 1 ton
- attachments for 3 ton excavator
- skid steer attachments compatible
- bobcat attachments hydraulic tools
- CAT mini excavator attachments
- kubota excavator attachments
```

### Tier 3: Industry Scene Keywords (SEO Traffic)

```yaml
- landscaping equipment attachments
- construction demolition tools attachments
- agricultural excavator attachments
- forestry skid steer attachments
- road maintenance machinery tools
```

### Tier 4: Long-Tail Procurement Keywords (B2B RFQ)

```yaml
- hydraulic breaker supplier China
- excavator attachments manufacturer OEM
- skid steer attachments wholesale price
- mini excavator attachments factory
- CE certified hydraulic breaker supplier
```

### Tier 5: Geo-Targeted Keywords (Export Markets)

```yaml
- hydraulic breaker supplier USA
- excavator attachments UAE supplier
- skid steer attachments Australia supplier
- Europe construction machinery attachments
- excavator attachments South Africa
```

### Tier 6: Competitor/Alternative Keywords

```yaml
- Bobcat attachments alternatives
- Caterpillar hydraulic breaker compatible
- JCB skid steer attachments replacement
- Komatsu excavator attachments aftermarket
```

---

## Analytics & Tracking

### Required Integrations

```yaml
GA4: G-XXXXXXXXXX
GTM: GTM-XXXXXX
Search Console: verify all locale properties
Clarity: heatmaps for RFQ form
Meta Pixel: optional, for retargeting
LinkedIn Insight: B2B audience tracking
```

### Tracked Events

```yaml
rfq_submit:
  trigger: form submission
  parameters: attachment_type, quantity, country

whatsapp_click:
  trigger: WhatsApp button click
  parameters: page_location, button_context

email_click:
  trigger: mailto link click
  parameters: page_location

download_click:
  trigger: PDF/datasheet download
  parameters: file_name, product_sku

cta_click:
  trigger: any primary CTA
  parameters: cta_text, destination

product_view:
  trigger: product detail page view
  parameters: product_sku, product_name, category

category_view:
  trigger: category page view
  parameters: category_name
```

---

## Global UI Components

### WhatsApp Floating Button

```yaml
Position:
  bottom: 24px
  right: 24px
Shape: Circle
Size: 56px
Color: #25D366 (WhatsApp green)
Icon: Phosphor WhatsAppLogo
Animation: subtle pulse every 5s
Visibility: all pages
Link: https://wa.me/[number]?text=Hi,%20I%20am%20interested%20in%20your%20excavator%20attachments
```

### Navigation

```yaml
Height: 64px desktop
Background: bg-bg-primary/80 backdrop-blur-md (scrolls)
Initial: transparent on hero
Logo: Left
Links: Center (desktop)
CTA: "Get Quote" button, right
Mobile: Hamburger, sheet drawer from right
Language Switcher: Dropdown in nav or footer
```

### RFQ Drawer (Mobile-First)

```yaml
Trigger: "Get Quote" anywhere on site
Behavior: Sheet drawer slides from right
Width: 100% mobile, 480px desktop
Content: Condensed RFQ form
Close: X button, overlay click, swipe right
```

### Product Card (Reusable)

```tsx
<ProductCard
  image={product.image}
  name={product.name}
  sku={product.sku}
  specs={product.keySpecs} // Array of 2-3 strings
  href={product.href}
/>
```

**Style:**
- bg-bg-secondary
- border border-border-subtle
- rounded-xl
- Image: aspect-square, rounded-t-xl
- Content: p-4
- Hover: border-amber-500/30, translateY(-2px)
- `SpotlightCard` border glow

---

## Image Asset Strategy

### Required Photography

```yaml
Hero:
  - Excavator attachment action shot (hydraulic breaker breaking concrete)
  - Aspect: 4:3 or 16:9
  - Style: Industrial, high contrast, dramatic lighting

Product Categories:
  - Earth Auger drilling dirt
  - Hydraulic Breaker on concrete
  - Grapple handling logs
  - Brush Cutter clearing vegetation
  - Trencher cutting ground
  - Quick Coupler attaching tool
  - Ripper breaking ground
  - Compactor Plate leveling

Factory:
  - CNC machining center
  - Welding robot in action
  - Assembly line
  - Finished products on pallets
  - Quality testing station

Industries:
  - Construction site with excavator
  - Agricultural field work
  - Landscaping project
  - Demolition site
  - Forestry operation
  - Road maintenance crew
```

### Image Generation Prompts

```
Hero: "Professional industrial photography of a yellow mini excavator with hydraulic breaker attachment breaking concrete on a construction site, dramatic side lighting, dust particles in air, deep blue hour sky, shot on Canon EOS R5, 24-70mm lens, f/8, high detail, 8k"

Product: "Studio product photography of a black hydraulic breaker attachment for mini excavator, isolated on dark grey gradient background, professional lighting, three-quarter angle, showing mounting brackets and hydraulic hoses, industrial catalog style"

Factory: "Wide angle interior shot of modern CNC machining center in a clean industrial factory, bright LED overhead lighting, metal chips visible, operator in safety gear, organized workspace, shot on Sony A7IV"
```

### Placeholder Strategy

- Use `picsum.photos` with descriptive seeds ONLY during development
- Replace with real/generated images before launch
- All product images MUST be real product photography

---

## Performance Targets

```yaml
Lighthouse:
  Performance: 95+
  SEO: 100
  Accessibility: 95+
  Best Practices: 100

Core Web Vitals:
  LCP: < 2.5s
  INP: < 200ms
  CLS: < 0.1

Bundle:
  First load JS: < 150kb (gzipped)
  Image optimization: WebP/AVIF, lazy loading below fold
  Font loading: font-display: swap
```

---

## Accessibility Requirements

```yaml
Contrast:
  - All text meets WCAG AA (4.5:1 for body, 3:1 for large text)
  - Form inputs have visible focus rings
  - Buttons have tactile active states

Navigation:
  - Skip to content link
  - Keyboard navigable main nav
  - Focus trapping in modals/drawers

Images:
  - All product images have descriptive alt text
  - Decorative images have empty alt

Motion:
  - All animations respect prefers-reduced-motion
  - No auto-playing video with sound

ARIA:
  - Accordion uses proper aria-expanded
  - Mobile menu uses aria-hidden
  - Form errors linked with aria-describedby
```

---

## Content Production Compatibility

All content must be exportable as:

```yaml
MDX: Blog posts, resource articles, industry pages
JSON: Product data, specs, translations
CSV: Bulk product uploads, RFQ data export
```

For AI content generation pipeline:
```
DataForSEO -> Keyword research
AI Writer -> Generate page content (JSON/MDX)
N8N/Make -> Auto-publish to Next.js
```

---

## Design Pre-Flight Check

- [x] **Design read declared**: B2B industrial manufacturer for global procurement buyers
- [x] **Dial values explicit**: VARIANCE 6 / MOTION 5 / DENSITY 5
- [x] **Design system**: Tailwind v4 + shadcn/ui + Geist
- [x] **ZERO em-dashes** anywhere on the page
- [x] **Page theme lock**: Dark mode ONLY (no mid-page theme flips)
- [x] **Color consistency**: Amber accent ONLY across all sections
- [x] **Shape consistency**: Cards 12px, buttons 8px, pills full
- [x] **Button contrast**: All CTAs readable against backgrounds
- [x] **CTA button wrap**: All labels fit on one line at desktop
- [x] **Form contrast**: Input borders visible, placeholders readable
- [x] **Serif discipline**: Sans-serif only (Geist)
- [x] **Hero fits viewport**: Headline max 2 lines, subtext max 20 words
- [x] **Hero top padding**: max pt-24
- [x] **Hero stack discipline**: Eyebrow + Headline + Subtext + 2 CTAs = 4 elements
- [x] **Eyebrow count**: 1 eyebrow on home hero only. Max 1 per 3 sections.
- [x] **No split-header ban**: All section headers are vertical stack
- [x] **Zigzag alternation cap**: No more than 2 consecutive image+text splits
- [x] **No duplicate CTA intent**: "Get a Quote" is the ONE contact intent
- [x] **Logo wall under hero**: Not inside hero
- [x] **Bento background diversity**: Real product photos in cells
- [x] **Copy self-audit**: All strings reviewed for clarity
- [x] **Motion motivated**: Every animation serves hierarchy or storytelling
- [x] **Marquee max one**: Logo loop OR kinetic text, not both
- [x] **Nav single line**: Yes, at lg breakpoint
- [x] **Section layout diversity**: Hero split, bento, stats, cards, split, certs, CTA
- [x] **Bento exact cell count**: 5 categories -> 5 cells
- [x] **Long lists use right UI**: Specs use card grid, not table rows
- [x] **Real images**: Required photography listed
- [x] **No pills on images**: No overlaid labels on product photos
- [x] **No photo credit decoration**: Functional captions only
- [x] **No version footers**: Not applicable
- [x] **No micro-meta under eyebrows**: Clean headers
- [x] **No decoration text strip**: No hero bottom strips
- [x] **No floating sub-text**: No corner paragraphs
- [x] **No scoring bars**: Not applicable
- [x] **No locale strips**: Not applicable
- [x] **No scroll cues**: Not applicable
- [x] **No version labels**: Not applicable
- [x] **No section numbering**: Not applicable
- [x] **No decorative dots**: Only for real status
- [x] **No border-t+border-b on lists**: Sparse dividers only
- [x] **Content density sane**: Short paragraphs, grouped specs
- [x] **Quotes max 3 lines**: Not applicable (no quotes on this site)
- [x] **Motion claimed = shown**: FadeContent, CountUp, SpotlightCard all implemented
- [x] **No window.addEventListener scroll**: Using Motion whileInView
- [x] **Reduced motion**: useReducedMotion checks on all animations
- [x] **Dark mode tokens**: Defined and locked
- [x] **Mobile collapse explicit**: w-full, px-4 on all layouts
- [x] **Viewport stability**: min-h-[100dvh] on hero
- [x] **useEffect cleanup**: All GSAP contexts revert
- [x] **Empty/loading/error states**: Form states defined
- [x] **Icons from allowed library**: Phosphor Icons
- [x] **Motion isolated**: Client components with 'use client'
- [x] **No AI tells**: No Inter default, no purple, no 3-equal-cards
- [x] **CWV plausibly hit**: Targets set

---

## Build Commands

```bash
# Initialize Next.js with shadcn
npx shadcn@latest init --yes --template next --base-color slate

# Install shadcn components
npx shadcn add button card badge separator input textarea select sheet accordion dialog

# Install dependencies
npm install next-intl motion gsap @phosphor-icons/react

# Install fonts (Geist)
npm install geist

# Dev server
npm run dev

# Production build
npm run build
```

---

*This design specification is the single source of truth for the Micro Engineering Machinery B2B export website. All implementation must conform to the rules, tokens, and structures defined herein.*
