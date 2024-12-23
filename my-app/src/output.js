import './output.css';

function output() {
    return (
      <div className="output">
        <header className="output-header">
          <div className="Header-title">
            <h1>✨ List of Characters ✨</h1>
          </div>
        <div className="Paragraph-Description">
          <p>Top 10 Movies/Characters:</p>
          <ol>
            <li>Character 1</li>
            <li>Character 2</li>
            <li>Character 3</li>
            <li>Character 4</li>
            <li>Character 5</li>
            <li>Character 6</li>
            <li>Character 7</li>
            <li>Character 8</li>
            <li>Character 9</li>
            <li>Character 10</li>
          </ol>
        </div>
        {/* Restart Button */}
        <button type="button" className="button">
          Restart!
        </button>
        </header>

      </div>
    );
  }
  

export default output;
