"use client"
import { Player } from "@lottiefiles/react-lottie-player"
import { Skeleton } from "@mui/material";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer(pram) {

}
export default function LottieF(param) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);





    });
    if (count < 2) {

        return (
            < Skeleton width={"80%"} height={"500px"} />
        )

    } else {
        return (
            <Player
                background="none"
                autoplay
                loop
                src={param.src}
                style={{ height: param.height, width: param.width }}
            >
            </Player>
        )
    }

}