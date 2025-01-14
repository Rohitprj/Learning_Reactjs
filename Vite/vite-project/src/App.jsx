// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;
function App() {
  return (
    <>
      <h1 className="text-5xl bg-red-950 text-green-300">Hello</h1>
      <h1>React</h1>
      <form className="gap-5">
        <input
          type="text"
          placeholder="Enter here"
          className="px-10 py-5 bg-violet-600 text-black rounded"
        />
        <button className="bg-slate-500 px-10 py-5 text-4xl ">Submit</button>
      </form>
    </>
  );
}
export default App;
