import React from 'react';
import axios from 'axios';

function App() {
  const test = async () => {
    const a = await axios.get('http://localhost:8080/api/posts');
    console.log(a.data);
  };
  test();
  return <p>홈</p>;
}

export default App;
