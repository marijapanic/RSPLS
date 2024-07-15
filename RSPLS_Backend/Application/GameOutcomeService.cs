using Core.Choice.Models;
using Core.GameOutcome.Abstractions;
using Core.GameOutcome.Models;

namespace Application
{
    public class GameOutcomeService : IGameOutcomeService
    {
        public GameOutcome DetermineWinner(Choice userChoice, Choice computerChoice)
        {
            if (userChoice.Equals(computerChoice))
            {
                return new GameOutcome(GameResult.Tie.ToString().ToLower(), userChoice, computerChoice);
            }

            GameResult outcome = (userChoice, computerChoice) switch
            {
                (Choice.Rock, Choice.Scissors) or (Choice.Rock, Choice.Lizard) => GameResult.Win,
                (Choice.Paper, Choice.Rock) or (Choice.Paper, Choice.Spock) => GameResult.Win,
                (Choice.Scissors, Choice.Paper) or (Choice.Scissors, Choice.Lizard) => GameResult.Win,
                (Choice.Lizard, Choice.Spock) or (Choice.Lizard, Choice.Paper) => GameResult.Win,
                (Choice.Spock, Choice.Scissors) or (Choice.Spock, Choice.Rock) => GameResult.Win,
                _ => GameResult.Lose
            };

            return new GameOutcome(outcome.ToString().ToLower(), userChoice, computerChoice);
        }
    }
}
