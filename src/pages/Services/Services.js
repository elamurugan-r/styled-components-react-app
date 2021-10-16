import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeobjFour,  } from './Data';

export const Services = () => {
    return (
        <div>
            <Pricing />
            <InfoSection {...homeobjFour}/>
        </div>
    )
}
