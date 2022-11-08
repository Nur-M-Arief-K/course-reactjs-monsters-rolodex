import { ChangeEvent } from "react";

import "./search-box.styles.css";

type SearchBoxProps = { 
  type: string; 
  className: string; 
  placeholder: string;
  onSearchChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void //as the same as ChangeEventHandler 
};

const SearchBox = ({type, className, placeholder, onSearchChangeHandler}: SearchBoxProps) => (
    <input 
      type={type}
      className={className} 
      placeholder={placeholder}
      onChange={onSearchChangeHandler}
    />
);

export default SearchBox;