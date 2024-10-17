
import './App.css';
import { useState } from 'react';


function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [chips, setChips] = useState(undefined)
  const [specialRequest, setSpecialRequest] = useState("")
  const [terms, setTerms] = useState(false)

  const onSubmit = () => {
    if(name && email && chips && terms){
      alert(`Order name: ${name}! The email is: ${email}! Chips: ${chips}! ${specialRequest ? `Special request: ${specialRequest}!` : ""}`)
    }else{
      alert("required fields are empty!")
    }
  }
  return (
    <div className="App">
      <div id="wrapperForm">
        <div className="containerLabelAndInput">
          <label >*Name: </label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        </div>
        <div className='containerLabelAndInput'>
          <label>*Email: </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
        </div>
        <div>
          *
          <select value={chips} onChange={(e) => setChips(e.target.value)}>
            <option value={undefined}>--Do you want to order chips?--</option>
            <option value={"No"}>No</option>
            <option value={"Regular"}>Regular</option>
            <option value={"Large"}>Large</option>
          </select>
        </div>  
        <div className='containerLabelAndInput'>
          <label>Special requests: </label>
          <textarea value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)}></textarea>
        </div>
        <div>
          <input className='termsCheckBox' value={terms} onChange={(e) => setTerms(e.target.value)}type="checkbox" />
          <label>I have read and agreed to the terms and conditions</label>
        </div>
        <div className='containerSubmit'>
          <button className='submitButton' onClick={onSubmit}>Make an order!</button>
        </div>
        </div>
    </div>
  );
}

export default App;
