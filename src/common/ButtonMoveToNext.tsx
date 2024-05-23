import { MouseEvent } from 'react';
import { Button } from "@chakra-ui/react"
import { MAX_INDEX } from '../features/taskSelectCorrectOption/views/TaskSelectCorrectOptionView';

export default function ButtonMoveToNext(props: { 
            isAnswerSelected: boolean, 
            updateIndex: (index:number) => void, 
            nextIndex: number, 
            updateAnswerState: (state:boolean, isCorrectAnswer: null | boolean) => void
        }) {

    const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.updateIndex(props.nextIndex) 
        props.updateAnswerState(false, null) // reset answer selection & result
    }
 
    return (
        <Button isDisabled={!props.isAnswerSelected} onClick={handleMouseEvent} p={2} m={4} > 
            {props.nextIndex <= MAX_INDEX ? "Seuraava" : "Valmis"}
        </ Button>
    )
}