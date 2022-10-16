import { Route, Routes } from 'react-router-dom';

import { Home } from '../components/home';
import { About } from '../components/about';
import { Projects } from '../components/projects';
import { routePaths } from '../MetaData/RoutePaths';

export const Pages = () => {
  return (
    <div className="Pages h-full flex items-center justify-start">
      <Routes>
        <Route path={routePaths.HOME} element={<Home />} />
        <Route path={routePaths.ABOUT} element={<About />} />
        <Route path={routePaths.PROJECTS} element={<Projects />} />
      </Routes>
    </div>
  );
};
