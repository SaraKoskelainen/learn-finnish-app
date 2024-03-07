export default function SelectCorrectOptionView(props: any) {
    return (
        <div>
            this is Draft view
            <p> {props.text_to_translate} </p>
            <p> {props.options.option_correct}</p>
        </div>

    )
}