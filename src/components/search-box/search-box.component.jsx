import "./search-box.styles.css";

const SearchBox = ({type, className, placeholder, onSearchChangeHandler}) => (
    <input 
      type={type}
      className={className} 
      placeholder={placeholder}
      onChange={onSearchChangeHandler}
    />
);

export default SearchBox;