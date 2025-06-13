const Hero = () => (
  <section className="bg-gray-100 p-8 text-center">
    <h2 className="text-3xl font-bold">Welcome to ReactSite!</h2>
    <p className="mt-2 text-gray-700">Today's date: {new Date().toLocaleDateString()}</p>
  </section>
);

export default Hero;
