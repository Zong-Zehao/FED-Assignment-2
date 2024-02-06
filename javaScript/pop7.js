let fetchingSong = false;
let audioPlayer;
let previousTrackId;
let points = 30;
let timer;
let startTime;
const initialTime = 30;
let currentTime = initialTime;

const getRandomTrackId = async () => {
    const playlistUrl = 'https://deezerdevs-deezer.p.rapidapi.com/playlist/1386209585';
    const playlistOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '57c85ed06fmsh39d26ca54fd5307p130ecejsn6bd33960a5cb',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(playlistUrl, playlistOptions);
        const playlistData = await response.json();
        const currentTrackIndex = playlistData.tracks.data.findIndex(track => track.id.toString() === previousTrackId);
        const trackNames = playlistData.tracks.data
            .filter((_, index) => index !== currentTrackIndex)
            .map(track => track.title);

        const randomIndex = Math.floor(Math.random() * trackNames.length);
        return trackNames[randomIndex];
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const getTrackDetails = async (trackName) => {
    const trackUrl = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${encodeURIComponent(trackName)}`;
    const trackOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '57c85ed06fmsh39d26ca54fd5307p130ecejsn6bd33960a5cb',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(trackUrl, trackOptions);
        const result = await response.json();
        if (result.data && result.data.length > 0) {
            return {
                title: result.data[0].title,
                preview: result.data[0].preview,
                trackId: result.data[0].id.toString()
            };
        } else {
            return getTrackDetails(await getRandomTrackId());
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const displayResult = async (title, preview, trackId) => {
    previousTrackId = trackId;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Song Playing</h2>
        <audio controls autoplay crossorigin="anonymous" controlsList="nodownload" id="audioPlayer">
            <source src="${preview}" type="audio/mp3">
            Your browser does not support the audio element.
        </audio>
    `;

    const optionsDiv = document.getElementById('options');
    const wrongOptions = await generateWrongOptions();
    const allOptions = shuffleArray([...wrongOptions, title]);
    optionsDiv.innerHTML = allOptions.map(option => `
        <button class="option-button" onclick="checkAnswer('${encodeURIComponent(option)}', '${encodeURIComponent(title)}')" ${points <= 0 || currentTime <= 0 || points >= 600 ? 'disabled' : ''}>${option}</button>
    `).join('');

    audioPlayer = document.getElementById('audioPlayer');
    startTimer();
    startTime = new Date();

    if (points <= 0 || currentTime <= 0 || points >= 200) {
        audioPlayer.pause();
        document.getElementById('getRandomSongBtn').disabled = true;
        document.getElementById('skipSongBtn').disabled = true;
        document.querySelectorAll('.option-button').forEach(button => button.disabled = true);
        document.getElementById('retryButton').style.display = 'block';
        resetTimer();
    }

    checkWinCondition();
};

const getRandomSong = async () => {
    if (!fetchingSong && points > 0 && points < 200) {
        fetchingSong = true;
        try {
            resetTimer();
            currentTime = initialTime;
            updateTimerDisplay();
            const trackName = await getRandomTrackId();
            const { title, preview, trackId } = await getTrackDetails(trackName);
            console.log('Fetched Song:', JSON.stringify(title));

            displayResult(title, preview, trackId);
        } catch (error) {
            console.error(error);
        } finally {
            fetchingSong = false;
        }
    }
};

const skipSong = () => {
    if (points > 0 && points < 200) {
        resetTimer();
        getRandomSong();
    }
};

const retryGame = () => {
    points = 30;
    currentTime = initialTime;
    document.getElementById('points').textContent = points;
    document.getElementById('timer').textContent = formatTime(currentTime);
    document.querySelectorAll('.option-button').forEach(button => button.disabled = false);
    document.getElementById('retryButton').style.display = 'none';
    document.getElementById('getRandomSongBtn').disabled = false;
    document.getElementById('skipSongBtn').disabled = false;
    getRandomSong();
};

const generateWrongOptions = async () => {
    const wrongOptions = [];
    for (let i = 0; i < 2; i++) {
        const wrongTrackName = await getRandomTrackId();
        wrongOptions.push(wrongTrackName);
    }
    return wrongOptions;
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const checkAnswer = async (selectedOption, correctAnswer) => {
    const resultDiv = document.getElementById('result');
    const pointsSpan = document.getElementById('points');
    const sanitizedSelectedOption = encodeURIComponent(selectedOption);
    const sanitizedCorrectAnswer = encodeURIComponent(correctAnswer);

    const endTime = new Date();
    const timeDifferenceInSeconds = Math.floor((endTime - startTime) / 1000);

    if (sanitizedSelectedOption === sanitizedCorrectAnswer) {
        points += 30;
        resultDiv.innerHTML += `<p style="color: green;">Correct! Earned 30 points.</p>`;
    } else {
        points = Math.max(0, points - timeDifferenceInSeconds);
        resultDiv.innerHTML += `<p style="color: red;">Wrong! Deducted ${timeDifferenceInSeconds} points.</p>`;
    }

    pointsSpan.textContent = points;

    if (points <= 0 || currentTime <= 0) {
        stopGameAndShowLoss();
    } else if (points >= 200) {
        stopGameAndCongratulate();
    } else {
        getRandomSong();
    }
};

const timePenalty = () => {
    if (points > 0 && currentTime > 0 && points < 200) {
        points = Math.max(0, points - 1);
        document.getElementById('points').textContent = points;
    }

    if (points <= 0 || currentTime <= 0) {
        stopGameAndShowLoss();
    }
};

const startTimer = () => {
    timer = setInterval(() => {
        if (points > 0 && currentTime > 0 && points < 200) {
            currentTime--;
            updateTimerDisplay();
            timePenalty();
        } else {
            clearInterval(timer);
            if (points <= 0) {
                stopGameAndShowLoss();
            } else {
                stopGameAndCongratulate();
            }
        }
    }, 1000);
};

const resetTimer = () => {
    clearInterval(timer);
};

const stopGame = () => {
    audioPlayer.pause();
    document.getElementById('getRandomSongBtn').disabled = true;
    document.getElementById('skipSongBtn').disabled = true;
    document.querySelectorAll('.option-button').forEach(button => button.disabled = true);
    document.getElementById('retryButton').style.display = 'block';
};

const stopGameAndCongratulate = () => {
    if (points >= 200) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<p style="color: green;">Congratulations, you've won!</p>`;
        stopGame();
        document.getElementById('retryButton').style.display = 'block';
        document.getElementById('getRandomSongBtn').disabled = true;
        document.getElementById('skipSongBtn').disabled = true;
    }
};

const stopGameAndShowLoss = () => {
    if (points <= 0) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<p style="color: red;">Too Bad, You're out of points. Try Again?</p>`;
        stopGame();
        document.getElementById('retryButton').style.display = 'block';
        document.getElementById('getRandomSongBtn').disabled = true;
        document.getElementById('skipSongBtn').disabled = true;
    } else {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<p style="color: red;">Oh no, you are SLOW. Try again?</p>`;
        stopGame();
        document.getElementById('retryButton').style.display = 'block';
        document.getElementById('getRandomSongBtn').disabled = true;
        document.getElementById('skipSongBtn').disabled = true;
    }
};

const updateTimerDisplay = () => {
    document.getElementById('timer').textContent = formatTime(currentTime);
};

const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const goBack = () => {
    window.location.href = desiredBackURL;
};

const checkWinCondition = () => {
    if (points >= 200) {
        stopGameAndCongratulate();
    }
};
