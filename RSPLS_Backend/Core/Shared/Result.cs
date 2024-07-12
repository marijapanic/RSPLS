namespace Core.Shared
{
    public class Result
    {
        protected Result(bool isSuccess, Error error)
        {
            if (isSuccess && error != Error.None ||
                !isSuccess && error == Error.None)
            {
                throw new ArgumentException("Invalid error", nameof(error));
            }

            IsSuccess = isSuccess;
            Error = error;
        }

        public bool IsSuccess { get; }

        public bool IsFailure => !IsSuccess;

        public Error Error { get; }

        public static Result Success() => new(true, Error.None);

        public static Result Failure(Error error) => new(false, error);
    }

    public class Result<T> : Result
    {
        private readonly T _data;

        private Result(T data, bool isSuccess, Error error) : base(isSuccess, error)
        {
            _data = data;
        }

        public T Data
        {
            get
            {
                if (!IsSuccess)
                {
                    throw new InvalidOperationException("Cannot access data for a failed result.");
                }
                return _data;
            }
        }

        public static Result<T> Success(T data) => new Result<T>(data, true, Error.None);

        public static Result<T> Failure(Error error) => new Result<T>(default(T), false, error);
    }

    public sealed record Error(string Code, string Description)
    {
        public static readonly Error None = new(string.Empty, string.Empty);
    }
}
