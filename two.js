

var foo = 10

function x(){
    console.log(foo)
    var foo = 20
}
foo = 25
x()

//undefined