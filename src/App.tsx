import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>React Developer challenge</h1>
      <h4>Build a real working timer</h4>
      <hr />
      <h3>Requirements</h3>
      <ol>
        <li>
          When first loading the app the timer shall be in an “initial” state:
          <a className="button call-button answer-button">
            <i className="material-icons">call</i>
          </a>
          <pre>
            Background: #5EA100 <br />
            Image: &lt;i class="material-icons"&gt;call&lt;/i&gt;
          </pre>
        </li>
        <li>
          When clicking the timer button it should start counting up from 00:00
          with a precision of one second.
          <br />
          <a className="button call-button hangup-button">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <i
                className="material-icons"
                style={{
                  flex: 1,
                  color: 'white',
                  transform: 'rotate(-225deg)',
                  position: 'relative',
                  top: '2px',
                }}
              >
                call
              </i>
              <div
                style={{
                  flex: 1,
                  marginLeft: '1rem',
                  color: 'white',
                  justifyContent: 'right',
                }}
              >
                00:00
              </div>
            </div>
          </a>
          <pre>
            Rotation of icon: -225deg <br />
            Background: #aa2222
          </pre>
        </li>
        <li>
          The timer shall continue counting up until clicking the button again
          at which point it should return to the “initial” state.
        </li>
        <li>
          When clicking the button again the timer should start back at step 2.
        </li>
      </ol>
    </div>
  );
}
