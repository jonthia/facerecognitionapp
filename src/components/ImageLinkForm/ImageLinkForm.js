import React from 'react';
import './ImageLinkForm.css';

// without destructuring we would have to use props.onInputChange
const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
    return (
        <div>
            <p className="f3">
            {'This App will detect faces in your pictures. Try it out!'}
            </p>
            <div className='center'>
                <div className='pa4 br3 shadow-5 center form'>
                {/* on change ie. keypress trigger the event onInputChange */}
                <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                    <button 
                    className='w-30 frow f4 link ph3 pv2 dib white bg-light-blue'
                    onClick={onImageSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
};

export default ImageLinkForm;