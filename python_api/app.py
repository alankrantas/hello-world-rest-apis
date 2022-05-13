from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/", methods=['GET'])
def handler():
    name = request.args.to_dict().get('name', 'World')
    msg = {
        "message": f'Hello {name.strip()}!'
    }
    return (jsonify(msg), 200)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3000)
