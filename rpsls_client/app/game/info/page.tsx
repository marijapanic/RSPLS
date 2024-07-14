import { Box, List, ListItem, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./page.module.css"

export default function GameInfo() {
    return (
        <main className={styles.main}>
            <header>Game instructions</header>

            <Box>
                <List>
                    <ListItem sx={{
                        display: "flex",
                        paddingTop: 0,
                        paddingBottom: 0
                    }}>
                        <Tooltip title="scissors">
                            <Image src={`/assets/scissors.svg`} alt="scissors" width={18} height={18}></Image>
                        </Tooltip>

                        <Typography p={1} color="#fff"> cuts </Typography>

                        <Tooltip title="paper">
                            <Image src={`/assets/paper.svg`} alt="paper" width={18} height={18}></Image>
                        </Tooltip>
                    </ListItem>

                    <ListItem sx={{
                        display: "flex",
                        paddingTop: 0,
                        paddingBottom: 0
                    }}>
                        <Tooltip title="paper">
                            <Image src={`/assets/paper.svg`} alt="paper" width={18} height={18}></Image>
                        </Tooltip>

                        <Typography p={1} color="#fff"> covers </Typography>

                        <Tooltip title="rock">
                            <Image src={`/assets/rock.svg`} alt="rock" width={18} height={18}></Image>
                        </Tooltip>
                    </ListItem>

                    <ListItem sx={{
                        display: "flex",
                        paddingTop: 0,
                        paddingBottom: 0
                    }}>
                        <Tooltip title="rock">
                            <Image src={`/assets/rock.svg`} alt="rock" width={18} height={18}></Image>
                        </Tooltip>

                        <Typography p={1} color="#fff"> crushes </Typography>

                        <Tooltip title="lizard">
                            <Image src={`/assets/lizard.svg`} alt="lizard" width={18} height={18}></Image>
                        </Tooltip>
                    </ListItem>

                    <ListItem sx={{
                        display: "flex",
                        paddingTop: 0,
                        paddingBottom: 0
                    }}>
                        <Tooltip title="lizard">
                            <Image src={`/assets/lizard.svg`} alt="lizard" width={18} height={18}></Image>
                        </Tooltip>

                        <Typography p={1} color="#fff"> poisons </Typography>

                        <Tooltip title="spock">
                            <Image src={`/assets/spock.svg`} alt="spock" width={18} height={18}></Image>
                        </Tooltip>
                    </ListItem>

                    <ListItem sx={{
                        display: "flex",
                        paddingTop: 0,
                        paddingBottom: 0
                    }}>
                        <Tooltip title="spock">
                            <Image src={`/assets/spock.svg`} alt="spock" width={18} height={18}></Image>
                        </Tooltip>

                        <Typography p={1} color="#fff"> smashes </Typography>

                        <Tooltip title="scissors">
                            <Image src={`/assets/scissors.svg`} alt="scissors" width={18} height={18}></Image>
                        </Tooltip>
                    </ListItem>

                    <ListItem sx={{
                        display: "flex",
                        paddingTop: 0,
                        paddingBottom: 0
                    }}>
                        <Tooltip title="scissors">
                            <Image src={`/assets/scissors.svg`} alt="scissors" width={18} height={18}></Image>
                        </Tooltip>

                        <Typography p={1} color="#fff"> decapitates </Typography>

                        <Tooltip title="lizard">
                            <Image src={`/assets/lizard.svg`} alt="lizard" width={18} height={18}></Image>
                        </Tooltip>
                    </ListItem>

                    <ListItem sx={{
                        display: "flex",
                        paddingTop: 0,
                        paddingBottom: 0
                    }}>
                        <Tooltip title="lizard">
                            <Image src={`/assets/lizard.svg`} alt="lizard" width={18} height={18}></Image>
                        </Tooltip>

                        <Typography p={1} color="#fff"> eats </Typography>

                        <Tooltip title="paper">
                            <Image src={`/assets/paper.svg`} alt="paper" width={18} height={18}></Image>
                        </Tooltip>
                    </ListItem>

                    <ListItem sx={{
                        display: "flex",
                        paddingTop: 0,
                        paddingBottom: 0
                    }}>
                        <Tooltip title="paper">
                            <Image src={`/assets/paper.svg`} alt="paper" width={18} height={18}></Image>
                        </Tooltip>

                        <Typography p={1} color="#fff"> disaproves </Typography>

                        <Tooltip title="spock">
                            <Image src={`/assets/spock.svg`} alt="spock" width={18} height={18}></Image>
                        </Tooltip>
                    </ListItem>

                    <ListItem sx={{
                        display: "flex",
                        paddingTop: 0,
                        paddingBottom: 0
                    }}>
                        <Tooltip title="spock">
                            <Image src={`/assets/spock.svg`} alt="spock" width={18} height={18}></Image>
                        </Tooltip>

                        <Typography p={1} color="#fff"> vaporizes </Typography>

                        <Tooltip title="rock">
                            <Image src={`/assets/rock.svg`} alt="rock" width={18} height={18}></Image>
                        </Tooltip>
                    </ListItem>

                    <ListItem sx={{
                        display: "flex",
                        paddingTop: 0,
                        paddingBottom: 0
                    }}>
                        <Tooltip title="rock">
                            <Image src={`/assets/rock.svg`} alt="rock" width={18} height={18}></Image>
                        </Tooltip>

                        <Typography p={1} color="#fff"> vaporizes </Typography>

                        <Tooltip title="paper">
                            <Image src={`/assets/paper.svg`} alt="paper" width={18} height={18}></Image>
                        </Tooltip>
                    </ListItem>
                </List>
            </Box>
        </main>
    );
}