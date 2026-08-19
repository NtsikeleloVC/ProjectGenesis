from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "AI Text Summarizer Backend is running!"

@app.route("/summarize", methods=["POST"])
def summarize():
    data = request.get_json()
    text = data.get("text", "")

    return jsonify({
        "summary": text
    })

if __name__ == "__main__":
    app.run(debug=True)