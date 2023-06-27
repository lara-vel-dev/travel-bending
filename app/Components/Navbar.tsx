import Image from "next/image";
import logoImage from '../img/logo-travel.png';
import {BiSolidPlaneAlt} from "react-icons/bi";
import {MdLuggage} from "react-icons/md"
import {AiFillHeart} from "react-icons/ai"

const Navbar = () => {
    return (<div style={{ position: 'absolute', left: '10px' }}>

        <Image src={logoImage}
            alt='Travel Bending logo'
            className="w-20 md:w-32 lg:w-40"

        />

        <div style={{}}>
            <ul className="text-cloud">
                <li><BiSolidPlaneAlt />
                    <a href="/my-trips">My Trips</a>
                </li>
                <li><MdLuggage />
                    <a href="/my-reservations">My Reservations</a>
                </li>
                <li><AiFillHeart />
                    <a href="/my-favorites">My Favorites</a>
                </li>
            </ul>
        </div>

    </div>);
}

export default Navbar;