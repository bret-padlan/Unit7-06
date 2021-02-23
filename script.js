document.getElementById('click').addEventListener('click', ageGuesser)

let age = 16
let answer = 0

function ageGuesser () {
  var answer = prompt("Please input number", "00")
  answer = parseInt(answer)
  if (age === answer) {
    document.getElementById('name').innerHTML = ('You got it!')
  } else if (age < answer) {
    document.getElementById('name').innerHTML = ('You have to go lower than that')
  } else if (age > answer) {
    document.getElementById('name').innerHTML = ('You have to go higher than that')
  } else {
    document.getElementById('name').innerHTML = ('Not valid')
  }
}
