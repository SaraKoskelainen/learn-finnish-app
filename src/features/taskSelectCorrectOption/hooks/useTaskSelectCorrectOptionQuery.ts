import * as dataFromJson from '../../../../data/basics.json'

export interface PromptAndOptionsData {
    text_to_translate: string,
    options: {[key: string]: string}
}

export interface PromptsAndOptionsAllData {
    [key: string]: PromptAndOptionsData
}

export default function useTaskSelectCorrectOptionQuery() {

    const dataFromJsonArray = dataFromJson.allData
    const promptsAndOptionsAllData: PromptsAndOptionsAllData = dataFromJsonArray 
    
    return {
        promptsOptionsData: promptsAndOptionsAllData, 
    }
}