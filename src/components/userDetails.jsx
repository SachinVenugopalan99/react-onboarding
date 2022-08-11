import React, { useEffect } from 'react'

const UserDetails = (props) => {

    const { values, handleChange, errors } = props;

    useEffect(() => {
        console.log(errors);
    })
    return (
        <div className='innerContainer'>
            <div className='titleContainer'>
            <div className='title'>
            Welcome! First things first... 
            </div>
            <div className='subTitle'>
                You can always change them later.
            </div>
            </div>
            <div className='inputContainer'>
            <div className='first-input'>
            <div className='titleHeader'>
                Full Name
            </div>
            <div className='input-container'>
            <input 
            type="text" 
            placeholder="Full Name" 
            value={values.email} 
            onChange={handleChange('fullName')}
            />
            </div>
            {errors?.fullName && (
                <div className='errorMessage'>
                    {errors.fullName}
                </div>
            )}
            </div>
            <div className='second-input'>
            <div className='titleHeader'>
            Display Name
            </div>
            <div className='input-container'>
            <input 
            type="text" 
            placeholder="Display Name" 
            value={values.email} 
            onChange={handleChange('displayName')}
            />
            </div>
            {errors?.displayName && (
                <div className='errorMessage'>
                    {errors.displayName}
                </div>
            )}
            </div>
            </div>
        </div>
    )
};
export default UserDetails;
