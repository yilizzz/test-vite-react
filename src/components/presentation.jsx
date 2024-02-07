import GreenButton from "./greenButton";
export default function Presentation() {
  return (
    <section id="presentation" className="surface-100 w-full mb-8">
      <div className="pDiv mt-8 flex align-items-center justify-content-between pl-6 pr-6">
        <div className="bg-primary w-20rem h-30rem relative border-none">
          <img className="img1" width="150" height="230" src="/1.png" />
          <img className="img2" width="150" height="230" src="/2.png" />
          <img className="img3" width="150" height="150" src="/3.png" />
          <div className="divImg1"></div>
        </div>
        <div className="w-30rem flex flex-column align-items-center justify-content-center ml-8 mr-8">
          <h1 className="text-center font-bold m-5">
            We Develop <span className="text-primary">Shopify</span> sites
          </h1>
          <p className="text-center">
            Slingback fabric heels. Thin wraparound ankle strap. Squared heel
            and toe. Pointed toes. Padded insole with geometrical design.
          </p>
          <div className=" w-30rem mt-4 flex align-items-center justify-content-around">
            <GreenButton text="Contact Us" />
            <span className="">
              <span className="underline">Watch Video</span>
              <span className="text-xs">
                {"\u00A0"}
                {"\u00A0"}&#9654;
              </span>
            </span>
          </div>
        </div>
        <div className="bg-primary w-20rem h-30rem relative border-none">
          <img className="img4" width="150" height="230" src="/4.png" />
          <img className="img5" width="150" height="230" src="/5.png" />
          <img className="img6" width="150" height="150" src="/6.png" />
          <div className="divImg2"></div>
        </div>
      </div>
      <div className="mt-8 pt-8 bg-white flex flex-wrap align-items-center justify-content-around mt-5">
        <img src="/chase.png" />
        <img src="/asana.png" />
        <img src="/g.png" />
        <img src="/buzzfeed.png" />
        <img src="/walmart.png" />
      </div>
    </section>
  );
}
