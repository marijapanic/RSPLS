import styles from "./page.module.css";
import { Typography } from "@mui/material";

export default function Home() {

  return (
    <main className={styles.main}>
      <header className={styles.header}>Welcome to the RPSLS game</header>

      <div className={`${styles.description}`}>
        <Typography>"Rock, Paper, Scissors, Lizard, Spock is a game of chance that expands the traditional game of Rock, Paper, Scissors.<br></br>
          It is first used to settle a dispute about what to watch on TV between Sheldon and Raj in "The Lizard-Spock Expansion"."
        </Typography>
      </div>
    </main>
  );
}
