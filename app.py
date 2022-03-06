import re
from typing import OrderedDict
from flask import Flask, redirect, url_for, render_template, request, Response, abort, jsonify
import json
import os, random, os.path

UPLOAD_FOLDER = 'data/'
ALLOWED_EXTENSIONS = {'csv', 'txt'}
app = Flask(__name__)
app.static_folder = 'static'
app.config['SERVER_NAME'] = '127.0.0.1:5000'

# global variables
# ...

@app.route("/", methods=["POST", "GET"])
def index():
    return render_template("index.html")


# mainfest page loaded
@app.route("/manifest", methods=["POST", "GET"])
def manifest():
    if request.method == "POST":
        name = request.get_json() #grabs the name of operator from text box
        if name == "":
            return render_template("mainpage.html")
        else:
            #record to logfile the name of operator login time
            print(name)
            return redirect("manifest.html")
    else:
        return render_template("index.html")


# This is so we don't have to keep running python -m flask run everytime we make a change
if __name__ == "__main__":
    app.run(debug=True);