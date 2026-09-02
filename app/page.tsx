export default function Home() {
  return (
      //flex makes items flex elements
      //flex-col aligns flex items into columns
      //sm code only triggers when the screen is wider than 640px
      //w-[{num}vw] sets the width to num's percentage of the viewpoint
    <div className="bg-white font-sans">
      <main className="flex flex-col items-center min-h-screen">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-center">
          <h1 className="text-4xl font-bold justify-between py-20 text-black ">
            The Climbing Log
          </h1>
        </div>
        <div className="w-[40vw]">
            <h2 className="text-center text-xl font-semibold text-black py-10">
                Login to your account
            </h2>
            <div className={'py-1'}>
                <input id={'email'} name={'email'} type={'email'} placeholder={'email@domain.com'} className={'block w-full' +
                    ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'}/>
            </div>
            <div className={'py-1'}>
                <input id={'password'} name={'password'} type={'password'} placeholder={'Password'} className={'block w-full' +
                    ' rounded-md bg-white border border-gray-300 placeholder:text-zinc-400 px-2'} required/>
            </div>
            <div className={'py-4'}>
                <button className={'w-full bg-zinc-800 hover:bg-black rounded-full text-white'}>Login</button>
            </div>
        </div>
        <div className={'w-[40vw] mt-auto pb-8'}>
            <h2 className={'text-center text-xl font-semibold text-black py-4'}>
                No account? Click below!
            </h2>
            <button className={'w-full bg-zinc-800 hover:bg-black rounded-full text-white'}>
                Create new account
            </button>
        </div>
      </main>
    </div>
  );
}
