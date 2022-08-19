import { Country } from '../interfaces'

export function generateRandomNumbers(
  maxNumber: number,
  amount: number
) {
  const allNumbers = [...Array(maxNumber).fill(maxNumber)]
    .map((item, i) => item - i)
    .sort(() => 0.5 - Math.random())
    .slice(0, amount)

  return allNumbers
}

export function getRandomCountries(
  countries: Country[],
  quantity: number
) {
  const randomNumbers = generateRandomNumbers(
    countries.length - 1,
    quantity
  )
  return randomNumbers.map((number) => countries[number])
}
