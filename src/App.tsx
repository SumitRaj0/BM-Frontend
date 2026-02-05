import { Routes, Route, Link } from 'react-router-dom';
import Landing from './pages/Landing';
import BookingList from './pages/BookingList';
import CreateBooking from './pages/CreateBooking';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-slate-800 text-white shadow">
        <nav className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-semibold text-lg">
            Booking Manager
          </Link>
          <div className="flex gap-3">
            <Link
              to="/bookings"
              className="rounded bg-slate-600 hover:bg-slate-500 px-3 py-1.5 text-sm transition"
            >
              Bookings
            </Link>
            <Link
              to="/new"
              className="rounded bg-slate-600 hover:bg-slate-500 px-3 py-1.5 text-sm transition"
            >
              New Booking
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/bookings" element={<BookingList />} />
          <Route path="/new" element={<CreateBooking />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
