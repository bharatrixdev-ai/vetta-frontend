# Vetta backend (placeholder)

Frontend prototype ships first; this tree reserves the real backend's shape.

- `api/` — HTTP surface (REST or tRPC). Sketch: auth, luminaries, sessions, orders, roundtables, messages, notes.
- `db/` — schema + migrations. Sketch: users, luminary_profiles, provenance_artifacts, session_formats, availability_windows (rolling ≤60d), bookings, orders (Razorpay), threads/messages (unlock_at = session_start − 48h), roundtables, tickets, notes, noted_reactions.
- `services/` — auth (Google OAuth + email OTP), payments (Razorpay orders + webhooks), rtc (LiveKit/100ms for Sessions & Roundtables), intelligence (transcription + live insights), notifications.
