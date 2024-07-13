import styles from "@/components/game/heading/gameHeading.module.css";

export default function GameHeading()
{
    return(
        <>
        <h2 className={`${styles.header} ${styles.secondary}`}>Game</h2>
        <h1 className={`${styles.header} ${styles.primary}`}>Rock Paper Scissors Lizard Spock</h1>
        <hr className={styles.break} />
        </>
    );
}