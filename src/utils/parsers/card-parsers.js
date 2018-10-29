const cards = [
  'Ah', 'As', 'Ac', 'Ad',
  'Kh', 'Ks', 'Kc', 'Kd',
  'Qh', 'Qs', 'Qc', 'Qd',
  'Jh', 'Js', 'Jc', 'Jd',
  'Th', 'Ts', 'Tc', 'Td',
  '9h', '9s', '9c', '9d',
  '8h', '8s', '8c', '8d',
  '7h', '7s', '7c', '7d',
  '6h', '6s', '6c', '6d',
  '5h', '5s', '5c', '5d',
  '4h', '4s', '4c', '4d',
  '3h', '3s', '3c', '3d',
  '2h', '2s', '2c', '2d',
]


export const parsePlayerHand = (input) => {

  if(!input) {
    return null
  }

  // Ah7s
  if(input.length == 4) {

    let cardOne = parseCard(input.slice(0,2))
    let cardTwo = parseCard(input.slice(2,4))

    if(cardOne === null || cardTwo === null) {
      return null
    }

    return [cardOne, cardTwo]

  }

  else {
    return null
  }

}


export const parseCard = (input) => {

  for(let i = 0; i < cards.length; i++) {
    if(cards[i].toLowerCase() === input.toLowerCase()) {
      return cards[i]
    }
  }

  return null

}


export const parseBoard = (input) => {

  if(!input || input.length === 0) {
    return null
  }

  let board = []

  // splits string by every 2 characters
  let cardArr = input.match(/.{1,2}/g)

  for(let i = 0; i < cardArr.length; i++) {
    let card = parseCard(cardArr[i])

    if(card) {
      board.push(card)
    }
  }

  return board

}
