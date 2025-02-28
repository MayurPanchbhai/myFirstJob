import React from "react";
import { useNavigate } from "react-router-dom";
import jobsData from "../data.json"; // Import job data

const JobPost = ({ job }) => {
  const copyToClipboard = () => {
    const jobText = `${job.title} For ${job.role}\nLocation: ${job.location}\nQualification: ${job.qualification}\nWork Experience: ${job.experience}\nCTC: ${job.salary}\nBatch: ${job.batch}\nLast Date to Apply: ${job.lastDate}\nApply Link: http://localhost:5173/job/${job.id}\n\nJoin Our WhatsApp Channel: https://chat.whatsapp.com/ClzxVUv7BtE9or25WM5Knu`;  
    
    navigator.clipboard.writeText(jobText).then(() => {
      alert("Job post copied to clipboard!");
    });
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white mb-4 relative">
      <h2 className="text-xl font-semibold">{job.title} For {job.role}</h2>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Qualification:</strong> {job.qualification}</p>
      <p><strong>Work Experience:</strong> {job.experience}</p>
      <p><strong>CTC:</strong> {job.salary}</p>
      <p><strong>Batch:</strong> {job.batch}</p>
      <p><strong>Last Date to Apply:</strong> {job.lastDate}</p>
      <p><strong>Apply Link:</strong> <a href={job.applyLink} className="text-blue-500">{job.applyLink}</a></p>
      <p><strong>Join Our WhatsApp Channel:</strong> <a href="https://chat.whatsapp.com/ClzxVUv7BtE9or25WM5Knu" className="text-green-500">Click Here</a></p>
      <button onClick={copyToClipboard} className="mt-2 bg-gray-200 text-black px-3 py-1 rounded absolute top-2 right-2">Copy</button>
    </div>
  );
};




const JobList = () => {
  console.log(jobsData);
  
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/admin-login";  // Redirects to login page
  };
  

  const latestJobs = jobsData.slice(0, 5); // Get top 5 latest jobs

  return (
    <div className="container mx-auto p-4">
      {/* Logout Button at the Top */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Job Listings</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>

      {/* Job Posts */}
      {latestJobs.length > 0 ? (
        latestJobs.map((job, index) => <JobPost key={index} job={job} />)
      ) : (
        <p className="text-center text-gray-500">No job listings available.</p>
      )}
    </div>
  );
};

export default JobList;
