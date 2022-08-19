export type Modality = 'capitales' | 'banderas' | ''
export type NumberQuestions = 10 | 20 | 50 | 100 | 0
export type Routes = '/questions' | '/play'
export interface ConfigGame {
  modality: Modality
  numberQuestions: NumberQuestions
}

export interface ConfigGameBtn {
  href: Routes
  text: Modality | NumberQuestions
}
