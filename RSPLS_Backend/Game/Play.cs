using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;

namespace Game
{
    public class Play
    {
        [Function("Play")]
        public static IActionResult StartPlay([HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "play")] HttpRequest req)
        {
            return new OkResult();
        }
    }
}
