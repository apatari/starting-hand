from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from range_helpers import update_range, get_range
import json

app = Flask(__name__)
CORS(app)



@app.route('/api/ranges', methods=['POST','GET'])
def custom():
    if request.method == 'GET':
        
        return get_range(), 200
    else:
        hand = request.get_json()['hand']
        update_range(hand)
        return get_range(), 201



if __name__ == '__main__':
    app.run(port=5000, debug = True)