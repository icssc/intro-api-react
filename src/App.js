import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // TODO 3: Create a state to store API response
  const [course, setCourse] = useState();
  
  // TODO 1: Setup fetch request
  const url = "https://api.peterportal.org/rest/v0/courses/";
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  // TODO 2: Create function to fetch our data from the API
  function loadCourse(course) {
    fetch(url+course, options)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setCourse(result);
      })
  }

  // TODO 4: Fetch data from the API on load
  useEffect(() => {
    loadCourse("PHYSICS20B"); 
  }, []);

  return (
    <div className="App">
      <h1>Favorite Course</h1>
      {
        course && (
          <div>
            <p>My favorite course is {course.id}: {course.title}</p>
            <p>{course.description}</p>
          </div>
        )
      }
    </div>
  );
}

export default App;
