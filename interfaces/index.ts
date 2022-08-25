export type Modality = 'capitales' | 'banderas' | ''
export type NumberQuestions = 3 | 10 | 20 | 50 | 100 | 0
export type Routes = '/questions' | '/play'
export type OptionsConfig = 'modality' | 'numberQuestions'
export interface ConfigGame {
  modality: Modality
  numberQuestions: NumberQuestions
}

export interface ConfigGameBtn {
  href: Routes
  text: Modality | NumberQuestions
  optionConfig: OptionsConfig
}

export interface Country {
  name: string
  capital: string
  flag: string
}

export interface Score {
  correct: number
  incorrect: number
  remainingQuestions: number
}

export interface Confirmation {
  isActive: boolean
  message: string
}
