export const FormatDate = (date) => {
  let time = new Date(date)
  return time.toLocaleDateString('en-US', { hour: 'numeric', hour12: true })
}
