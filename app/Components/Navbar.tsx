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
  return (
    <header
      className="fixed 
            flex 
            justify-between 
            items-center 
            px-4 
            lg:justify-center w-full"
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

      <nav>
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
                             ${wasClicked ? "hidden" : "display"} w-7 h-7`}
            style={{
              position: "absolute",
              top: "7px",
              right: "10px",
            }}
          />
          <RxCross2
            className={`${
              props.navColor === "white" ? "text-carbon" : "text-cloud"
            }
                         ${
                           wasClicked ? "display text-carbon" : "hidden"
                         } w-7 h-7`}
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
                    min-h-screen
                     bg-cloud 
                     space-y-4 
                     transform 
                     ${wasClicked ? "translate-x-0" : "translate-x-full"}
                     lg:mt-4
                     lg:relative lg:flex lg:min-h-0 lg:bg-main/0 
                     lg:translate-x-0 lg:space-y-0 lg:space-x-6
                     lg:border-solid lg:border-2fixed 
                     left-0 
                     right-0 
                     min-h-screen
                      bg-main 
                      space-y-4 
                      transform 
                      translate-x-full
                      lg:mt-4
                      lg:relative lg:flex lg:min-h-0 lg:bg-main/0 
                      lg:translate-x-0 lg:space-y-0 lg:space-x-6
                      lg:border-solid lg:border-2`}
        >
          <ul
            className={`${
              props.navColor === "white" ? "text-carbon" : "text-cloud"
            } 
                        lg:flex lg:text-xl font-bold
                        border-solid border-2
                        `}
          >
            <li className="flex my-2 lg:hidden">
              <Ai.AiFillHome />
              <a className="mx-3" href="/">
                Home
              </a>
            </li>
            <li className="flex my-2">
              <BiSolidPlaneAlt />
              <a className="mx-3" href="/my-trips">
                My Trips
              </a>
            </li>
            <li className="flex my-2">
              <MdLuggage />
              <a className="mx-3" href="/my-reservations">
                My Reservations
              </a>
            </li>
            <li className="flex my-2">
              <Ai.AiFillHeart />
              <a className="mx-3" href="/my-favorites">
                My Favorites
              </a>
            </li>
          </ul>
          <div className="inline-grid grid-cols-1 gap-4 ">
            <button
              className="
                            text-cloud 
                            border-solid border-2 
                            rounded-full 
                            border-main
                            bg-main
                            px-7
                            py-1
                            lg:bg-main/0
                            "
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
