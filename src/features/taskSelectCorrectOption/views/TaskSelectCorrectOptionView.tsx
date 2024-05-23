import {PromptsAndOptionsAllData} from '../hooks/useTaskSelectCorrectOptionQuery'
import { ShowSourceTextAndOptions } from './ShowSourceTextAndOptions'
import { Box, Heading, Text } from '@chakra-ui/react'
import {useState } from 'react'
import ButtonMoveToNext from '../../../common/ButtonMoveToNext'
import Feedback  from '../../../common/Feedback'

export const MAX_INDEX = 10

export default function SelectCorrectOptionView(props: {promptsOptionsData: PromptsAndOptionsAllData}) {
    const [index, setIndex] = useState(1)
    const nextIndex = index <= MAX_INDEX ? index + 1 : index // TODO: add proper handling of reaching the end of the questions loop

    const updateIndex = (index:number) => {
        setIndex(index)
    }
    const item = props.promptsOptionsData[index]

    const [isAnswerSelected, setIsAnswerSelected] = useState(false)
    var [isCorrectAnswer, setIsCorrectAnswer] = useState<null|boolean>(null) // <null|boolean> is neede to avoid "Argument of type 'boolean | null' is not assignable to parameter of type 'SetStateAction<null>'." 
    var [points, setPoints] = useState(0)

    const updateAnswerState = (state:boolean, isCorrectAnswer: null | boolean) => {
        setIsAnswerSelected(state)
        setIsCorrectAnswer(isCorrectAnswer)

        if(isCorrectAnswer) {
            setPoints(points + 1)
        }
    }

    return (
        <>
            { index <= MAX_INDEX && 
            <Box>
                <Heading as="h2" fontSize="xl">question {index}:</Heading> 
                <ShowSourceTextAndOptions 
                    objKey={index.toString()} 
                    promptAndOptions={item} 
                    isAnswerSelected={isAnswerSelected} 
                    updateAnswerState={updateAnswerState}
                />
                <Text p={2}> {isCorrectAnswer != null ? isCorrectAnswer ? "oikein!" : "väärin." : ""} </Text> 
                <ButtonMoveToNext 
                    isAnswerSelected={isAnswerSelected} 
                    updateIndex={updateIndex} 
                    nextIndex={nextIndex} 
                    updateAnswerState={updateAnswerState}>
                </ButtonMoveToNext>
            </Box>
            }

            { index > MAX_INDEX && <Feedback points={points}/> }
        </>
    )
}