import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    document.title = 'Devoteam';
  }, []);

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <nav className='top'>
      {/* <a href="/"><img src="devoteamm-removebg-preview.png" alt="devoteam" width="50" height="50"/></a><h2 className="gauche">Devoteam</h2> */}
      <a href="/"><img src="Dev_logo_rgb.png" alt="devoteam" width="200" height="100"/></a>
        <div>
          <Button color='inherit' href='/login'>
            Login
          </Button>
          <Button variant='contained' href='/register'>
            Sign Up
          </Button>
        </div>
      </nav>
      <div className='landing-inner'>
        <h1>Scrum board</h1>
        <img src="Capture-removebg-preview.png" alt="devoteam" width="500" height="400"/>
        {/* <p>Just like <a href='https://trello.com/'>Trello</a>, but made by just one guy!</p> */}
        {/* <div className='buttons'>
          <Button variant='outlined' color='inherit' href='/register'>
            Sign Up
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Landing;
