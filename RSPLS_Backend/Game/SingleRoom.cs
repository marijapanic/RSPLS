using Application;
using Core.Choice;
using Core.Game;
using Core.Shared;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;

namespace Game
{
    public class SingleRoom
    {
        private static readonly IChoiceService choiceService = new ChoiceService();
        private static readonly SingleRoomService service = new(choiceService);
        [Function("SingleRoomPlay")]
        public static async Task<IActionResult> StartPlay([HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "play")] HttpRequest req)
        {
            Result<GameOutcome> result = await service.GetGameResult(req);

            if (result.IsFailure)
            {
                return new BadRequestResult();
            }
            return new OkResult();
        }
    }
}
