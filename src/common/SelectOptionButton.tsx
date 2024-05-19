import { MouseEvent, useState } from 'react';
import * as answers from '../../data/basics_answers.json'

export interface SelectOptionAnswers {
    [key: string]: string
}

const allAnswers: SelectOptionAnswers = answers.answers // todo: check if can simplify data

const SelectOptionButton = (props: {objKey: string, valueKey:string, option: string}) => {
    var res = ""
    var [result, setResult] = useState("") 

    const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // answer is correct when the key of the selected option 
        // matches with the respective value in the answers data 
        if (props.valueKey === allAnswers[props.objKey]) {
            res = "oikein!"
        } else {
            res = "väärin."
        }
            
        setResult(res)
  };

  return (  
    <div> 
        <button onClick={handleMouseEvent}>{props.option} </button>
        <p> {result} </p>
    </div>
  )
};

export default SelectOptionButton;