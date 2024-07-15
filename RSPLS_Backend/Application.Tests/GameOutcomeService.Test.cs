using Core.Choice.Models;
using Core.GameOutcome.Models;

namespace Application.Tests
{
    [TestFixture]
    public class GameOutcomeServiceTest
    {
        private GameOutcomeService _service;

        [SetUp]
        public void Setup()
        {
            _service = new GameOutcomeService();
        }

        [Test]
        [TestCase(Choice.Rock, Choice.Rock, GameResult.Tie, Description = "Rock vs Rock")]
        [TestCase(Choice.Paper, Choice.Paper, GameResult.Tie, Description = "Paper vs Paper")]
        [TestCase(Choice.Scissors, Choice.Scissors, GameResult.Tie, Description = "Scissors vs Scissors")]
        [TestCase(Choice.Lizard, Choice.Lizard, GameResult.Tie, Description = "Lizard vs Lizard")]
        [TestCase(Choice.Spock, Choice.Spock, GameResult.Tie, Description = "Spock vs Spock")]
        [TestCase(Choice.Rock, Choice.Scissors, GameResult.Win, Description = "Rock vs Scissors")]
        [TestCase(Choice.Rock, Choice.Lizard, GameResult.Win, Description = "Rock vs Lizard")]
        [TestCase(Choice.Paper, Choice.Rock, GameResult.Win, Description = "Paper vs Rock")]
        [TestCase(Choice.Paper, Choice.Spock, GameResult.Win, Description = "Paper vs Spock")]
        [TestCase(Choice.Scissors, Choice.Paper, GameResult.Win, Description = "Scissors vs Paper")]
        [TestCase(Choice.Scissors, Choice.Lizard, GameResult.Win, Description = "Scissors vs Lizard")]
        [TestCase(Choice.Lizard, Choice.Spock, GameResult.Win, Description = "Lizard vs Spock")]
        [TestCase(Choice.Lizard, Choice.Paper, GameResult.Win, Description = "Lizard vs Paper")]
        [TestCase(Choice.Spock, Choice.Scissors, GameResult.Win, Description = "Spock vs Scissors")]
        [TestCase(Choice.Spock, Choice.Rock, GameResult.Win, Description = "Spock vs Rock")]
        [TestCase(Choice.Scissors, Choice.Rock, GameResult.Lose, Description = "Scissors vs Rock")]
        [TestCase(Choice.Lizard, Choice.Rock, GameResult.Lose, Description = "Lizard vs Rock")]
        [TestCase(Choice.Rock, Choice.Paper, GameResult.Lose, Description = "Rock vs Paper")]
        [TestCase(Choice.Spock, Choice.Paper, GameResult.Lose, Description = "Spock vs Paper")]
        [TestCase(Choice.Paper, Choice.Scissors, GameResult.Lose, Description = "Paper vs Scissors")]
        [TestCase(Choice.Lizard, Choice.Scissors, GameResult.Lose, Description = "Lizard vs Scissors")]
        [TestCase(Choice.Spock, Choice.Lizard, GameResult.Lose, Description = "Spock vs Lizard")]
        [TestCase(Choice.Paper, Choice.Lizard, GameResult.Lose, Description = "Paper vs Lizard")]
        [TestCase(Choice.Scissors, Choice.Spock, GameResult.Lose, Description = "Scissors vs Spock")]
        [TestCase(Choice.Rock, Choice.Spock, GameResult.Lose, Description = "Rock vs Spock")]
        public void DetermineWinner_ShouldReturnExpectedOutcome(Choice userChoice, Choice computerChoice, GameResult expectedOutcome)
        {
            var result = _service.DetermineWinner(userChoice, computerChoice);

            Assert.Multiple(() =>
            {
                Assert.That(result.Results, Is.EqualTo(expectedOutcome.ToString().ToLower()));
                Assert.That(userChoice, Is.EqualTo(result.PlayerChoiceId));
                Assert.That(computerChoice, Is.EqualTo(result.ComputerChoiceId));
            });
        }
    }
}
