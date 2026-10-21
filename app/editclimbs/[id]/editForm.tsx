'use client';

import { Climb, climbs } from "@/app/data/climbs";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {createClient} from "@/utils/supabase/client";
import {useEffect, useState} from "react";

export default function EditForm({id}: {id: string}){
                        //Take in parameter "id" that is an object that contains an id of type string
    const router = useRouter();
    const climbID = Number(id);
    const [climbToEdit, setClimbToEdit] = useState<Climb | null>(null);

    useEffect(() => {
        async function fetchClimb() {
            const supabase = createClient();

            const {data, error} = await supabase.from('Climbs').select('*')
                .eq('id', climbID)
                .single();

            if (error) {
                console.log("No climb fetched");
            }

            setClimbToEdit(data as Climb);
        }

        fetchClimb();
    })

    async function Logout(event: React.SubmitEvent<HTMLFormElement>){
        event.preventDefault()

        const supabase = createClient();
        const {error} = await supabase.auth.signOut({ scope: 'local' });
        if(error) {
            console.log('Log out error');
            return;
        }
        console.log('LOGGING OUT!');

        router.push('/');
    }

    async function saveClimb(event: React.SubmitEvent<HTMLFormElement>){
        event.preventDefault() //Gathers all the data and pushes it into the array. Then redirects to viewclimbs
            //Prevent form submit from automatically redirecting, so we can apply code first
        const form = event.currentTarget;
        const data = new FormData(form);

        const grade = Number(data.get("grade"));
        const color = String(data.get("color"));
        const attempts = Number(data.get("attempts"));
        const style = String(data.get("style"));
        const intensity = Number(data.get("intensity"));
        const sent = data.get("sent") === "on";

        const supabase = createClient();

        const {error} = await supabase.from('Climbs')
            .update({grade: grade, color: color, attempts: attempts, style: style, intensity: intensity, sent: sent})
            .eq('id', id);

        if (error) {console.log(error)}

        router.push('/viewclimbs');//Redirects
    }

    if (climbToEdit === null) {
        return (<h1>We've encountered an issue</h1>);
    }
    return (
        <div className={'bg-white'}>
            <header className={'flex h-14 items-center gap-4 border-b border-b-zinc-900 border-zinc-white px-4 sm:px-5'}>
                <Link href={'/viewclimbs'}>
                    <button className={'w-18 h-8 bg-zinc-750 hover:bg-zinc-700 rounded-full border-1' +
                        ' border-zinc-500 text-black hover:text-zinc-100'}>Climbs</button>
                </Link>
                <form onSubmit={Logout} className={'ml-auto'}>
                    <button className={'w-18 h-8 rounded-full bg-zinc-750 hover:bg-zinc-700 text-black ' +
                        ' hover:text-zinc-100 border border-zinc-500 ml-auto'}>
                        Logout
                    </button>
                </form>
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