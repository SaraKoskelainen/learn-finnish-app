import {PromptsAndOptionsAllData} from '../hooks/useTaskSelectCorrectOptionQuery'
import { ShowSourceTextAndOptions } from './ShowSourceTextAndOptions'
import { Box, Heading, Text } from '@chakra-ui/react'
import {useState } from 'react'
import ButtonMoveToNext from '../../../common/ButtonMoveToNext'

export default function SelectCorrectOptionView(props: {promptsOptionsData: PromptsAndOptionsAllData}) {
    const maxIndex = 20
    const [index, setIndex] = useState(1)
    const nextIndex = index < maxIndex ? index + 1 : index // TODO: add proper handling of reaching the end of the questions loop

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
        <Box>
            <Heading as="h2" fontSize="xl">question {index}:</Heading> 
            <ShowSourceTextAndOptions objKey={index.toString()} promptAndOptions={item} isAnswerSelected={isAnswerSelected} updateAnswerState={updateAnswerState}/>
            <Text p={2}> {result} </Text> 

            <ButtonMoveToNext isAnswerSelected={isAnswerSelected} updateIndex={updateIndex} nextIndex={nextIndex} updateAnswerState={updateAnswerState}></ButtonMoveToNext>
        </Box>
    )
}