import {PromptAndOptionsData} from '../hooks/useTaskSelectCorrectOptionQuery'
import { ShowSourceTextAndOptions } from './ShowSourceTextAndOptions'

export default function SelectCorrectOptionView(props: PromptAndOptionsData[]) {

    return (
        <div>
            this is Draft view
            
            {Object.entries(props).map(([index, item]) => (   
                <div key={index}>  
                <p>question {index}:</p>           
                <ShowSourceTextAndOptions value={item} />
                </div>
            ))}
        </div>

    )
}