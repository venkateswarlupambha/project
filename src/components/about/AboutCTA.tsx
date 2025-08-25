
export const AboutCTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 drop-shadow-lg">
          Ready to Transform Your Career?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
          Let's work together to unlock your professional potential and create the career you've always dreamed of.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.open('https://calendly.com/onwardcareershelp/30min', '_blank')}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/20"
          >
            Book Free Consultation
          </button>
          <button 
            onClick={() => window.open('https://wa.me/447553409836', '_blank')}
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 shadow-2xl backdrop-blur-sm"
          >
            Contact Us on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};
