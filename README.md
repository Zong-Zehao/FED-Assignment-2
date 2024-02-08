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
- Feature 17: For genre gambit, users get to pick from many different genres, each having up to 10 playlists per genre.
- Feature 18: For artist mode, users get to pick from many different artists
- Feature 19: For random mode, users get to choose a playlist which has random songs, and they can try guess the songs that they may have never heard of before.

### Features that we considered to Implement
- Account creation so that users can save highscores, and appear on global leaderboards
- Allow users to create thier own playlists and options to enhance user participation
- Create new gamemodes such as endless mode that lets users play until they feel like stopping or a mode where they have a certain amount of lives
- We did not implement these features as we felt that we may not have enough time to make them work properly before submission as we were more focused on making the main part of the game well, which is the guessing of the songs, as well as making the point system challenging, yet not too challenging for the users to score high. We were also more focused on how to make the game simple and addictive to play. We also focused quite a bit on the design of the website, as we wanted the website to look simple, so that user's will not find it hard using our website. 
## Technologies Used
Languages:
1. HTML
2. CSS
3. JavaScript
4. [Bootstrap](https://getbootstrap.com/) 
    - improved css (we used the cards)
5. [Spline] (https://app.spline.design/file/3846d49e-ab71-457a-9269-7111c1ba43fd)
    - used to create the main menu page, to make it interactive and unique.
6. Lottie animations:
    - used to list the playlist number so the playlist listings will not be boring looking. 
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

Our project looks similar across different browsers. on some browsers like the microsoft edge, the cards looks bigger / the website is a bit more zoomed in, but these to us feel like its very minor and does not affect the website much. We have also tested on different screen sizes and came to a conclusion that all of our webpages are responsive, and does not look weird when changing to different screen sizes. However for the home page, if the screen size is smaller on the laptop, the home page is a bit more zoomed in, but it does not affect any of the main parts in the home page.

In addition, one problem we found while testing the website is that the website tends to be running slow. We suspect that it is caused by the many lottie animations we have added into the website.

Secondly, for the songs that have ' as the special character, the option with that special character won't work as the game cannot recognize that special character. We have tried fixing it but to no avail, and that is the only special character that we cannot make our game recognize it, and register it as an input. In the end, we wrote a message beside the Goal:, saying that if the options are not working, just skip the song as the only scenario where the option is not working is when the option as ' as the special character. 

Thirdly, we found out through our testing, the songs that have already been played appears again. We have tried to fix it by coding in java script file to prevent the same song from playing again, but it did not help as the previously played songs are still in rotation, and will still appear. In the end, we decided to delete the code as it will be useless in the file.


## Credits
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
### Content
We did not copy / refer to any web templates. All of the design made in the website are done using our imaginations. We ONLY used bootstrap for navbar and card. 
These are the bootstrap links:
https://getbootstrap.com/docs/5.3/components/navbar/ (NAVBAR)
https://getbootstrap.com/docs/5.3/components/card/ (CARD)

This is the link to the website hosted on github
https://zong-zehao.github.io/FED-Assignment-2/


### Media
Demo video:
https://drive.google.com/file/d/1JxR7tiSTs0y6-T0IqGAyPskftzFv9uYk/view?usp=sharing

### Link for all the pictures:
Pop picture
https://i.pinimg.com/736x/38/54/76/385476c1a1e0448b14fb97debb970c20.jpg

EDM picture
https://pwrply.com/wp-content/uploads/2022/03/1.png

rap picture
https://cdn.playlists.net/images/playlists/image/medium/8a280964d790b1fcc7698c165061c01b.jpg

rock picture
https://www.udiscovermusic.com/wp-content/uploads/2015/09/rock_playlist_final.jpg

k-pop picture
https://theappalachianonline.com/wp-content/uploads/2021/04/Playlist-of-the-week-KPOP.jpg

r&b picture
https://www.judgeofmusic.com/wp-content/uploads/2016/01/mqdefault-8.jpg

### artist picture:
Ariana grande:
https://www.cheatsheet.com/wp-content/uploads/2020/10/ariana-grande-2016-grammy-awards.jpg

beabadobee:
https://testset.io/wp-content/uploads/2020/07/Beabadoobee-Parallax.jpg

Billie Eilish
https://static.billboard.com/files/2020/11/Billie-Eilish-VF-Oscar-Party-2020-Billboard-1548-1604945822-compressed.jpg

black pink
https://www.rollingstone.com/wp-content/uploads/2019/04/blackpink-album-review.jpg

Brent Faiyaz
https://cdn.vox-cdn.com/thumbor/ieKJSJuS0V7eYU6QELaiOwyb7HI=/0x0:5760x3840/2420x1613/filters:focal(2420x1460:3340x2380)/cdn.vox-cdn.com/uploads/chorus_image/image/68738422/image1.7.jpeg

Bruno mars
https://www.cheatsheet.com/wp-content/uploads/2021/03/Bruno-Mars.jpg

BTS
https://0.soompi.io/wp-content/uploads/2017/02/02070401/bts-group-3.jpg

cardi b
https://assets.capitalxtra.com/2018/20/cardi-b-coachella--1526980452.jpg

charli puth
https://images3.alphacoders.com/908/908618.jpg

coldplay
https://www.rollingstone.com/wp-content/uploads/2018/06/rs-184033-53049468.jpg

Daniel Caesar
https://s3-ap-southeast-2.amazonaws.com/savetonight/2018/03/daniel_caesar_the_met_markus_ravik_0318-005.jpg

doja cat 
https://www.nawpic.com/media/2020/doja-cat-nawpic-10.jpg

drake
https://townsquare.media/site/812/files/2021/07/attachment-drake1.jpg?w=1200

dua lipa
https://static.universal-music.de/asset_new/401094/195/view/dua-lipa-2016.jpg

ed Sheeran
https://media.distractify.com/brand-img/NqvxqpH7C/0x0/gettyimages-800829628-1567012061419.jpg

harry styles
https://people.com/thmb/dl_FwYnNl6PvuDgEFzwnJiHWroA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(659x69:661x71)/harry-styles-grammys-tout-020523-
689a9fd053194ca693c1f3bac13e4fdb.jpg


ice spice
https://townsquare.media/site/812/files/2023/05/attachment-ice-spice1.jpg

imagine dragons:
https://d.newsweek.com/en/full/1204196/imagine-dragons-main-eric-ray-davidson.jpg

Jungkook
https://static.asiachan.com/Jungkook.full.121931.jpg

kanye west
https://www.bostonherald.com/wp-content/uploads/2020/06/Gap-Kanye_West_72749-2.jpg?w=1080

laufey
https://www.celebrityleader.com/wp-content/uploads/2021/05/Laufey_Photos_Press-Photo_Film-3-PC_-Blythe-Thomasc-1536x1023.jpg

lil tecca
https://static.billboard.com/files/media/01-Lil-Tecca-press-by-ShotByCones-2019-billboard-1548-compressed.jpg

lana del rey
https://filmdaily.co/wp-content/uploads/2021/01/lana-del-rey-03.jpg

mitski
https://www.bkmag.com/wp-content/uploads/2016/05/Mitski.jpg

newjeans
https://wallpapercave.com/wp/wp11772419.jpg

nicki minaj
https://cdn.vox-cdn.com/thumbor/t9tIGMXYsj5f0u1Jk20QdQ7Vdpc=/0x0:1920x1080/1200x800/filters:focal(766x492:1072x798)/cdn.vox-
cdn.com/uploads/chorus_image/image/66524401/Nicki_Minaj_1_e1537459995400_1920x1080.0.jpg


taylor swift
https://hdqwalls.com/wallpapers/taylor-swift-2018-tx.jpg

the weeknd
https://biographytoday.org/wp-content/uploads/2019/03/the-weeknd_151364.jpeg

justin Bieber
https://townsquare.media/site/252/files/2015/08/justin-bieber-wdym.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89

yeat
https://www.enwallpaper.com/wp-content/uploads/2023/02/Yeat-1645568576.jpg

twenty one pilots
https://thegauntlet.ca/wp-content/uploads/2021/06/image.jpeg

arctic monkeys
https://townsquare.media/site/443/files/2017/09/arcticMonkeys.jpg

steve lacy:
https://media1.popsugar-assets.com/files/thumbor/K9bWNYj5f808HvqkJ8sCDzDiaaU/fit-
in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/12/26/847/n/1922283/6cc320375e050806a51916.68020174_/i/best-steve-lacy-songs.jpg

### website background images:
https://opengameart.org/sites/default/files/Starry%20night%20Image.png
https://opengameart.org/sites/default/files/background0.png

### spline background link:
https://app.spline.design/file/3846d49e-ab71-457a-9269-7111c1ba43fd

### lottie picture link:
https://lottiefiles.com/animations/nine-number-hyeRsn7m2L
https://lottiefiles.com/animations/eight-number-GH6r5FfH9j
https://lottiefiles.com/animations/seven-number-faOzqHpi9g
https://lottiefiles.com/animations/six-number-4tkQY1kXZo
https://lottiefiles.com/animations/five-number-qMt2gyyBkM
https://lottiefiles.com/animations/four-number-XKqNPTMkHV
https://lottiefiles.com/animations/three-number-TeJlpXfqtj
https://lottiefiles.com/animations/two-number-rY96cUm22T
https://lottiefiles.com/animations/one-number-fb84JXRe7k
https://lottiefiles.com/animations/tenor-2x20-9d2gRFZvBw
https://lottiefiles.com/animations/girl-listening-to-music-taLUHBXg1O
https://lottiefiles.com/animations/generate-layout-FcLbOVr7DC
https://lottiefiles.com/animations/generator-Am01yfqhB4
https://lottiefiles.com/animations/woman-singer-in-recording-studio-Ok5EChRYXe

### Acknowledgements
My inspiration for the 3d home page came from seeing the 3d models in spline while I was using it for my web dev blog for my wix website. (https://app.spline.design/home)


