export const isPlainObject = obj =>
  !(obj instanceof Date) && obj === Object(obj) && !Array.isArray(obj)

