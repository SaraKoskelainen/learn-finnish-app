import { MouseEvent } from 'react';
import * as answers from '../../data/basics_answers.json'
import { Box, Button } from '@chakra-ui/react';

export interface SelectOptionAnswers {
    [key: string]: string
}

const allAnswers: SelectOptionAnswers = answers.answers // todo: check if can simplify data

const SelectOptionButton = (props: {
    objKey: string, 
    valueKey:string, 
    option: string, 
    isAnswerSelected:boolean, 
    updateAnswerState: (state:boolean, isCorrectAnswer: null | boolean) => void
}) => {
    var isCorrectAnswer: null | boolean = null 
    const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // answer is correct when the key of the selected option 
        // matches with the respective value in the answers data 
        if (props.valueKey === allAnswers[props.objKey]) {
            isCorrectAnswer = true
        } else {
            isCorrectAnswer = false
        }
            
    props.updateAnswerState(true, isCorrectAnswer)
  };

  return (  
    <Box p={2}> 
        <Button 
        isDisabled={props.isAnswerSelected} 
        onClick={handleMouseEvent} 
        bg='brand.base-light'>{props.option} 
    </Button>        
    </Box>
  )
};

export default SelectOptionButton;