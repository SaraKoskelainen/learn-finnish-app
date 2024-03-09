import {SourceTextAndOptionsData} from '../hooks/UseTaskSelectCorrectOptionLogic'

export function ShowSourceTextAndOptions(props: {key: string, value: SourceTextAndOptionsData}) {
    return (
        <div>
            
            <p> {props.value.text_to_translate} </p>
            {Object.entries(props.value.options).map(([key, value]) => (
                <p key={key}>
                    {value}
                </p>
            ))}
        </div>

    )
}
