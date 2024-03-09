import {SourceTextAndOptionsData} from '../hooks/UseTaskSelectCorrectOptionLogic'

export default function SelectCorrectOptionView(props: SourceTextAndOptionsData) {
    return (
        <div>
            this is Draft view
            <p> {props.text_to_translate} </p>
            {Object.entries(props.options).map(([key, value]) => (
                <p key={key}>
                    {value}
                </p>
            ))}
        </div>

    )
}