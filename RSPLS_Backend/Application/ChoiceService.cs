using Core.Choice;
using Core.Choice.Abstractions;
using Core.Choice.Models;
using Core.Shared;

namespace Application
{
    public class ChoiceService : IChoiceService
    {
        public ChoiceService()
        {

        }

        public Result<ChoiceInformation[]> GelAllAvailableChoices()
        {
            ChoiceInformation[] choices = Enum.GetValues(typeof(Choice))
                .Cast<Choice>()
                .Select(choice => new ChoiceInformation(choice, choice.ToString().ToLower()))
                .ToArray();

            return Result<ChoiceInformation[]>.Success(choices);
        }

        public Result<ChoiceInformation> GetRandomChoice()
        {
            Choice? randomChoice = RandomizeChoice();

            if (randomChoice is null)
            {
                return Result<ChoiceInformation>.Failure(new Error(ErrorCodes.CHOICES_ARE_NOT_AVAILABLE, string.Empty));
            }

            return Result<ChoiceInformation>.Success(new ChoiceInformation(randomChoice.Value, randomChoice.ToString()!.ToLower()));
        }

        static Choice? RandomizeChoice()
        {
            Array values = Enum.GetValues(typeof(Choice));

            Random random = new();
            return (Choice?)values.GetValue(random.Next(values.Length));
        }
    }
}
