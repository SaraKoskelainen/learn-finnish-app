import SelectOptionButton from '../../../common/SelectOptionButton'
import {PromptAndOptionsData} from '../hooks/useTaskSelectCorrectOptionQuery'

export function ShowSourceTextAndOptions(props: {objKey: string, promptAndOptions: PromptAndOptionsData}) {
    return (
        <div>
            <p> {props.promptAndOptions.text_to_translate} </p>
            {Object.entries(props.promptAndOptions.options).map(([key, value]) => (
              <div key={key}>
                <SelectOptionButton objKey={props.objKey} valueKey={key} option={value} />
                </div>
            ))}
        </div>
    )
}
