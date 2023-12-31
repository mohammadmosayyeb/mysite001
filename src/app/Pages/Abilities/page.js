import Image from "next/image"
import "./Abilities.css"
import { HeadingDef1, HeadingDef2 } from "@/app/Components/heading/Heading"
import BottumColorized from "@/app/Components/bottumColorized/bottumColorized"



export const metadata = {
    title: "توانایی های من",
    description: 'Generated by create next app',
}

export default async function About() {

    return (
        <main>
            <div className="aeof4rhqw9f">
                <HeadingDef1 txt="توانایی های من" />
            </div>
            <div className="listofteck">
                <Image width={120} height={120} src={"https://liara.ir/static/react-32287f1670344ec2a19f9195b51bd367.png"} />
                <Image width={120} height={120} src={"https://liara.ir/static/nextjs-4efbcd540e5a587b81ac5e717999558c.png"} />
                <Image width={120} height={120} src={"https://liara.ir/static/vuejs-a7897fd48dc733ea2a1b98af301bd03b.png"} />
                <Image width={120} height={120} src={"https://liara.ir/static/dotnet-51718859c86ec7632df32fd581ab85da.png"} />
                <Image width={120} height={120} src={"https://liara.ir/static/python-008672afd0cf25e52b18bb693d81429b.png"} />
            </div>

            <HeadingDef2 txt="برنامه نویسی" />
            <div className="countainer">
                <BottumColorized txt="HTML & CSS" />
                <BottumColorized txt="Sass" />
                <BottumColorized txt="asp.net" />
                <BottumColorized txt="#C" />
                <BottumColorized txt="Python" />
                <BottumColorized txt="React" />
                <BottumColorized txt="JavaScript" />
                
                <BottumColorized txt="MySql" />
               


            </div>
            <hr className="safawfafef" />
            <HeadingDef2 txt="گرافیک" />
            <div className="countainer">
                <BottumColorized txt="UI & UX" />
                <BottumColorized txt="Illustrator" />
                <BottumColorized txt="Photoshop" />
                <BottumColorized txt="Premiere" />
                <BottumColorized txt="AfterEffects" />
                <BottumColorized txt="Photography" />
                <BottumColorized txt="Videography" />
                <BottumColorized txt="heliShot" />

            </div>

        </main>

    )
}