import { useEffect } from 'react';
import './App.css';

function App() {
  // TODO 3: Create a state to store API response

  
  // TODO 1: Setup fetch request
  const url = "";
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  // TODO 2: Create function to fetch our data from the API
  

  // TODO 4: Fetch data from the API on load
  useEffect(() => {
    
  }, []);

  return (
    <div className="App">
      <h1>Favorite Course</h1>
      
    </div>
  );
}

export default App;
