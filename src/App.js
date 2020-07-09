import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    
    <div className="container">
      
      <div className="left">
          <h1 className="greeting">
          Hi Aaron
          </h1>
          <h3 className="timecount">
          Total 5 hours 42 minutes of breathing done.
          </h3>

          <h2 className="today">
          Today
          </h2>
          
          <h4 className="excerciseName">
          Breath stacking
          </h4>
          <div className="progressbar">
            <span> 4 sessions left </span>
            <div className="statusbar" style={{width: 116.43, background: '#FAE5A5'}}>
            </div>
          </div>

          <h4 className="excerciseName">
          PEP Therapy
          </h4>
          <div className="progressbar">
            <span> 5 minutes left </span>
            <div className="statusbar" style={{width: 140, background: '#ACA5FA'}}>
            </div>
          </div>

          <div className="gameLinkContainer">
          <a className="gameLink" href="/paint" >
              Collect more paint.
          </a>
          <a className="gameLink" href="/studio">
              <span>The studio.</span>
          </a>
          </div>
      </div>

      <div className="right">
        <div className="rightTop" style={{marginBottom: 37}}>
          <button className="sideScroll" type="button">
            <img src="/arrow.svg" alt="arrow"/>
          </button>
          <div className="leftDivide">
            My Paintings
            <div className="paintingFirst">
            </div>
          </div>
          <div className="rightDivide"> 
            <div className="painting">
            </div>
            <div className="painting">
            </div>
            <div className="painting">
            </div>
            <div className="painting">
            </div>
            <div className="painting">
            </div>
          </div>
          
         

        </div>
        <div className="rightBottom">
          Paint Collected
        </div>
      </div>
    
    </div>

    
      
      {/* <header className="">
        <div className="">
        <img src="white-background.png" className="white-background" alt= "white-background" />
        </div>
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
