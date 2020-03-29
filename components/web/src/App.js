import React from 'react';
import './App.css';

const App = () => 
  <div className="App">
    <header className="App-header">

      <h2>
        Enter Employee Information
      </h2>

      <br></br>
      <br></br>

      <div>
        <label for="employeename">Employee Name: </label>
        <input class="form-control" name="employeename" />
        
        <br></br>

        <label for="role">Role: </label>      
        <select class="form-control" name="role">
          <option>Delivery</option>
          <option>Chef</option>
        </select>

        <br></br>
        <label for="traveled">Traveled abroad?</label>
        <br></br>
        <input class="form-control" type="radio" name="traveledabroad" value="true" />
        <label for="yes">Yes</label>
        <input class="form-control" type="radio" name="traveledabroad" value="false" />
        <label for="no">No</label>
	    </div>

      <br></br>

      <div>
            <input id="submitbutton" type="submit" className="button"  value="Submit"/>
      </div>
    </header>

    <footer>
        Your new web app, stamped out with <span role="img" aria-label="love">💖</span> and care by&nbsp; 
        <a className="bp-link" href="https://platter.dev" target="_blank" rel="noopener noreferrer">Platter</a>
      </footer>
  </div>;

export default App;
