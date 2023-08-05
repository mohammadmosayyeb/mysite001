import "./headingcss.css"

export function HeadingDef1(param) {
    return (
        <h1 className="Defheichone">
            {param.txt}
        </h1>
    )
}


export function HeadingDef2(param) {
    return (
        <h2 className="Defheichtwo">
            {param.txt}
        </h2>
    )
}


export function HeadingDef3(param) {
    return (
        <h3 className="Defheichtre">
            {param.txt}
        </h3>
    )
}