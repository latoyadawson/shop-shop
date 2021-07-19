import React, { useEffect } from 'react';
import Jumbotron from '../components/Jumbotron/index.js';
import { ADD_ORDER } from '../utils/mutations';


function Success() {
    return (
      <div>
        <Jumbotron>
          <h1>Success!</h1>
          <h2>
            Thank you for your purchase!
          </h2>
          <h2>
            You will now be redirected to the homepage
          </h2>
        </Jumbotron>
      </div>
    );
};

export default Success;
