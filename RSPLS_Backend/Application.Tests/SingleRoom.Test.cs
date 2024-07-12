using Core.Choice;
using Core.Game;
using Core.Shared;
using Microsoft.AspNetCore.Http;
using Moq;
using System.Text.Json;

namespace Application.Tests
{
    public class SingleRoomTest
    {
        private readonly Mock<HttpRequest> mockHttpRequest = new();
        private static readonly Mock<IChoiceService> mockChoiceService = new Mock<IChoiceService>();
        private readonly SingleRoomService singleRoomService = new SingleRoomService(mockChoiceService.Object);
        private static readonly string ERROR_CODE = "ERROR";
        private static readonly string ERROR_DESCRIPTION = "DESCRIPTION";

        [Test]
        public async Task GetGameResult_ShouldReturnError_WhenPlayersChoiceIsInvalid()
        {
            mockHttpRequest
                .Setup(x => x.Body).Returns(() => null);

            Result<GameOutcome> result = await singleRoomService.GetGameResult(mockHttpRequest.Object);

            Assert.Multiple(() =>
            {
                Assert.That(result.IsFailure, Is.True);
                Assert.That(result.Error.Code, Is.EqualTo(Core.Game.ErrorCodes.PLAYERS_CHOICE_IS_MISSING));
            });
        }

        [Test]
        public async Task GetGameResult_ShouldReturnError_WhenPlayersChoiceContainsInvalidValue()
        {
            mockHttpRequest
                .Setup(x => x.Body).Returns(new MemoryStream(System.Text.Encoding.UTF8.GetBytes("{\"player\": 7}")));

            Result<GameOutcome> result = await singleRoomService.GetGameResult(mockHttpRequest.Object);

            Assert.Multiple(() =>
            {
                Assert.That(result.IsFailure, Is.True);
                Assert.That(result.Error.Code, Is.EqualTo(Core.Game.ErrorCodes.PLAYERS_CHOICE_IS_INVALID));
            });
        }

        [Test]
        public async Task GetGameResult_ShouldReturnError_WhenCannotRandomizeComputersChoice()
        {
            Choice playersChoice = Choice.Spock;
            mockHttpRequest
                .Setup(x => x.Body).Returns(new MemoryStream(System.Text.Encoding.UTF8.GetBytes(JsonSerializer.Serialize(new PlayerChoice(playersChoice)))));
            mockChoiceService.Setup(x => x.GetRandomChoice()).Returns(Result<ChoiceInformation>.Failure(new Error(ERROR_CODE, ERROR_DESCRIPTION)));
            Result<GameOutcome> result = await singleRoomService.GetGameResult(mockHttpRequest.Object);

            Assert.Multiple(() =>
            {
                Assert.That(result.IsFailure, Is.True);
                Assert.That(result.Error.Code, Is.EqualTo(ERROR_CODE));
                Assert.That(result.Error.Description, Is.EqualTo(ERROR_DESCRIPTION));
            });
        }

        [Test]
        public async Task GetGameResult_ShouldReturnSuccess_WhenValidationPasses()
        {
            Choice playersChoice = Choice.Spock;
            mockHttpRequest
                .Setup(x => x.Body).Returns(new MemoryStream(System.Text.Encoding.UTF8.GetBytes(JsonSerializer.Serialize(new PlayerChoice(playersChoice)))));
            ChoiceInformation computersChoice = new ChoiceInformation(Choice.Spock, "spock");
            mockChoiceService.Setup(x => x.GetRandomChoice()).Returns(Result<ChoiceInformation>.Success(computersChoice));
            Result<GameOutcome> result = await singleRoomService.GetGameResult(mockHttpRequest.Object);

            Assert.Multiple(() =>
            {
                Assert.That(result.IsSuccess, Is.True);
                Assert.That(result.Data, Is.EqualTo(new GameOutcome(GameResult.Tie, playersChoice, computersChoice.Id)));
            });
        }
    }
}
