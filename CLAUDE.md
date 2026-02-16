# Ingenio Law - Corporate & Tax Boutique Law Firm Website

## Project Overview
Professional bilingual (EN/FR) website for Ingenio Law, a corporate and tax boutique law firm positioned as a **legal innovator** brand. Based in Calgary, Alberta.

## Brand Identity
- **Positioning**: Legal innovator / Challenger brand (eatbigfish framework)
- **Brand Archetypes**: "Irreverent Maverick" + "Dramatic Disruptor"
- **Tone**: Bold, direct, provocative, confident. Challenges the status quo of legal industry. No corporate buzzwords. Short punchy sentences. Conversational "we/you" voice. Professional but never bland.
- **Core narrative**: The old legal model is broken (slow, opaque, overpriced). Ingenio tore up the playbook and built something fundamentally better. Businesses deserve counsel that moves as fast as they do.
- **Logo**: Custom mark with three dots (light blue, teal, purple) inside an open circle (dark slate). The "O" in INGENIO uses the logo mark.

## Contact Information
- **Address**: 1920-150 9th Avenue SW, Calgary, Alberta T2P 3H9
- **Phone**: 403-770-1072
- **Email**: info@ingeniolaw.ca

## Tech Stack
- **HTML5** - Semantic markup, multi-page structure
- **CSS3** - Custom styles, responsive design, CSS variables
- **Vanilla JavaScript** - Language toggle, navigation, animations
- **Google Fonts** - Barlow Extra Bold (headings) + Open Sans (body) + Noto Serif (blog headlines, quotes)

## Color Palette
| Color        | HEX       | Usage                          |
|-------------|-----------|--------------------------------|
| Dark Slate  | `#333F48` | Primary text, headers, dark BG |
| Purple      | `#80286C` | Accent, CTAs, highlights       |
| Teal/Green  | `#009776` | Secondary accent, success      |
| Light Blue  | `#9BB8D3` | Subtle accents, backgrounds    |

## Site Structure
```
/
├── index.html          # Home page
├── about.html          # About the firm
├── services.html       # Practice areas (Corporate & Tax)
├── team.html           # Team/lawyers profiles
├── blog.html           # Blog/Insights
├── contact.html        # Contact page
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── main.js         # Main JavaScript
└── assets/
    └── images/
        ├── Ingenio-Icon-RGB.svg       # Color icon/mark (header, general use)
        ├── Ingenio-Icon-Black.svg     # Black icon/mark
        ├── Ingenio-Icon-White.svg     # White icon/mark (dark backgrounds)
        ├── Ingenio-Logo-RGB.svg       # Full wordmark "INGENIO" color
        ├── Ingenio-Logo-Black.svg     # Full wordmark black
        ├── Ingenio-Logo-White.svg     # Full wordmark white
        └── Ingenio JP LinkedIn.jpg    # JP Couture headshot
```

## Language Support
- Bilingual: English (default) and French
- Language toggle in navigation header (EN/FR buttons)
- Translation handled via `data-en` / `data-fr` attributes and JS
- Language preference saved in localStorage

## Practice Areas
- Corporate Law & Governance
- Tax Planning
- Family Office & High-Net-Worth Planning

## JavaScript Features (js/main.js)
- Language toggle with localStorage persistence
- Mobile hamburger navigation with overlay
- Header scroll shadow effect
- IntersectionObserver fade-in animations
- Active nav link detection based on current page
- Contact form submission handling (basic alert)

## Development Notes
- Mobile-first responsive design (breakpoints: 1024px, 768px, 480px)
- No frameworks or build tools required
- Open HTML files directly in browser for development
- Content uses challenger brand voice (Irreverent Maverick + Dramatic Disruptor)
- Team members, stats, and testimonials are placeholders - replace with real firm content
- Logo files are production SVGs from Adobe Illustrator
