function test(x) {
    if (x === null || x === undefined || x.substring(0, 2) === "Py") {
        return x
    } else {
        return "Py" + x
    }
}