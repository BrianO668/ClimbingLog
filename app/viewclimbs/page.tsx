'use client';

import Link from 'next/link';
import {Climb, climbs} from "../data/climbs";
import {useState} from 'react';

export default function ViewClimbsPage(){
    const [selID, setSelID] = useState<number | null>(null); //Says useState type is number or null
   //use state^ creates a function to change the first parameter//(null) sets starting value to null-> useState<type>(initialValue)
    //[variableName, functionThatChangesVariableName]
    //useState<this type is allowed when ^function is called>
    const [filterSent, setFilterSent] = useState<boolean | null>(null);

    let filteredClimbs: Climb[] = [];
    for (let i = 0; i < climbs.length; i++){
        if (filterSent === null || climbs[i].sent === filterSent) {
            filteredClimbs.push(climbs[i]);//If filterSent is null or matches climb id, add it
            //this gives us a new array of every climb meeting the filter
        }
    }

    return(
        <div className={'bg-white'}>
            <header className={'flex h-14 items-center gap-4 border-b border-b-zinc-900 border-zinc-white px-4 sm:px-5'}>
                <button className={'w-18 h-8 bg-zinc-750 hover:bg-zinc-700 rounded-full border-1' +
                    ' border-zinc-500 text-black hover:text-zinc-100'}>Climbs</button>
                <button className={'w-32 h-8 bg-zinc-750 hover:bg-zinc-700 rounded-full text-black btn-outline-4' +
                    ' border border-zinc-500 hover:text-zinc-100'}
                onClick={() => {
                    if (filterSent === null) {setFilterSent(true); setSelID(null);}
                    else if (filterSent === true) {setFilterSent(false); setSelID(null);}
                    else {setFilterSent(null); setSelID(null);}
                }}>{filterSent === null ? "Unfiltered" : filterSent === true ? "Sent Climbs" : "Unsent Climbs"}</button>
                <Link href={'/'} className={'ml-auto'}>
                    <button className={'w-18 h-8 rounded-full bg-zinc-750 hover:bg-zinc-700 text-black ' +
                        ' hover:text-zinc-100 border border-zinc-500 ml-auto'}>
                            Logout
                    </button>
                </Link>
            </header>
            <main className={'bg-white flex flex-col min-h-screen'}>
                <div className={'flex flex-col'}>
                    <table className={'w-full table-fixed border-collapse'}>
                        <thead>
                            <tr className={'border border-zinc-800 bg-black text-zinc-100 text-sm'}>
                                <th>ID</th>
                                <th>Grade</th>
                                <th>Color</th>
                                <th>Attempts</th>
                                <th>Sent</th>
                                <th>Style</th>
                                <th>Intensity</th>
                            </tr>
                        </thead>
                        <tbody className={'text-center'}>
                            {filteredClimbs.map(climb => showClimbs(climb, selID, setSelID))//Map iterates through every item
                                            //So for every item, do this thing/pass it into with this name => showCLimbs()
                            }
                        </tbody>
                    </table>
                </div>
                <div className={'flex flex-col p-6 gap-y-2 justify-end'}>
                    <Link href={'/addclimb'} className={'flex flex-col'}>
                        <button className={'h-8 rounded-full bg-blue-800 text-zinc-100 hover:bg-blue-900'}>Add</button>
                    </Link>
                    <Link href={selID === null ? '/viewclimbs' : `/editclimbs/${selID}`} className={'flex flex-col'}>
                        <button className={'h-8 rounded-full bg-zinc-900 text-zinc-100 hover:bg-black ' +
                            'hover:text-zinc-300'}>Edit
                        </button>
                    </Link>
                    <button onClick={() => deleteClimb(selID, setSelID)}
                        className={'h-8 rounded-full bg-red-600 text-zinc-100 hover:bg-red-700'}>Delete</button>
                </div>
            </main>
        </div>
    )
}

function showClimbs(climb: Climb, selID: number | null, setSelID: (id: number) => void){
                                                    //setSelID(parameter: type) returns => void
                                                    //TypeScript needs to know parameters/returns of passed functions
    return (
        <tr key={climb.id} onClick={() => setSelID(climb.id)//React needs keys for rendering lists/differentiating
            //Arrow function says (parameter or lack thereof) do this => setSelID(climb.ID)
            //onClick is React event handler
            //Cannot pass setSelID directly into onClick, or it will run each time a row is created
        }
            className={selID === climb.id ? 'border-2 border-blue-950 text-zinc-900 text-sm bg-blue-400' :
            'border text-zinc-900 text-sm odd:bg-zinc-300 even:bg-zinc-100'}>
            <td>{climb.id}</td>
            <td>{climb.grade}</td>
            <td>{climb.color}</td>
            <td>{climb.attempts}</td>
            <td>{climb.sent ? "Yes" : "No"}</td>
            <td>{climb.style}</td>
            <td>{climb.intensity}</td>
        </tr>
    );
}

function deleteClimb(selID: number | null, setSelID: (id: number | null) => void){
    if (selID === null){
        return;
    }
    else {
        for (let i = 0; i < climbs.length; i++){
            if (selID === climbs[i].id){
                climbs.splice(i,  1); //splice delete an number of items (param 2) starting from index (param 1)
                setSelID(null);
            }
        }
    }
}