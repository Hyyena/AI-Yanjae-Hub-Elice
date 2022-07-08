// let ab1 = function() {
//     console.log(this);
// }
// ab1();

// let result = ab1.bind(1);
// result();

// let ab2 = () => {
//     console.log(this);
// }
// ab2();

// function abc() {
//     console.log(this);
// }
// abc();

let o = {
    o1: function() {
        console.log(this);
    },
    o2: () => {
        console.log(this);
        let o3 = () => {
            console.log(this);
        }
        o3();
    },
    o3: function () {
        console.log(this);
        let o4 = () => {
            console.log(this);
        }
        o4();
    }
}

// o.o1();
// o.o2();
o.o3();