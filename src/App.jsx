export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        
        <h1 className="text-5xl font-bold leading-tight">
          A modern public house rooted in music, art, and neighborhood connection.
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
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
    </div>
  );
}
