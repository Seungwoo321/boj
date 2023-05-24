function solution (n, arr) {
    for (let i = 1; i < n; i ++) {
        arr[i] = Math.max(arr[i - 1] * arr[i], arr[i]);
    }
    return Math.max.apply(null, arr).toFixed(3);
}

module.exports = solution