import { useParams } from "react-router-dom";
import jobsData from "../data.json"; // Import the JSON file

const JobDetails = () => {
  const { id } = useParams(); // Get the clicked job's ID from the URL

  // Find the job based on ID (convert both to numbers if needed)
  const job = jobsData.find((job) => job.id.toString() === id);
  console.log(job);
  

  if (!job) {
    return <h1>Job not found</h1>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">{job.jobTitle}</h1>
      <p>{job.description}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <a href={job.applyLink} className="text-blue-500">Apply Here</a>
    </div>
  );
};

export default JobDetails;
