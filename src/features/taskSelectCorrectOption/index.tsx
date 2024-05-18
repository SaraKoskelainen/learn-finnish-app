import TaskSelectCorrectOptionView from './views/TaskSelectCorrectOptionView'
import UseTaskSelectCorrectOptionLogic from './hooks/UseTaskSelectCorrectOptionLogic'

export default function TaskSelectCorrectOption() {
    const logic = UseTaskSelectCorrectOptionLogic() // TODO: rename/ MV to query
    return (
            <TaskSelectCorrectOptionView {...logic} />
    )
}