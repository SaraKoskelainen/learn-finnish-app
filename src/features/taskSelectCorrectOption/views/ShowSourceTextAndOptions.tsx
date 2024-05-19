import SelectOptionButton from '../../../common/SelectOptionButton'
import {PromptAndOptionsData} from '../hooks/useTaskSelectCorrectOptionQuery'
import { Box, Text} from '@chakra-ui/react'

export function ShowSourceTextAndOptions(props: {objKey: string, promptAndOptions: PromptAndOptionsData}) {
    return (
        <Box>
            <Text fontWeight="bold" p={2}> {props.promptAndOptions.text_to_translate} </Text>
            {Object.entries(props.promptAndOptions.options).map(([key, value]) => (
              <Box key={key}>
                <SelectOptionButton objKey={props.objKey} valueKey={key} option={value} />
                </Box>
            ))}
        </Box>
    )
}
