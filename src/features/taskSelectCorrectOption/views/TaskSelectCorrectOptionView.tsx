import {SourceTextAndOptionsData} from '../hooks/UseTaskSelectCorrectOptionLogic'
import { ShowSourceTextAndOptions } from './ShowSourceTextAndOptions'

export default function SelectCorrectOptionView(props: SourceTextAndOptionsData[]) {

    return (
        <div>
            this is Draft view
            
            {Object.entries(props).map(([index, item]) => (
                <ShowSourceTextAndOptions key={index} value={item} />
            ))}
        </div>

    )
}