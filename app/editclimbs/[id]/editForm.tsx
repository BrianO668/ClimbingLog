'use client';

import { Climb, climbs } from "@/app/data/climbs";
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function EditForm({id}: {id: string}){
                        //Take in parameter "id" that is an object that contains an id of type string
    const router = useRouter();
    const climbID = Number(id);
    let climbToEdit: Climb | null = null; //Declare climb as type climb or null. Initialize as null
    let index: number | null = null;//Same with index

    //Loop through array and assign matching id as climbToEdit
    for (let i = 0; i < climbs.length; i++){
        if (climbs[i].id === climbID) {
            climbToEdit = climbs[i];
            index = i;
            break;
        }
    }

    function saveClimb(event: React.SubmitEvent<HTMLFormElement>){
        event.preventDefault() //Gathers all the data and pushes it into the array. Then redirects to viewclimbs
            //Prevent form submit from automatically redirecting, so we can apply code first
        const form = event.currentTarget;
        const data = new FormData(form);

        climbs[index].grade = Number(data.get("grade"));
        climbs[index].color = String(data.get("color"));
        climbs[index].attempts = Number(data.get("attempts"));
        climbs[index].style = String(data.get("style"));
        climbs[index].intensity = Number(data.get("intensity"));
        climbs[index].sent = data.get("sent") === "on";

        router.push('/viewclimbs');//Redirects
    }

    return (
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
                        <h1 className={'text-black flex text-xl font-bold'}>Edit Climb ID: {climbToEdit.id}</h1>
                        <div className={'flex flex-row gap-5 justify-center w-1/2'}>
                            <h1 className={'text-black w-1/8'}>Grade</h1>
                            <div className={'px-5'}>
                                <input id={'grade'} name={'grade'} type={'number'}
                                       defaultValue={climbToEdit.grade} className={'block w-24 text-zinc-800' +
                                    ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'}/>
                            </div>
                        </div>
                        <div className={'flex flex-row gap-5 justify-center w-1/2 py-1'}>
                            <h1 className={'text-black w-1/8'}>Color</h1>
                            <div className={'px-5'}>
                                <input id={'color'} name={'color'}
                                       defaultValue={climbToEdit.color} className={'block w-24 text-zinc-800' +
                                    ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'}/>
                            </div>
                        </div>
                        <div className={'flex flex-row gap-5 justify-center w-1/2 py-1'}>
                            <h1 className={'text-black w-1/8'}>Attempts</h1>
                            <div className={'px-5'}>
                                <input id={'attempts'} name={'attempts'} type={'number'}
                                       defaultValue={climbToEdit.attempts} className={'block w-24 text-zinc-800' +
                                    ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'}/>
                            </div>
                        </div>
                        <div className={'flex flex-row gap-5 justify-center w-1/2 py-1'}>
                            <h1 className={'text-black w-1/8'}>Style</h1>
                            <div className={'px-5'}>
                                <input id={'style'} name={'style'}
                                       defaultValue={climbToEdit.style} className={'block w-24 text-zinc-800' +
                                    ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'}/>
                            </div>
                        </div>
                        <div className={'flex flex-row gap-5 justify-center w-1/2 py-1'}>
                            <h1 className={'text-black w-1/8'}>Intensity</h1>
                            <div className={'px-5'}>
                                <input id={'intensity'} name={'intensity'} type={'number'} min={0} max={10}
                                       defaultValue={climbToEdit.intensity} className={'block w-24 text-zinc-800' +
                                    ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'}/>
                            </div>
                        </div>
                        <div className={'flex flex-row gap-5 justify-center w-1/2 py-1'}>
                            <h1 className={'text-black w-1/8'}>Sent</h1>
                            <div className={'px-5 py-1 flex justify-start'}>
                                <input id={'sent'} name={'sent'} type={'checkbox'} className={'block w-24 text-zinc-800' +
                                    ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'}
                                 defaultChecked={climbToEdit.sent} />
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