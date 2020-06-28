import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { primaryDark, primaryLight, primary, white, accent, text, secondaryText, divider, red, green } from '../utils/colors'

function QuizQuestion (props) {
    const { question, answer, displayAnswer, showAnswer, addAnswer, answered, questionsNum } = props

    return (
      <View>
        <View style={{justifyContent: 'center', alignItems: 'center', padding: 10,}}>
          <Text style={{color: text}}>{`${answered} / ${questionsNum}`}</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center',}}>
          <View style={{height: '60%', justifyContent: 'center', alignItems: 'center', width:'90%'}}>
            <Text style={styles.headerText}>{displayAnswer ? answer : question}</Text>
            <TouchableOpacity onPress={showAnswer}>
            <Text style={{color: red, textDecorationLine: 'underline'}}>{displayAnswer ? 'Question' : 'Answer'}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => addAnswer(true)}
            style={[styles.button, styles.correctBtn]}
          >
              <Text style={styles.submitBtnText}>Correct</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => addAnswer(false)}
            style={[styles.button, styles.incorrectBtn]}
          >
              <Text style={styles.submitBtnText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,    
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
  },
  correctBtn: {
    backgroundColor: green,
  },
  incorrectBtn: {
    backgroundColor: red,
  },
  button: {
    marginTop: 10,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    borderColor: primaryDark,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    width: '60%',
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
  },
})

export default QuizQuestion