export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
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
            alt="Microphone"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <section className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm text-gray-400 uppercase tracking-widest mb-3">
              About
            </p>
            <h2 className="text-3xl font-bold leading-tight">
              A gathering place where Atlanta’s creative community comes together.
            </h2>
            <p className="mt-6 text-gray-300 leading-8">
              The Public House Artist Collective is a community cultural venue and public house
              built to support emerging musicians, local artists, and neighborhood connection.
              We create a space where live performance, hospitality, and creative expression
              come together in a way that feels welcoming, local, and alive.
            </p>
            <p className="mt-4 text-gray-300 leading-8">
              More than a venue, this is a platform for visibility, belonging, and cultural
              energy in East Atlanta — a place where artists can grow their audience and the
              community can gather around music, art, and shared experience.
            </p>
          </div>

          <div className="bg-zinc-900 border border-gray-800 rounded-2xl p-8">
            <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">
              Why it matters
            </p>
            <ul className="space-y-4 text-gray-200">
              <li>• Supports emerging musicians and neighborhood artists</li>
              <li>• Creates recurring cultural programming in East Atlanta</li>
              <li>• Strengthens grant, sponsor, and partnership readiness</li>
              <li>• Connects hospitality with local creative impact</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
