

// Returns an object with a key value pair for each two-card starting hand possibility
//  The keys are hand codes, such as 'AK' for ace-king, 'AKs' for ace-king suited
function make_blank() {
    const VALS = 'AKQJ098765432'

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

// Takes an array of strings that match keys in a blank range, 
//   returns a range with those key pointing to 'true'
function make_range(arr) {
    const range = make_blank()
    for (const pair of arr) {
        range[pair] = true
    }
    return range
}

export { make_blank, make_range }