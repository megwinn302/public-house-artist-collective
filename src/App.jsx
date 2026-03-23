export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAV */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <div>
          <h1 className="text-lg font-semibold">
            The Public House Artist Collective
          </h1>
          <p className="text-xs text-gray-400">
            Community Cultural Venue
          </p>
        </div>

        <button className="bg-white text-black px-4 py-2 rounded-lg text-sm">
          Get in Touch
        </button>
      </div>

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm text-gray-400 mb-4">
            East Atlanta · Music · Art · Community
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            A modern public house rooted in music, art, and neighborhood connection.
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            We support emerging musicians, showcase local artists, and create an inclusive
            gathering place where culture, hospitality, and community impact thrive together.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium">
              See Upcoming Events
            </button>

            <button className="border border-white px-6 py-3 rounded-lg font-medium">
              Submit as an Artist
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
            alt="Music"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* ABOUT */}
      <section className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm text-gray-400 uppercase tracking-widest mb-3">
              About
            </p>
            <h2 className="text-3xl font-bold">
              A gathering place for Atlanta’s creative community.
            </h2>
            <p className="mt-6 text-gray-300 leading-8">
              The Public House Artist Collective is a cultural venue designed to support
              emerging musicians and local artists while creating meaningful community connection.
            </p>
          </div>

          <div className="bg-zinc-900 border border-gray-800 rounded-2xl p-8">
            <ul className="space-y-4 text-gray-200">
              <li>• Live music & artist showcases</li>
              <li>• Community-driven programming</li>
              <li>• Grant & partnership readiness</li>
              <li>• Cultural and economic impact</li>
            </ul>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="border-t border-gray-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold">
            Built for impact beyond the venue.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold">Arts</h3>
              <p className="mt-3 text-gray-300">
                Supporting musicians and artists with real opportunities.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="mt-3 text-gray-300">
                Bringing people together through shared experiences.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold">Economy</h3>
              <p className="mt-3 text-gray-300">
                Driving local engagement and creative economy growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold">Open Mic Night</h3>
              <p className="mt-3 text-gray-300">
                Weekly showcase for emerging talent.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold">Artist Showcase</h3>
              <p className="mt-3 text-gray-300">
                Curated performances from Atlanta creatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold">
            Let’s build something meaningful together.
          </h2>

          <p className="mt-6 text-gray-300">
            bookingartistcollective@gmail.com
          </p>

          <div className="mt-8">
            <button className="bg-white text-black px-6 py-3 rounded-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 text-center py-6 text-gray-500 text-sm">
        © 2026 The Public House Artist Collective
      </footer>

    </div>
  );
}
