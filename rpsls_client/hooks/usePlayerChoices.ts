import { getPlayerChoices } from '@/agent/agent';
import { ChoiceState } from '@/models/choiceState';
import { useState, useEffect } from 'react';

export const usePlayerChoices = () => {
  const [choices, setChoices] = useState<ChoiceState[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchChoices = async () => {
      try {
        const data = await getPlayerChoices();
          setChoices(data);
      } catch (err) {
          setError(err as Error);
      }
      finally
      {
        setIsLoading(false);
      }
    };

    fetchChoices();
  }, []);

  return { choices, error, isLoading };
};