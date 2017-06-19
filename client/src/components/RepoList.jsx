import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';
import _ from 'underscore';

const RepoList = ({repos}) => (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    <ul>
    {

      repos.map(function(repo) {
          // console.log('repo: ', repo[0], repo[1]);        
          return <RepoListEntry name={repo[0]} url={repo[1]}/>
      })
    }
    </ul>
  </div>
)

export default RepoList;