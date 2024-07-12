using Application;
using Core.Choice;
using Core.Shared;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;

namespace Game
{
    public class Choices
    {
        private static readonly ChoiceService _choiceService = new ChoiceService();
        [Function("GetAllChoices")]
        public static IActionResult GetAllChoices([HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "choices")] HttpRequest req)
        {
            Result<ChoiceInformation[]> choicesResult = _choiceService.GelAllAvailableChoices();

            // TODO logging
            if (choicesResult.IsFailure)
            {
                return new BadRequestResult();
            }

            return new OkObjectResult(choicesResult.Data);
        }

        [Function("GetSingleChoice")]
        public static IActionResult GetSingleChoice([HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "choice")] HttpRequest req)
        {
            Result<ChoiceInformation> choicesResult = _choiceService.GetRandomChoice();

            // TODO logging
            if (choicesResult.IsFailure)
            {
                return new BadRequestResult();
            }

            return new OkObjectResult(choicesResult.Data);
        }
    }
}
