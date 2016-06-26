var $ = require('jquery')

var lawyerCount = 1, lawyerYearlyRate = 65000, clientCapacityPerLawyer = 30

update()
$('input').on('change keydown keypress keyup', update)

function update () {
  var lawyerCount = parseInt($('#lawyer-count').val())
  var numberOfMembers = parseInt($('#number-of-members').val())
  var monthlyPayment = parseInt($('#monthly-payment').val())

  $('#excess-capital').text(excessCapital(lawyerCount, numberOfMembers, monthlyPayment))
  $('#coverage-capacity').text(coverageCapacity(numberOfMembers, lawyerCount))
}

function excessCapital (lawyerCount, numberOfMembers, monthlyPayment) {
  return parseInt((numberOfMembers * monthlyPayment * 12) - (lawyerCount * lawyerYearlyRate))
}

function coverageCapacity (numberOfMembers, lawyerCount) {
  return parseInt(lawyerCount * clientCapacityPerLawyer / numberOfMembers * 100)
}
