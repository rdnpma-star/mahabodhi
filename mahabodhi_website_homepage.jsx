export default function MahabodhiWebsite() {
  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-orange-700 text-white shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
          <h1 className="text-3xl font-bold">Mahabodhi</h1>
          <nav className="space-x-6 text-lg">
            <a href="#home" className="hover:text-yellow-200">Home</a>
            <a href="#about" className="hover:text-yellow-200">About</a>
            <a href="#services" className="hover:text-yellow-200">Services</a>
            <a href="#contact" className="hover:text-yellow-200">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-orange-200 to-yellow-100 py-24 text-center"
      >
        <h2 className="text-5xl font-extrabold mb-6 text-orange-800">
          Welcome to Mahabodhi
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          A place of peace, wisdom, education, and spiritual growth inspired by Buddhist values.
        </p>
        <button className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-3 rounded-2xl shadow-lg text-lg">
          Learn More
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop"
            alt="Temple"
            className="rounded-3xl shadow-xl"
          />

          <div>
            <h3 className="text-4xl font-bold text-orange-700 mb-5">About Mahabodhi</h3>
            <p className="text-lg leading-8">
              Mahabodhi is dedicated to promoting peace, compassion, and education through Buddhist teachings. Our mission is to inspire people to live meaningful and mindful lives.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-orange-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-orange-700 mb-12">Our Services</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold mb-4">Meditation</h4>
              <p>Guided meditation sessions for peace and mindfulness.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold mb-4">Education</h4>
              <p>Programs and teachings based on Buddhist philosophy.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold mb-4">Community</h4>
              <p>Events and activities that bring people together in harmony.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h3 className="text-4xl font-bold text-orange-700 mb-6">Contact Us</h3>
        <p className="text-lg mb-4">Email: info@mahabodhi.org</p>
        <p className="text-lg mb-8">Phone: +94 11 234 5678</p>

        <form className="grid gap-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-2xl border border-gray-300"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-2xl border border-gray-300"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-4 rounded-2xl border border-gray-300"
          ></textarea>

          <button className="bg-orange-700 hover:bg-orange-800 text-white py-3 rounded-2xl text-lg shadow-lg">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-orange-700 text-white text-center py-6 mt-10">
        <p>© 2026 Mahabodhi. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
