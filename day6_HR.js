// Hacker Rank Day #6 - 30 day coding challenge
function processData(input) {
    var sCharArray = input.split('');
    var N = sCharArray.length - 1;
    var sOdd = [];
    var sEven = [];
    // console.log(sCharArray);
    for (var i=0; i <= N; i++) {
       if (i%2===0 || i===0) {
            sOdd.push(sCharArray[i]);
       }
       else {
         sEven.push(sCharArray[i]);
       }
    }
    sOddString = sOdd.join('');
    sEvenString = sEven.join('');
    console.log(sOddString + " " + sEvenString);
} 

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var T = parseInt(readLine());
    for (var i=0; i <= T-1; i++) {
        var S = readLine();
        processData(S);
    }
}