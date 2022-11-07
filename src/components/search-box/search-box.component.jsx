import { Component } from "react";

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