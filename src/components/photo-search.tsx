import { useCallback, useState, type ChangeEvent } from "react";
import SearchIcon from '../assets/icons/search.svg?react';
import { debounce } from "../helpers/utils";
import InputText from "./input-text";

export default function PhotoSearch() {
  const [inputValue, setInputValue] = useState('');

  const debouncedSetValue = useCallback(
    debounce((value: string) => console.log(value), 200)
    , [])

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    setInputValue(value);
    debouncedSetValue(value);
  }

  return (
    <InputText
      value={inputValue}
      icon={SearchIcon}
      placeholder="Buscar fotos"
      onChange={handleInputChange}
      className="flex-1"
    />
  )
}