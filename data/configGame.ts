import { ConfigGameBtn } from '../interfaces'

export const modalityConfig: ConfigGameBtn[] = [
  {
    href: '/questions',
    text: 'capitales',
    optionConfig: 'modality'
  },
  {
    href: '/questions',
    text: 'banderas',
    optionConfig: 'modality'
  }
]

export const numberQuestionsConfig: ConfigGameBtn[] = [
  {
    href: '/play',
    text: 3,
    optionConfig: 'numberQuestions'
  },
  {
    href: '/play',
    text: 10,
    optionConfig: 'numberQuestions'
  },
  {
    href: '/play',
    text: 20,
    optionConfig: 'numberQuestions'
  },
  {
    href: '/play',
    text: 50,
    optionConfig: 'numberQuestions'
  },
  {
    href: '/play',
    text: 100,
    optionConfig: 'numberQuestions'
  }
]
