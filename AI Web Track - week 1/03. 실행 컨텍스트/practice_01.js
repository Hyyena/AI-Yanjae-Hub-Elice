let o = {
    name: "Daniel",
    f1: () => {
        console.log("[f1] this : ", this.name);
    },
    f2: function () {
        console.log("[f2] this : ", this.name);
    }
}

o.f1();
o.f2();