import GreenButton from "./greenButton";
import SectionHeader from "./sectionHeader";
import PortfolioCard from "./portfolioCard";
export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="w-full flex flex-column align-items-center justify-content-center mt-8"
    >
      <SectionHeader title="Our Work" content="Our Portfolio" />
      <div className="pCards flex  align-items-center justify-content-center flex-wrap">
        <PortfolioCard address="/7.png" title="Fashion Landing page" />
        <PortfolioCard address="/8.png" title="Health & Fitness" />
        <PortfolioCard address="/9.png" title="Furniture Shop" />
        <PortfolioCard address="/10.png" title="IT Solution Provider" />
      </div>
      <GreenButton text="All Projects" />
    </section>
  );
}
