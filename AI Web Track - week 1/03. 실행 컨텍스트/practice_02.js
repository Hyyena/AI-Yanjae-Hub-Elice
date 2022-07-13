function func(callback) {
    callback();
}

function callback() {
    console.log("Hello");
}

func(callback);