import styles from "./page.module.css";
import GameHeading from "@/components/game/heading/gameHeading";
import GameSection from "@/components/game/section/gameSection";

export default function Home() {
  
  return (
    <main>
      <GameHeading></GameHeading>
      <GameSection></GameSection>
    </main>
  );
}
