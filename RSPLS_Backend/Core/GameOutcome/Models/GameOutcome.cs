using System.Text.Json.Serialization;

namespace Core.GameOutcome.Models
{
    public record GameOutcome(
        [property: JsonPropertyName("results")] string Results,
        [property: JsonPropertyName("player")] Choice.Models.Choice PlayerChoiceId,
        [property: JsonPropertyName("computer")] Choice.Models.Choice ComputerChoiceId);
}
