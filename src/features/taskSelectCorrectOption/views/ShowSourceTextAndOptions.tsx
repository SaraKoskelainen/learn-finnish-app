import {PromptAndOptionsData} from '../hooks/UseTaskSelectCorrectOptionLogic'

export function ShowSourceTextAndOptions(props: {value: PromptAndOptionsData}) {
    return (
        <div>
            
            <p> {props.value.text_to_translate} </p>
            {Object.entries(props.value.options).map(([key, value]) => (
                    <p key={key}>
                    {key}: {value}
                    </p>
            ))}
        </div>

    )
}
