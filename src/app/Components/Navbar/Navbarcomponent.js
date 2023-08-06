"use client"
import Image from "next/image";
import Link from "next/link";
import { Personallogo } from "../Svglogos/svglogos";

import { Button } from "@mui/material";
import { usePathname } from 'next/navigation';
import SwipeableTemporaryDrawer from "../Menu/Mymenu";

export default function Navbar() {

    var items = [
        'درباره من',
        'توانایی هایم',
        'سرویس هایم',
        'نمونه کار هایم',
        'مدارک من'
    ]


    const currentpage = usePathname();
    return (

        <>
            <nav>
                <div className="sfgnxwn7x8fw7">
                    <SwipeableTemporaryDrawer listOfnavitem={items} />

                </div>
                <ul>


                    <li>

                        <Button variant={currentpage === "/Pages/About" ? "outlined" : "text"} >
                            <Link href={"/Pages/About"}> درباره من</Link>
                        </Button>



                    </li>
                    <li>
                        <Button variant={currentpage == "/Pages/Abilities" ? "outlined" : "text"}>
                            <Link href={"/Pages/Abilities"}>توانایی هایم</Link>
                        </Button>
                    </li>
                    <li>
                        <Button variant={currentpage == "/Pages/Services" ? "outlined" : "text"}>
                            <Link href={"/Pages/Services"}>سرویس هایم</Link>
                        </Button>
                    </li>
                    <li>
                        <Button variant={currentpage == "/Pages/Portfolios" ? "outlined" : "text"}>
                            <Link href={"/Pages/Portfolios"}>نمونه کار هایم</Link>
                        </Button>
                    </li>
                    <li>
                        <Button variant={currentpage == "/Pages/Certificates" ? "outlined" : "text"}>
                            <Link href={"/Pages/Certificates"}>مدارک من</Link>
                        </Button>
                    </li>


                </ul>
                <Button className="logocase">
                    <Link href={"/"} >
                        <Personallogo />
                    </Link>
                </Button>
            </nav >




        </>
    )
}


export function Ali() {
    return (
        <>
            nothing</>
    )
}


