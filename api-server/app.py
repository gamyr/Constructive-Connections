
from flask import Flask, render_template, request
import os
import openai
from flask_cors import CORS, cross_origin

openai.api_key = os.getenv("OPENAI_API_KEY")
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

@app.route('/', methods=['GET', 'POST'])
def index():
    print("askdjnfaksdnfkasjdnfkasnckjsadnf")
    if not request.args:
        return ""
    comments = request.args['element']
    print(comments)
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt="Is the sentiment of the following social media comment positive, neutral, or negative?\n\n" + comments + "\n",
        temperature=0,
        max_tokens=6,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    print(response)
    if "negative" not in response.choices[0].text.lower():
        return comments
    return ""

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)