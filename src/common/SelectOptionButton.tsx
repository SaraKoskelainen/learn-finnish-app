import { MouseEvent, useState } from 'react';


const SelectOptionButton = (props: {optionKey: string, value: string}) => {
    var res = ""
    var [result, setResult] = useState("") 

    const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (props.optionKey === "c") {
            res = "oikein!"
        } else {
            res = "väärin."
        }
            
        setResult(res)
  };

  return (  
    <div> 
        <button onClick={handleMouseEvent}>{props.value} </button>
        <p> {result} </p>
    </div>
  )
};

export default SelectOptionButton;