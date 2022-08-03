let api = "https://deckofcardsapi.com/api/deck/new/draw/"

async function drawCard() {
  let cardJson = await fetch(api).then((resp) => resp.json())
  console.log(cardJson.cards[0].value, "of", cardJson.cards[0].suit)
}

drawCard()
