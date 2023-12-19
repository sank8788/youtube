
function App(){

    const getInput = (value,name)=>{
   console.log({[name]: value});
   }
   
   
     return(
       <div className="form">
     <input placeholder="add your name...." 
     type="text"
     name="name"
     onChange={(event)=> getInput(event.target.value , event.target.name)} />
   
     <input placeholder="add your age...."
     name="age"
     type="number" 
     onChange={(event)=> getInput(event.target.value , event.target.name)}/>
   
     <input placeholder="add your password...." 
     name="password"
     type="password"
     onChange={(event)=> getInput(event.target.value , event.target.name)}/>
   
     <input placeholder="add your hobbies...."
     name="hobbiy"
     type="text" 
     onChange={(event)=> getInput(event.target.value , event.target.name)}/> 
   
     <input placeholder="add your Date...."
     name="date"
     type="date" 
     onChange={(event)=> getInput(event.target.value , event.target.name)}/> 
   
     <input placeholder="add your FILE...."
     name="file"
     type="file" 
     onChange={(event)=> getInput(event.target.value , event.target.name)}/> 
   
      <button>submit here</button>
       </div>
     )
   }
   
   export default App