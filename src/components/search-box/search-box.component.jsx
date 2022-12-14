import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
    render() {
        const {type, className, placeholder, onSearchChangeHandler} = this.props;
        return (
        <input 
          type={type}
          className={className} 
          placeholder={placeholder}
          onChange={onSearchChangeHandler}
        />
        )
    }
};

export default SearchBox;