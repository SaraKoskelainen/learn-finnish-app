import * as dataFromJson from '../../../../data/basics.json'

export interface PromptAndOptionsData {
    text_to_translate: string,
    options: {[key: string]: string}
    correct: string
}

export default function useTaskSelectCorrectOptionQuery() {

    const dataFromJsonArray = dataFromJson.allData
    const promptAndOptionsData: PromptAndOptionsData[] = dataFromJsonArray 
    
    return promptAndOptionsData
}