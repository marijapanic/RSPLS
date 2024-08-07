import { Box, Stack } from "@mui/material"
import { ReactElement } from "react"

interface Props {
    userChoice: string,
    children?: ReactElement
}

export default function PlayerContainer(props: Props) {
    return (
        <Box sx={{
            display: "flex",
            borderWidth: "1px",
            borderRadius: "0.5em",
            borderStyle: "solid",
            justifyContent: "center",
            borderColor: "#fff",
            minHeight: "5em",
            p: "1em",
            color: "#fff",
        }}>
            <Stack direction="column" justifyContent="space-evenly" alignItems="center">
                <Box sx={{
                    textAlign: "center",
                    fontSize: "0.6em"
                }}>
                    <h2>{props.userChoice}</h2>
                </Box>
                <Box>
                    {props.children}
                </Box>
            </Stack>
        </Box>
    )
}