import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DonarCard = ({ name, batch, department, bloodGroup, lastDonationDate }) => {
  const currentDate = new Date();
  const donationDate = new Date(lastDonationDate);

  const diffInMonths =
    currentDate.getMonth() -
    donationDate.getMonth() +
    12 * (currentDate.getFullYear() - donationDate.getFullYear());

  const isAvailable = diffInMonths >= 3;

  return (
    <div
      data-aos="zoom-out"
      className="p-4 bg-white rounded-lg shadow-md border border-gray-200"
    >
      <h3 className="font-semibold text-lg text-[#010d6e]">{name}</h3>
      <p className="text-sm text-[#010d6e]">Batch: {batch}</p>
      <p className="text-sm text-[#010d6e]">Department: {department}</p>
      <p className="text-sm text-[#010d6e]">Blood Group: {bloodGroup}</p>
      <h1
        className={`w-28 text-center text-white rounded-md p-1 mt-2 ${
          isAvailable ? "bg-green-600" : "bg-red-600"
        }`}
      >
        {isAvailable ? "Available" : "Unavailable"}
      </h1>
    </div>
  );
};

DonarCard.propTypes = {
  name: PropTypes.string.isRequired,
  batch: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  bloodGroup: PropTypes.string.isRequired,
  lastDonationDate: PropTypes.string.isRequired,
};

const Donar = () => {
  const donars = useLoaderData(); // Fetch donor data from loader
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [donarsPerPage, setDonarsPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      setDonarsPerPage(window.innerWidth < 768 ? 3 : 6);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // Filter donors based only on blood group
  const filteredDonars = donars.filter((donar) =>
    donar.blood_group.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastDonar = currentPage * donarsPerPage;
  const indexOfFirstDonar = indexOfLastDonar - donarsPerPage;
  const currentDonars = filteredDonars.slice(indexOfFirstDonar, indexOfLastDonar);

  const totalPages = Math.ceil(filteredDonars.length / donarsPerPage);

  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  return (
    <div data-aos="fade-in" className="flex justify-center items-center min-h-screen pb-5 mt-20">
      <section className="sm:mt-10 mt-20 rounded-lg p-6 w-full max-w-6xl h-auto shadow-xl">
        <header
          data-aos="zoom-in"
          className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 rounded-t-lg"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-[#010d6e]">Donors</h2>
          </div>
          <div>
            <input
              type="text"
              className="w-full p-2 text-white bg-[#010d6e] rounded-md focus:ring"
              placeholder="Search By Blood Group"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </header>
        <div className="bg-white px-6 py-4 w-full max-w-6xl rounded-b-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentDonars.length > 0 ? (
              currentDonars.map((donar, index) => (
                <DonarCard
                  key={index}
                  name={donar.name}
                  batch={donar.batch}
                  department={donar.department}
                  bloodGroup={donar.blood_group}
                  lastDonationDate={donar.last_date_of_blood_donation}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">No donors found</p>
            )}
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="px-3 py-1 mx-1 bg-[#010d6e] text-white rounded"
              disabled={currentPage === 1}
              onClick={() => handleClick(1)}
            >
              First
            </button>
            <button
              className="px-3 py-1 mx-1 bg-[#010d6e] text-white rounded"
              disabled={currentPage === 1}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button className="px-3 py-1 mx-1 bg-[#010d6e] text-white rounded" disabled>
              {currentPage}
            </button>
            <button
              className="px-3 py-1 mx-1 bg-[#010d6e] text-white rounded"
              disabled={currentPage === totalPages}
              onClick={handleNext}
            >
              Next
            </button>
            <button
              className="px-3 py-1 mx-1 bg-[#010d6e] text-white rounded"
              disabled={currentPage === totalPages}
              onClick={() => handleClick(totalPages)}
            >
              Last
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donar;
