import React from 'react';
import { InfoSection, } from '../../components';
import {homeobjOne, homeobjTwo, homeobjThree, } from './Data';

export const SignUp = () => {
    return (
        <div>
            <InfoSection {...homeobjOne}/>
            <InfoSection {...homeobjTwo}/>
            <InfoSection {...homeobjThree}/>
        </div>
    )
}
