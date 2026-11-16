'use client'
import Link from 'next/link';

export default function About() {
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
                <div className={'flex flex-col items-center'}>
                    <h2 className={' text-2xl text-zinc-900 py-5 px-15'}>
                        The Climbing Log is a tracking app created by Brian Oldham where users can log their
                        climbs and attributes associated with those climbs. Users will be able to log
                        the grade, color, style, number of attempts, and intensity of routes, along
                        with whether or not they have completed the route. Users will only be able
                        to see, edit, and delete climbs they have added and have the ability to filter
                        their list by "sent" status. Additionally, users can use a search function to
                        find climbs by their grade, color, and style. These functions should grant climbers
                        with an easy way to track progress along their climbing journey.
                    </h2>
                </div>
                <div className={'flex flex-col items-center py-10'}>
                    <Link href={'/'}>
                        <button className={'w-full bg-zinc-800 hover:bg-black text-white rounded-full px-4'}>
                            Return
                        </button>
                    </Link>
                </div>
            </main>
        </div>
    );
}
