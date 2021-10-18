import React from 'react';
import { InfoSection, Pricing } from '../../components';
import {homeobjOne, homeobjTwo, homeobjThree, homeobjFour,  } from './Data';

export const Home = () => {
  return (
    <div>
      <InfoSection {...homeobjOne}/>
      <InfoSection {...homeobjTwo}/>
      <InfoSection {...homeobjThree}/>
      <Pricing />
      <InfoSection {...homeobjFour}/>
    </div>
  );
};
