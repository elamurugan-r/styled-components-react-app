import React from 'react';
import { InfoSection } from '../../components';
import { homeobjTwo,  homeobjFour,  } from './Data';

export const Products = () => {
  return (
    <div>
      <InfoSection {...homeobjTwo}/>
      <InfoSection {...homeobjFour}/>
    </div>
  );
};
