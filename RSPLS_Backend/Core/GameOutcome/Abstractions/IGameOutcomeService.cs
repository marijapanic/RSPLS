namespace Core.GameOutcome.Abstractions
{
    public interface IGameOutcomeService
    {
        Models.GameOutcome DetermineWinner(Choice.Models.Choice userChoice, Choice.Models.Choice computerChoice);
    }
}
