function anagram(str1, str2){
    let s1 = str1.sort();
    let s2 = str2.sort();
    if(s1.length !== s2.length){
        return "False";
    }
    for(let i = 0; i < s1.length; i++){
        if(s1[i] !== s2[i]){
            return "False";
        }
    }
    return "True";
}

function runProgram(input) {
  input = input.trim().split('\n')
  let tc = +input[0].trim();
  let line = 1;
  for(let i = 0 ; i < tc; i++){
      let str1 = input[line++].trim().split('');
      let str2 = input[line++].trim().split('');
      console.log(anagram(str1, str2));
  }
  
 }
 if (process.env.USERNAME === "awdhesh") {
   runProgram(`2
   abcd
   dcab
   aa
   aaa`);
 } else {
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
     read += input;
   });
   process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read);
   });
   process.on("SIGINT", function () {
     read = read.replace(/\n$/, "");
     runProgram(read);
     process.exit(0);
   });
 }