# FED-Assignment-2 Guess The Song Website
Guess The Song.io is a gamified website created for music lovers around the world to put their knowledge to the test. Users get to choose which type of quiz they feel coincides with their current listening and a song of that category is played for them giving them a time limit of 30 seconds to select from 3 options which song they think is playing. 

To add variety, there are a total of 3 gamemodes for the users to choose from; Random Songs, Genre Gambit and How Well Do You Know Your Artist. This is to ensure that users do not get bored easily of playing the same game constantly by switching up the types of songs that are played.
## Design Process
We made this website as a means of entertainment with a simple concept for our music lovers to enjoy. It is an fun and effective way for users to unwind through a universal language, music. The game is made to be easy to pick up while also including a challenging aspect being the time limit while not making it too difficult for the user. As a user, I would like a simple solution to destress or take my mind off something without taking up too much of my time. This website is so simple yet addictive as it requires not only mental dexterity but also having time constraints that are not too stressful but just right. All in all, so as to satiate the desires of both casual listeners and more dedicated fans, we have created a means of allowing both to put their listening abilities to the test whilst having a good time.
Wireframes: 
https://www.figma.com/file/gWSCXpg56W281c1GcI8ALy/Untitled?type=design&node-id=0-1&mode=design&t=1bOR12rSuWIqWTC0-0
## Features

### Existing Features
- Feature 1: The order of songs is randomized preventing users from memorizing the sequence
- Feature 2: A message is displayed upon the user reaching 200 points
- Feature 3: A message is displayed upon the user having 0 points left
- Feature 4: A separate message from feature 3 is displayed upon the user running out of time
- Feature 5: The options are locked from the user after the game is over
- Feature 6: A retry button appears if the user loses
- Feature 7: A play again button appears if the user wins
- Feature 8: Respective messages for getting the answer correct/wrong are displayed
- Feature 10: For every correct guess, the timer is reset
- Feature 11: A point is deducted every second the user takes to guess.
On top of that if the user guesses wrongly, the points deducted is the equivalent of the time taken to select the option (e.g 4 seconds taking, -4 points for getting the question wrong)
- Feature 12: Start button and Skip button
- Feature 13: Back button to return to menu
- Feature 14: Volume slider as well as pause/play button for audio
- Feature 15: Sidebar which allows users to go to the home page or select their desired gamemode using the dropdown menu
- Feature 16: Playlist pages for the user to select which playlist for the specific gamemode they would like to use
- Feature 17: For genre gambit mode, users get to pick from many different genres, each having 10 playlists per genre.
- Feature 18: For artist mode, users get to pick from many different artists

### Features Left to Implement
- Account creation so that users can save highscores, and appear on global leaderboards
- Allow users to create thier own playlists and options to enhance user participation
- Create new gamemodes such as endless mode that lets users play until they feel like stopping or a mode where they have a certain amount of lives
## Technologies Used
Languages:
1. HTML
2. CSS
3. JavaScript
4. [Bootstrap](https://getbootstrap.com/) 
    - improved css
5. [Spline](https://spline.design/)
    - used to create the main menu page
## Testing
1. Playlists
    1. Choose any gamemode and go to the playlists page
    2. Try each of the playlists by selecting them and seeing if they work
    3. Repeat for every gamemode and every playlist
2. Point System
    1. Start a game in any gamemode
    2. Click Start
    3. Check if the point counter and timer start decreasing(by 1 per second)
    4. Let the timer run out
    5. Get the answers wrong and run out of points
    6. Get the answers right and reach 200 points
    7. for the iv,v and vi, ensure the correct messages are displayed for each case
3. Game Mechanics and Relevant Buttons
    1. Start a game
    2. Ensure that the Start button is functioning
    3. Ensure that all 3 option buttons per song are clickable
    4. Ensure that the skip button is fucntioning
4. Miscellaneous
    1. Upon losing a game ensure a retry button appears and is functioning
    2. Upon winning a game enusre a try again button appears and is functioning
    3. For both cases, ensure the back button is working
5. Sidebar
    1. Open sidebar
    2. Ensure menu button directs users to menu upon clicking
    3. Ensure respective buttons for each gamemode are also functioning
6. Gamemodes
    1. Select Random Songs gamemode and check that it goes to playlist page
    2. Select Genre Gambit and for each genre, make sure that it goes to its respective playlist page
    3. Select Artist mode and for each artist, ensure that it takes the use to their respective quiz
7. Main Menu
    1. Click on one of the gamemodes from the main menu, ensure it takes the user to the right page
    2. Repeat with all gamemodes



## Credits

### Content

### Media

### Acknowledgements


