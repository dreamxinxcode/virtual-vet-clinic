import React, { useState } from 'react';

export default function SearchButton () {
  const [loading, setLoading] = useState(false);
  
  return (
    <button className={loading ? 'loading ui purple button' : 'ui purple button'} onClick={() => setLoading(!loading) }>
      <i className="icon search"></i>
      Search
    </button>
  )
};