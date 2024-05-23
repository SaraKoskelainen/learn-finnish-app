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
    var [result, setResult] = useState("") 

    const updateAnswerState = (state:boolean, result: string) => {
        setIsAnswerSelected(state)
        setResult(result)

    }

    return (
        <>
            { index <= MAX_INDEX && 
            <Box>
                <Heading as="h2" fontSize="xl">question {index}:</Heading> 
                <ShowSourceTextAndOptions objKey={index.toString()} promptAndOptions={item} isAnswerSelected={isAnswerSelected} updateAnswerState={updateAnswerState}/>
                <Text p={2}> {result} </Text> 
                <ButtonMoveToNext 
                    isAnswerSelected={isAnswerSelected} 
                    updateIndex={updateIndex} 
                    nextIndex={nextIndex} 
                    updateAnswerState={updateAnswerState}>
                </ButtonMoveToNext>
            </Box>
            }

            { index > MAX_INDEX && <Feedback/> }
        </>
    )
}