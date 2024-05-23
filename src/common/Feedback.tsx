import { Box, Text } from "@chakra-ui/react"
import { MAX_INDEX } from "../features/taskSelectCorrectOption/views/TaskSelectCorrectOptionView"

export default function Feedback(props: {points: number}) {
    return (
        <Box m={6}>
            <Text>Valmista! </Text>
            <Text>Sait oikein {props.points}/{MAX_INDEX}</Text>
            <Text>
                {props.points >= 9 ? "Huippu tulos!" 
                : props.points >= 6 ? "Hyvää työtä!" 
                : "Harjoitus tekee mestarin!"}
            </Text>
        </Box>
    )
}