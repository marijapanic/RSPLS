import { Typography } from "@mui/material";
import styles from "./loading.module.css";

export default function LoadingOptions() {
    return (<Typography className={styles.loading}>Fetching options...</Typography>);
}