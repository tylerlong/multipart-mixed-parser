export const parse = data => {
  const separator = data.trim().split('\n')[0].trim()
  const parts = data.split(separator).map(part => part.trim()).filter(part => part !== '' && part !== '--')
  return parts.map(part => JSON.parse(part.split('\n')[3]))
}

export default { parse }
