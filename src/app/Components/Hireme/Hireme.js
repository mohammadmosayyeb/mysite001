import Image from "next/image"
import "./Hireme.css"
import { HeadingDef2 } from "../heading/Heading"
import BottumColorized from "../bottumColorized/bottumColorized"
import Link from "next/link"
export default function Hireme() {
    var textfided = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای "
    return (


        <section className="sectionofHireme">
            <div className="Idlaehfaorf3r">
                <div className="Textandabilities">
                    <div className="seconeid6416894684684">
                        <HeadingDef2 txt={textfided} />
                    </div>
                    <div className="sectwoid6416894684684">
                        <BottumColorized txt="#C" />
                        <BottumColorized txt="React" />
                        <BottumColorized txt="JavaScript" />
                        <BottumColorized txt="Next.js" />
                        <BottumColorized txt="Asp.net core" />
                    </div>

                </div>
                <div className="myselfimage">
                    <Image className="myimageformeeaouefae" width={186} height={607} src={"https://image.mosayyebnezhad.ir/mea.webp"} alt="" />
                </div>
            </div>
            <div className="bottomofonviet">
                <Link href={"/"}>
                    <BottumColorized txt="درخواست استخدام" arrow={true} />
                </Link>
            </div>

        </section>
    )
}