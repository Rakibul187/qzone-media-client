import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { creatUser, googleSignIn } = useContext(AuthContext)
    const provider = new GoogleAuthProvider()
    const handleEmailPassSignup = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        creatUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(e => console.error(e))
    }

    const handleGoogleSignUp = () => {
        googleSignIn(provider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(e => console.error(e))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleEmailPassSignup} className="card-body">
                        <h2 className='text-center text-xl font-bold'>SignUp</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p>Already have account? Please <Link className='text-primary' to='/login'>Login</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary">Signup</button>
                        </div>
                        <div className="divider mt-0 mb-0">or Signup with</div>
                    </form>
                    <div onClick={handleGoogleSignUp} className="form-control w-64 mx-auto mt-0 mb-6">
                        <button className="btn btn-outline btn-primary">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;