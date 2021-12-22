# Bruins Developer Assignment

## Instructions

### Copy Project Files and Install

```
git clone --depth=1 https://github.com/leodube/bruins-developer-homework.git <PROJECT_NAME>
cd <PROJECT_NAME>
rm -rf .git .gitignore
pip install -r /backend
cd frontend
npm install
```

### Start Backend
```
cd backend
flask start
```
or ```flask run```

### Start Frontend
```
cd frontend
npm start
```

**Note:** Flask must be running on localhost:5000

## Features
- To select a player, you first choose the team from the left sidebar.
- The active players on the team roster will be displayed. From here, click on the desired player.
- A modal will appear showing some basic information about the player. To view player stats click on the "Stats" tab.

## Built With

### Frontend

- The frontend uses [React](https://reactjs.org/) with React Hooks for state management.
- I bootstrapped it with [Create React App](https://github.com/facebook/create-react-app). I have a [custom react boilerplate](https://github.com/leodube/react-ss) that provides me with greater customization but decided to use CRA because it was quicker to get started.
- I styled it with [Material-UI](https://mui.com/). I considered using Bootstrap as it provides more customization, but I again went with the quicker option.
- The frontend is a single page application that uses client-side routing with [React Router](https://reactrouter.com/).
- [Axios](https://www.npmjs.com/package/axios) was used for the HTTP client.

### Backend
- Extended backend to get players by team roster.


## Next steps

### Given more time I would...

- Add a search option to quickly find a player.
- Add team logos to the left of the teams list.
- Change the theme colors to match the selected team's primary/secondary colors.
- Add the option to select a second player card and align them side-by-side to compare player statistics.

### If the project were to be scaled I would...

- Implement Typescript.
- Use Jest, React-Testing-Library, and Storybook for testing.
- Use a more advanced state management library like Redux.

### Final Thoughts
This was a fun little project to work on as part of an interview proceess. I feel like I got to showcase my talents and am happy with the final result, given the time constraint. It was actually similar to a personal project I created called [PenaltyBias.com](https://www.penaltybias.com/), which I made to predict which nhl team will get the next powerplay opportunity (I was originally inspired by the work done by Michael Lopez on this). The code architecture also had a Python/Flask backend, and community via Axios with a React frontend. It is hosted on Netlify and Heroku, both free services, so sometimes it takes a while to load.
