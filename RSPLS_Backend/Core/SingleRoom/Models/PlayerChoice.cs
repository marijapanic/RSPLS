using System.Text.Json.Serialization;

namespace Core.SingleRoom.Models
{
    public record PlayerChoice([property: JsonPropertyName("player")] Choice.Models.Choice Choice);
}
