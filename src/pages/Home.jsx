import Header from "../components/Header";
import jobData from '../data.json';

const Home = () => {

  console.log(jobData);
  
    return (<>
      <Header />
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to My Website</h1>
        <p className="text-gray-700 mt-4">This is the home page.</p>
        <p > {}</p>
      </div>
      </>);
  };
  
  export default Home;
  