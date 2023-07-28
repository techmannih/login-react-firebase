import { Route, Routes } from "react-router";
// import Error from './components/Error';
// import { default as Home1, default as Homepage } from "./components/Home1";
// import RoomPage from "./components/Room";
import Home from './components/Home';
import SignIn from './components/Login';
import SignUp from "./components/SignUp";


function App() {
  return (
    <div >
<Routes>
  <Route path="/home" element={<Home/>}/>

  {/* <Route path="/Room/:RoomId" element={<RoomPage/>}/> */}

  {/* <Route path="/Error" element={<Error/>}/> */}

  {/* <Route path="/Home1" element={<Home1/>}/> */}

  <Route path="/login" element={<SignIn/>}/>

  <Route path="/" element={<SignUp/>}/>
</Routes>

    </div>
  
  );
}

export default App;