import Link from 'next/link';

export default function Register() {
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
                <div className="w-[40vw]">
                    <h2 className="text-center text-xl font-semibold text-black">
                        Create an account
                    </h2>
                    <h3 className={'text-center text-l py-5 text-black'}>
                        Enter your email and password to register an account
                    </h3>
                    <div className={'py-1'}>
                        <input id={'email'} name={'email'} type={'email'} placeholder={'email@domain.com'} className={'block w-full' +
                            ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'}/>
                    </div>
                    <div className={'py-1'}>
                        <input id={'password'} name={'password'} type={'password'} placeholder={'Password'} className={'block w-full' +
                            ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'} required/>
                    </div>
                    <div className={'py-1'}>
                        <input id={'password'} name={'password'} type={'password'} placeholder={'Re-enter Password'} className={'block w-full' +
                            ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'} required/>
                    </div>
                    <div className={'py-4'}>
                        <Link href={'/viewclimbs'}>
                            <button className={'w-full bg-zinc-800 hover:bg-black rounded-full text-white'}>Create
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
