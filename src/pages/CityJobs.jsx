import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import jobsData from "../data.json";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CityJobs = () => {
  const { city } = useParams();
  const filteredJobs = jobsData.filter(job => job.location.toLowerCase() === city.toLowerCase());

  const jobsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Jobs in {city.charAt(0).toUpperCase() + city.slice(1)}</h1>
        {currentJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentJobs.map((job) => (
              <div key={job.id} className="border p-4 rounded-lg shadow-md bg-white">
                <div className="flex items-center space-x-3">
                  <img src={job.companyLogo} alt={job.companyName} className="w-12 h-12" />
                  <h2 className="text-lg font-semibold">
                    {job.companyName} | for | {job.jobTitle} | {job.location}
                  </h2>
                </div>
                <p className="text-gray-500 mt-2">Date: {new Date().toLocaleDateString()}</p>
                <Link to={`/job/${job.id}`} className="text-blue-500 mt-3 inline-block font-semibold">View Job →</Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-red-500 text-center">No jobs available in {city}.</p>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center space-x-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white"
              }`}
            >
              ← Prev
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  currentPage === page ? "bg-blue-600 text-white" : "bg-gray-300"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white"
              }`}
            >
              Next →
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CityJobs;
