from flask import Flask, request
from range_helpers import update_range, get_range

app = Flask(__name__)

@app.route("/")
def hello_world():
    return ("Hello world")

@app.route('/custom', methods=['POST','GET'])
def custom():
    if request.method == 'GET':
        return get_range(), 200
    else:
        hand = request.get_json()['hand']
        update_range(hand)
        return get_range(), 201



if __name__ == '__main__':
    app.run(debug = True)