import React from 'react';

const SortList = ({ list }) => (
  <div className="sortList">
    {list.map(n => <div className="sortItem">{n}</div>)}
  </div>
);

export default SortList;
