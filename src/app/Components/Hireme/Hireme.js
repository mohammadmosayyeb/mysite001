import Image from "next/image"
import "./Hireme.css"
import { HeadingDef2 } from "../heading/Heading"
import BottumColorized from "../bottumColorized/bottumColorized"
import Link from "next/link"
export default function Hireme() {
    var textfided = "برای فروش بهتر باید در بستر های بهتر با بتانسیل بیشتر سرمایه گذاری کنید ، می خواهید بهترین تجربه خرید برای کاربران خودتون رو ایجاد کنید؟ یا می خواهید نمونه کار های خودتون رو در بستری با ظاهر مدرن قرار دهید ؟ و یا هر چیز دیگر ... پروژه خودتون رو به من بسپرید"
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
                <Link href={"/Pages/About"}>
                    <BottumColorized txt="صفحه درباره من" arrow={true} />
                </Link>
            </div>

        </section>
    )
}