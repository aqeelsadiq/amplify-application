import React, { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState('');

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setTime(data.serverTime));
  }, []);

  return <h1>Hello world  {time}</h1>;
}

export default App;
