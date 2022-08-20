import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import {Link,useNavigate} from 'react-router-dom'
import { async } from '@firebase/util';
import {toast}from 'react-toastify'
import auth from '../../firebase.init';


const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    //signInWithGoogle
    const [signInWithGoogle, GUser, GLoading, GError] = useSignInWithGoogle(auth);
    //update profile
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
     //navigate
     const navigate=useNavigate();
     if(user || GUser){
        navigate('/services');
        toast.success('Registration done');
        alert('Registration Successfully');
     }

  
    //errorMessage
    let signInErrorMessage;
    if (error ||GError || updateError ) {
        signInErrorMessage = <p className='text-red-500'>{error?.message || GError?.message ||updateError.message}</p>
    }
    //loading
    if( loading || GLoading || updating){
        // return <Loading></Loading>
    }
    

//handle Submit
    const onSubmit =async data => {
       await createUserWithEmailAndPassword(data.email,data.password);
       await updateProfile({displayName:data.name})
        toast('Registration Sucessfully');
        console.log(data);
        // console.log(data.photo[0].name);
    };
    return (
        
        <div className = 'flex  text-center justify-center ' >
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="font-bold text-center text-2xl text-info mb-5">Please Registration</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Name</span>
                            </label>
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                },
                               
                            })} type="text" placeholder="Enter Your Name" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs ">
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
                                    message: 'Provide a valid Email' }
                            })} type="email" placeholder="abc @ gmail.com" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Profile Photo</span>
                            </label>
                            <input {...register("photo", {
                                required: {
                                    value: true,
                                    message: 'Photo is Required'
                                },
                            })} type="file" placeholder="abc @ gmail.com" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.photo?.type === 'required' && <span class="label-text-alt text-red-500">{errors.photo.message}</span>}
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
                                    message: 'Must be 8 character or longer'  }
                            })} type="password" placeholder="Enter Your Password" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <small className='text-red-500'>{signInErrorMessage}</small>
                        <input className='btn w-full max-w-xs' type="submit"  value='sign up'/>
                    </form>
                    <span>Already have an account? <Link className='text-info' to='/login'><small>Go to Login</small></Link></span>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline mb-5">Continue with Google</button>
                </div>
            </div>
        </div >
    );
};

export default Registration;