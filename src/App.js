import { useState } from 'react';
import './App.css';
import BmiList from './Components/BmiList';
import BmiScore from './Components/BmiScore';
import Form from './Components/Form';

function App() {

  const [bmi, setbmi] = useState("")
  const [bmiType, setbmiType] = useState("")
  return (
    <>
      <div className='container'>
        <div className="row justify-content-center mt-5 mx-2">
          <Form />
        </div>
        <BmiScore bmiNo={bmi} bmiName={bmiType} />
        <BmiList />
      </div>

    </>
  );
}

export default App;
