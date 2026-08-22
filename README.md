# PulseChat — Product Landing Page

A modern, high-performance landing page for **PulseChat**, showcasing its real-time messaging architecture, persistent WebSocket synchronization, and friction-free user experience.

---

## 🎨 1. Creative Direction: "Electric Cyber-Mesh & Dark Luminescence"

### Visual Identity & Theme
* **Palette:** Deep pitch black (`#04020a`, `#090514`), radiant ultraviolet / electric violet (`#7c3aed`, `#a855f7`, `#c084fc`), and high-contrast crisp white typography.
* **Hero Motion & Atmosphere:**
  * Multi-layered ambient radiant glow orbs pulsing dynamically behind the headline.
  * Floating 3D glassmorphic cards with real-time simulated messaging, typing bubbles, and live socket connection pings.
  * Shimmering gradient text and an interactive desktop cursor spotlight glow.
* **Why this direction?**
  Real-time communication engines live and die by their perceived speed. The *Electric Cyber-Mesh* look avoids generic light SaaS templates and immediately signals modern, low-latency infrastructure through neon gradients, dark mode luminescence, and interactive socket telemetry.

---

## 📝 2. Reasoning Behind Structure & Verified Copy Choices

### Verified Technical Accuracy
Every single claim on this landing page was strictly verified against the actual capabilities of the PulseChat application:
* **Persistent WebSockets (Socket.io):** Real-time 0-refresh synchronization of messages and group states across all active clients.
* **Password-Free Phone + Name Authentication:** Frictionless sign-in with instant JWT session token issuance (no forgotten passwords or reset links).
* **Granular Group Governance:** Creating groups, adding/removing members, renaming group channels, and promoting members to co-admins.
* **Smart Non-Jerk Scroll Engine:** Viewport stays anchored when users read back history; a floating `"New messages ↓"` indicator guides them back to the bottom without jump cuts.
* **Smart User Directory Search:** Instant lookup by contact name or phone number with 1-click chat initiation.

*Note:* All unbuilt or exaggerated claims (e.g. read receipts, emoji reactions, synthetic audio chimes, particle confetti) were explicitly excluded to ensure 100% integrity.

### Structural Flow
1. **Hero with Live Preview:** Grabs attention immediately with a value proposition and an animated chat window in the center.
2. **Signature Live Sandbox (`#demo`):** Hands-on sandbox demonstrating the live chat engine right in the browser.
3. **Bento Grid Features:** Deep dive into the 5 core capabilities with visual code/packet snippets.
4. **Velocity Pipeline (3 Steps):** Shows the fast onboarding flow (Sign In → Discover → Stream).
5. **Reality Check Comparison Table:** PulseChat vs. traditional bloated messaging apps.
6. **High-Impact CTA & Launch Modal:** Lets visitors simulate the phone login or launch the live app.

---

## ⚡ 3. The Signature Interactive Touch: "Live Chat Sandbox & Telemetry Engine"

### What is it?
Instead of a static screenshot or a stock testimonial carousel, we created a **fully functional, interactive in-browser chat sandbox**.

### Key Capabilities in the Sandbox:
* **Live Two-Way Message Stream:** Type any custom message and hit Send (or Enter) to see it immediately append to the conversation with timestamps and socket packet counters.
* **Smart Scroll Simulation:** Scroll up inside the chat window, click *"Simulate Incoming Socket Message"*, and see how the viewport stays anchored while triggering the floating `"New messages ↓ (1)"` pill. Clicking the pill smoothly glides down.
* **Live Group Governance Tester:** Manage the group directly in the browser — rename the channel, promote/demote members to Admin, remove members, or search and add new contacts from the mock directory.
* **Stream Switcher:** Switch back and forth between **1-on-1 Direct Chat** and **Group Channel** mode.

### Why was it added?
Visitors shouldn't just read about real-time speed; they should **feel it**. The sandbox provides immediate proof of PulseChat's non-jerk scrolling, zero-delay socket sync, and group administration.

---

## 🚀 Getting Started & Local Development

### Prerequisites
- Node.js (v18+)
- npm

### Install Dependencies
```bash
npm install
```

### Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```

---

## 🌐 Deployment (Vercel / Netlify)

### Deploy to Vercel
1. Push this repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. The build command (`npm run build`) and output directory (`dist`) are automatically detected via `vercel.json`.

### Deploy to Netlify
1. Connect your repository to [Netlify](https://netlify.com).
2. Netlify will use the included `netlify.toml` configuration automatically.

---

## 🛠 Tech Stack
- **Framework:** React 18 (Vite SPA)
- **Styling:** Tailwind CSS + Custom Glassmorphism & Cyber Gradients
- **Icons:** Lucide React
- **Animations:** CSS Keyframes + Framer Motion
# Pulse-Chat-Landingpage
