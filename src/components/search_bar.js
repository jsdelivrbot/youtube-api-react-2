// import React from 'react';
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

// const SearchBar = () => {
//   return <input />;
// };

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term : ''};
  }
  render() {
    return (
      <div className="search-bar">
        <input
           value={this.state.term}
           onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchtermChange(term);
  }

}

export default SearchBar;
