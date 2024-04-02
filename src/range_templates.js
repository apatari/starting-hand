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

const BTN_HANDS = CO_HANDS.concat(['K4s', 'K3s', 'K2s', 'Q7s', 'Q6s', 
    'Q5s','J7s', '07s','06s','A9','K9','Q9','J9','09','96s','A8','98',
    '85s','A7','A6','64s','A5','53s','A4','43s'])

    const btnRange = make_range(BTN_HANDS)

const SB_RANGE = BTN_HANDS.concat(['Q4s','Q3s','Q2s','J6s','J5s','J4s','J3s',
    'J2s','05s','04s','03s','02s','95s','94s','K8','Q8','J8','08','84s','K7',
    'Q7','J7','07','97','87','74s','73s','K6','86','76','63s','K5','75','65',
    '52s','64','54','42s','A3','32s','A2'])

const sbRange = make_range(SB_RANGE)

export { utgRange, mpRange, coRange, btnRange, sbRange }