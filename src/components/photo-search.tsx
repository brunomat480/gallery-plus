import { useCallback, useState, type ChangeEvent } from "react";
import SearchIcon from '../assets/icons/search.svg?react';
import usePhotos from "../contexts/photos/hooks/use-photos";
import { debounce } from "../helpers/utils";
import InputText from "./input-text";

export default function PhotoSearch() {
  const [inputValue, setInputValue] = useState('');
  const { filters } = usePhotos();

  const debouncedSetValue = useCallback(
    debounce((value: string) => {
      filters.setQ(value)
    }, 200)
    , [filters.setQ])

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