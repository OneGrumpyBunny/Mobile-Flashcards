import React, { Component } from "react"
import { View, Text } from 'react-native'
import QuizQuestion from './QuizQuestion'
import QuizScore from './QuizScore'
import { connect } from 'react-redux'

class Quiz extends Component {
	state = {
	  displayedQuestion: 0,
	  displayAnswer: false,
	  answered: 0,
	  score: 0,
	}

	showAnswer = () => {
	  this.setState(currState => ({
	    displayAnswer: !currState.displayAnswer,
	  }))
	}

	addAnswer = (correct) => {
	  this.setState(currState => ({
	    answered: ++currState.answered,
	    score: correct ? ++currState.score : currState.score,
	    displayedQuestion: ++currState.displayedQuestion,
	    displayAnswer: false,
	  }))
	}

	resetQuiz = () => {
    this.setState({
	    displayedQuestion: 0,
	    displayAnswer: false,
	    answered: 0,
	    score: 0,
    })
	}

  render() {
  	const { questions, title } = this.props
  	const { displayedQuestion, displayAnswer, answered, score } = this.state
  	if(answered !== questions.length){
  		const question = questions[displayedQuestion].question
  		const answer = questions[displayedQuestion].answer
  		return (
  			<QuizQuestion
				question={question}
				answer={answer}
				displayAnswer={displayAnswer}
				showAnswer={this.showAnswer}
				addAnswer={this.addAnswer}
				answered={answered+1}
				questionsNum={questions.length}
			/>
  	  )
  	}else{
  		return (
  			<QuizScore
  				score={score}
  				answered={answered}
  				resetQuiz={this.resetQuiz}
  				title={title}
  			/>
  		)
  	}
  } 
}

function mapStateToProps ({ decks }, { route }) {
  const { title } = route.params
  const deck = decks[title]

  return {
  	title,
    questions: deck.questions,
  }
}

export default connect(mapStateToProps)(Quiz)
