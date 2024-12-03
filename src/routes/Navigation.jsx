import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router';
import { routes as _routes } from './routes';
import { keyframes } from '@mui/system';
import { styled } from '@mui/material/styles';
import { Error404 } from '../views/Error404';

// Keyframes for fadeIn and fadeOut animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-20px, 0);
  }
  to {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  to {
    transform: translate(-20px, 0);
    opacity: 0;
  }
`;

// Animation Wrapper styled component
const AnimationWrapper = styled('div')(({ transitionStage }) => ({
  animation: `${transitionStage === 'fadeIn' ? fadeIn : fadeOut} 0.2s forwards`,
}));

const Navigation = () => {
  return (
    <Router>
      <AnimatedRouter />
    </Router>
  );
}

const AnimatedRouter = () => {

  const [transitionStage, setTransitionStage] = useState('fadeIn');

  const role = 'public';
  let routes = _routes[role];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={`route-${index}`}
          path={route.path}
          element={
            <route.layout>
              <AnimationWrapper
                transitionStage={transitionStage}
                onAnimationEnd={() => {
                  if (transitionStage === 'fadeOut') {
                    setTransitionStage('fadeIn');
                  }
                }}
              >
                <route.component />
              </AnimationWrapper>
            </route.layout>
          }
        />
      ))}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export { Navigation };
