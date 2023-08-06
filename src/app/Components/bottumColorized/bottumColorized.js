
import "./bottumColorized.css"



export default function BottumColorized(param) {


    var r = Math.floor(Math.random() * 5)


    var classifit;

    switch (r) {
        case 0:
            classifit = "buttonID124886846846 btmcolor0"
            break;
        case 1:
            classifit = "buttonID124886846846 btmcolor1"
            break;
        case 2:
            classifit = "buttonID124886846846 btmcolor2"
            break;
        case 3:
            classifit = "buttonID124886846846 btmcolor3"
            break;
        case 4:
            classifit = "buttonID124886846846 btmcolor4"
            break;
        case 5:
            classifit = "buttonID124886846846 btmcolor5"
            break;
        default:
            classifit = "buttonID124886846846 btmcolor5"
            break;

    }

    return (


        <button className={classifit}>


            {param.txt}

            {(param.arrow == true) ? < svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.04 33.522">
                <g id="arrow-down-1" transform="translate(43.04 -2.394) rotate(90)">
                    <path id="Path_41" data-name="Path 41" d="M32.381,14.43,19.155,27.655,5.93,14.43" transform="translate(0 12.884)" fill="none" stroke="#383051" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="5" />
                    <path id="Path_42" data-name="Path 42" d="M12,3.5V40.17" transform="translate(7.156 0)" fill="none" stroke="#383051" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="5" />
                </g>
            </svg>
                : ""}



        </button >
    )
}