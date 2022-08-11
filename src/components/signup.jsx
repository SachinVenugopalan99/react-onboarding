import React, { useState } from 'react';
import StepProgressBar from './progressBar';
import Confirmation from './confirmation';
import OtherDetails from './otherDetails';
import UserDetails from './userDetails';
import Workspace from './workspace';
import symbol from '../assets/symbol.png'
import './styles.scss'

const Signup = () => {
    const [progress, setProgress] = useState(17);
    const [step, setStep] = useState(1);
    const [values, setValues] = useState({
        fullName : '',
        displayName: '',
        workspace: '',
        workspaceUrl: '',
        usage: ''
    })
const [errors, setErrors] = useState({
        fullName : '',
        displayName: '',
        workspace: '',
        usage: false
    });

    const checkForErrors = () => {
        let error = false
        console.log(values);
        let tempErrors = { ...errors }
        switch(step) {
            case 1:
        if(!values.fullName){
            tempErrors = {...tempErrors, fullName: 'Full Name cannot be empty'};
            error= true;
        } else {
            tempErrors = {...tempErrors, fullName: ''};
        }
        if(!values.displayName){
            tempErrors = {...tempErrors, displayName: 'Display Name cannot be empty'};
            error= true;
        } else {
            tempErrors = {...tempErrors, displayName: ''};
        }
        break;
        case 2:
            if(!values.workspace){
                tempErrors = {...tempErrors, workspace: 'Workspace cannot be empty'};
                error= true;
            } else {
                tempErrors = {...tempErrors, workspace: ''};
            }
            break;
            case 3:
                if(!values.usage){
                    tempErrors = {...tempErrors, usage: true};
                    error= true;
                }
                break;
            default:
            break;
        }
        if (!error) {
            if (step !== 4){
                setStep((step) => step +1);
                setProgress((progress) => progress + 34);
            }
        }
        setErrors(tempErrors);
    }

    const handleChange = input => e => {
        setValues({...values, [input]: e.target.value});
    }

    const handleUser = (title) => {
        setValues({...values, usage: title});
    }

const stepDetails = () => {
    switch(step) {
        case 1: 
        return(
            <UserDetails 
            handleChange={handleChange}
            values={values}
            errors={errors}
            />
        )
        case 2:
            return(
                <Workspace 
                handleChange={handleChange}
                values={values}
                errors={errors}
                />
            )
        case 3:
            return(
                <OtherDetails 
                handleUser={handleUser}
                values={values}
                errors={errors}
                />
            )
        case 4:
            return (
                <Confirmation 
                handleChange={handleChange}
                values={values}
                />
            )
        default:
            return
    }
}

    return (
        <div className='outerContainer'>
            <div className='container'>
            <div className='headerContainer'>
                <img 
                src={symbol}
                className='image'
                alt=""/>
                <div className='headerText'>
                    Eden
                </div>
            </div>
            <div className='progressBar'>
            <StepProgressBar
            progress={progress}/>
            </div>
            <div className='subComponents'>
            {stepDetails()}
            </div>
            <div className='button'
            onClick={checkForErrors}>
            {step === 4 ? 'Launch Eden' : 'Create Workspace'}
            </div>
            </div>
        </div>
    )
}
export default Signup;
