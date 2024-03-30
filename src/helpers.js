
function make_blank() {
    const VALS = 'A234567890JQK'

    let res = []

    for (let i = 0; i < 13; i++) {
        for (let j = i; j < 13; j++) {
            let pair = VALS[i] + VALS[j]
            res.push(pair)
        }
    }
    let acc = []
    for (const pair of res) {
        
        if (pair[0] !== pair[1]) {
            acc.push(pair + 's')
        }
    }
    const range = {}


    for (const pair of res.concat(acc)){
        range[pair] = false
    }
    
    return range

}

export { make_blank }