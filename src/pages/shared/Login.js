import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { Link,useLocation,useNavigate } from 'react-router-dom';



const Login = () => {
    const [signInWithGoogle, GUser, GLoading, GError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    //useSignInWithEmail&Password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate=useNavigate();
    const location=useLocation();
    let from=location.state?.from?.pathname || "/"
    if ( user || GUser) {
        navigate(from,{replace:true})
        
    }
    //errorMessage
    let signInErrorMessage;
    if (error || GError) {
        signInErrorMessage = <p>{error?.message || GError?.message}</p>
    }
    //loading
    // if(GLoading || loading){
    //     return <Loading></Loading>
    // }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        // console.log(data)
    };
    return (
        <div className='flex h-screen items-center justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="font-bold text-center text-2xl text-accent">Please Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                                    message: 'Provide a valid Email' // JS only: <p>error message</p> TS only support string
                                }
                            })} type="email" placeholder="abc @ gmail.com" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 8,
                                    message: 'Must be 8 character or longer' // JS only: <p>error message</p> TS only support string
                                }
                            })} type="password" placeholder="Enter Your Password" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        <small className='text-red-500'>{signInErrorMessage}</small>
                        <input className='btn w-full max-w-xs' type="submit" value='login' />
                    </form>
                    <span>New to E-Market ? <Link className='text-info' to='/registration'>Create a new Account</Link></span>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline ">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;