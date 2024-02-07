import SectionHeader from "./sectionHeader";
import PriceCard from "./priceCard";
import GreenButton from "./greenButton";
export default function Pricing() {
  const list = [
    "Feedback Categorization",
    "Features Prioritization",
    "Real-Time Collaboration",
    "Feedback Loop Notifications",
    "Essential Dev Tools Integrations",
  ];

  return (
    <section id="pricing" className="mt-8">
      <SectionHeader title="Pricing" content="Pricing Policy" />

      <div className="priceCards flex align-items-center justify-content-center">
        <PriceCard
          title="For Starter"
          price="$1499"
          list={list}
          btnText="Request Demo"
        />
        <PriceCard
          title="For Teams"
          price="$2999"
          list={list}
          btnText="Request Demo"
        />
        <PriceCard
          title="For Company"
          price="Custom"
          list={list}
          btnText="Contact Us"
        />
      </div>
      <div className="flex flex-column align-items-center justify-content-start mt-8">
        <div className="text-center text-6xl w-30rem">
          Need a little more home to grow?
        </div>
        <GreenButton text="Contact Us" />
      </div>
    </section>
  );
}
