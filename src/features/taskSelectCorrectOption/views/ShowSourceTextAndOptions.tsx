import SelectOptionButton from '../../../common/SelectOptionButton'
import {PromptAndOptionsData} from '../hooks/useTaskSelectCorrectOptionQuery'
import { Box, Text} from '@chakra-ui/react'

export function ShowSourceTextAndOptions(props: {
    objKey: string, 
    promptAndOptions: PromptAndOptionsData, 
    isAnswerSelected: boolean, 
    updateAnswerState: (state: boolean, isCorrectAnswer: null | boolean) => void
}) {
    return (
        <Box margin={4}>
            <Text fontWeight="bold" p={2}> {props.promptAndOptions.text_to_translate} </Text>
            {Object.entries(props.promptAndOptions.options).map(([key, value]) => (
              <Box key={key}>
                <SelectOptionButton objKey={props.objKey} valueKey={key} option={value} isAnswerSelected={props.isAnswerSelected} updateAnswerState={props.updateAnswerState}/>
                </Box>
            ))}
        </Box>
    )
}
