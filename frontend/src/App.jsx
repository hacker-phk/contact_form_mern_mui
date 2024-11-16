import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddContactForm from './pages/AddContactForm';
import EnhancedTable from './pages/DisplayTable';
import EditPage from './pages/EditPage';
import Navbar from './Navbar';
import useGetData from './hooks/useGetData';
import WelcomePage from './pages/Welcome';
function App() {
  const [loading, setLoading] = useState(true);
  const { fetchData } = useGetData();

  

  return (
    <div className="App" style={{  marginTop: "20px",backgroundColor:'white' }}>
      <Router>
        <Navbar /> {/* Make sure the Navbar is inside the Router */}
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/addcontact" element={<AddContactForm />} />
          <Route path="/displayusers" element={<EnhancedTable />} />
          <Route path="/edit" element={<EditPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
