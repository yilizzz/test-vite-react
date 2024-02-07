export default function Navbar() {
  return (
    <section
      id="navbar"
      className="w-full surface-100 w-full h-6rem flex justify-content-between pl-8 pr-8 relative"
    >
      <div className="w-4 flex align-items-center justify-content-start">
        <a href="#">Web.Dev</a>
      </div>
      <div className="navs w-7 flex align-items-center justify-content-between">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#">Contact</a>
        <a href="#">Sign in</a>
        <a href="#">Sign up</a>
      </div>
      <div className="menu-icon absolute pt-5 pr-5 top-0 right-0">
        <button>☰</button>
      </div>
    </section>
  );
}
