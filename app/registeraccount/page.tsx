'use client'
import Link from 'next/link';
import {createClient} from "@/utils/supabase/client";

export default function Register() {

    async function RegisterAccount(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault() //Prevent refresh on form submission
        const form = event.currentTarget;
        const formData = new FormData(form);

        if (!(formData.get('password') === formData.get('password2'))){
            alert('Passwords must match!');
            return;
        }

        const supabase = createClient();
        const {data, error} = await supabase.auth.signUp({
            email: String(formData.get('email')),
            password: String(formData.get('password')),
        });

        alert('Verification link has been sent to your email');
    }

    return (
        //flex makes items flex elements
        //flex-col aligns flex items into columns
        //sm code only triggers when the screen is wider than 640px
        //w-[{num}vw] sets the width to num's percentage of the viewpoint
        <div className="bg-white font-sans">
            <main className="flex flex-col items-center min-h-screen">
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-center">
                    <Link href={'/'}>
                        <h1 className="text-4xl font-bold justify-between py-20 text-black ">
                            The Climbing Log
                        </h1>
                    </Link>
                </div>
                <form onSubmit={RegisterAccount}>
                    <div className="w-[40vw]">
                        <h2 className="text-center text-xl font-semibold text-black">
                            Create an account
                        </h2>
                        <h3 className={'text-center text-l py-5 text-black'}>
                            Enter your email and password to register an account
                        </h3>
                        <div className={'py-1'}>
                            <input id={'email'} name={'email'} type={'email'} placeholder={'email@domain.com'} className={'block w-full' +
                                ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2 text-zinc-900'}/>
                        </div>
                        <div className={'py-1'}>
                            <input id={'password'} name={'password'} type={'password'} placeholder={'Password'} className={'block w-full' +
                                ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2 text-zinc-900'} required/>
                        </div>
                        <div className={'py-1'}>
                            <input id={'password2'} name={'password2'} type={'password'} placeholder={'Re-enter Password'} className={'block w-full' +
                                ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2 text-zinc-900'} required/>
                        </div>
                        <div className={'py-4'}>
                            <button type={'submit'} className={'w-full bg-zinc-800 hover:bg-black rounded-full text-white'}>
                                Create
                            </button>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
}
