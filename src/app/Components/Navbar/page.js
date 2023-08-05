import Image from "next/image";
import Link from "next/link";
import Personallogo from "../Svglogos/Personallogo";


export default function Navbar() {
    return (

        <>
            <nav>
                <ul>
                    <Personallogo />
                    <li>
                        <Link href={"/"}> درباره من</Link>
                    </li>
                    <li>
                        <Link href={"/"}>توانایی هایم</Link>
                    </li>
                    <li>
                        <Link href={"/"}>سرویس هایم</Link>
                    </li>
                    <li><Link href={"/"}>نمونه کار هایم</Link></li>
                    <li><Link href={"/"}>مدارک من</Link></li>

                </ul>
            </nav>




        </>
    )
}


export function Ali (){
    return(
        <>
        nothing</>
    )
}


