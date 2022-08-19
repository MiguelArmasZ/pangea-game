export type Modality = 'capitals' | 'flags' | ''
export type NumberQuestions = 10 | 20 | 50 | 100 | 0
export interface ConfigGame {
  modality: Modality
  numberQuestions: NumberQuestions
}
