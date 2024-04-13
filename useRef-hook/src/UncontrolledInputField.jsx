import  { useRef } from 'react';

const UncontrolledInputField = () => {
  const inputRef = useRef(null);

  const handleInputChange = () => {
    console.log(inputRef.current.value); 
  }
  
  return <input ref={inputRef} onChange={handleInputChange} />;
};

export default UncontrolledInputField;
