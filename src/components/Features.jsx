import Card from "./Card";

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto p-6 md:p-12">
      <h3 className="text-2xl font-bold mb-6">Why MusTex?</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card 
          title="Herbal-first"
          text="Formulated with traditional herbs and modern QA."
        />

        <Card
          title="Minimal Side Effects"
          text="Designed to be gentle with recommended dosing."
        />

        <Card
          title="Multiple Formats"
          text="Syrups, effervescents, sachets & tablets."
        />
      </div>
    </section>
  );
}
