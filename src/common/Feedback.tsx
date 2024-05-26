import { Box, Button, Text } from "@chakra-ui/react"
import { MAX_INDEX } from "../features/taskSelectCorrectOption/views/TaskSelectCorrectOptionView"
import { MouseEvent } from "react"

export default function Feedback(props: {
        points: number, 
        reset: () => void, 
    }) {
    
    const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
        // Refresh data to start over
        e.preventDefault();
        props.reset() 
    }
    return (
        <Box m={6}>
            <Text>Sait oikein {props.points}/{MAX_INDEX} - You got it right {props.points}/{MAX_INDEX}</Text>
            <Text>
                {props.points >= 9 ? "Huippu tulos! - Great result!" 
                : props.points >= 6 ? "Hyvää työtä! - Well done!" 
                : "Harjoitus tekee mestarin! - Practice makes perfect!"}
            </Text>
            <Button onClick={handleMouseEvent} m={6}> Aloita alusta - Start from the beginning</Button>
        </Box>
    )
}