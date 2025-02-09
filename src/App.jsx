import NetflixTitle from './NetflixTitle';
import Browse from './pages/browse';
import './App.css'
import Layout from './Layout';
import ProfilePage from './ProfilePage/profilePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import WorkPermit from './pages/WorkPermit';
import Skills from './pages/Skills';
import WorkExperience from './pages/WorkExperience';
import Certifications from './pages/Certifications';
import Recommendations from './pages/Recommendations';
import Projects from './pages/Projects'; 
import ContactMe from './pages/ContactMe';




function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<NetflixTitle />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
      <Route path="/work-permit" element={<Layout><WorkPermit /></Layout>} />
      <Route path="/skills" element={<Layout><Skills /></Layout>} />
      <Route path="/work-experience" element={<Layout><WorkExperience /></Layout>} />
      <Route path="/certifications" element={<Layout><Certifications /></Layout>} />
      <Route path="/recommendations" element={<Layout><Recommendations /></Layout>} />
      <Route path="/projects" element={<Layout><Projects /></Layout>} />
      <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />





      </Routes>
    </Router>

  )
}

export default App
