import React from 'react'

const Workspace = (props) => {
    const { values, handleChange, errors } = props;
    return (
        <div className='innerContainer'>
            <div className='titleContainer'>
            <div className='title'>
            Let's set up a home for all your work 
            </div>
            <div className='subTitle'>
                You can always create another workspace later.
            </div>
            </div>
            <div className='inputContainer'>
            <div className='first-input'>
            <div className='titleHeader'>
                Workspace Name
            </div>
            <div className='input-container'>
            <input 
            type="text" 
            placeholder="Workspace Name" 
            value={values.email} 
            onChange={handleChange('workspace')}
            />
            </div>
            {errors.workspace && (
                <div className='errorMessage'>
                    {errors.workspace}
                </div>
            )}
            </div>
            <div className='second-input'>
            <div className='titleHeader'>
            Workspace URL
            <span className='optional'>
                (Optional)
            </span>
            </div>
            <div className='input-container'>
            <input
            type="url"
            disabled={true}
            placeholder="www.eden.com/"
            />
            <input 
            type="text" 
            placeholder="Workspace URL" 
            value={values.email} 
            onChange={handleChange('workspaceUrl')}
            />
            </div>
            </div>
            </div>
        </div>
    )
};

export default Workspace;
