import {PromptsAndOptionsAllData} from '../hooks/useTaskSelectCorrectOptionQuery'
import { ShowSourceTextAndOptions } from './ShowSourceTextAndOptions'

export default function SelectCorrectOptionView(props: {promptsOptionsData: PromptsAndOptionsAllData}) {
    
    return (
        <div>
            this is Draft view

            {Object.entries(props.promptsOptionsData).map(([index, item]) => (   
                <div key={index}>  
                    <p>question {index}:</p> 
                    <ShowSourceTextAndOptions index={index} value={item}/>
                </div>
            ))}
        </div>
    )
}