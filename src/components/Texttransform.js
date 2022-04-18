import React,{useState} from 'react'

export default function Texttransform(props) {
    const [text, settext] = useState("this is first");

    const buttonupevent = (event) => {
        console.log("changed");
        settext (event.target.value);
    }

    const buttonclick = () => {
        console.log("Button click");
        let newtext = text.toUpperCase();
        settext(newtext); 
    }

    const buttonlowercase = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
    }
  return (
      <>
    <div className='container my-3'>
        <div className="form-group">
            <h1>{props.headingtext}</h1>
            <textarea className="form-control" value={text} id="exampleFormControlTextarea1" onChange={buttonupevent} rows="3"></textarea>
            <button className="btn btn-primary mx-1" onClick={buttonclick}>Upper case</button>
            <button className="btn btn-primary mx-1" onClick={buttonlowercase}>Lower Case</button>
        </div>
    </div>
    <div className="container my-3">
        <p>
            {text.length} character {text.split(" ").length} word
        </p>
    </div>
    </>
  )
}
