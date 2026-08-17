# UAE Visit Planner

A single-file HTML tool that tracks days spent in the UAE on a 5-year multiple-entry
visit permit and works out when the next trip can happen without triggering a fine.

Built after both my parents were fined AED 1,015 each at Sharjah Airport on
15 Feb 2026 for a 15-day overstay that nobody saw coming.

## The rule this tool exists to enforce

The permit allows **90 days in any rolling 365-day window**. Not 180, and not a
calendar year.

The 180-day figure appears in most published guidance but is not automatic. It
requires a separate paid extension applied for before the initial 90 days run out.
Without that application the ceiling stays at 90.

The window is **rolling**: it moves forward every day. A trip stops counting
exactly 365 days after each of its days. This is what caught my parents out.
No individual trip was too long. Three trips stacked inside one moving window.

Both the entry day and the exit day count as days present.

Overstay is fined at AED 50 per day, unified across all seven emirates since
11 February 2026. No grace period on visit visas.

## The case that validates the maths

Window ending 15 Feb 2026 (so opening 16 Feb 2025):

| Trip | Entry | Exit | Days | In that window |
|------|-------|------|------|----------------|
| 1 | 2024-10-03 | 2024-11-09 | 38 | 0 (aged out) |
| 2 | 2025-03-12 | 2025-04-19 | 39 | 39 |
| 3 | 2025-10-17 | 2025-11-24 | 39 | 39 |
| 4 | 2026-01-20 | 2026-02-15 | 27 | 27 |

Total in window = 105. Minus the 90 allowance = **15 days over**, which is exactly
what the fine receipt states.

**Regression test:** with Trips 1–3 recorded, planning 2026-01-20 → 2026-02-15
must return "over by 15 days", first breach 1 Feb 2026, and AED 750. If a change
breaks this, the change is wrong. A runnable version of this check extracts the
`<script id="engine">` block and asserts it (see git history for the scratch test).

Note these are UAE entry/exit dates. The original handwritten record used arrival
dates back in Jodhpur, one day later, because the flights land overnight.

## Files

- `index.html` — the whole tool. No build step, no dependencies. Fonts load from
  Google Fonts; everything else is inline. Serves at `/tools/uae_visa_planner/`.
- `UAE_Visa_Fine_Family_Note.md` — the plain-English writeup shared with family.

## Architecture

Single file, three parts: CSS custom properties at the top, semantic HTML, then
vanilla JS. No framework. Keep it that way — it needs to work by opening the
file, including for non-technical family members.

Page structure: **The record** (past trips, prefilled with the four family trips
on first run) → **Where you stand today** (stamp verdict, stacked 90-day meter,
draggable moving-window timeline, days-come-back milestones) → **Plan the next
trips** (arrive/depart/days form, verdict cards) → **The rules, in plain English**
(collapsed `<details>`, with source links).

The pure date engine lives in `<script id="engine">` (extractable for testing):

- `usedOn(day, trips, asOf)` — days used in the 365-day window ending on `day`.
- `evaluateTrip(s, e, others, asOf)` — peak usage, overstay days, first breach, fine.
- `longestFrom(start, others, asOf)` — longest stay from `start` that never breaches 90.
- `earliestFor(n, from, others, asOf)` — earliest arrival allowing `n` consecutive days.

App conventions:

- All dates are UTC epoch milliseconds via `Date.UTC`. **Do not introduce
  local-time date construction** — DST shifts silently corrupt day counts by one.
  `TODAY` is the user's wall-clock date normalised to UTC midnight, computed at load.
- Trips persist in `localStorage` under `uae-visit-planner:v1`
  (`{trips:[{in,out}], planned:[...]}`, epoch ms). `out: null` means "still in
  the UAE" and counts through today. Wrapped in try/catch so file:// still works.
- Past trips are "Trip 1..N", planned are "Plan 1..N", chronological. Each gets a
  colour from `TRIP_COLORS` (stamp-ink purple/teal/ochre/blue) shared by the
  record dot, the meter segment, and the timeline bar. Planned = striped/dashed.
- The planner form fills any missing one of arrive/depart/days; days alone runs
  `earliestFor` and adds the earliest safe fit.

## Design

Paper-and-stamp palette: off-white `#F1F2ED`, ink `#17233A`, immigration-stamp
purple `#6B3FA0`. Green means clear, red means breach. Bricolage Grotesque for
display, Public Sans for body, Space Mono for anything date or number shaped.

Mobile-first. 44px minimum tap targets, no tables anywhere, single column below
620px. The moving-window timeline is the signature element — scrubbing the
365-day band dims trips outside it and restacks the meter live, which is the one
thing that makes the rolling window intuitive.

## Open items

- The ICP file validity page shows 39 remaining days where this tool computes 24.
  The gap is exactly the 15 fined days, suggesting they were credited back on
  payment. Unconfirmed. The tool deliberately shows the lower figure.
- The father's permit (file 101/2024/112/0007560) is linked to passport N1029909
  but he now travels on C5514966. Needs ICP "Amendment of Visa Data".
- AED 265 per person of the fine is unexplained. AED 750 was the day-rate portion;
  ~AED 55 was an agency service fee per the VAT line. The rest is unaccounted for.

## Ideas not yet built

- Two-person mode. Both parents travel together, so one shared record is fine
  for now, but they could diverge.
- Export to .ics, or a reminder when days are about to come back.
- Model the paid extension: what a 90-to-180 extension would unlock and when
  applying for it makes sense.
