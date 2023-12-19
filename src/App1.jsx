
// import React from 'react'

// const App = () => {
//   return (
//     <div className='w-full h-screen bg-zinc-800 '>
//       <h1 className='text-[13vw] leading-none tracking-tighter font-semibold bg-slate-600'>Docs</h1></div>
//   )
// }

// export default App
// import React from 'react'

// const App = () => {

//   const numbers= [1,2,3,4,5];
//   return (
//     <>
//     {
//       numbers.map((number) => (number *  2))
//     }
//     </> 
//   )
// }

// export default App


                //  props in jsx
// import ChildComponent from './ChildComponent'

// function App() {
//   return (
//     <>
//     <ChildComponent name ="sank" parameter="interview"/>
//     <ChildComponent name ="happy" parameter="interview"/>
//     <ChildComponent name ="continue to" parameter="interview"/>
//     </>
//   )
// }

// export default App

                    // SPREAD OPERATOR
                       
// import ChildComponent from './ChildComponent'

// function App() {
//   const props ={name : "happy" ,parameter : "interview"};
//   const prop ={name : "wlcome to" ,parameter : "interview"};
//   const pro ={name : "best wishes for" ,parameter : "interview"};
  
//   return (
//     <>
//     <ChildComponent {...props}/>
//     <ChildComponent {...prop}/>
//     <ChildComponent  {...pro}/>
//     </>
//   )
// }

// export default App



// import React, { useState ,useEffect} from 'react'

// const App = () => {

//   const [users, setUsers] = useState([]);
//   const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9,10])

//   useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => {setUsers(json)})
//   }, [])
  

  // const mapData = ()=>{
  //   let square = numbers.map((number) =>{
  //     return number * number;
  //   })
  //   console.log(square)
  // }
  //      const mapData =()=> {
  //       let numberLassThanFive = numbers.map((number)=>{
  //         return number * number;
  //       })
  //       .filter((filtered) =>{ 
  //         return filtered <=50;
  //       });

  //   setNumbers(numberLassThanFive);
  //      };
       
    
  // return (
    // <div className='app'>
    //   <h1>USER LIST</h1>
    //   <div className="card">
    //     {users.map((user) =>(
    //       <div className="card-inner">
    //         <h1>{user.name}</h1>
    //         <p>{user.username}</p>
            
    //       </div>
//     <div className='app'>
//       <h1>NUMBERS</h1>
//       <div className="card">
//         {numbers.map((number) =>(
//           <div className="card-inner">
//             {number}
//           </div>
//         ))}
//         <button onClick={mapData}>see here</button>
//       </div>
//     </div>
//   )
// }

// export default App


// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor () {
//     super ();
//     this.state ={
//       name :"nishant",
//       age : 10,
//       array : [1,2,34,12]
//     };
//   }

//   changeState= () =>{
//     this.setState({
//       age : this.state.age *2
//     })
//     this.setState ({
//       name : "sanket"
//     })
//     this.setState ({
//       Array : this.state.array =[1,2,3,4,4]
//     })
//   }
//   render() {
//     return (
//       <div>
//        <h1>{this.state.name}</h1>      
//        <h1>{this.state.age}</h1>
//        <h2>{
//         this.state.array.map((item)=>{
//           return item * item
//         })
        
//        }  </h2>

//        <button onClick={this.changeState}>change state</button>   
//       </div>
//     );
//   }
// }
