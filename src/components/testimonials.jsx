import SectionHeader from "./sectionHeader";
import TestiCard from "./testiCard";
export default function Testimonials() {
  const content = `“Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”`;

  return (
    <section id="testimonials" className="mt-8 mb-8">
      <SectionHeader title="Testimonials" content="What Customers Say" />

      <div className="flex flex-column align-items-center justify-content-center relative">
        <div className="decoDiv surface-100 w-8 absolute z-0"></div>
        <div className="w-full mt-8 flex flex-wrap justify-content-center">
          <TestiCard
            title="Superb Work!"
            content={content}
            numStars={5}
            client="Sabo Masties"
          />
          <TestiCard
            title="Superb Work!"
            content={content}
            numStars={5}
            client="Sabo Masties"
          />
          <TestiCard
            title="Superb Work!"
            content={content}
            numStars={5}
            client="Sabo Masties"
          />
        </div>
        <div className="z-3 mt-6 mb-3 h-3rem w-6rem bg-white border-round-3xl flex gap-4 align-items-center justify-content-center">
          <i className="pi pi-arrow-left" style={{ fontSize: "1rem" }}></i>
          <i
            className="pi pi-arrow-circle-right"
            style={{ fontSize: "2rem" }}
          ></i>
        </div>
      </div>
    </section>
  );
}
