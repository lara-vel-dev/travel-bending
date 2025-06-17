import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import { useState } from "react";

const Landing = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <main className="mainpage">
        <Navbar auth={isAuth} />
        <img
          className="mainpage_bg_img"
          src="src/assets/img/fire.jpeg"
          alt="Earth Kingdom"
        />
        <div className="mainpage_txt">
          <h1>
            Traveling has never <br />
            been <span>easier</span>
          </h1>
          <p>
            Find peace and the perfect place to <br /> vacation
          </p>
        </div>
        
      </main>
      <Filter />
    </>
  );
};

export default Landing;
