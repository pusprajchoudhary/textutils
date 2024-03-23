import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
      //  console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("convert to uppercase", "success");
    }

    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("convert to Lowercase", "success");
    }

    const handleClearClick=()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text clear", "success");
    }

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }

    const handleCopy=()=>{
      var text = document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
}


    const handleOnChange =(event)=>{
      //  console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
   // text ="newtext"; //wrong way to change the state
   // setText("newtwxt"); //correct way to cange the state
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}{setText}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>clear text</button>
      <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>copy text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>remove extra spaces</button>
      
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length}words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
