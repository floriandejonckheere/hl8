export default function greeting() {
  const today = new Date()
  const hour = today.getHours()

  if (hour < 6) {
    return 'night'
  } else if (hour < 12) {
    return 'morning'
  } else if (hour < 18) {
    return 'afternoon'
  } else {
    return 'evening'
  }
}
