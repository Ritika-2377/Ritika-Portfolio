import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import AchievementsPage from './pages/Achievements.jsx'
import Assignments from './pages/Assignments.jsx'
import CertificationsPage from './pages/Certifications.jsx'
import CoaLab from './pages/CoaLab.jsx'
import Contact from './pages/Contact.jsx'
import EducationPage from './pages/Education.jsx'
import Gallery from './pages/Gallery.jsx'
import Home from './pages/Home.jsx'
import Journey from './pages/Journey.jsx'
import NotFound from './pages/NotFound.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import ProjectsPage from './pages/Projects.jsx'
import ResumePage from './pages/Resume.jsx'
import Skills from './pages/Skills.jsx'
import Welcome from './pages/Welcome.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="skills" element={<Skills />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="experience" element={<Journey />} />
          <Route path="journey" element={<Journey />} />
          <Route path="certifications" element={<CertificationsPage />} />
          <Route path="achievements" element={<AchievementsPage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="coa" element={<CoaLab />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
