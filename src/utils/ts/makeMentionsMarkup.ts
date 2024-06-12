import { PLACEHOLDERS } from './placeholders'

export const makeMentionsMarkup = (
  markup: string,
  id: string,
  display: string
): string => {
  return markup
    .replace(PLACEHOLDERS.id, id)
    .replace(PLACEHOLDERS.display, display)
}
