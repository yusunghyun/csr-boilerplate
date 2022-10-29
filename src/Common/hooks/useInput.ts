import {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from 'react';

export interface UseInputsReturn<InputObject extends Record<string, string>> {
  inputs: InputObject;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  setInputs: Dispatch<SetStateAction<InputObject>>;
  inputKeys: Record<keyof InputObject, keyof InputObject>;
}

export const useInputs = <InputObject extends Record<string, string>>(
  initialValue: InputObject,
): UseInputsReturn<InputObject> => {
  const [inputs, setInputs] = useState<InputObject>(initialValue);

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = useCallback(
    ({ currentTarget: { name, value } }) =>
      setInputs((prev) => ({ ...prev, [name]: value })),
    [],
  );

  const inputKeys = useMemo(
    () =>
      Object.fromEntries<keyof InputObject>(
        Object.keys(initialValue).map((key) => [key, key]),
      ),
    [initialValue],
  ) as Record<keyof InputObject, keyof InputObject>;

  return {
    inputs,
    handleChange,
    setInputs,
    inputKeys,
  };
};
