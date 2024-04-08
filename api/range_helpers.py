import pickle

all_hands = [
    "AA", "AKs", "AQs", "AJs", "A0s", "A9s", "A8s", "A7s", "A6s", "A5s", "A4s", "A3s", "A2s",
    "AK", "KK", "KQs", "KJs", "K0s", "K9s", "K8s", "K7s", "K6s", "K5s", "K4s", "K3s", "K2s",
    "AQ", "KQ", "QQ", "QJs", "Q0s", "Q9s", "Q8s", "Q7s", "Q6s", "Q5s", "Q4s", "Q3s", "Q2s",
    "AJ", "KJ", "QJ", "JJ", "J0s", "J9s", "J8s", "J7s", "J6s", "J5s", "J4s", "J3s", "J2s",
    "A0", "K0", "Q0", "J0", "00", "09s", "08s", "07s", "06s", "05s", "04s", "03s", "02s",
    "A9", "K9", "Q9", "J9", "09", "99", "98s", "97s", "96s", "95s", "94s", "93s", "92s",
    "A8", "K8", "Q8", "J8", "08", "98", "88", "87s", "86s", "85s", "84s", "83s", "82s",
    "A7", "K7", "Q7", "J7", "07", "97", "87", "77", "76s", "75s", "74s", "73s", "72s",
    "A6", "K6", "Q6", "J6", "06", "96", "86", "76", "66", "65s", "64s", "63s", "62s",
    "A5", "K5", "Q5", "J5", "05", "95", "85", "75", "65", "55", "54s", "53s", "52s",
    "A4", "K4", "Q4", "J4", "04", "94", "84", "74", "64", "54", "44", "43s", "42s",
    "A3", "K3", "Q3", "J3", "03", "93", "83", "73", "63", "53", "43", "33", "32s",
    "A2", "K2", "Q2", "J2", "02", "92", "82", "72", "62", "52", "42", "32", "22"
]

def blank_range():
    acc = {}

    for hand in all_hands:
        acc[hand] = False
    
    return acc

test = blank_range()
def print_range():
    with open('range_data.pkl', 'rb') as fp:
        info = pickle.load(fp)
        print(info)

def save_range():
    with open('range_data.pkl', 'wb') as fp:
        pickle.dump(test, fp)
        print('dict saved')

def get_range():
    with open('range_data.pkl', 'rb') as fp:
        info = pickle.load(fp)
        return(info)

def update_range(hand):
    with open('range_data.pkl', 'rb') as fp:
        info = pickle.load(fp)

    with open('range_data.pkl', 'wb') as fp:
        if hand in info:
            info[hand] = not info[hand]
            pickle.dump(info, fp)
            
            print("dict updated")
        else:
            print('hand error')



if __name__ == '__main__':
    get_range()

    



