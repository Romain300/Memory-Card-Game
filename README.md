# Pokémon Memory Game

A simple Pokémon-themed memory game built with React. The goal is to click on different Pokémon without repeating any selection. The game tracks your current and best score.

## Features
- Displays a grid of Pokémon cards fetched from the PokéAPI
- Players click on Pokémon cards without repeating any selection
- Score increases for each unique selection
- Best score is saved during gameplay
- Pokémon cards shuffle after each click
- Hover effects with scaling and rotation
- Responsive design for various screen sizes

## How to Play
- Click on a Pokémon card to start the game.
- Avoid clicking on the same Pokémon twice.
- Each unique selection increases the score.
- If you click on a repeated Pokémon, the game resets and your score returns to zero.
- The best score is tracked throughout the session.

## Technologies Used
- **React** (Functional Components, Hooks)
- **PokéAPI** (for fetching Pokémon data)
- **CSS** (for styling, animations, and responsive design)

## Styling Details
### Custom Styles for Pokémon Types:
- Grass, Fire, Water, Electric, Psychic, Dark, Fairy, Bug, Normal, Poison, and Ground types have unique borders and backgrounds.

### Hover Effects:
- Cards scale up and rotate slightly on hover.

### Responsive Design:
- Adjusts layout for screens below 1160px and 500px width.

## Future Improvements
- Improve UI/UX with animations
- Add more Pokémon variety
- Implement local storage for best score persistence
- Add difficulty levels

## License
This project is licensed under the MIT License.