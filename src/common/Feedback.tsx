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
            <Text>Valmista! </Text>
            <Text>Sait oikein {props.points}/{MAX_INDEX}</Text>
            <Text>
                {props.points >= 9 ? "Huippu tulos!" 
                : props.points >= 6 ? "Hyvää työtä!" 
                : "Harjoitus tekee mestarin!"}
            </Text>
            <Button onClick={handleMouseEvent} m={6}> Aloita alusta</Button>
        </Box>
    )
}