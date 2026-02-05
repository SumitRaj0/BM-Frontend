import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBookings, type Booking } from '../api/bookings';

export default function BookingList() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadBookings = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const data = await fetchBookings();
      setBookings(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBookings();
  }, [loadBookings]);

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <p className="text-slate-500">Loading bookings…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-red-700">
        <p className="mb-3">{error}</p>
        <button
          type="button"
          onClick={loadBookings}
          className="rounded bg-slate-700 text-white px-3 py-1.5 text-sm hover:bg-slate-600 transition"
        >
          Fetch all bookings
        </button>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600 mb-4">No bookings yet.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={loadBookings}
            className="rounded border border-slate-400 px-4 py-2 text-slate-700 hover:bg-slate-100 transition"
          >
            Fetch all bookings
          </button>
          <Link
            to="/new"
            className="inline-block rounded bg-slate-700 text-white px-4 py-2 hover:bg-slate-600 transition"
          >
            Create your first booking
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h1 className="text-xl font-semibold">All Bookings</h1>
        <button
          type="button"
          onClick={loadBookings}
          disabled={loading}
          className="rounded bg-slate-700 text-white px-4 py-2 text-sm hover:bg-slate-600 disabled:opacity-50 transition"
        >
          {loading ? 'Fetching…' : 'Fetch all bookings'}
        </button>
      </div>
      <ul className="space-y-3">
        {bookings.map((b) => (
          <li
            key={b._id}
            className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:shadow transition"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-medium">{b.name}</span>
              <span className="text-sm text-slate-500">
                {b.date} · {b.time}
              </span>
            </div>
            <p className="text-sm text-slate-600 mt-1">
              {b.guests} guest{b.guests !== 1 ? 's' : ''}
              {b.notes ? ` · ${b.notes}` : ''}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
