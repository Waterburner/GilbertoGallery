from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, I'm flask!"

# Members API Route

@app.route("/members")
def members():
    return {"members": ["member1", "Member2", "Member3"]}



if __name__ == "__main__":
    app.run(debug=True)