import SectionHeader from "./sectionHeader";
import SpecialCard from "./specialCard";
import GreenButton from "./greenButton";
export default function Specialization() {
  const content =
    "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.";
  return (
    <section
      id="specialization"
      className="w-7 flex flex-column align-items-center justify-content-center mt-8"
    >
      <SectionHeader title="What Do We Do?" content="Our Specialization" />
      <div className="flex flex-wrap gap-6 align-items-center justify-content-center ">
        <SpecialCard
          icon="/webflow.png"
          title="Webflow Development"
          content={content}
        />
        <SpecialCard
          icon="/shopify.png"
          title="Shopify Development"
          content={content}
        />
        <SpecialCard
          icon="/figma.png"
          title="Figma Web Designing"
          content={content}
        />
        <SpecialCard
          icon="/php.png"
          title="Php Development"
          content={content}
        />
      </div>
      <GreenButton text="Learn More" />
    </section>
  );
}
