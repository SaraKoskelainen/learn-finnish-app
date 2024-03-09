export interface SourceTextAndOptionsData {
    text_to_translate: string,
    options: {[key: string]: string}
} 

export default function UseTaskSelectCorrectOptionLogic() {
    const data: SourceTextAndOptionsData[] = [
        {
            text_to_translate: "Here comes text to translate", 
            options: {
                option_correct: "Here comes correct phrase",
                option_wrong_1: "Here comes incorrect phrase #1",
                option_wrong_2: "Here comes incorrect phrase #2"
            },
        },
        {
            text_to_translate: "Here comes text to translate 2", 
            options: {
                option_correct: "Here comes correct phrase 2",
                option_wrong_1: "Here comes incorrect phrase #2.1",
                option_wrong_2: "Here comes incorrect phrase #2.2"
            },
        }
    ]

    return data
}