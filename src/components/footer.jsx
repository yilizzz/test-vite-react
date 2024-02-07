export default function Footer() {
  return (
    <section
      id="footer"
      className="footer pt-8 flex flex-column align-items-center justify-content-start"
    >
      <div className="f-infos w-full flex align-items-start justify-content-around">
        <div className="w-16rem gap-3 flex flex-column align-items-start justify-content-start">
          <h3>Web.Dev</h3>
          <p>You’ll find your next home loan valu you prefer.</p>
          <sapn>
            <i className="pi pi-facebook mr-3"></i>
            <i className="pi pi-twitter mr-3"></i>
            <i className="pi pi-linkedin"></i>
          </sapn>
        </div>
        <div className="flex gap-3 flex-column align-items-start justify-content-start">
          <h4>Resources</h4>
          <span>Our Agents</span>
          <span>Member Stories</span>
          <span>Video</span>
          <span>Free Trial</span>
        </div>
        <div className="flex gap-3 flex-column align-items-start justify-content-start">
          <h4>Company</h4>
          <span>Partership</span>
          <span>Term of use</span>
          <span>Privacy</span>
          <span>Sitemap</span>
        </div>
        <div className="flex gap-3 flex-column align-items-start justify-content-start relative">
          <h4>Get in touch</h4>
          <input
            className="pl-2"
            type="text"
            placeholder="Enter your mail"
          ></input>
          <i className="pi pi-arrow-circle-right absolute bottom-0 right-0 mb-2 pb-1 pr-2"></i>
        </div>
      </div>
      <div className=" border-top-1 border-200 w-full h-3rem text-center mt-5 pt-5 mb-6">
        Copyright 2021 ©Web.Dev All rights reserved.
      </div>
    </section>
  );
}
