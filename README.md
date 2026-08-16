# DeHouse Automation — Phase 1 Launch Build

Premium responsive landing page for DeHouse Automation, launching in Port Harcourt, Rivers State, Nigeria.

## Run locally

This build is dependency-free and can be served by any static web server.

```bash
cd dehouse-automation
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Required WhatsApp launch configuration

Open `config.js` and change the single launch value:

```js
WHATSAPP_NUMBER: ""
```

to the **real DeHouse business WhatsApp number** in international format, digits only, for example `234...`. Do not include `+`, spaces or dashes. The same value powers every WhatsApp CTA on the site.

Optional phone, email and social URLs are also centralized in `config.js`. Unconfigured social links are hidden automatically rather than being published as dead links.

## Routes

- `/` — Phase‑1 landing page
- `/build-smart-home/` — Phase‑2 configurator placeholder
- `/devices/` — device catalog placeholder

## Launch documents

- `ASSET_CHECKLIST.md` — exact production photography requirements and replacement map.
- `QA_CHECKLIST.md` — desktop, tablet, mobile, accessibility, SEO, WhatsApp, performance and broken-link release checklist.

## Phase 2 flow

Select Devices → Review Selection → Send to WhatsApp → DeHouse Confirms → Customer Pays

The future configurator should generate a structured WhatsApp message containing customer name, selected products, quantities, prices, estimated total, DIY/installation choice, property type, location and notes.

## Important

The code is prepared for launch, but the current development photography, real WhatsApp number, real contact/social details, final domain metadata, and the decision to expose placeholder Phase‑2 routes remain explicit release gates. Do not treat those unknown business values as completed by inventing them.
