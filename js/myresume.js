$(document).ready(function(){    
    $('#print').click(function(){
        window.print();
    });

var start = new Date(2010,08,09);
var today = new Date();

var delta = new Date(today - start);
var days = Math.ceil(delta / (1000 * 3600 * 24)); 

function humanise (diff) {
  // The string we're working with to create the representation
  var str = '';
  // Map lengths of `diff` to different time periods
  var values = {
    ' year': 365, 
    ' month': 30
  };

  // Iterate over the values...
  for (var x in values) {
    var amount = Math.floor(diff / values[x]);

    // ... and find the largest time value that fits into the diff
    if (amount >= 1) {
       // If we match, add to the string ('s' is for pluralization)
       str += amount + x + (amount > 1 ? 's' : '') + ' ';
       if(x === ' year') str += 'and '

       // and subtract from the diff
       diff -= amount * values[x];
    }
  }

  return str;
};

var experience = humanise(days);
$('#experience').text(experience);

});
