import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Contact = () => {
    const [user, loading, error] = useAuthState(auth);
    const form = useRef();
    //handle sendEmail
    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm('service_xloldmw', 'template_76kdgoi', form.current, 'VboXTGETz_ekhiI9C')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        toast('Thanks for your message')
    }
    return (
        <div>
            <div className='text-center mt-5'>
                <h2 className='text-3xl accent-focus text-accent '>Dear <span className='text-primary text-xl'>{user?.displayName ? `${user?.displayName}` : 'Mr / Ms'},</span></h2>
                <h1 className='text-2xl text-info font-bold mb-4'>How can we help you?</h1>
                <div className='mt-5'>
                    <form ref={form} onSubmit={sendEmail} className='mt-5'>
                        <input type="text" name='name' placeholder="Enter Your Name..." className="input input-bordered input-lg w-full max-w-xs" required /><br />
                        <input type="email" name='email' placeholder="abc @ gmail.com" className="input input-bordered input-lg w-full max-w-xs mt-2" required /><br />
                        <textarea type='text' name='message' placeholder={user?.displayName ? ` Dear ${user?.displayName}. Please Write Your Message ...` : `Dear Mr/Ms. Please Write Your Message...`} cols='42' rows='5' className='rounded border w-full max-w-xs mt-2 text-center' required></textarea><br />
                        <input type="submit" value='Send' className="input input-bordered input-lg w-full bg-accent text-white hover:bg-info hover:text-accent max-w-xs font-bold uppercase mt-2" /><br />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;