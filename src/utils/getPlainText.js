import { iterateMentionsMarkup } from './iterateMentionsMarkup'

export const getPlainText = (value, config) => {
  let result = ''
  iterateMentionsMarkup(
    value,
    config,
    (match, index, plainTextIndex, id, display) => {
      result += display
    },
    plainText => {
      result += plainText
    }
  )
  return result
}

