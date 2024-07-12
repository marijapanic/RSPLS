using Core.Choice;
using Core.Shared;

namespace Application.Tests
{
    [TestFixture]
    public class ChoiceServiceTest
    {
        private const int RANDOMIZE_COUNT = 15;
        private readonly ChoiceService service;
        public ChoiceServiceTest()
        {
            service = new ChoiceService();
        }
        [Test]
        public void GelAllAvailableChoices_ReturnsAllChoicesInLowerCase()
        {
            string[] expected = GetAllChoiceValues();

            Result<string[]> result = service.GelAllAvailableChoices();

            Assert.Multiple(() =>
            {
                Assert.That(result.IsSuccess, Is.True);
                Assert.That(result.Data, Is.EqualTo(expected));
                Assert.That(result.Data.Count, Is.EqualTo(expected.Length));
            });
        }

        [Test]
        public void GetRandomChoice_ReturnsValidChoice()
        {
            string[] expected = GetAllChoiceValues();

            Result<string> result = service.GetRandomChoice();

            Assert.Multiple(() =>
            {
                Assert.That(result.IsSuccess, Is.True);
                Assert.That(expected, Does.Contain(result.Data));
            });
        }

        [Test]
        public void GetRandomChoice_MultipleCalls_ReturnsRandomChoiceFromSet()
        {
            string[] expected = GetAllChoiceValues();
            Result<string>[] results = new Result<string>[RANDOMIZE_COUNT];

            for (int i = 0; i < RANDOMIZE_COUNT; i++)
            {
                results[i] = service.GetRandomChoice();
            }

            foreach (var choiceResult in results)
            {
                Assert.Multiple(() =>
                {
                    Assert.That(choiceResult.IsSuccess, Is.True);
                    Assert.That(expected, Does.Contain(choiceResult.Data));
                });
            }
        }

        private static string[] GetAllChoiceValues()
        {
            return Enum
                .GetNames(typeof(Choice))
                .Select(name => name.ToLower())
                .ToArray();
        }
    }
}
