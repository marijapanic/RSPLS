"use client"

import { UseGameContext } from "@/store/GameContext";
import DeleteIcon from '@mui/icons-material/Delete';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Box, Button, Divider, Grid } from "@mui/material";
import { useEffect, useState } from "react";


export default function GameControlsResets() {
  const gameContext = UseGameContext();
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    if (columns === 1) {
      if (gameContext.state.result.label !== '' && gameContext.state.games.total > 0) {
        setColumns(2);
      }
    }

    if (columns === 2) {
      if (gameContext.state.result.label === '' || gameContext.state.games.total === 0) {
        setColumns(1);
      }
    }
  }, [gameContext.state.result.label, gameContext.state.games.total, columns, setColumns]);

  return (
    <>
      {(gameContext.state.result.label !== '' || gameContext.state.games.total > 0) && (
        <>
          <Divider />
          <Grid columns={[columns, null, columns]} spacing={4}>
            {gameContext.state.result.label !== '' && (
              <Box display="flex" justifyContent="center">
                <Button
                  aria-label="clear game"
                  startIcon={<SportsEsportsIcon />}
                  onClick={() => { gameContext.clearGame() }}
                  variant="contained"
                >
                  New Game
                </Button>
              </Box>
            )}

            <Box display="flex" justifyContent="center">
              <Button
                aria-label="clear all"
                endIcon={<DeleteIcon />}
                onClick={() => gameContext.clearAll()}
              >
                Clear All
              </Button>
            </Box>
          </Grid>
        </>
      )}
    </>
  );
};