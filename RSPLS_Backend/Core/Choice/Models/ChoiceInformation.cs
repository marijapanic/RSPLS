using System.Text.Json.Serialization;

namespace Core.Choice.Models
{
    public record ChoiceInformation([property: JsonPropertyName("id")] Choice Id, [property: JsonPropertyName("name")] string Name);
}
