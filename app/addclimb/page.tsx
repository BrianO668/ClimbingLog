'use client';

import Link from 'next/link';
import {Climb, climbs} from "../data/climbs";
import {useRouter} from 'next/navigation';

export default function AddClimb(){
    const router = useRouter();

    function saveClimb(event: React.SubmitEvent<HTMLFormElement>){
        event.preventDefault() //Gathers all the data and pushes it into the array. Then redirects to viewclimbs

        const form = event.currentTarget;
        const data = new FormData(form);

        const grade = Number(data.get("grade"));
        const color = String(data.get("color"));
        const attempts = Number(data.get("attempts"));
        const style = String(data.get("style"));
        const intensity = Number(data.get("intensity"));
        const sent = data.get("sent") === "on"; //Checkbox value can be on or null

        climbs.push(new Climb(grade, color, attempts, style, intensity, sent));
        router.push('/viewclimbs');
    }

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
                <form onSubmit={saveClimb}>
                    <div className={'flex flex-col items-center'}>
                        <h1 className={'text-black flex text-xl font-bold'}>Add New Climb</h1>
                        <div className={'flex flex-row gap-5 justify-center w-1/2'}>
                            <h1 className={'text-black w-1/8'}>Grade</h1>
                            <div className={'px-5'}>
                                <input id={'grade'} name={'grade'} type={'number'}
                                placeholder={'int'} className={'block w-24 text-zinc-800' +
                                    ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'}/>
                            </div>
                        </div>
                        <div className={'flex flex-row gap-5 justify-center w-1/2 py-1'}>
                            <h1 className={'text-black w-1/8'}>Color</h1>
                            <div className={'px-5'}>
                                <input id={'color'} name={'color'}
                                       placeholder={'text'} className={'block w-24 text-zinc-800' +
                                    ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'}/>
                            </div>
                        </div>
                        <div className={'flex flex-row gap-5 justify-center w-1/2 py-1'}>
                            <h1 className={'text-black w-1/8'}>Attempts</h1>
                            <div className={'px-5'}>
                                <input id={'attempts'} name={'attempts'} type={'number'}
                                       placeholder={'int'} className={'block w-24 text-zinc-800' +
                                    ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'}/>
                            </div>
                        </div>
                        <div className={'flex flex-row gap-5 justify-center w-1/2 py-1'}>
                            <h1 className={'text-black w-1/8'}>Style</h1>
                            <div className={'px-5'}>
                                <input id={'style'} name={'style'}
                                       placeholder={'text'} className={'block w-24 text-zinc-800' +
                                    ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'}/>
                            </div>
                        </div>
                        <div className={'flex flex-row gap-5 justify-center w-1/2 py-1'}>
                            <h1 className={'text-black w-1/8'}>Intensity</h1>
                            <div className={'px-5'}>
                                <input id={'intensity'} name={'intensity'} type={'number'} min={0} max={10}
                                       placeholder={'int 0-10'} className={'block w-24 text-zinc-800' +
                                    ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'}/>
                            </div>
                        </div>
                        <div className={'flex flex-row gap-5 justify-center w-1/2 py-1'}>
                            <h1 className={'text-black w-1/8'}>Sent</h1>
                            <div className={'px-5 py-1 flex justify-start'}>
                                <input id={'sent'} name={'sent'} type={'checkbox'} className={'block w-24 text-zinc-800' +
                                    ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'}/>
                            </div>
                        </div>
                        <div className={'flex py-4 w-1/4'}>
                            <button type={'submit'} className={'flex w-full text-center justify-center' +
                                ' bg-zinc-800 hover:bg-black rounded-full text-white'}>Save
                            </button>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}