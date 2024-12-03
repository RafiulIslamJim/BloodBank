
const Footer = () => {
  return (
    <div className="max-w-screen-3xl  mx-auto md:px-20">
      <footer className="footer text-black my-5 px-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
    <div className="grid grid-flow-col gap-4">
    <p>Copyright © {new Date().getFullYear()} - All right reserved by the author</p>
    </div>
</footer>
    </div>
  )
}

export default Footer
