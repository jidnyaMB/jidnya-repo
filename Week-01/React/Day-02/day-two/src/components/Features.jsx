const features = [
  { title: "Fast", description: "Lightning fast performance." },
  { title: "Modular", description: "Break components into reusable parts." },
  { title: "Modern", description: "Built with latest JavaScript." }
];

const Features = () => (
  <section className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
    {features.map((feat, i) => (
      <div key={i} className="border p-4 rounded shadow hover:scale-105 transition-transform">
        <h3 className="font-bold text-xl">{feat.title}</h3>
        <p>{feat.description}</p>
      </div>
    ))}
  </section>
);

export default Features;
