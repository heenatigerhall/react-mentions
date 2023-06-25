import { lettersDiacritics } from './diacritics'

export const removeAccents = str => {
  let formattedStr = str

  lettersDiacritics.forEach(letterDiacritics => {
    formattedStr = formattedStr.replace(
      letterDiacritics.letters,
      letterDiacritics.base
    )
  })

  return formattedStr
}

export const normalizeString = str => removeAccents(str).toLowerCase()

export const getSubstringIndex = (str, substr, ignoreAccents) => {
  if (!ignoreAccents) {
    return str.toLowerCase().indexOf(substr.toLowerCase())
  }

  return normalizeString(str).indexOf(normalizeString(substr))
}

