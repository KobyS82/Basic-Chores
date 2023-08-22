export default function Home() {
  return (
    <main className="bg-slate-400 text-center">
      <header>
        <h1 className="p-4">Chore Tracker!</h1>
      </header>
      <div className="flex flex-col ">
        <ul className="flex bg-slate-900 w-screen flex-col content-center text-center">
          <li>Wash Dishes</li>
          <li>Take out Trash</li>
          <li>Feed the Dog</li>
        </ul>
        <ul className="flex bg-slate-800 w-screen flex-col text-center">
          <li>Test Wash Dishes</li>
          <li>Test Take out Trash</li>
          <li>Test Feed the Dog</li>
        </ul>
        
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