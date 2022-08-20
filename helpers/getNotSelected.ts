import { countries } from '../data'
import { Country } from '../interfaces'

export function getNotSelected(selected: Country[]) {
  const notSelected: string[] = []

  const countriesSelected = selected.map(({ name }) => name)

  countries.forEach(({ name }) => {
    !countriesSelected.includes(name) && notSelected.push(name)
  })

  return countries.filter(({ name }) => notSelected.includes(name))
}
