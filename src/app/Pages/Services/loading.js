import { Skeleton } from "@mui/material";

export default function loading(){
    return (
        <main>
            <section className="secinservices">
                <div>
                    <Skeleton width={"80%"} height={"800px"} />
                </div>
                <div>
                    <Skeleton width={"80%"} height={"200px"} />
                    <Skeleton width={"80%"} height={"600px"} />

                </div>
            </section>
            <section className="secinservices">

                <div>
                    <Skeleton width={"80%"} height={"200px"} />
                    <Skeleton width={"80%"} height={"600px"} />

                </div>
                <div>
                    <Skeleton width={"80%"} height={"800px"} />
                </div>
            </section>
        </main>
    )
}