using System.Text.Json.Serialization;

namespace Core.Game
{
    public record GameOutcome(
        [property: JsonPropertyName("results")] GameResult Results,
        [property: JsonPropertyName("player")] Choice.Choice PlayerChoiceId,
        [property: JsonPropertyName("computer")] Choice.Choice ComputerChoiceId);

    public enum GameResult
    {
        Win,
        Lose,
        Tie
    }
}
