import { calculateEquity } from 'poker-odds'


const iterations = 100000
const exhaustive = false

/*
Returns an object with heroWinPercent and villainWinPercent
*/
export const calcEquity = (heroHand, villainHand, board) => {

  const hands = [heroHand, villainHand]

  const equity = calculateEquity(hands, board, iterations, exhaustive)

  let heroWinPercent = ((equity[0].wins / equity[0].count) * 100).toFixed(2)

  let villainWinPercent = ((equity[1].wins / equity[1].count) * 100).toFixed(2)

  return {
    heroWinPercent,
    villainWinPercent
  }

}
