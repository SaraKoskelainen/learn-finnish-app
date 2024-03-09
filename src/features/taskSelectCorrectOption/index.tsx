import TaskSelectCorrectOptionView from './views/TaskSelectCorrectOptionView'
import UseTaskSelectCorrectOptionLogic from './hooks/UseTaskSelectCorrectOptionLogic'

export default function TaskSelectCorrectOption() {
    const logic = UseTaskSelectCorrectOptionLogic()
    return (
            <TaskSelectCorrectOptionView {...logic} />
    )
}