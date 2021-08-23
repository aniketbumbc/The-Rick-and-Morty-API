# The-Rick-and-Morty-API Application

In this application user can able to view characters from rick and mortry api.
- Name of character.
- character information like. (Name and Species)
- Origin and location name.
- Dimension, amount of residents. (Modal popup)
- Name of the episodes the character is featured on.(Grid view)

## Features

- On an application load successfully user will able to see cards which contains character information,If in the case of error occurs then there will be alert as well as error message occur on UI.
- After cards loads user can click on episodes to view episodes information and residents, dimension.
- User can see episodes which character is featured on on click of episode button.
- If user want residents count information then he/she can click on Residents button, in this case popup will be appear.
- After successful episodes load on grid view, user can click on back button back to cards page.

## Technology

### Frontend

- Frontend stack is **React-typescript,hooks and css,Material UI  to show a grid and modal.**
- Implementation of application using two componets, **Ricks component** which show ricks character cardsand **Episodes Component** which contains episodes of grid.
- **Loader** implementation is on episodes page, In case of network slow down or api dealy respones.
- Application is fully responsive able to view on ipad mode as well as mobile view mode.
- Runs the app in the development mode.
- Open **http://localhost:3000** to view it in the browser.

## Installation
 **Need apisever run simultaneously**
```sh
clone repo
cd rickandmonrty
npm install
npm start
```

## Preview

![Project](https://media.giphy.com/media/gLxri3dQAvonbdGHwS/giphy-downsized-large.gif?cid=790b7611de7f03d1dd9a0919178a8fc8c1c59ae7ce1eed85&rid=giphy-downsized-large.gif&ct=g)
