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

      <section className="border-t border-gray-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-3">
            Impact
          </p>
          <h2 className="text-3xl font-bold leading-tight max-w-3xl">
            Built to support artists, strengthen community, and create lasting local value.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="border border-gray-800 rounded-2xl p-6 bg-black">
              <h3 className="text-xl font-semibold">Arts & Culture</h3>
              <p className="mt-3 text-gray-300 leading-7">
                A recurring platform for local musicians, visual artists, poets, and makers
                to perform, exhibit, and connect with new audiences.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-black">
              <h3 className="text-xl font-semibold">Community Impact</h3>
              <p className="mt-3 text-gray-300 leading-7">
                Programming that brings neighbors together, strengthens belonging, and creates
                opportunities for social support and outreach-centered collaboration.
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-black">
              <h3 className="text-xl font-semibold">Economic Development</h3>
              <p className="mt-3 text-gray-300 leading-7">
                Consistent cultural activity that drives foot traffic, supports artists, and
                contributes to a stronger local creative economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-3">
                Events
              </p>
              <h2 className="text-3xl font-bold leading-tight">
                Signature experiences that keep the venue alive.
              </h2>
            </div>

            <button className="border border-white px-5 py-3 rounded-lg text-sm font-medium w-fit">
              View All Events
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="border border-gray-800 rounded-2xl p-6 bg-zinc-950">
              <p className="text-sm text-gray-400">Weekly Community Event</p>
              <h3 className="text-2xl font-semibold mt-2">Open Mic Night</h3>
              <p className="mt-4 text-gray-300 leading-7">
                A welcoming stage for emerging musicians, poets, and storytellers to share new work.
              </p>
              <button className="mt-6 bg-white text-black px-5 py-3 rounded-lg font-medium">
                Get Tickets
              </button>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-zinc-950">
              <p className="text-sm text-gray-400">Featured Performance</p>
              <h3 className="text-2xl font-semibold mt-2">Atlanta Artist Showcase</h3>
              <p className="mt-4 text-gray-300 leading-7">
                A curated night spotlighting emerging local talent and building real audience connection.
              </p>
              <button className="mt-6 bg-white text-black px-5 py-3 rounded-lg font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
