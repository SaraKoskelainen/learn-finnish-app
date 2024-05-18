import SelectOptionButton from '../../../common/SelectOptionButton'
import {PromptAndOptionsData} from '../hooks/useTaskSelectCorrectOptionQuery'

export function ShowSourceTextAndOptions(props: {value: PromptAndOptionsData}) {
    return (
        <div>
            <p> {props.value.text_to_translate} </p>
            {Object.entries(props.value.options).map(([key, value]) => (
              <div key={key}>
                <SelectOptionButton optionKey={key} value={value} />
                </div>
            ))}
        </div>
    )
}
