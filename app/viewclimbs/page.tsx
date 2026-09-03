export default function ViewClimbsPage(){
    return(
        <div className={'bg-white'}>
            <header className={'flex h-14 items-center gap-4 border-b border-b-zinc-900 border-zinc-white px-4 sm:px-5'}>
                <button className={'w-18 h-8 bg-zinc-750 hover:bg-zinc-700 rounded-full border-1' +
                    ' border-zinc-500 text-black hover:text-zinc-100'}>Climbs</button>
                <button className={'w-20 h-8 bg-zinc-750 hover:bg-zinc-700 rounded-full text-black btn-outline-4' +
                    ' border border-zinc-500 hover:text-zinc-100'}>Filter By</button>
                <button className={'w-18 h-8 rounded-full bg-zinc-750 hover:bg-zinc-700 text-black ' +
                    ' hover:text-zinc-100 border border-zinc-500 ml-auto'}>
                    Logout
                </button>
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
                            <tr className={'border text-zinc-900 text-sm odd:bg-zinc-300 even:bg-zinc-100'}>
                                <td>1</td>
                                <td>7</td>
                                <td>Orange</td>
                                <td>8</td>
                                <td>No</td>
                                <td>Crimps</td>
                                <td>9</td>
                            </tr>
                            <tr className={'border text-zinc-900 text-sm odd:bg-zinc-200 even:bg-zinc-100'}>
                                <td>2</td>
                                <td>6</td>
                                <td>Green</td>
                                <td>3</td>
                                <td>Yes</td>
                                <td>Slopers</td>
                                <td>5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={'flex flex-col p-6 gap-y-2'}>
                    <button className={'h-8 rounded-full bg-blue-800 text-zinc-100 hover:bg-blue-900'}>Add</button>
                    <button className={'h-8 rounded-full bg-zinc-900 text-zinc-100 hover:bg-black ' +
                        'hover:text-zinc-300'}>Edit
                    </button>
                    <button className={'h-8 rounded-full bg-red-600 text-zinc-100 hover:bg-red-700'}>Delete</button>
                </div>
            </main>
        </div>
    )
}