import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import RepoListEntry from './components/RepoListEntry.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  getRepo (term) {
    // take the term and search for the user int he database
    $.ajax({
      url: '/repos',
      method: 'GET',
      data: {term: term},
      success: (repos) => {
        console.log('SUCCESS IN GET!: ', repos);
        this.setState({repos: repos});
      },
      error: (err) => {
        console.log('There is an error');
      }
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    // make an ajax request with the proper setting
    $.ajax({
      
      url: '/repos/import',
      method: 'POST',
      data: {term: term},
      datatype: 'JSON',
      success: (data) => {
        console.log('SEARCH INSDE SEARCH INDEX.JSX:');
        this.getRepo(term);
      },
      error: (err) => {
        console.log(err.message);
      }
    });

  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));