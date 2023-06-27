import Image from "next/image";
import Navbar from "./Components/Navbar";
import homeImage from './img/fire-nation.jpeg';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Image src={homeImage}
      alt='Fire nation'
      style={{
        width: '100%',
        height: '570px',
        objectFit: 'cover',
      }}/>
    </>
  );
};

export default Home;
