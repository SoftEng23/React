import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Typography from "@mui/material/Typography";
const options = ['Option 1', 'Option 2', 'Option 3'];


function App() {
  return (

    <div className='App'>
      <header>
        <h1>
          United Wealth Reserves
        </h1>
      </header>
      <div>
        <p className='Mission'>
          We are a Software Company creating digital solutions for your technology needs.
        </p>
      </div>
      <body>

        <div class="dropdown">
          <button class="dropbtn">Home</button>
          <div class="dropdown-content">
            <a href="https://uwealthreserves.com">Website</a>
            <a href="https://github.com/softeng23">Digital Solutions</a>
            <a href="https://uwealthreserves.com/about/">About Us</a>
          </div>
        </div>

        <table width="100%" border="0">


          <tr valign="top">
            <td bgcolor="#aaa" width="50">
              <b>Technologies</b><br />
              React<br />
              Angular<br />
              WordPress/PHP<br />
              HTML5/CSS3/Responsive Web Design<br />
              Java<br />
              MySQL<br />
              C Sharp<br />
            </td>

            <td className="Contact" bgcolor="#eee" width="100" height="200">
              <button className='button'> <a className="link" href="https://uwealthreserves.com/contact/">Contact Us!</a></button>
            </td>
          </tr>
          <tr>
            <td colspan="2" bgcolor="#b5dcb3">
              <center>
                Copyright © 2023 United Wealth Reserves LLC
              </center>
            </td>
          </tr>

        </table>
      </body>
    </div>
  );
}

export default App;
