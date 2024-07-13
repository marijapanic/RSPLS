"use client"
import { ReactElement, useContext, useState } from "react";
import styles from "@/components/game/section/gameSection.module.css";
import { Box, Container, Grid, Stack } from "@mui/material";
import GameHeader from "./gameNotification/gameNotification";
import { UserPlayer } from "./players/userPlayer/userPlayer";
import ComputerPlayer from "./players/ComputerPlayer/computerPlayer";
import GameResults from "../results/gameResults";
import GameControlsResets from "../controls/gameControlsResets";
import { GameContextProvider } from "@/store/GameContext";

export default function GameSection() {
  return (
    <GameContextProvider>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5em", width: "100%" }}>
        <GameHeader></GameHeader>
        <Stack direction={"row"} alignItems="center" display="grid" gap="1em" gridTemplateColumns="repeat(2, minmax(0, 1fr))">
          <Grid>
            <UserPlayer></UserPlayer>
            <ComputerPlayer></ComputerPlayer>
          </Grid>

          <GameResults></GameResults>

          <GameControlsResets></GameControlsResets>
        </Stack>
      </Box>
    </GameContextProvider>
  );
}