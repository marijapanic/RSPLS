using Core.Game;

namespace Core.Shared
{
    public static class GameFinal
    {
        public static GameOutcome DetermineWinner(Choice.Choice userChoice, Choice.Choice computerChoice)
        {
            if (userChoice.Equals(computerChoice))
            {
                return new GameOutcome(GameResult.Tie.ToString().ToLower(), userChoice, computerChoice);
            }

            GameResult outcome = (userChoice, computerChoice) switch
            {
                (Choice.Choice.Rock, Choice.Choice.Scissors) or (Choice.Choice.Rock, Choice.Choice.Lizard) => GameResult.Win,
                (Choice.Choice.Paper, Choice.Choice.Rock) or (Choice.Choice.Paper, Choice.Choice.Spock) => GameResult.Win,
                (Choice.Choice.Scissors, Choice.Choice.Paper) or (Choice.Choice.Scissors, Choice.Choice.Lizard) => GameResult.Win,
                (Choice.Choice.Lizard, Choice.Choice.Spock) or (Choice.Choice.Lizard, Choice.Choice.Paper) => GameResult.Win,
                (Choice.Choice.Spock, Choice.Choice.Scissors) or (Choice.Choice.Spock, Choice.Choice.Rock) => GameResult.Win,
                _ => GameResult.Lose
            };

            return new GameOutcome(outcome.ToString().ToLower(), userChoice, computerChoice);
        }
    }
}
