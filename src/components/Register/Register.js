import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super();
        this.state= {
            email: '',
            password: '',
            name: ''
        }
    }

    // when the input boxes are typed in...
    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    // when the signin button is pressed
    onSubmitSignIn = () => {
        fetch('http://localhost:3001/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
        
    }

    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-80-m w-50-l mw6 shadow-5 center">
                <main className="db pa4 black-80">
                    <div className="db measure center">
                        <fieldset id="sign_up" className="db ba b--transparent ph0 mh0">
                        <legend className="db f1 fw6 ph0 mh0">Register</legend>
                        <div className="db mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"
                            onChange={this.onNameChange}/>
                        </div>
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
                        onClick={this.onSubmitSignIn} type="submit" value="Register"/>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
};

export default Register;