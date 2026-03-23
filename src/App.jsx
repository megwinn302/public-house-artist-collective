export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
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

        {/* LEFT SIDE */}
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

        {/* RIGHT SIDE (IMAGE) */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
            alt="Microphone"
            className="rounded-2xl shadow-lg"
          />
        </div>

      </div>

    </div>
  );
}
