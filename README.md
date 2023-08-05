# Pathfinder-Xplorer
A pathfinding algorithm simulator that utilizes React to visually demonstrate how the most popular algorithms find their target.

## Try It Without Downloading
[kb-pathfinder-xplorer.netlify.app](https://kb-pathfinder-xplorer.netlify.app)

## Main Features
- Home page with an interactable 45x20 grid for simulation
- Customizable simulation environment from which include:
  - Setting starting node position
  - Setting target node position
  - Adding walls (algorithm cannot pass through walls)
    - To add a wall just press down on the grid and drag   
  - Eraser (for removing walls)   
- Available pathfinding algorithms:
  - A*
  - BFS
  - DFS
- Run button (to start visualization)
- Reset button (to reset grid)
- Shortest path visualization (after the algorithm finishes visualizing the shortest path from the start to the target is highlighted)

## How To Run
- Make sure Nodejs and NPM are installed on your device
- Open your terminal
- Navigate to the folder containing the package.json file
- Run the following commands

```
npm install

npm run dev
```
## Disclaimer
This application is unavailable on mobile & tablet sized devices. Due to the grid and the nature of the implemented drag mechanics, a mobile version would not provide a seamless UX experience and therefore was disabled

## Dependencies & Technologies Used
- ReactJS (scaffolded using Vite)
- React Context (State management)
- React-Router-Dom
- JavaScript
- HTML/CSS
- Tailwind-CSS
- Material-Tailwind
- React-Icons
- Hero-Icons
- Framer-Motion
   
