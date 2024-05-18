import TaskSelectCorrectOptionView from './views/TaskSelectCorrectOptionView'
import useTaskSelectCorrectOptionQuery from './hooks/useTaskSelectCorrectOptionQuery'

export default function TaskSelectCorrectOption() {
    const data = useTaskSelectCorrectOptionQuery() 
    return (
            <TaskSelectCorrectOptionView {...data} />
    )
}