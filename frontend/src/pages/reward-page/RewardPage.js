import React, { useState, useEffect } from 'react';
import Cards from "../../components/Cards/cards"

const App = () => {
  const [count, setCount] = useState([]); 

  useEffect(() => {
    const freq = []; 
    for (let i = 0; i < 10; i++) freq.push(i);
    setCount(freq); 
    console.log(freq);
  }, []); 

  return (
    <div className='d-flex justify-content-center align-items-center flex-wrap'>
      {count.length > 0 ? (
        count.map((item,i) => (
          <Cards key={i} />
        ))
      ) : (
        <p>hiiiiiii</p> 
      )}
    </div>
  );
};

export default App;
