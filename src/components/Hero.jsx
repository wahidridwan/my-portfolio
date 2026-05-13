export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-between px-10 md:px-32 bg-black text-white">

      {/* LEFT SIDE */}
      <div className="max-w-xl">
        <p className="text-green-400 font-semibold">
          Programmer | Full Stack Developer
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-4">
          I'm <span className="text-green-400">Wahid Ridwan</span>
        </h1>

        <p className="text-gray-400 mt-6 leading-7">
          I build scalable and responsive web applications using React, Java,
          Python, Node.js and modern tools.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-8">
          <a
            href="https://github.com/"
            className="bg-white text-black px-5 py-2 rounded-lg"
          >
            GitHub
          </a>

          <a
            href="#"
            className="border border-white px-5 py-2 rounded-lg"
          >
            Resume
          </a>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hidden md:block">
        <div className="w-72 h-72 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl">
          <img
            src="https://i.ibb.co/placeholder-profile.jpg"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </section>
  );
}