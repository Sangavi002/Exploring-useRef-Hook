import './App.css'
import FocusableInputField from './FocusableInputField.jsx';
import UncontrolledInputField from './UncontrolledInputField.jsx';
import ChangeColor from './ChangeColor.jsx'

function App() {
 

  return (
    <>
    <h3>Focusable Input Field</h3>
    <FocusableInputField />
    <h3>Uncontrolled Input Field</h3>
    <UncontrolledInputField />
    <h3>Background Colour</h3>
    <ChangeColor />

    </>
  )
}

export default App
