using Application;
using Core.Choice.Abstractions;
using Core.SingleRoom.Models;
using Core.Shared;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using System.Net;
using Core.GameOutcome.Models;
using Core.GameOutcome.Abstractions;

namespace Game
{
    public class SingleRoom
    {
        private static readonly IChoiceService choiceService = new ChoiceService();
        private static readonly IGameOutcomeService gameOutcomeService = new GameOutcomeService();
        private static readonly SingleRoomService service = new(choiceService, gameOutcomeService);

        [Function("SingleRoomPlay")]
        [OpenApiOperation(operationId: "SingleRoomPlay", Summary = "Play a game")]
        [OpenApiRequestBody("application/json", typeof(PlayerChoice),
            Description = "JSON request body containing { hours, capacity}")]
        [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(GameOutcome),
            Description = "The OK response message containing an object with game outcome.")]
        public static async Task<IActionResult> StartPlay([HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "play")] HttpRequest req)
        {
            Result<GameOutcome> result = await service.GetGameResult(req);

            if (result.IsFailure)
            {
                return new BadRequestResult();
            }
            return new OkObjectResult(result.Data);
        }
    }
}
