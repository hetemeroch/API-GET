import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState()
  const [error, setError] = useState()
  useEffect(() => {
    function fetchData() {
      fetch("https://hn.algolia.com/api/v1/search?query=redux")
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err => setError(err));
    }
    fetchData()
  }, []);

  return (
    <div className="App">
      {console.log(data)}

      {data.hits.map(item =>
        <p>{item.title}</p>
      )}
    </div>
  );
}

export default App;
