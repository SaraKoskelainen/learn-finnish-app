import { MouseEvent, useState } from 'react';
import * as answers from '../../data/basics_answers.json'
import { Box, Button, Text } from '@chakra-ui/react';

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
    <Box p={2}> 
        <Button onClick={handleMouseEvent} bg='brand.base-light'>{props.option} </Button>
        <Text p={2}> {result} </Text>
    </Box>
  )
};

export default SelectOptionButton;