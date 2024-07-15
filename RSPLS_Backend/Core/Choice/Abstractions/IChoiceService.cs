using Core.Choice.Models;
using Core.Shared;

namespace Core.Choice.Abstractions
{
    public interface IChoiceService
    {
        public Result<ChoiceInformation[]> GelAllAvailableChoices();
        public Result<ChoiceInformation> GetRandomChoice();
    }
}
