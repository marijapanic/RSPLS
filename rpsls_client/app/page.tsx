import styles from "./page.module.css";
import { Typography } from "@mui/material";

export default function Home() {

  return (
    <main className={styles.main}>
      <header className={styles.header}>Welcome to the RPSLS game</header>

      <div className={`${styles.description}`}>
        <Typography>&#34;Rock, Paper, Scissors, Lizard, Spock is a game of chance that expands the traditional game of Rock, Paper, Scissors.<br></br>
          It is first used to settle a dispute about what to watch on TV between Sheldon and Raj in &#34;The Lizard-Spock Expansion&#34;.&#34;
        </Typography>
      </div>
    </main>
  );
}
