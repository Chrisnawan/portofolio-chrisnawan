// Tanpa import next/headers di sini — file ini aman dipakai
// baik dari lib/auth.js (Node runtime) maupun middleware.js (Edge runtime).
export const SESSION_COOKIE_NAME = 'session';
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 hari
