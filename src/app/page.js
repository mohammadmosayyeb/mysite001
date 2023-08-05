import Image from "next/image";


import { HeadingDef1, HeadingDef2, HeadingDef3 } from "./Components/heading/Heading";

import { Dribbble, Github, Instagram, Pintrest, Twitter } from "./Components/Svglogos/svglogos";


export default function Home() {

  return (
    <main >
      <HeadingDef1 txt="محمد حسن مسیب نژاد" />
      <HeadingDef2 txt="طراح وبسایت و گرافیست" />
      <HeadingDef3 txt="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
 و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
روزنامه و مجله در ستون و سطرآنچنان که لازم است، و" />


      <div className="logoslist">
        <Dribbble width="22" />
        <Instagram width="22" />
        <Github width="24" />
        <Pintrest width="19" />
        <Twitter width="26" />
        {/* < width="30" /> */}

      </div>

      <Image width={853} height={2774} className="imageuploaded" alt="nothing" src={"https://image.mosayyebnezhad.ir/mea.webp"} />

    </main>
  )
}
