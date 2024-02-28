import { Component } from 'react';
import './app-search.css';

class SearchInput extends Component {
   constructor(props) {
      super(props)
      this.state = {
         term: ''
      }
   }

   onSearchUpdate = (e) => {
      const term = e.target.value;
      this.setState({term});
      this.props.onSearchUpdate(term);
   }

   render() {
      return (
         <input
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника" 
            value={this.state.term}
            onChange={this.onSearchUpdate}/>
      )
   }
}

export default SearchInput;