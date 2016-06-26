var $ = require('jquery')

var lawyerCount = 1
var lawyerYearlyRate = 65000
var clientCapacityPerLawyer = 30

function monthlyPayment (numberOfMembers, lawyerCount) {
  return parseInt(lawyerCount * lawyerYearlyRate / 12 / numberOfMembers)
}

function coverageCapacity (numberOfMembers, lawyerCount) {
  return parseInt(lawyerCount * clientCapacityPerLawyer / numberOfMembers * 100)
}

update()

$('input').on('change', function (e) {
  console.log('meow')
  update()
})

function update () {
 var lawyerCount = parseInt($('#lawyer-count').val())
 var numberOfMembers = parseInt($('#number-of-members').val())
 $('#monthly-payment').text(monthlyPayment(numberOfMembers, lawyerCount))
 $('#coverage-capacity').text(coverageCapacity(numberOfMembers, lawyerCount))
}
