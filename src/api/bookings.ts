const API_BASE =
  (import.meta.env.VITE_API_URL ?? (import.meta.env.PROD ? 'https://bm-backend-7wsi.vercel.app' : '')) +
  '/api';

export interface Booking {
  _id: string;
  name: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
  createdAt: string;
}

export async function fetchBookings(): Promise<Booking[]> {
  const res = await fetch(`${API_BASE}/bookings`);
  if (!res.ok) throw new Error('Failed to fetch bookings');
  return res.json();
}

export async function createBooking(data: {
  name: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
}): Promise<Booking> {
  const res = await fetch(`${API_BASE}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error ?? 'Failed to create booking');
  }
  return res.json();
}
