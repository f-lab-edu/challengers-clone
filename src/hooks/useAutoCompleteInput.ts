import { ChangeEventHandler, useState } from "react";

type UseAutoCompleteInputProps = {
  onChange: (value: string) => void;
}

export default function useAutoCompleteInput({ onChange }: UseAutoCompleteInputProps) {
  const [value, setValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setValue(value)
    onChange(value);
  }

  return {
    value,
    isOpen,
    setIsOpen,
    handleChangeInput
  }
}
