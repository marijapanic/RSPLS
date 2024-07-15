import { Box, Stack, Typography } from "@mui/material";
import { UserPlayer } from "./players/userPlayer/userPlayer";
import ComputerPlayer from "./players/ComputerPlayer/computerPlayer";
import GameResults from "../results/gameResults";
import GameControlsResets from "../controls/gameControlsResets";
import { GameContextProvider } from "@/store/gameContext";
import { getPlayerChoices } from "@/agent/agent";
import { Suspense } from "react";
import LoadingOptions from "./players/Choice/loadingOptions";
import { RandomChoice } from "./players/Choice/randomChoice";
import GameResultHeader from "../results/gameResultHeader/gameResultHeader";

export default function GameSection() {
  return (
    <GameContextProvider>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5em", width: "100%" }}>
        <GameResultHeader></GameResultHeader>
        <Stack direction="column" gap="1.2em" alignItems="center">
          <RandomChoice></RandomChoice>
          <Stack direction={"row"} alignItems="center" display="grid" gap="1em" gridTemplateColumns="repeat(2, minmax(0, 1fr))">
            <Suspense fallback={<LoadingOptions></LoadingOptions>}>
              <LoadGame></LoadGame>
            </Suspense>
          </Stack>

          <GameResults></GameResults>

          <GameControlsResets></GameControlsResets>
        </Stack>
      </Box>
    </GameContextProvider>
  );
}

async function LoadGame() {
  const response = await getPlayerChoices();

  if (!response.length)
  {
    return <Typography>We couldn&#39;t retrieve the available options</Typography>
  }

  return (
    <>
      <UserPlayer choices={response}></UserPlayer>
      <ComputerPlayer></ComputerPlayer>
    </>
  );
}