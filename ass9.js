var s = ["mom", "js", "malayalam", "html", "css", "dad"];
var d = [];
var l = s.length-1;
var i = 0 ;
while(i <= l){
    if (i <= l){
        var str1 = "";
        for (j = s[i].length - 1; j >= 0; j--) {
            str1 += s[i][j];
            
        }
        if (s[i] == str1) {
            d.push(s[i]);
        }
    }
    i = i+1;
}

console.log(d);

// op=["mom","dad","malayalam"]
// console.log(l)
// using for/while and do-while loop
