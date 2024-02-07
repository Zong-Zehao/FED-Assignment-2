# FED-Assignment-2 Guess The Song Website
Guess The Song.io is a gamified website created for music lovers around the world to put their knowledge to the test. Users get to choose which type of quiz they feel coincides with their current listening and a song of that category is played for them giving them a time limit of 30 seconds to select from 3 options which song they think is playing. 
## Design Process
We made this website as a means of entertainment with a simple concept for our music lovers to enjoy. It is an fun and effective way for users to unwind through a universal language, music. The game is made to be easy to pick up while also including a challenging aspect being the time limit while not making it too difficult for the user. As a user, I would like a simple solution to destress or take my mind off something without taking up too much of my time. This website is so simple yet addictive as it requires not only mental dexterity but also having time constraints that are not too stressful but just right.
Wireframes: 
https://www.figma.com/file/gWSCXpg56W281c1GcI8ALy/Untitled?type=design&node-id=0-1&mode=design&t=1bOR12rSuWIqWTC0-0
## Features

### Existing Features
Feature 1: The order of songs is randomized preventing users from memorizing the sequence
Feature 2: A message is displayed upon the user reaching 200 points
Feature 3: A message is displayed upon the user having 0 points left
Feature 4: A separate message from feature 3 is displayed upon the user running out of time
Feature 5: The options are locked from the user after the game is over
Feature 6: A retry button appears if the user loses
Feature 7: A play again button appears if the user wins
Feature 8: Respective messages for getting the answer correct/wrong are displayed
Feature 10: For every correct guess, the timer is reset
Feature 11: A point is deducted every second the user takes to guess.
On top of that if the user guesses wrongly, the points deducted is the equivalent of the time taken to select the option (e.g 4 seconds taking, -4 points for getting the question wrong)
Feature 12: Start button and Skip button
Feature 13: Back button to return to menu
Feature 14: Volume slider as well as pause/play button for audio
Feature 15: Sidebar which allows users to go to the home page or select their desired gamemode using the dropdown menu
Feature 16: Playlist pages for the user to select which playlist for the specific gamemode they would like to use

### Features Left to Implement
-Account creation so that users can save highscores, and appear on global leaderboards
-Allow users to create thier own playlists and options to enhance user participation
-Create new gamemodes such as endless mode that lets users play until they feel like stopping or a mode where they have a certain amount of lives
## Technologies Used
Languages:
1. HTML
2. CSS
3. JavaScript
4. [Bootstrap](https://getbootstrap.com/) 
    -improved css
## Testing
1. Playlists
i. Choose any gamemode and go to the playlists page
ii. Try each of the playlists by selecting them and seeing if they work
iii. Repeat for every gamemode and every playlist
2. Point System
i. Start a game in any gamemode
ii. Click Start
iii. Check if the point counter and timer start decreasing(by 1 per second)
iv. Let the timer run out
v. Get the answers wrong and run out of points
vi. Get the answers right and reach 200 points
vii. for the iv,v and vi, ensure the correct messages are displayed for each case
3. Game Mechanics and Relevant Buttons
i. Start a game
ii. Ensure that the Start button is functioning
iii. Ensure that all 3 option buttons per song are clickable
iv. Ensure that the skip button is fucntioning
4. Miscellaneous
i. Upon losing a game ensure a retry button appears and is functioning
ii. Upon winning a game enusre a try again button appears and is functioning
iii. For both cases, ensure the back button is working
5. Sidebar
i. Open sidebar
ii. Ensure menu button directs users to menu upon clicking
iii. Ensure respective buttons for each gamemode are also functioning

## Credits

### Content

### Media

### Acknowledgements

