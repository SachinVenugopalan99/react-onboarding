import React from 'react'
import myself from '../assets/myself.png';
import team from '../assets/team.png'

const OtherDetails = (props) => {
    const { values, handleUser, errors } = props;
    return (
        <div className='innerContainer'>
            <div className='titleContainer'>
            <div className='title'>
            How are you planning to use Eden?
            </div>
            <div className='subTitle'>
            We'll streamline your setup experience accordingly.
            </div>
            </div>
            <div className='user-container'>
            <div className={`userBox ${values.usage === 'myself' && 'border-purple'} ${errors.usage && !values.usage && 'red-border'}`}
            onClick={() => handleUser('myself')}
            >
            <img 
                src={myself}
                className='image'
                alt=""/>
                <div className='boxTitle'>
                For myself
                </div>
                <div className='boxDescription'>
                Write better. Think more clearly. Stay organized
             </div>
            </div>
            <div className={`teamBox ${values.usage === 'team' && 'border-purple'} ${errors.usage && !values.usage && 'red-border'}`}
            onClick={() => handleUser('team')}>
            <img 
                src={team}
                className='image'
                alt=""/>
             <div className='boxTitle'>
                With my team
             </div>
             <div className='boxDescription'>
                Wikis, docs, tasks & projects, all in one place.
             </div>
            </div>
            </div>
        </div>
    )
};

export default OtherDetails;
