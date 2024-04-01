import { make_blank, make_range } from './helpers';

const UTG_HANDS = ['AA', 'AKs','AQs','AJs', 'A0s', 'A9s', 'A8s','A7s',
    'A6s','A5s','A4s','A3s','A2s','AK','KK','KQs','KJs','K0s','K9s',
    'AQ','KQ', 'QQ', 'QJs', 'Q0s', 'Q9s', 'AJ', 'JJ', 'J0s', 'J9s', 
    'TT', '99','88','77','66','55','44','33','22','T9s', '98s', '87s',
    '76s', '65s' ]

const utgRange = make_range(UTG_HANDS)

export { utgRange }