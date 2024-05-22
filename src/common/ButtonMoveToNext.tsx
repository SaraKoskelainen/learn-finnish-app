import { MouseEvent } from 'react';
import { Button } from "@chakra-ui/react"

export default function ButtonMoveToNext(props: { 
            isAnswerSelected: boolean, 
            updateIndex: (index:number) => void, 
            nextIndex: number, 
            updateAnswerState: (state:boolean, result:string) => void
        }) {

    const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.updateIndex(props.nextIndex) 
        props.updateAnswerState(false, "")
    }
 
    return (
        <Button isDisabled={!props.isAnswerSelected} onClick={handleMouseEvent} p={2} m={4} > 
            Seuraava
        </ Button>
    )
}