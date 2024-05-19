import {PromptsAndOptionsAllData} from '../hooks/useTaskSelectCorrectOptionQuery'
import { ShowSourceTextAndOptions } from './ShowSourceTextAndOptions'
import { Box, Heading } from '@chakra-ui/react'

export default function SelectCorrectOptionView(props: {promptsOptionsData: PromptsAndOptionsAllData}) {
    
    return (
        <Box>
            {Object.entries(props.promptsOptionsData).map(([index, item]) => (   
                <Box key={index}>  
                    <Heading as="h2" fontSize="xl">question {index}:</Heading> 
                    <ShowSourceTextAndOptions objKey={index} promptAndOptions={item}/>
                </Box>
            ))}
        </Box>
    )
}