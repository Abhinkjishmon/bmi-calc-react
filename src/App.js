import { useState } from 'react';
import './App.css';
import BmiList from './Components/BmiList';
import BmiScore from './Components/BmiScore';
import Form from './Components/Form';

function App() {

  const [bmi,setbmi] = useState("")
  const [bmiType,setbmiType] = useState("")
  return (
    <div>
      <Form />
      <BmiScore bmiNo={bmi} bmiName={bmiType}/>
      <BmiList />
    </div>
  );
}

export default App;
