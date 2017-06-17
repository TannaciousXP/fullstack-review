import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      
      <div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.terms}
      //  use bind(this) for on Change
      // use bind(this) for onClick as well 
      onChange={this.onChange.bind(this)}/>       
      <button onClick={this.search.bind(this)}> Add Repos </button>
    </div>) 
  }
}

export default Search;