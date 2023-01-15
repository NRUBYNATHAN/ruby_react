// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>RUBY</h1>
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
//     </div>
//   )
// }

// export default App


import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Msg img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeJo2bYtloKHiTB_oGXP5rVtS_sAGYvgDJmHpppcUHgWAbJMMcAIucdeLBClZSSCSa-E&usqp=CAU" width="100px"  name="Arjun"/>
      <Msg img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdYQqG7YIp-nkc7Jaehg-X4AjiTz0W_5EqZeK1SDs&s" name="Monisha"/>
      <Msg img="https://play-lh.googleusercontent.com/rkwo3_b74VDR2PW-o0-H5L6AbBFt2WNgcOiP1QZs3FRJ9-Xf_G_p3OrteyeCybGCOg" name="ruby"/>
    </div>
  );
}
function Msg(probs){
  return(
    <div>
       <img  className="hi"src={probs.img}/>
      <h1 className="ruby">Hello,<span className="ruby1"><b>{probs.name}</b></span>🎉🎉</h1>
      
      </div>
  )
}