import { Box, Stack, Typography } from "@mui/material";
import GameHeader from "./gameNotification/gameNotification";
import { UserPlayer } from "./players/userPlayer/userPlayer";
import ComputerPlayer from "./players/ComputerPlayer/computerPlayer";
import GameResults from "../results/gameResults";
import GameControlsResets from "../controls/gameControlsResets";
import { GameContextProvider } from "@/store/GameContext";
import { getPlayerChoices } from "@/agent/agent";
import { Suspense } from "react";
import LoadingOptions from "./players/Choice/loadingOptions";

export default function GameSection() {
  return (
    <GameContextProvider>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5em", width: "100%" }}>
        <GameHeader></GameHeader>
        <Stack direction="column" gap="2em" alignItems="center">
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
    return <Typography>We couldn't retrieve the available options</Typography>
  }

  return (
    <>
      <UserPlayer choices={response}></UserPlayer>
      <ComputerPlayer></ComputerPlayer>
    </>
  );
}