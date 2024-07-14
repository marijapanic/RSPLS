import Link from "next/link";
import Image from "next/image";
import NavLink from "./navLink";
import styles from "./heading.module.css";
import logoImg from "@/public/assets/logo.svg"
import { Box, List, ListItem } from "@mui/material";

export default function Heading() {
    return (
        <Box sx={{ borderBottom: 1, borderColor: "rgba(255, 255, 255, 0.16)" }}>
            <header className={styles.header}>
                <Link
                    className={styles.logo}
                    href="/">

                    <Image
                        src={logoImg.src}
                        alt="The bing bang theory"
                        width="80"
                        height="80"
                        priority></Image>
                    The bing bang theory
                </Link>
                <nav className={styles.nav}>
                    <List>
                        <ListItem>
                            <NavLink href="/game">Play a game</NavLink>
                            <NavLink href="/game/info">About the game</NavLink>
                        </ListItem>
                    </List>
                </nav>
            </header>
        </Box>
    );
}