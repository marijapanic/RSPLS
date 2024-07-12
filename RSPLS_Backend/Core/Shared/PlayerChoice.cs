using System.Text.Json.Serialization;

namespace Core.Shared
{
    public record PlayerChoice([property: JsonPropertyName("player")] Choice.Choice Choice);
}
