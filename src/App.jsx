export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-stone-800/80 bg-stone-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 
  src="/logo.png" 
  alt="The Public House Artist Collective" 
  className="h-10 w-auto object-contain"
/>
            </h1>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
              Community Cultural Venue
            </p>
          </div>

          <nav className="hidden gap-6 md:flex text-sm text-stone-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#impact" className="hover:text-white">Impact</a>
            <a href="#events" className="hover:text-white">Events</a>
            <a href="#artists" className="hover:text-white">Artists</a>
            <a href="#instagram" className="hover:text-white">Instagram</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-stone-300 bg-stone-100 px-4 py-2 text-sm font-medium text-stone-950 transition hover:bg-white"
          >
            Get in Touch
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_25%)]" />
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div className="relative">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-amber-300/90">
              East Atlanta · Music · Art · Community
            </p>

            <h2 className="max-w-2xl text-5xl font-semibold leading-tight text-white lg:text-6xl">
              A modern public house rooted in music, art, and neighborhood connection.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300">
              We support emerging musicians, showcase local artists, and create an inclusive
              gathering place where culture, hospitality, and community impact thrive together.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#events"
                className="rounded-full bg-stone-100 px-6 py-3 font-medium text-stone-950 transition hover:bg-white"
              >
                See Upcoming Events
              </a>

              <a
                href="#artists"
                className="rounded-full border border-stone-500 px-6 py-3 font-medium text-stone-100 transition hover:border-stone-300 hover:bg-stone-900"
              >
                Submit as an Artist
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-300/20 to-transparent blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
              alt="Live music venue atmosphere"
              className="relative h-[480px] w-full rounded-[2rem] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-stone-800 bg-stone-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-amber-300/90">
              About
            </p>
            <h3 className="text-3xl font-semibold text-white">
              A gathering place for Atlanta’s creative community.
            </h3>
            <p className="mt-6 leading-8 text-stone-300">
              The Public House Artist Collective is a cultural venue designed to support
              emerging musicians and local artists while creating meaningful community connection.
            </p>
            <p className="mt-4 leading-8 text-stone-300">
              More than a venue, this is a platform for visibility, belonging, and cultural
              energy in East Atlanta — a place where artists can grow their audience and the
              community can gather around music, art, and shared experience.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-800 bg-stone-900/70 p-8 shadow-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-stone-400">
              Why it matters
            </p>
            <ul className="space-y-4 text-stone-200">
              <li>• Supports emerging musicians and neighborhood artists</li>
              <li>• Creates recurring cultural programming in East Atlanta</li>
              <li>• Strengthens grant, sponsor, and partnership readiness</li>
              <li>• Connects hospitality with local creative impact</li>
            </ul>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="border-t border-stone-800 bg-stone-900">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-amber-300/90">
            Impact
          </p>
          <h3 className="max-w-3xl text-3xl font-semibold text-white">
            Built to support artists, strengthen community, and create lasting local value.
          </h3>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-stone-800 bg-stone-950 p-7 shadow-lg">
              <h4 className="text-xl font-semibold text-white">Arts & Culture</h4>
              <p className="mt-3 leading-7 text-stone-300">
                Supporting musicians, visual artists, poets, and makers with real opportunities
                to perform, exhibit, and connect with audiences.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-800 bg-stone-950 p-7 shadow-lg">
              <h4 className="text-xl font-semibold text-white">Community</h4>
              <p className="mt-3 leading-7 text-stone-300">
                Bringing neighbors together through shared experiences, recurring programming,
                and a welcoming creative gathering place.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-800 bg-stone-950 p-7 shadow-lg">
              <h4 className="text-xl font-semibold text-white">Economic Development</h4>
              <p className="mt-3 leading-7 text-stone-300">
                Driving local engagement, artist visibility, and creative economy growth through
                consistent cultural activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="border-t border-stone-800 bg-stone-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-amber-300/90">
                Events
              </p>
              <h3 className="text-3xl font-semibold text-white">
                Signature experiences that keep the venue alive.
              </h3>
            </div>

            <a
              href="https://www.eventbrite.com/"
              target="_blank"
              rel="noreferrer"
              className="w-fit rounded-full border border-stone-500 px-5 py-3 text-sm font-medium text-stone-100 transition hover:border-stone-300 hover:bg-stone-900"
            >
              View All Events
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-stone-800 bg-stone-900 p-7 shadow-lg">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-400">
                Weekly Community Event
              </p>
              <h4 className="mt-2 text-2xl font-semibold text-white">Open Mic Night</h4>
              <p className="mt-4 leading-7 text-stone-300">
                A welcoming showcase for emerging musicians, poets, and storytellers.
              </p>
              <a
                href="https://www.eventbrite.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-full bg-stone-100 px-5 py-3 font-medium text-stone-950"
              >
                Get Tickets
              </a>
            </div>

            <div className="rounded-[2rem] border border-stone-800 bg-stone-900 p-7 shadow-lg">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-400">
                Featured Performance
              </p>
              <h4 className="mt-2 text-2xl font-semibold text-white">Atlanta Artist Showcase</h4>
              <p className="mt-4 leading-7 text-stone-300">
                Curated performances from Atlanta creatives in an intimate, elevated atmosphere.
              </p>
              <a
                href="https://www.eventbrite.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-full bg-stone-100 px-5 py-3 font-medium text-stone-950"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ARTIST SUBMISSION */}
      <section id="artists" className="border-t border-stone-800 bg-stone-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-amber-300/90">
              Artists
            </p>
            <h3 className="text-3xl font-semibold text-white">
              Submit your work and connect with the collective.
            </h3>
            <p className="mt-6 leading-8 text-stone-300">
              We welcome submissions from emerging musicians, visual artists, poets, and
              creative collaborators whose work aligns with community-centered programming.
            </p>
            <p className="mt-4 leading-8 text-stone-300">
              Share your links, your art form, and what kind of event you’d love to be part of.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-800 bg-stone-950 p-8 shadow-xl">
            <form
              action="https://formspree.io/f/your-artist-form-id"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="w-full rounded-xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 placeholder-stone-400 outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 placeholder-stone-400 outline-none"
                required
              />
              <input
                type="text"
                name="link"
                placeholder="Website / Instagram / streaming link"
                className="w-full rounded-xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 placeholder-stone-400 outline-none"
              />
              <input
                type="text"
                name="artform"
                placeholder="Art form"
                className="w-full rounded-xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 placeholder-stone-400 outline-none"
              />
              <textarea
                name="message"
                placeholder="Tell us about your work and what kind of event you’d like to be part of"
                rows="5"
                className="w-full rounded-xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 placeholder-stone-400 outline-none"
                required
              />
              <button
                type="submit"
                className="w-full rounded-full bg-stone-100 px-6 py-3 font-medium text-stone-950 transition hover:bg-white"
              >
                Submit as an Artist
              </button>
            </form>
            <p className="mt-4 text-sm text-stone-400">
              Replace the Formspree link later with your real form endpoint.
            </p>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section id="instagram" className="border-t border-stone-800 bg-stone-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-amber-300/90">
                Instagram
              </p>
              <h3 className="text-3xl font-semibold text-white">
                Follow the vibe and latest moments.
              </h3>
            </div>

            <a
              href="https://instagram.com/publichouseartistcollective"
              target="_blank"
              rel="noreferrer"
              className="w-fit rounded-full border border-stone-500 px-5 py-3 text-sm font-medium text-stone-100 transition hover:border-stone-300 hover:bg-stone-900"
            >
              Follow @publichouseartistcollective
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <a
              href="https://instagram.com/publichouseartistcollective"
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-[2rem] border border-stone-800 bg-stone-900"
            >
              <img
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
                alt="Live crowd"
                className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </a>

            <a
              href="https://instagram.com/publichouseartistcollective"
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-[2rem] border border-stone-800 bg-stone-900"
            >
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
                alt="Performer"
                className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </a>

            <a
              href="https://instagram.com/publichouseartistcollective"
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-[2rem] border border-stone-800 bg-stone-900"
            >
              <img
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205"
                alt="Venue atmosphere"
                className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          <p className="mt-6 text-sm text-stone-400">
            This is a premium Instagram-style gallery for now. Later, we can swap it for a true embedded feed.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-stone-800 bg-stone-900">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-amber-300/90">
            Contact
          </p>
          <h3 className="text-3xl font-semibold text-white">
            Let’s build something meaningful together.
          </h3>

          <p className="mt-6 text-lg text-stone-300">
            bookingartistcollective@gmail.com
          </p>

          <div className="mt-8">
            <a
              href="mailto:bookingartistcollective@gmail.com"
              className="rounded-full bg-stone-100 px-6 py-3 font-medium text-stone-950"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-800 bg-stone-950 py-6 text-center text-sm text-stone-500">
        © 2026 The Public House Artist Collective
      </footer>
    </div>
  );
}
