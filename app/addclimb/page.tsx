import Link from 'next/link';

export default function AddClimb(){
    return(
        <div className={'bg-white'}>
            <header className={'flex h-14 items-center gap-4 border-b border-b-zinc-900 border-zinc-white px-4 sm:px-5'}>
                <Link href={'/viewclimbs'}>
                <button className={'w-18 h-8 bg-zinc-750 hover:bg-zinc-700 rounded-full border-1' +
                    ' border-zinc-500 text-black hover:text-zinc-100'}>Climbs</button>
                </Link>
                <Link href={'/'} className={'ml-auto'}>
                    <button className={'w-18 h-8 rounded-full bg-zinc-750 hover:bg-zinc-700 text-black ' +
                        ' hover:text-zinc-100 border border-zinc-500 ml-auto'}>
                        Logout
                    </button>
                </Link>
            </header>
            <main className={'bg-white flex flex-col min-h-screen'}>
                <div className={'flex flex-col'}>
                    <h1 className={'text-black text-xl font-bold'}>Add New Climb</h1>
                    <div className={'flex'}>
                        <h1 className={'text-black'}>Grade</h1>
                        <div className={'px-5'}>
                            <input id={'grade'} name={'grade'}
                            placeholder={'int'} className={'block w-20' +
                                ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'}/>
                        </div>
                    </div>
                    <div className={'flex'}>
                        <h1 className={'text-black'}>Color</h1>
                        <div className={'px-5'}>
                            <input id={'color'} name={'color'}
                                   placeholder={'text'} className={'block w-20' +
                                ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'}/>
                        </div>
                    </div>
                    <div className={'flex'}>
                        <h1 className={'text-black'}>Attempts</h1>
                        <div className={'px-5'}>
                            <input id={'attempts'} name={'attempts'}
                                   placeholder={'int'} className={'block w-20' +
                                ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'}/>
                        </div>
                    </div>
                    <div className={'flex'}>
                        <h1 className={'text-black'}>Style</h1>
                        <div className={'px-5'}>
                            <input id={'style'} name={'style'}
                                   placeholder={'text'} className={'block w-20' +
                                ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'}/>
                        </div>
                    </div>
                    <div className={'flex'}>
                        <h1 className={'text-black'}>Intensity</h1>
                        <div className={'px-5'}>
                            <input id={'intensity'} name={'intensity'}
                                   placeholder={'int 0-10'} className={'block w-20' +
                                ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'}/>
                        </div>
                    </div>
                    <div className={'flex'}>
                        <h1 className={'text-black'}>Sent</h1>
                        <div className={'px-5 py-1'}>
                            <input id={'sent'} name={'sent'} type={'checkbox'}
                                   placeholder={'int 0-10'} className={'block w-20' +
                                ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'}/>
                        </div>
                    </div>
                    <div className={'py-4'}>
                        <Link href={'/viewclimbs'}>
                            <button className={'w-3/4 bg-zinc-800 hover:bg-black rounded-full text-white'}>Save
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}