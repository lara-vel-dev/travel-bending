import Image from "next/image";
import Navbar from "./Components/Navbar";
import homeImage from './img/fire-nation.jpeg';

const Home = () => {
  return (
    <>
      <Navbar />
      <Image src={homeImage}
      alt='Fire nation'
      className="h-96 lg:h-560"
      style={{
        width: '100%',
        objectFit: 'cover',
      }}/>
    </>
  );
};

export default Home;
