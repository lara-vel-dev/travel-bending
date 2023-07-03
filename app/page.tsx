import Image from "next/image";
import Navbar from "./Components/Navbar";
import homeImage from "./img/fire-nation.jpeg";

const Home = () => {
  return (
    <>
      <Navbar />
      <Image
        src={homeImage}
        alt="Fire nation"
        className="h-96 lg:h-560"
        style={{
          width: "100%",
          objectFit: "cover",
        }}
      />
      <div
        className="text-cloud absolute top-32 w-52 text-center left-20 lg:w-96 lg:top-44"
        style={{ left: "760px" }}
      >
        <h1 className="text-3xl font-bold lg:text-6xl">
          Traveling has never been{" "}
          <strong className="text-secondary">easier</strong>
        </h1>
        <p className="text-lg mt-5 lg:text-2xl">
          Find peace and the perfect place to vacation
        </p>
      </div>
      
    </>
  );
};

export default Home;
