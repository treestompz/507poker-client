import { Fraction } from 'fractional'


export const calcPotOdds = (pot, call) => {

  if(pot === null || call === null) {
    return null
  }

  const percent = ((call / pot) * 100).toFixed(2)

  const percentRounded = ((call / pot) * 100).toFixed(0)

  console.log("pr",percentRounded)

  const fraction = new Fraction(percentRounded / 100)

  const ratio = fraction.denominator + ':' + fraction.numerator

  return {
    ratio,
    percent
  }

}
