export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

// action creator
function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck (title) {
  return {
    type: ADD_DECK,
    title,
  }
}

export function addCard (title, question, answer) {
  return {
    type: ADD_CARD,
    title,
    question,
    answer
  }
}

const initialData = {
  React: {
    title: 'Building The Web',
    questions: [
      {
        question: 'What\'s the best way to layout a website',
        answer: 'Goal-Oriented: The ideal website layout is symmetrical, clear, and orderly. Most importantly, top layouts make it clear what\'s expected of visitors once they land.'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is JavaScript?',
        answer: 'JavaScript is a scripting or programming language that allows you to implement complex features on web pages'
      },
      {
        question: 'What JavaScript Library is the Best?',
        answer: 'DOJO toolkit. The Dojo is an open-source JavaScript library that helps develop cross-platform, JS, and Ajax-based web sites in a faster manner.'
      }
    ]
  }
}

export function handleInitialData (data) {
  return (dispatch) => {
    return dispatch(receiveDecks(data === null ? initialData : data['decks']))
  }
}
