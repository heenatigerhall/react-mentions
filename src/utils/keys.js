export const keys = obj => {
  return obj === Object(obj) ? Object.keys(obj) : []
}

