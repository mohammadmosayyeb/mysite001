import { Button, Card, CardActions, CardContent, Container, Typography } from "@mui/material"
import Image from "next/image"
import "./portfolio.css"
import Link from "next/link"
async function getme() {
    const res = await fetch(
        "https://64b17d54062767bc4826489f.mockapi.io/api/v1/MainDB"
        , { cache: "no-store" })
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return res.json()


}
export const metadata = {
    title: "نمونه کار های من",
    description: 'Generated by create next app',
}


export default async function About() {
    const games = await getme()
    return (
        <main className="eaxhafsfi">
            {
                games.map((i, b) => (
                    <Card key={b} className="aouscikabfef" sx={{ maxWidth: 345 }}>
                        <Image src={i.ImageAdress} width={345} height={258} />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" >
                                {i.title}
                            </Typography>
                            <Typography variant="body2" >
                                {i.Description}
                            </Typography>
                        </CardContent>
                        <CardActions>

                            <Link href={i.Url} target="_blank">
                                <Button size="small">دریبل</Button>
                            </Link>

                        </CardActions>
                    </Card>
                ))
            }
        </main>
    )
}