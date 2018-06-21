import React from 'react';
import { URLSearchParams } from 'url';

class SignIn extends React.Component {
    constructor(props) {
        super();
        this.state= {
            signInEmail: '',
            signInPassword: ''
        }
    }

    // when the input boxes are typed in...
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    // when the signin button is pressed post the data to server
    onSubmitSignIn = () => {
        fetch('http://localhost:3001/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        // load the user info and go to home
        .then(user => {
            if(user.id) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
            else { console.log('error') }
        })
        
    }

    render() {
        // destructuring is required like this for smart components with states
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-80-m w-50-l mw6 shadow-5 center">
                <main className="db pa4 black-80">
                    <div className="db measure center">
                        <fieldset id="sign_up" className="db ba b--transparent ph0 mh0">
                        <legend className="db f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="db mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" 
                            onChange={this.onEmailChange}/>
                        </div>
                        <div className="db mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" 
                            onChange={this.onPasswordChange}/>
                        </div>
                        </fieldset><br />
                        <div className="db mv3">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        onClick={this.onSubmitSignIn} type="submit" value="Sign in"/>
                        </div>
                        <div className="db lh-copy mt3">
                        <a href="#0" className="f6 link dim black db" 
                        onClick={() => onRouteChange('register')}>Register</a>
                        </div>
                    </div>
                </main>
            </article>
        )
    };
}

export default SignIn;