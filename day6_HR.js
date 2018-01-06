// Hacker Rank Day #6 - 30 day coding challenge
function processData(input) {
    var S = input;
    var sWordArray = S.substring(2).split('\n');
    var sCharArray = S.substring(2).split('');
    var N = sCharArray.length - 1;
    var sOdd = [];
    var sEven = [];
    console.log(sWordArray);
    for (var i=0; i <= N; i++) {
        if (i%2===0 || i===0) {
            sOdd.push(sCharArray[i]);
            console.log(sOdd);
       }
       else {
         sEven.push(sCharArray[i]);
         console.log(sEven);
       }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});