import { useState } from "react";
import { Link } from "react-router-dom";
import jobData from "../data.json"; // Importing job data from JSON file
import Header from "./Header";
import Footer from "./Footer";

export default function JobListHome() {
  const jobsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(jobData.length / jobsPerPage);
  const maxPageNumbersToShow = 5; // Always show only 5 page numbers

  // Get current jobs to display
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobData.slice(indexOfFirstJob, indexOfLastJob);

  // Calculate pagination range
  let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

  if (endPage - startPage < maxPageNumbersToShow - 1) {
    startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
  }

  // Change page function
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (<>
    <Header />
  

    <div className="container mx-auto p-4">

      <h1 className="text-2xl font-bold mb-4 text-center">Job Listings</h1>

      {/* Job List in Grid Format */}
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
            <Link
              to={`/job/${job.id}`}
              className="text-blue-500 mt-3 inline-block font-semibold"
            >
              View Job →
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center space-x-2">
        {/* Previous Button */}
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white"
          }`}
        >
          ← Prev
        </button>

        {/* Page Numbers */}
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((page) => (
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

        {/* Next Button */}
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
    </div>
    <Footer />
    </>
  );
}
