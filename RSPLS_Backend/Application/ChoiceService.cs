using Core.Choice;
using Core.Shared;

namespace Application
{
    public class ChoiceService
    {
        public ChoiceService()
        {

        }

        public Result<string[]> GelAllAvailableChoices()
        {
            string[] choices = Enum.GetNames(typeof(Choice))
                .Select(name => name.ToLower())
                .ToArray();

            return Result<string[]>.Success(choices);
        }

        public Result<string> GetRandomChoice()
        {
            Choice? randomChoice = RandomizeChoice();

            if (randomChoice is null)
            {
                return Result<string>.Failure(Error.None);
            }

            return Result<string>.Success(randomChoice.ToString()!.ToLower());
        }

        static Choice? RandomizeChoice()
        {
            Array values = Enum.GetValues(typeof(Choice));

            Random random = new();
            return (Choice?)values.GetValue(random.Next(values.Length));
        }
    }
}
