using Core.Shared;

namespace Core.Choice
{
    public interface IChoiceService
    {
        public Result<ChoiceInformation[]> GelAllAvailableChoices();
        public Result<ChoiceInformation> GetRandomChoice();
    }
}
