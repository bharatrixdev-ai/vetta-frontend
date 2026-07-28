# Vetta — Product & Experience Spec v1
*The improved version of the call-experience prompt, extended into the full product. This is the build spec for the Next.js frontend prototype.*

---

## 0. The one-line philosophy

**The conversation is the product.** Everything else — feed, booking, payments, AI — exists to get two accomplished people into a room and make the time between them feel expensive, calm, and worth it.

Design DNA: **Apple** polish · **Linear** restraint · **FaceTime** presence · **Notion** structure · **Topmate** commerce — but Vetta's own signature is **trust made visible** (verification, provenance, earned access).

---

## 1. Locked nomenclature (from the naming system)

| Thing | Name | In-product language |
|---|---|---|
| The vetted experts | **Luminaries** | "Apply to become a Luminary" · Verified ✓ |
| Everyone on the platform | Members | — |
| Paid 1:1 video call | **Session** | "Book a Session" |
| The call screen | **Session Room** | — |
| Pre-call lobby | **Green Room** (theater term — where notable guests prep) | "You're in the Green Room" |
| Post-call screen | **Session Recap** | — |
| Live audio, one-to-many | **Roundtable** | host + co-hosts + up to 200+ listeners |
| Feed posts (tweet-like thoughts) | **Notes** | "Share a Note" |
| The reaction button | **"Noted."** | replaces Like — acknowledgment from smart people |
| In-call AI | **Conversation Intelligence** | descriptive, not over-branded |
| Booking rule | **Rolling Window** | IRCTC-style, see §5 |

**Why "Noted." matters:** it's the platform's tone in one word — understated acknowledgment between professionals, not dopamine hearts.

---

## 2. Information architecture

```
Landing (/)                       – aspirational, converts both audiences
Login (/login)                    – Google + email (mock in prototype)
App shell (/app …)                – authenticated area
 ├─ Home        /app              – Notes feed + "Up next" session strip
 ├─ Explore     /explore          – personalized Luminary discovery
 ├─ Roundtables /roundtables      – live + upcoming tables
 ├─ Messages    /messages         – TWO segments: Clients · Luminaries
 └─ Profile     /profile/[handle] – LinkedIn-but-better
Booking         /book/[handle]    – window calendar → slot → Razorpay → confirmed
Session         /session/[id]     – Green Room → Session Room → Recap
Roundtable room /roundtable/[id]  – stage + listeners + ticket sheet
Apply           /apply            – Luminary application (multi-step)
Studio          /studio           – Luminary side: page, availability, earnings
Support         entry from Profile → help sheet (never buried)
```

**Navigation.** Mobile: Instagram-style bottom bar, 5 tabs (Home, Explore, Roundtables, Messages, Profile), glass, active tab lifts. Desktop: slim left rail (Linear-style), same five + Studio for Luminaries; content max-width 640–720px for feed (calm, readable).

---

## 3. Landing page (the Times Square idea, done tastefully)

The user's instinct: "your name visible on Times Square, but different — minimal." Translation: **the landing sells recognition earned, not fame bought.**

- **Hero:** dark, quiet, one sentence. "Meet the people worth meeting." Sub: "Vetta is the vetted network — real track records, real conversations." One input: "Claim your handle" (vetta.network/you). The *handle itself* is the Times Square — your name in lights, but earned.
- **Social-proof wall:** a slow-scrolling wall of Luminary cards (name ✓, one-line credential) — the "billboard" moment: *your card could be here.*
- **Feature strips** (one screen each, product screenshots): Sessions · Roundtables · Notes · Verification ("How vetting works" — application → proof review → Verified ✓).
- **Pricing honesty:** "Free to join. Sessions priced by each Luminary. Vetta keeps a small platform fee." (minimal-cost positioning the user asked for)
- **Dual CTA:** "Find your person" / "Apply as a Luminary."

---

## 4. Feed, Explore, Profiles

- **Home:** an "Up next" strip on top (your booked Sessions/Roundtables with countdown + Green Room button when <10 min). Below: Notes feed — text-first cards, author ✓ + credential line, actions: **Noted. · Reply · Save · Book** (a Note by a Luminary carries a quiet "Book a Session" ghost button — content converts to conversations).
- **Explore:** search + intent chips ("Raising a round", "Career switch", "Med school", "AI/ML"); ranked Luminary cards (photo, credential proof-line, rating, next available slot, price from). Personalized by profile interests (mocked).
- **Profile (LinkedIn-but-better):**
  - Header: photo, name ✓, headline, **Provenance** section — credentials shown as *verified artifacts* (degree, employer, exits) each with a ✓source, not self-claimed bullet lists.
  - **Proof over prose:** track-record tiles (years, sessions done, rating, response time).
  - Actions: **Book a Session** (primary), Follow, Message (only if chat unlocked), Share.
  - Tabs: Notes · Sessions offered (duration/price cards) · Roundtables · About.
  - Own profile adds: settings, **Contact support** (help sheet: FAQ, report, refund status — one tap, never buried), "Apply as a Luminary" banner for non-Luminaries.

---

## 5. Booking + payments (the IRCTC Rolling Window)

**Rule (user's insight, formalized):** demand for great people is unbounded; year-long calendars rot. So booking opens in a **rolling 60-day window**:

- Members can book **only within the next 60 days**. Beyond that: "March window opens Feb 1 — Notify me." (waitlist = retention loop, and scarcity stays honest)
- Each Luminary configures: window length (up to 60d), weekly hours, buffer times, prices per format (25 min / 50 min / async review).
- Hard platform cap: nothing bookable **>60 days out, ever** (prevents the "booked for two years" failure the user described; no scalping calendars).

**Flow:** Profile → Book → format card → calendar (window edge visibly grayed with "opens Feb 1" chip) → slot picker in member's timezone → summary (price, GST line, refund policy in plain words) → **Razorpay sheet** (mock in prototype: UPI / card / netbanking tabs, the familiar trust marks) → success screen:
- confirmation + calendar add,
- **"Chat unlocks 48 hours before your Session"** explainer,
- "Prepare with Conversation Intelligence: add 3 questions now" (pre-call agenda seeds the AI).

**Refund posture (surface, don't hide):** full refund ≥24h; reschedule once ≤24h; no-show by Luminary = auto-refund + credit.

---

## 6. Messaging (two worlds, one tab)

Messages has **two segments** (top toggle):
- **Clients** — session-bound chats. Locked state shows the lock story: "Unlocks Fri 10:00 (48h before your Session)" — countdown, agenda attach allowed even while locked (messages queue, deliver on unlock). After the Session: chat stays open 7 days ("follow-up window"), then archives with "Book again to continue."
- **Luminaries** — Luminary↔Luminary networking (the user's requirement: they connect with *each other* only through Vetta). Request-based: a short intro note; accept opens the thread. This is the private club floor.

States designed: locked, queued, active, follow-up-window, archived.

---

## 7. The Session experience (the improved call spec)

### 7.1 Green Room (was: "waiting room")
- Animated slow gradient, session card: *"Session with Dr. Sarah Kim ✓ — begins in 02:31."*
- Device checks as calm checklist (Mic ✓ Camera ✓ Network Excellent), camera preview with "touch up lighting" toggle.
- **Agenda card**: your 3 questions (editable) — feeds Conversation Intelligence.
- One button: **Enter when ready** (host presence shown: "Sarah is in the Green Room").

### 7.2 Session Room
- **Stage:** remote person ~90%, rounded 24px, your bubble bottom-right (drag to corners). Screen-share swaps stage, cameras become bubbles (FaceTime morph, 300ms spring).
- **Identity moment:** on join, a glass card (Verified ✓ · Dr. Sarah Kim · Dermatologist · ★4.9) fades after 3s; **hover/tap the video recalls it** (fix to the original spec: information on demand, never lost).
- **Controls:** floating glass pill, auto-hides after 3s idle, returns on movement — Mic · Camera · Share · Whiteboard · ✨ Intelligence · Record (consent-gated: both parties see "Recording requested…") · End. Large targets, soft shadows, 4px hover lift.
- **Timer, humane:** no raw stopwatch. A thin **progress ring** around your own bubble + "22 min · 38 left" on hover; at 5 minutes remaining the ring warms amber and a whisper-toast offers **"+15 min extension"** (paid, one tap, Razorpay saved method — revenue moment the original spec missed).
- **Connection:** never "Poor network." A dot + word: 🟢 Excellent · 🟡 Stable · 🔴 Reconnecting (with auto-recovery message "audio prioritized").
- **Right panel (slides over, never popups):** tabs — **Intelligence · Transcript · Notes · Chat · Files.**

### 7.3 Conversation Intelligence (the signature)
Live panel, updates as-you-talk (mocked in prototype):
- **Now discussing** chips (Fundraising → GTM → Hiring),
- **Key insight** ("Investor raised CAC concern"),
- **Suggested follow-up** ("Ask about retention cohorts"),
- **Your agenda** with auto-checkoffs as topics get covered,
- **Context card** ("Sam was at Sequoia 2019–23 — verified").
Privacy line at top: "Both participants can see Intelligence is on." (trust platform = no asymmetric AI)

### 7.4 Session Recap
- "Today's Session — 42 min with Sarah Kim ✓"
- Topics covered · Action items (checkable) · Key quotes,
- Buttons: **Save to Notes · Download PDF · Book follow-up** (pre-filled with unfinished agenda),
- Rate privately (stars never shown in-call — keep the room clean),
- Follow-up window reminder: "Chat stays open for 7 days."

### 7.5 Mobile Session Room
Full-bleed remote video · your bubble top-right · controls bottom sheet (swipe up: Transcript/Notes/Chat/Files) · Intelligence as a peek-card above controls.

---

## 8. Roundtables (Spaces, but with a head table)

- **Card:** title, host ✓ + co-hosts, live badge with listener count, topic chips, **ticket price or Free**.
- **Room:** the **head table** metaphor — host + up to 4 co-hosts as large tiles in a top arc; listeners as a dense avatar grid (virtualized, 200+); speaking tiles get a soft glow ring, not harsh borders.
- Actions: 🎙 request to speak (host approves → you float up to the table), react (subtle ripple, no emoji rain), clip-save timestamp.
- **Paid tables:** Razorpay ticket sheet; ticket-holders get the recording + transcript after.
- Host tools: mute-all, invite co-host, pin a Note/link, record toggle, "pass the mic."

---

## 9. Luminary side

- **/apply — three steps, honest:** (1) Who you are (LinkedIn/website import mock), (2) **Proof** (upload/link artifacts: employment, papers, exits, licenses — this feeds Provenance), (3) Offer setup (formats, prices, availability). End state: "Under review — we verify every application. ~5 days." (the rejection-possible tone *is* the brand)
- **/studio:** page editor (headline, formats, prices), **Availability** (weekly hours, window length ≤60d, blackout dates), **Earnings** (mock: month, pending payouts, Razorpay account link), Session requests, Roundtable scheduler.

---

## 10. Design system

- **Color:** bg `#0B0B0C`, surface `#141519`, glass `rgba(255,255,255,0.06)` + `backdrop-blur(20px)` + 1px `rgba(255,255,255,0.08)` border; accent gradient **#4F8DFF → #7C6FFF** (the logo V); success `#28C76F`; amber `#F5B14C`; danger reserved for End call only.
- **Type:** Inter (UI) — display weights for numbers/names; generous tracking on small caps labels.
- **Radius:** 16 cards / 24 stage / full pills. **Shadows:** soft, layered, never hard.
- **Motion:** 200ms fades, 300ms springs for layout morphs, sidebar glides, AI text types in; **nothing snaps**; `prefers-reduced-motion` honored.
- **Light mode exists** (landing supports both; app defaults dark).
- **Accessibility:** 4.5:1 minimum on text, visible focus rings, all controls labeled, captions toggle in-call.

---

## 11. Prototype scope (this build)

Frontend-only Next.js (App Router, TS, Tailwind). All data mocked in `src/lib/data.ts`; auth is a localStorage mock; Razorpay is a visual sheet; video tiles are gradient placeholders with initials. Backend intentionally stubbed:

```
vetta/
├─ src/app …            # all routes above
├─ src/components …     # design system + feature components
├─ src/lib/data.ts      # mock luminaries, notes, sessions, roundtables, threads
└─ server/              # ← placeholders for the real backend (empty, documented)
   ├─ api/README.md     # REST/tRPC surface sketch
   ├─ db/README.md      # schema sketch (users, luminaries, sessions, orders…)
   └─ services/README.md# auth, payments (Razorpay), rtc (LiveKit/100ms), ai
```

---

## 12. Design system v2 (post UI/UX Pro Max pass)

**Theming.** Every surface reads semantic tokens (`--ink`, `--mute`, `--wash`, `--glass-bg`, `--line`…) declared once in `globals.css`. `html.light` flips the whole app; the theme is resolved **server-side from a `vetta-theme` cookie**, so there is no flash and no inline script. Dark = brand default (matches the dark app-icon), light = the white-tile logo world.

**Immersive exception.** The Session Room and live Roundtable carry `.stage-dark` — cinema surfaces never flip to light, but they still use the same tokens so contrast stays correct.

**Icons.** One family (Lucide, ~1.75–2.2 stroke), sizes 16/20/24, always paired with a label or `aria-label`, minimum 44×44 touch target. **Zero emoji as structural icons** — every 🎙/📷/🖥/✋/🔒 became a vector.

**Landing effects.** Floating aurora orbs (blurred, GPU transform-only), gradient-text shimmer, marquee Luminary wall that pauses on hover with edge fades, IntersectionObserver scroll reveals with staggered delays, a scroll-progress bar, a nav that condenses into a glass pill on scroll, and scroll-spy underlines. All disabled under `prefers-reduced-motion`.

**Landing structure** (minimal, X-like): nav → hero (claim-your-handle) → Luminary wall → "Three ways in" → Sessions → Roundtables → Notes → Vetting → Pricing → CTA → 4-column footer.

**Prototype role switch.** `RoleProvider` + the "Viewing as" control in the rail flips the entire app between **Member** (Arjun Mehta) and **Luminary** (Dr. Sarah Kim) — identity, nav affordances, own-profile view (owner banner, Share/Studio actions, reviews) and the Studio dashboard: earnings chart, profile-view/conversion/repeat metrics, request queue with accept/decline, upcoming Sessions, availability + rolling-window slider.

---

## 13. Product rules made real (v3)

**Signup asks what you're into.** `/onboarding` runs right after login: pick ≥2 fields from twelve (Medicine, Engineering, AI/ML, Design, Product, Founding, Fundraising, Research, Careers, Finance, Marketing, Law), then say why you're here. Picking "Share what I know" routes straight to the Luminary application. Those fields *are* the ranking signal — editable forever in Settings → Your feed.

**The algorithm is a setting, not a secret.** No watch-time optimisation, no ad auction, no outrage loop. Settings states it plainly: "These fields are the whole algorithm."

**Authenticity, precisely scoped.** AI for building, researching, drafting and prepping is encouraged — that's modern work. What's banned: synthetic identities, deepfaked faces or voices, fabricated credentials. Stated on the landing ("Genuine, or it's gone"), agreed at onboarding, and restated in Settings as the Authenticity pledge.

**Members cannot DM Luminaries.** Enforced in product and explained everywhere: book a Session → chat opens 48h before → stays open 7 days after. Luminaries reach each other through request-and-accept on the private floor.

**Roundtable pricing belongs to the Luminary.** The Studio composer has a Free ⇄ Ticketed toggle with a ₹49–₹999 slider (90% payout). Free tables build audience; ticketed ones include recording + transcript.

**Dual-audience landing.** A "Two doors, one room" section speaks to both sides in their own words — *Skip the cold DM. Buy the hour.* for people climbing, and *Get paid for what you know.* for people whose inbox is already full of "quick question?".

## 14. Session Room v2 (FaceTime-class)

Full-bleed stage, 28px corners, aurora-lit. The remote participant gets a **speaking glow ring** and live **audio-level bars** on their name card. Your **PiP tile hops between all four corners** on tap (spring-eased), carries the session **timer ring** around it, shows a mic-muted badge, and reveals a maximize affordance on hover. All chrome — identity card, connection pill, controls, timer — **auto-hides after 3.2s** and returns on any mouse, touch or key input; tapping the stage recalls the identity card. Screen-share takes the whole stage with its own stop control. 52px control targets, and the Intelligence panel slides the stage over rather than covering it.

## 15. Roundtable live features

**Polls** — host composes a question with 2–4 options and launches to the room; listeners tap to vote, then see animated percentage bars with their pick checked. Hosts can close a poll.
**Q&A** — listeners submit questions and upvote; the list sorts by votes, hosts mark items answered, and the bottom bar carries a live unanswered-count badge.
**Host tools** (Luminary only) — new poll, invite co-host, mute all, pin a link, a live room status line (questions waiting · hands raised · recording), and End Roundtable.

## 16. Settings

Circular icon-tile grid (Privacy, Your feed, Theme, Alerts, Payments, Language, Password, Your data) over a segmented **Who can see your Notes** control (Everyone / Members / Nobody). Panels swap in place: privacy rows with values, the field-picker that drives the feed, a light/dark theme preview pair, notification toggles, payments and payouts, security, and data export/deletion.

---

## 17. Permission model (who can do what)

| Capability | Member | Luminary |
|---|:--:|:--:|
| Post Notes · reply to Notes | ✓ | ✓ |
| React (Noted.) · save | ✓ | ✓ |
| Join Roundtables (free & ticketed) · vote in polls · ask questions | ✓ | ✓ |
| Book & attend Sessions | ✓ | ✓ |
| Message a Luminary | only after booking (opens 48h before, closes 7 days after) | — |
| **Host a Roundtable** | ✗ | ✓ |
| **Take paid Sessions / open slots** | ✗ | ✓ |
| Set Roundtable price (free or ₹49–999) | ✗ | ✓ |
| Poll & Q&A host controls, mute-all, co-host invites | ✗ | ✓ |
| Luminary↔Luminary messaging (private floor) | ✗ | ✓ |
| Studio access | ✗ (gated screen with capability list + Apply CTA) | ✓ |

**How it's enforced in the UI:** the create action (`CreateSheet`) always offers the Note composer, but shows hosting as a locked card with an Apply path for members; `/studio` renders a capability-list gate instead of the dashboard; the Studio nav link is hidden entirely for members; and the Roundtables index swaps the "Host your own" card for a "hosted by verified Luminaries — join any table" notice. The rule is never a dead end — every lock carries the route to earning it.

## 18. Messages — two different products

Messaging is not one screen with a hidden tab; it is two experiences.

**Member inbox.** No segments at all — the Luminary private floor doesn't exist in their UI. They see only chats from Sessions they booked, with the rule stated at the top: *"You can't message a Luminary out of the blue — that's what keeps their attention worth something. Book a Session and this chat opens 48 hours before, then stays open 7 days after."* Empty state offers "Find a Luminary" → Explore, and a persistent footer card links to browsing. Locked threads still accept queued messages that deliver on unlock.

**Luminary inbox.** Two segments — **Clients** (people who booked them; unverified members, so no badge) and **Luminaries** (the private floor, request-and-accept). Copy differs per segment: "People who booked you. Each chat opens 48h before their Session and stays open 7 days after" vs "The private floor — Luminaries reach each other only here, by request."

Thread states are shared: `locked` (with countdown + queueing), `active`, `followup` (7-day window with a "book again" nudge), `request` (accept/decline card).
