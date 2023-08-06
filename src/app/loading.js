
import { Skeleton } from '@mui/material'
import Hireme from './Components/Hireme/Hireme'
import { Dribbble, Github, Instagram, Pintrest, Twitter } from './Components/Svglogos/svglogos'
import { HeadingDef1, HeadingDef2, HeadingDef3 } from './Components/heading/Heading'
import './globals.css'
export default function loading() {
    return (
        <>
            <main>
                <Skeleton width={"30%"} height={100} style={{ marginTop: "120px", marginLeft: "35%" }} />
                <Skeleton width={"40%"} height={120} style={{ marginLeft: "30%" }} />
                <Skeleton width={"80%"} height={30} style={{ marginLeft: "10%" }} />

                <Skeleton width={"80%"} height={400} style={{ marginTop: "120px", marginLeft: "10%" }} />

            </main>
        </>
    )
}