import React, { useRef } from "react";

interface PropTypes{
    txt : string;
    setTxt : React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({txt, setTxt} : PropTypes) => {
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleFormSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log(txt, passwordRef.current?.value)      
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTxt(e.target.value);
  }

  return (
    <>
        <form onSubmit={handleFormSubmit}>
            <div>
                <input type="text" value={txt} onChange={handleChange} placeholder = "Enter Your Name" className="border border-gray-300 rounded-md px-3 py-3 my-3 mx-3"/>
            </div>  
            <div>
                <input type="password" ref={passwordRef} placeholder = "Enter The Passowrd" className="border border-gray-300 rounded-md px-3 py-3 my-3 mx-3"/>
            </div>
            <div>
                <button type="submit" className="cursor-pointer bg-blue-400 w-24 text-white rounded-md mx-3">Submit</button>
            </div>
        </form>
    </>
  )
}

export default InputField;

