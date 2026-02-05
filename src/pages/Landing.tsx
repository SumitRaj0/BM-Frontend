import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="text-center py-12 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
        Booking Manager
      </h1>
      <p className="text-slate-600 max-w-md mx-auto mb-10">
        Create and manage your bookings in one place. Simple and fast.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/bookings"
          className="rounded-lg bg-slate-700 text-white px-6 py-3 font-medium hover:bg-slate-600 transition shadow"
        >
          View all bookings
        </Link>
        <Link
          to="/new"
          className="rounded-lg border-2 border-slate-700 text-slate-700 px-6 py-3 font-medium hover:bg-slate-100 transition"
        >
          Create a booking
        </Link>
      </div>
    </div>
  );
}
