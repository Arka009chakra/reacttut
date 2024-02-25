import react from 'react'
import Home from './Home'
import Signup from './Signup'
import Regadmin from './Regadmin'
import {Routes, Route } from 'react-router-dom';
import Logadmin from './Logadmin';
import Signin from './Signin';
import Reguser from './Reguser';
function App()
{
    return(
    <Routes>
        <Route exact path ="/" element={<Home/>} />
        <Route  path ="/regadmin" element={<Regadmin/>} />
        <Route  path ="/reguser" element={<Reguser/>} />
        <Route exact path ="/signup" element={<Signup/>} />
        <Route exact path ="/logadmin" element={<Logadmin/>}/>
        <Route exact path ="/signin" element={<Signin/>} />
     </Routes>
    )
}
export default App;
