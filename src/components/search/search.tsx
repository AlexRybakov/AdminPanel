import { ReactComponent as SearchIcon } from "./assets/ic-search.svg";
import { ChangeEvent, FormEvent } from 'react';

interface ISearchProps {
  onFormSubmit: (e: FormEvent<HTMLFormElement>) => void,
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const Search = ({ onFormSubmit, onInputChange }: ISearchProps) => {
  return (
    <form className="search" onSubmit={onFormSubmit} style={{marginBottom: '20px'}}>
      <input
        style={{width: '400px'}}
        type="text"
        className="search__input"
        onChange={onInputChange}
        placeholder="Поиск..."
      />
      <button className="search__btn">
        <SearchIcon />
      </button>
    </form>
  );
};
