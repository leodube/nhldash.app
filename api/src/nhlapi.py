import requests
from flask import abort

WEB_API_BASE = 'https://api-web.nhle.com'
STATS_API_BASE = 'https://api.nhle.com/stats/rest'


def web_api_request(path, **kwargs):
    res = requests.get(WEB_API_BASE+path, **kwargs)
    if res.status_code == 200:
        return res.json()
    try:
        abort(res.status_code, res.json()['message'])
    except:
        abort(res.status_code, 'NHL API Error')

def stats_api_request(path, **kwargs):
    res = requests.get(STATS_API_BASE+path, **kwargs)
    if res.status_code == 200:
        return res.json()
    try:
        abort(res.status_code, res.json()['message'])
    except:
        abort(res.status_code, 'NHL API Error')

def get_player(player_id, params={}):
    response = web_api_request(f'/v1/player/{player_id}/landing', params=params)
    return response


def get_teams(params={}):
    response = web_api_request('/v1/standings/now', params=params)
    return response['standings']


def get_team_roster(team_abbr, params={}):
    response = web_api_request(
        f'/v1/roster/{team_abbr}/current', params=params)
    return response
