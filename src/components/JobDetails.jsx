import { useParams } from "react-router-dom";
import jobsData from "../data.json"; // Import the JSON file

const JobDetails = () => {
  const { id } = useParams(); // Get the clicked job's ID from the URL

  // Find the job based on ID
  const job = jobsData.find((job) => job.id.toString() === id); 
  console.log(job);
  

  if (!job) {
    return <h1 className="text-center text-2xl font-bold mt-10">Job not found</h1>;
  }

  // Get the latest 5 jobs
  const latestJobs = jobsData.slice(-5).reverse();

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row gap-6">
      {/* Left Section - Job Details (75%) */}
      <div className="md:w-3/4 bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-2xl capitalize font-bold mb-4">{job.companyName} off campus Hiring for {job.jobTitle} | {job.location}</h1>
        <p>{job.datePosted}</p>
        <p><b className="font-bold capitalize ">{job.companyName} drive : </b>{job.jobDescription}</p>
        <img src={job.companyLogo} alt="" />

        <p><p className="font-bold capitalize">About {job.companyName}:</p>{job.aboutCompany}</p>


{/* Here will comes the ads */}


        <p><p className="font-bold capitalize">Job Description :</p>{job.jobDescription}</p>

        <p><b className="capitalize">Job title :</b> {job.jobTitle}</p>
        <p><b className="capitalize">job type :</b>{job.jobType}</p>
        <p><b className="capitalize">location :</b>{job.location}</p>
        <p><b className="capitalize">Experinence :</b>{job.experience}</p>



        <p><p className="font-bold capitalize">Role and Responsibilities :</p>
        <ol className="list-disc ml-8">
          {job.roleAndResponsibilities.map((ele,ind)=>{
            return(
              <li>
                {ele}
              </li>
            )
          })}
        </ol>
        </p>



        <p><p className="font-bold capitalize">Education and Skills :</p>
        <ol className="list-disc ml-8">
          {job.educationAndSkills.map((ele,ind)=>{
            return(
              <li>
                {ele}
              </li>
            )
          })}
        </ol>
        </p>


        <p><b className="capitalize">how to apply for {job.companyName} off campus drive ??</b></p>
        <p>All interested and eligible candidates can apply before expire in the following link.  </p>

        <p><b className="capitalize">Apply link : </b><a className="text-blue-500 font-semibold mt-2 inline-block"href={job.applyLink}>Click Here</a></p>



        {/* <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Salary:</strong> {job.salary}</p>
        <a href={job.applyLink} className="text-blue-500 font-semibold mt-2 inline-block">Apply Here</a> */}
      </div>

      {/* Right Section - Latest Jobs (20%) */}
      <div className="md:w-2/5 bg-gray-100 p-4 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4">Latest Jobs</h2>
        <ul>
          {latestJobs.map((latestJob) => (
            <li key={latestJob.id} className="flex items-center space-x-3 mb-3">
              <img src={latestJob.companyLogo} alt={latestJob.companyName} className="w-10 h-10 object-cover rounded-full" />
              <p className="text-sm font-semibold">{latestJob.jobTitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobDetails;
