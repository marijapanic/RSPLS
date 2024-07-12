using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;

namespace Game
{
    public class Choices
    {
        [Function("GetAllChoices")]
        public static IActionResult GetAllChoices([HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "choices")] HttpRequest req)
        {
            return new OkResult();
        }

        [Function("GetSingleChoice")]
        public static IActionResult GetSingleChoice([HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "choice")] HttpRequest req)
        {
            return new OkResult();
        }
    }
}
