import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/home';
import { About } from '../components/about';
import { Projects } from '../components/projects';

export const Pages = () => {

  return (
    <div className="Pages h-full flex items-center justify-start">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
};
