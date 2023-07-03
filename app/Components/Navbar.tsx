"use client";
import Image from "next/image";
import logoImage from "../img/logo-travel.png";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { MdLuggage } from "react-icons/md";
import * as Ai from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = (props: any) => {
  const [wasClicked, setWasClicked] = useState(false);

  const navLinks = [
    {
      name: "My Trips",
      link: "/my-trips",
      icon: <BiSolidPlaneAlt />,
    },
    {
      name: "My Reservations",
      link: "/my-reservations",
      icon: <MdLuggage />,
    },
    {
      name: "My Favorites",
      link: "/my-favorites",
      icon: <Ai.AiFillHeart />,
    },
  ];



  return (
    <header
      className="fixed 
            flex 
            h-20
            justify-between 
            items-center 
            px-4 
            md:h-28
            lg:justify-center w-full
            lg:h-36"
      style={{ backgroundColor: props.navColor }}
    >
      <a href="/">
        <Image
          src={logoImage}
          alt="Travel Bending logo"
          className={`w-20 md:w-32 lg:w-40 ${
            wasClicked ? "hidden" : "display"
          }`}
          style={{ position: "absolute", left: "20px", top: "5px" }}
        />
      </a>

      <nav className="lg:w-full lg:grid lg:place-content-center ">
        <button
          className="lg:hidden"
          onClick={() => {
            setWasClicked(!wasClicked);
          }}
        >
          <GiHamburgerMenu
            className={`${
              props.navColor === "white" ? "text-carbon" : "text-cloud"
            }
                             ${
                               wasClicked ? "hidden" : "display"
                             } transition-all duration-500 ease-in w-7 h-7 md:w-10 md:h-10`}
            style={{
              position: "absolute",
              top: "7px",
              right: "10px",
            }}
          />
          <RxCross2
            className={`
            ${wasClicked ? "display text-carbon" : "hidden"} 
            transition-all duration-500 ease-in w-7 h-7`}
            style={{
              position: "absolute",
              top: "7px",
              right: "10px",
              height: "25px",
              width: "25px",
              zIndex: "1",
            }}
          />
        </button>
        <div
          className={`fixed 
                    left-0 
                    right-0 
                    top-0
                    w-full
                    min-h-screen
                    bg-cloud 
                    space-y-4 
                    transform 
                    pl-10
                    pt-10
                    ${wasClicked ? "translate-x-0" : "translate-x-full"}
                    lg:relative lg:flex lg:min-h-0 lg:bg-main/0 
                    lg:translate-x-0 lg:space-y-0 lg:space-x-72
                    lg:mt-4
                    lg:pl-96 lg:pt-0
                    lg:justify-around
                    transition-all duration-500 ease-in
                    `}
        >
          <div>
            <ul
            className={`
            ${
              wasClicked || props.navColor === "white"
                ? "text-carbon"
                : "text-cloud"
            }
            
            text-lg lg:flex lg:text-xl font-bold
            `}
          >
            <li className="flex my-2 lg:hidden">
              <Ai.AiFillHome />
              <a className="mx-3" href="/">
                Home
              </a>
            </li>

            {navLinks.map(({ name, link, icon }) => (
              <li key={name} className="flex my-2 hover:text-secondary ">
                {icon}
                <a className={`mx-3 `} href={link}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
          </div>
          <div className="inline-grid grid-cols-1 gap-4 lg:flex  ">
            <button
              className={`text-cloud 
                            border-solid border-2 
                            rounded-full 
                            border-main
                            bg-main
                            hover:bg-secondary
                            px-7
                            py-1
                            ${
                              props.navColor === "white"
                                ? "lg:bg-main"
                                : "lg:bg-main/0"
                            } `}
            >
              Login
            </button>
            <button
              className="
                            text-cloud 
                            border-solid border-2 
                            rounded-full 
                            border-main
                            bg-main
                            hover:bg-secondary
                            px-7
                            py-1"
            >
              Register
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
