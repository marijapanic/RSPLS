using Core.Choice;
using Core.Shared;

namespace Application
{
    public class ChoiceService
    {
        public ChoiceService()
        {

        }

        public Result<ChoiceInformation[]> GelAllAvailableChoices()
        {
            ChoiceInformation[] choices = Enum.GetValues(typeof(Choice))
                .Cast<Choice>()
                .Select(choice => new ChoiceInformation((int)choice, choice.ToString().ToLower()))
                .ToArray();

            return Result<ChoiceInformation[]>.Success(choices);
        }

        public Result<ChoiceInformation> GetRandomChoice()
        {
            Choice? randomChoice = RandomizeChoice();

            if (randomChoice is null)
            {
                return Result<ChoiceInformation>.Failure(Error.None);
            }

            return Result<ChoiceInformation>.Success(new ChoiceInformation((int)randomChoice, randomChoice.ToString()!.ToLower()));
        }

        static Choice? RandomizeChoice()
        {
            Array values = Enum.GetValues(typeof(Choice));

            Random random = new();
            return (Choice?)values.GetValue(random.Next(values.Length));
        }
    }
}
