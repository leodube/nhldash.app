from flask import Flask, jsonify, request
from flask_cors import CORS
from .nhlapi import *

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes


@app.route("/players/<player_id>")
def player(player_id):
    '''Returns player bio information (name, birthdate, birthplace, current team...)'''
    res = get_player(player_id, params=request.args)
    return jsonify(res)


@app.route("/teams")
def teams():
    '''Returns list of NHL teams'''
    res = get_teams(params=request.args)
    return jsonify(res)


@app.route("/team/<team_abbr>/roster")
def teamroster(team_abbr):
    '''Return NHL team roster
    See https://gitlab.com/dword4/nhlapi/-/blob/master/stats-api.md#teams for more info'''
    res = get_team_roster(team_abbr, params=request.args)
    return jsonify(res)
