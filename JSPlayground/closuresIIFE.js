// function count() {
//   for (var i = 0; i <= 4; i++) {
//     setTimeout(
//       (function() {
//         console.log(i);
//       })(),
//       500
//     );
//   }
// }

// count();

function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function(year) {
    var age = 2019 - year;
    console.log(retirementAge - age + a);
  };
}

const retirementUS = retirement(66);
retirementUS(1990);
