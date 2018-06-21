import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, celebrityMain, celebrityOther, box }) => {
    return (
        <div>
            <div className='ma2'><strong>This looks like {celebrityMain}.</strong><br/>It could also be {celebrityOther}.</div>
            <div className='center ma'>
                <div className='absolute mt2'>
                    <img alt='' id='inputImage' src={imageUrl} width='500px' height='auto'/>
                    <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
                </div>
            </div>
        </div>
    )
};

export default FaceRecognition;