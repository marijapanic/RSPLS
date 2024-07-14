using Application;
using Core.Choice;
using Core.Shared;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using System.Net;

namespace Game
{
    public class Choices
    {
        private static readonly ChoiceService _choiceService = new ChoiceService();

        [Function("GetAllChoices")]
        [OpenApiOperation(operationId: "GetAllChoices")]
        [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(ChoiceInformation[]),
            Description = "The OK response message containing an array of choice objects.")]
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
        [OpenApiOperation(operationId: "GetSingleChoice")]
        [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(ChoiceInformation),
            Description = "The OK response message containing a random choice object")]
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
