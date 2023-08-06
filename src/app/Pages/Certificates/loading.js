import { Card, CardActions, CardContent, Skeleton } from "@mui/material";
import "./certificate.css"
export default function loading() {
    return (
        <main className="eaxhafsfi">
            <Card className="aouscikabfef" sx={{ maxWidth: 345 }}>
                <Skeleton style={{
                    width: "100%",
                    height: "300px",
                    margin: "0"
                }} />
                <CardContent>
                    <Skeleton style={{
                        width: "50%",
                        height: "48px"
                    }} />
                    <Skeleton style={{
                        width: "80%",
                        height: "48px"
                    }} />
                </CardContent>
                <CardActions>

                    <Skeleton />

                </CardActions>
            </Card>
            <Card className="aouscikabfef" sx={{ maxWidth: 345 }}>
                <Skeleton style={{
                    width: "100%",
                    height: "300px",
                    margin: "0"
                }} />
                <CardContent>
                    <Skeleton style={{
                        width: "50%",
                        height: "48px"
                    }} />
                    <Skeleton style={{
                        width: "80%",
                        height: "48px"
                    }} />
                </CardContent>
                <CardActions>

                    <Skeleton />

                </CardActions>
            </Card>
            <Card className="aouscikabfef" sx={{ maxWidth: 345 }}>
                <Skeleton style={{
                    width: "100%",
                    height: "300px",
                    margin: "0"
                }} />
                <CardContent>
                    <Skeleton style={{
                        width: "50%",
                        height: "48px"
                    }} />
                    <Skeleton style={{
                        width: "80%",
                        height: "48px"
                    }} />
                </CardContent>
                <CardActions>

                    <Skeleton />

                </CardActions>
            </Card>
        </main>
    )
}