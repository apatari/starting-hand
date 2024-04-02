import { make_blank, make_range } from './helpers';

const UTG_HANDS = ['AA', 'AKs','AQs','AJs', 'A0s', 'A9s', 'A8s',
    'A5s','A4s','A3s','A2s','AK','KK','KQs','KJs','K0s',
    'AQ','KQ', 'QQ', 'QJs', 'Q0s', 'AJ', 'A0', 'JJ', 'J0s', '09s', 
    '00', '99','88','09s', 
    ]

const utgRange = make_range(UTG_HANDS)

const MP_HANDS = UTG_HANDS.concat(['A7s','A6s','K8s','K9s', 'KJ','Q9s',  'QJ','J9s', 
    '98s', '87s',  '54s','76s','77','66','55','44', '65s' 
    ])

const mpRange = make_range(MP_HANDS)

const CO_HANDS = MP_HANDS.concat(['K7s', 'K6s', 'K5s', 'Q8s', 'J8s', 'K0', 
    'Q0', 'J0', '08s', '97s', '86s', '75s', '33', '22'])

const coRange = make_range(CO_HANDS)

export { utgRange, mpRange, coRange }