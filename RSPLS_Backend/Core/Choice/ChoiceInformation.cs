using System.Text.Json.Serialization;

namespace Core.Choice
{
    public record ChoiceInformation([property: JsonPropertyName("id")] int Id, [property: JsonPropertyName("name")] string Name);
}
