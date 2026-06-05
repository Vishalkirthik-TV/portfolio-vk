## NeoBrutalism Design System

### Personality
Loud, bold, rebellious. Anti-design on purpose. Impossible to ignore. It's not random chaos; it's controlled chaos.

### Layout Rules
- Simple grid or stacked section layouts
- Keep structure clean — loud components, not messy layouts
- Sections separated with borders or color blocks
- Dense spacing — less breathing room than modern SaaS

### Color System
- Use high-saturation, bold colors:
  - Neon yellow: #FDE047
  - Hot pink: #FF006E
  - Bright green: #00FF9F
  - Electric blue: #0066FF
- Combine 2–3 strong colors maximum
- Always pair with black (#000000) for outlines
- NO soft pastels. NO subtle gradients.

### Typography
- Bold, heavy, oversized headings
- Sans-serif with strong weight (Inter Black, Arial Black)
- Big headings: clamp(2.5rem, 6vw, 5rem)
- Tight line-height (1.0–1.2)
- High contrast: black text on bright backgrounds

### Borders & Strokes
- Thick black borders everywhere: 2px to 4px solid #000
- Apply to: buttons, cards, inputs, images, sections
- Nothing should feel "borderless"

### Shadows (Hard Shadow — NEVER blur)
- No blur. Ever.
- `box-shadow: 4px 4px 0px 0px #000;`
- Shadow color: almost always black
- Creates the "sticker" or "cut-out" effect

### Buttons & Inputs
- Big, chunky, impossible to miss
- Bright background + 2-3px black border
- Sharp corners (border-radius: 4px max)
- Hover: button moves slightly, shadow shifts

### Micro-interactions
- Button press effect on click
- Shadow shifts on hover
- Slight translate: translateX(2px) translateY(2px)
