# DeHouse Production Asset Checklist

This file is the source of truth for replacing the five development photographs before public launch. The current images are layout/crop placeholders only and should not be treated as cleared production photography.

## Required photography

| ID | Current file to replace | Used in | Production subject | Recommended master | Crop / composition | Required alt-text direction | Launch status |
|---|---|---|---|---|---|---|---|
| A01 | `assets/images/hero.webp` | Hero + final CTA | Premium modern Nigerian/Port Harcourt living room with subtle smart lighting; warm neutral interior; room for headline copy | 2400×1600 WebP/AVIF, ≤350 KB if practical | Landscape; preserve clean negative space on left/centre for hero text; safe crop for mobile | Decorative in hero/final CTA, so keep `alt=""` unless the image communicates unique content | **REPLACE** |
| A02 | `assets/images/smartphone-control.webp` | Smart Security category | Nigerian/African resident using a phone to check a camera, lock, or home-security interface | 1600×1200 WebP/AVIF, ≤220 KB | 4:3; phone visible but not dominant; modern home in context | Describe the action, not the person’s appearance | **REPLACE** |
| A03 | `assets/images/lifestyle.jpg` | Lifestyle statement | Premium connected living room at evening/night with automated lighting ambience | 2200×1500 WebP/AVIF, ≤320 KB | Wide landscape; strong depth; text-safe darker area | “Premium contemporary living room” or a more specific accurate description | **REPLACE** |
| A04 | `assets/images/bright-living.webp` | Professional installation | Bright finished residential interior, ideally with a technician or visibly installed smart switch/lock | 1800×1400 WebP/AVIF, ≤260 KB | Landscape; subject should remain readable around tablet/mobile crop | Describe the installation/home context accurately | **REPLACE** |
| A05 | `assets/images/app-control.jpg` | About DeHouse | Authentic Nigerian/African homeowner controlling connected-home devices from a smartphone | 1600×1800 WebP/AVIF, ≤260 KB | Portrait or 4:5; human moment, premium but natural | “Person controlling connected home devices from a smartphone” if accurate | **REPLACE** |

## Optional second-shoot assets

- Smart wall switch close-up installed on a finished wall.
- Smart lock close-up on a premium entrance door.
- Indoor/outdoor smart security camera in a real property context.
- Automated curtains in a living room or bedroom.
- Smart AC/IR-control moment from a phone.
- Short-let/Airbnb apartment access-control scene.
- DeHouse technician installation/configuration scene.
- Device group shot on a clean neutral background for the future `/devices/` catalog.

## Photography rules

- Use DeHouse-owned photography or assets with explicit commercial web licensing.
- Prefer authentic Nigerian homes and occupants where practical; avoid obviously foreign stock-home cues.
- Keep interiors warm, calm, modern and premium rather than futuristic/neon.
- Do not show UI screens with unreadable fake text, impossible smart-home states, or unsupported product capabilities.
- Remove EXIF/location data from public web exports when appropriate.
- Export responsive WebP/AVIF where possible and keep the original high-resolution masters outside the deployed website.

## Replacement procedure

1. Export the final production image using the exact existing filename shown above.
2. Replace the file inside `assets/images/` without changing the HTML path.
3. Confirm the visible crop at 1440 px, 1024 px, 768 px, 390 px and 360 px widths.
4. Update alt text only when the final image content differs from the current description.
5. Record photographer/source, license/permission and date approved in the release record.
6. Mark the asset **APPROVED** only after visual and licensing review.

## Release gate

**Do not deploy the current five development photographs publicly unless DeHouse has confirmed it has the right to use them.** The landing page can be code-complete while photography remains a launch blocker.
