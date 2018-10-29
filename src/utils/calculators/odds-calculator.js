import { Fraction } from 'fractional'


export const calcPotOdds = (pot, call) => {

  if(pot === null || call === null) {
    return null
  }

  pot = parseFloat(pot)
  call = parseFloat(call)

  const percent = ((call / (pot + call)) * 100).toFixed(2)

  const percentRounded = ((call / (pot + call)) * 100).toFixed(0)

  const fraction = new Fraction(percentRounded / 100)

  const ratio = fraction.denominator + ':' + fraction.numerator

  return {
    ratio,
    percent
  }

}
