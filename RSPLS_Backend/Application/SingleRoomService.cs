using Core.Choice;
using Core.Game;
using Core.Shared;
using Microsoft.AspNetCore.Http;
using System.Text.Json;

namespace Application
{
    public class SingleRoomService
    {
        private readonly IChoiceService _choiceService;

        public SingleRoomService(IChoiceService choiceService)
        {
            _choiceService = choiceService;
        }

        public async Task<Result<GameOutcome>> GetGameResult(HttpRequest httpRequest)
        {
            Result<PlayerChoice> playerChoice = await ExtractPlayersChoice(httpRequest);

            if (playerChoice.IsFailure)
            {
                return Result<GameOutcome>.Failure(playerChoice.Error);
            }

            Result<ChoiceInformation> choiceResult = _choiceService.GetRandomChoice();

            if (choiceResult.IsFailure)
            {
                return Result<GameOutcome>.Failure(choiceResult.Error);
            }

            return Result<GameOutcome>.Success(GameFinal.DetermineWinner(playerChoice.Data.Choice, choiceResult.Data.Id));
        }

        private static async Task<Result<PlayerChoice>> ExtractPlayersChoice(HttpRequest httpRequest)
        {
            try
            {
                PlayerChoice? playerChoice = await JsonSerializer.DeserializeAsync<PlayerChoice>(httpRequest.Body, new JsonSerializerOptions
                {
                    UnmappedMemberHandling = System.Text.Json.Serialization.JsonUnmappedMemberHandling.Skip,
                    PropertyNameCaseInsensitive = true
                });

                if (playerChoice == null)
                {
                    return Result<PlayerChoice>.Failure(new Error(Core.Game.ErrorCodes.PLAYERS_CHOICE_IS_MISSING, string.Empty));
                }

                else if (!Enum.IsDefined(playerChoice.Choice))
                {
                    return Result<PlayerChoice>.Failure(new Error(Core.Game.ErrorCodes.PLAYERS_CHOICE_IS_INVALID, string.Empty));
                }

                return Result<PlayerChoice>.Success(playerChoice);
            }
            catch (Exception ex)
            {
                return Result<PlayerChoice>.Failure(new Error(Core.Game.ErrorCodes.PLAYERS_CHOICE_IS_MISSING, string.Empty));
            }
        }
    }
}
