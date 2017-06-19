import React from 'react';

const RepoListEntry = ({name, url}) => (
  // <div>
  //   <h4> Repo List Component </h4>
  //   There are {repos.length} repos.

  <li>
    <a href={url}>{name}</a>
  </li>

)

export default RepoListEntry;