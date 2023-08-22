import {FaDeleteLeft, FaBeer } from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai';

export default function Home() {
  return (
    <main className="bg-slate-400 h-screen text-center p-4">
      <header>
        <h1 className="p-4 font-bold underline text-2xl">Chore Tracker!</h1>
      </header>

      <div id='Chores' className="flex flex-col p-2 bg-slate-600">
        <h2 className="text-lg">Chores</h2>
        <ul className="p-1">
          <li className=" flex justify-between">
            <div className='left'>
              <label htmlFor="Chore">Walk dog</label>
            </div>
            <div className='right flex'>
              <input type="checkbox" id="Chore" name="Chore" className="bg-slate-800 submit"/>
              <button className='p-1 hover:text-red-400'><AiFillDelete/></button>
            </div>
          </li>
          <li className=" flex justify-between">
            <div className='left'>
              <label htmlFor="Chore">Dishes</label>
            </div>
            <div className='right flex'>
              <input type="checkbox" id="Chore" name="Chore" className="bg-slate-800 submit"/>
              <button className='p-1 hover:text-red-400'><AiFillDelete/></button>
            </div>
          </li>
          <li className=" flex justify-between">
            <div className='left'>
              <label htmlFor="Chore">Feed Cats</label>
            </div>
            <div className='right flex'>
              <input type="checkbox" id="Chore" name="Chore" className="bg-slate-800 submit"/>
              <button className='p-1 hover:text-red-400'><AiFillDelete/></button>
            </div>
          </li>
        </ul>

        {/* User adds chore to list */}
        <section className="p-2">
          <div className="flex justify-center hover:underline hover:font-bold  text-blue-400">
            <button>Add Chore</button>
          </div>
        </section>

        
      </div>
    </main>
    
  );
}


// <main className="flex m-1 flex-col">
//       <div className="flex justify-center bg-slate-800">
//         <h1>Chore Tracker!</h1>
//       </div>
//       <div className="self-center">
//         <h2>Chores:</h2>
//         <ul className="content-center">
//           <li>Wash Dishes</li>
//           <li>Take out Trash</li>
//           <li>Feed the Dog</li>
//         </ul>
//       </div>
//         <div className="flex justify-center">
//           <h2>Chore List</h2>
//         </div>
//     </main>


{/* <ul className="flex bg-slate-900 flex-col content-center text-center">
          <li>Wash Dishes</li>
          <button className="bg-slate-800">Complete</button>
          <li>Take out Trash</li>
          <li>Feed the Dog</li>
        </ul> */}