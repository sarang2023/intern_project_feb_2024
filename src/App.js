
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import EventDetail from './EventDetail';
import Eventdetail1 from './Eventdetail1';
import Eventdetail2 from './Eventdetail2';
import Profilepage1 from './Profilepage1';
import Home from './Home';
import Profilepage2 from './Profilepage2';
import Profilepage3 from './Profilepage3';
import Profilepage4 from './Profilepage4';
import TermsConditions from './TermsConditions';
import Ticket01 from './Ticket01';
import Ticket02 from './Ticket02';
import Ticket03 from './Ticket03';
import Ticket04 from './Ticket04';
import Ticket05 from './Ticket05';
import Ticket06 from './Ticket06';
import Ticket07 from './Ticket07';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>

      <Route path=''element={<Layout/>}>
      <Route path=''index element={<Home/>}/>
      <Route path='home'element={<Home/>}/>
      <Route path='eventdetail'element={<EventDetail/>}/>
      <Route path='eventdetail1'element={<Eventdetail1/>}/>
      <Route path='eventdetail2'element={<Eventdetail2/>}/>
      <Route path='profile1'element={<Profilepage1/>}/>
      <Route path='profile2'element={<Profilepage2/>}/>
      <Route path='profile3'element={<Profilepage3/>}/>
      <Route path='profile4'element={<Profilepage4/>}/>
      <Route path='terms'element={<TermsConditions/>}/>
      <Route path='ticket01'element={<Ticket01/>}/>
      <Route path='ticket02'element={<Ticket02/>}/>
      <Route path='ticket03'element={<Ticket03/>}/>
      <Route path='ticket04'element={<Ticket04/>}/>
      <Route path='ticket05'element={<Ticket05/>}/>
      <Route path='ticket06'element={<Ticket06/>}/>
      <Route path='ticket07'element={<Ticket07/>}/>







      </Route>




      </Routes>
      
      
      
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
