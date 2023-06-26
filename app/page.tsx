import Image from "next/image";
import homeImage from './img/fire.png';

const Home = () => {
  return (
    <>
      <Image src={homeImage}
      alt='Fire nation'
      style={{
        width: '100%',
        height: '450px',
        objectFit: 'cover',
      }}/>
    </>
  );
};

export default Home;
