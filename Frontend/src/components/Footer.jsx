import toparrow from "../assets/toparrow.svg"; // Update the path to your icon

const Footer = () => {
  return (
    <div className="w-full mt-10">
      <div className="w-full px-4 md:px-10">
        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center shadow-md rounded-lg w-full overflow-hidden bg-gray-50">
          {/* Text Section */}
          <div className="flex flex-col justify-center p-6 leading-relaxed md:w-1/2">
            <h5 className="mb-4 text-3xl font-bold tracking-tight text-[#010d6e]">
              Life at Sylhet Engineering College
            </h5>
            <p className="mb-4 text-lg text-gray-700">
              Connecting the SEC family to save lives. Register as a donor today, and help your peers in times of need. Together, we can make a difference!
            </p>
          </div>

          {/* Map Section */}
          <div className="w-full md:w-1/2 p-5">
            <iframe
              style={{ minHeight: "200px" }}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=420&amp;height=400&amp;hl=en&amp;q=Tilagarh,%20Alurtol%20Road,%20Sylhet%203100+(Sylhet%20Engineering%20College)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Sylhet Engineering College Location"
              className="w-full rounded-lg min-h-[200px]"
            ></iframe>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center text-[#010d6e]">
          <p>&copy; {new Date().getFullYear()} Isshu. All rights reserved by the Author</p>
        </div>

        {/* Scroll to Top Icon */}
        <div
          id="icon-box"
          className="bg-[#010d6e] p-2 rounded-full hover:bg-orange-500 cursor-pointer fixed bottom-12 right-6 shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={toparrow} alt="Go to top" width={35} height={40} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
