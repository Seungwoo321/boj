const filePath = require('path').join(__dirname, 'input');
const [num, arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');
const [n, k] = num.split(' ');
function solution (n, k, arr) {
    let count = 0;
    const visited = new Array(k + 1).fill(0);
    let plugins = []
    for (let i = 0; i < k; i ++) {
        if (visited[arr[i]]) continue;
        if (plugins.length === n) {
            let lastIndex = 0;
            let position = 0;
            // 현재 플러그인에 있는 것중에서 더 나중에 참조하는 것을 찾아서 lastIndex와 position에 갱신해준다
            plugins.forEach(p => {
                let select = Infinity;
                for (let j = i + 1; j < k; j ++) {
                    if (p === arr[j]) {
                        select = j;
                        break;
                    }
                }
                if (lastIndex < select) {
                    lastIndex = select;
                    position = p;
                }
            })
            // 더 나중에 참조하는 것을 플러그인에서 뺀다
            visited[position] = 0;
            count++;
            plugins = plugins.filter(v => v !== position);
            
        }
        // 빈 플러그인에 다음 차례를 추가한다.
        plugins.push(arr[i]);
        visited[arr[i]] = 1;
    }
    return count;
}
console.log(solution(+n, +k, arr.split(' ').map(Number)));