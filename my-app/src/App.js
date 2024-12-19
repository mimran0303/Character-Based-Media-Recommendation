import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Header-title">
      <h1>✨ CharacterQuest AI ✨</h1>
      </div>
        
        <div className = "Paragraph-Description">
        <p>
        Do you ever find yourself captivated by a movie character—someone whose quirks, bravery, or humor stick with you long after the credits roll? At CharacterQuest AI, we connect you to more of what you love.
Simply share your favorite character OR  MBTI personality type and Enneagram type, and our recommendation engine will guide you to movie characters with the same charm, wit, or spirit.                                                                                                
        </p>
        <p>Don’t know your MBTI or Enneagram? Both tests are linked below!</p>
        <a
          className="App-link"
          href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjRwYe1_rKKAxVzRUECHeKbJLMYABAAGgJ3cw&ae=2&aspm=1&co=1&ase=5&gclid=CjwKCAiAgoq7BhBxEiwAVcW0LEiRYowhiwEc46ypN2B6sxMUVNCo8IhFejh6mdR7TFzr-D4x0Nv8JRoCxioQAvD_BwE&ei=5p9jZ-D2D_O3wN4Pxr2IqAI&ohost=www.google.com&cid=CAESVuD21PyQh1WET5WnsP1DcgNRSUYsGo18JmNNZDwVziOrEvoJYqwSZSz_awKQGa7mjPnb7I9OO0MXGBUX9NuZ5W4Q6H4oloTlLHGEbJ192Xu49MAwTQ2-&sig=AOD64_1TZZWDQLMAIa3MKajvrx46_y8HTg&q&sqi=2&adurl&ved=2ahUKEwjggf20_rKKAxXzG9AFHcYeAiUQ0Qx6BAgLEAE"
          target="_blank"
          rel="noopener noreferrer"
        >
        <li> <u> MBTI Test : 16personalities.com </u></li>
        </a>
        <p>   </p>
        <a
          className="App-link"
          href="https://enneagramuniverse.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <li> <u>Enneagram Test : enneagramuniverse.com</u></li>
        </a>
        <p>Your next favorite character is just a click away. Let’s dive in! 🌟 </p>
        </div>

        <div className="Input-Fields">
          <form>
            {/* Movie Character Input */}
            <div style={{ marginBottom: '20px' }}>
              
              <input
                type="text"
                id="movie-character"
                name="movie-character"
                className="line-input"
                placeholder="Enter a movie character"
              />
            </div>

            {/* MBTI Input */}
            <div style={{ marginBottom: '20px' }}>
              
              <input
                type="text"
                id="mbti"
                name="mbti"
                className="line-input"
                placeholder="Enter MBTI type"
              />
            </div>

            {/* Enneagram Input */}
            <div style={{ marginBottom: '20px' }}>
              
              <input
                type="text"
                id="enneagram"
                name="enneagram"
                className="line-input"
                placeholder="Enter Enneagram type"
              />
            </div>

            {/* Submit Button */}
            <button type="button" className="button">
              
              Submit!
            </button>

          </form>
        </div>

      </header>
    </div>
  );
}

export default App;
