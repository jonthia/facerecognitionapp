import React from 'react';

const Navigation = ({onRouteChange, isSignedIn, route}) => {
    console.log(route)
    if(isSignedIn) {
        return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signout')}>Sign Out</p>
        </nav>
        )
    } else if (route === 'register') {
        return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signin')}>Sign In</p>
        </nav>
        )
    } else if (route === 'signin' || route ==='signout') {
        return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('register')}>Register</p>
        </nav>
        )
    }
    
};

export default Navigation;