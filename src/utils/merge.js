import { mergeDeep } from './mergeDeep'

export const merge = (target, ...sources) => {
  return sources.reduce((t, s) => {
    return mergeDeep(t, s)
  }, target)
}

