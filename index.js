var $ = require('jquery')
var toObject = require('form-to-object')

var lawyerCount = 1, lawyerYearlyRate = 65000, clientCapacityPerLawyer = 30, settlementContributions = 0

update()

$('input').on('change keydown keypress keyup click', update)

$('#add-settlement-form').on('submit', function (e) {
  e.preventDefault()
  var data = toObject(this)
  settlementContributions += parseInt(data.percentContribution) / 100 * parseInt(data.amount)
  update()
})

function update () {
  var lawyerCount = parseInt($('#lawyer-count').val())
  var numberOfMembers = parseInt($('#number-of-members').val())
  var monthlyPayment = parseInt($('#monthly-payment').val())

  $('#excess-capital').text(excessCapital(lawyerCount, numberOfMembers, monthlyPayment))
  $('#coverage-capacity').text(coverageCapacity(numberOfMembers, lawyerCount))
  $('#settlement-contributions').text(settlementContributions)
}

function excessCapital (lawyerCount, numberOfMembers, monthlyPayment) {
  return (numberOfMembers * monthlyPayment * 12) - (lawyerCount * lawyerYearlyRate) + settlementContributions
}

function coverageCapacity (numberOfMembers, lawyerCount) {
  return parseInt(lawyerCount * clientCapacityPerLawyer / numberOfMembers * 100)
}

function getSettlementContributions () {
  return settlementContributions
}
