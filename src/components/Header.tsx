import Link from "next/link"
import Image from "next/image"
import logo1 from "../../public/icone1.png"
import logo2 from "../../public/icone2.png"
import logo3 from "../../public/icone3.png"
import logo4 from "../../public/heart.png"
import logo5 from "../../public/bag.png"

export default function Header() {
    return (
        <div className="header-container">
            <div className="header-box1">
                <Image src={logo1} alt="icon" />
                <ul>
                    <Link href={"/addtocard"}><li>Find a store | </li></Link>
                    <Link href={"/contact-us"}><li>Help | </li></Link>
                    <Link href={"/member"}><li>Join us | </li></Link>
                    <Link href={"/login"}><li>Sign in</li></Link>
                </ul>
            </div>
            <div className="header-box2">
                <Link href={"/"}><Image src={logo2} alt="icon" id="icone1" /></Link>
                <ul>
                    <Link href={"/blog"}><li>New & Featured</li></Link>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Sale</li>
                    <li>SNKRS</li>
                </ul>
                <div className="box2-part1">
                    <Image src={logo3} alt="icon" />
                    <input type="text" placeholder="search" />
                </div>
                <div className="box2-part2">
                    <Image src={logo4} alt="icon" />
                    <Image src={logo5} alt="icon" />
                </div>
            </div>
        </div>
    )
}
