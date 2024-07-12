using Core.Choice;
using Core.Shared;

namespace Application.Tests
{
    [TestFixture]
    public class ChoiceServiceTest
    {
        private readonly ChoiceService service;
        public ChoiceServiceTest()
        {
            service = new ChoiceService();
        }
        [Test]
        public void GelAllAvailableChoices_ReturnsAllChoicesInLowerCase()
        {
            string[] expected = Enum
                .GetNames(typeof(Choice))
                .Select(name => name.ToLower())
                .ToArray();

            Result<string[]> result = service.GelAllAvailableChoices();

            Assert.Multiple(() =>
            {
                Assert.That(result.IsSuccess, Is.True);
                Assert.That(result.Data, Is.EqualTo(expected));
                Assert.That(result.Data.Count, Is.EqualTo(expected.Length));
            });
        }
    }
}
