module.exports = {
    sum: (a, b) => a + b,
    div: (a, b) => a / b,
    multi: (a, b) => a * b,
    sub: (a, b) => a - b,

    date2000: () => {
        let start = new Date("2000-01-01T00:00:00");
        let nowDateTime = Date.now();
        return (nowDateTime - start) / 1000;
    },
};