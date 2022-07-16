import './App.scss';
import { AppMeta } from "./MetaData/App.meta";
import { Navbar } from './components/navbar';
import { Pages } from './components/pages';

const {
  styles,
  background
} = AppMeta;

export function App() {

  return (
    <div className={styles.appWrapper}>
      <Navbar />
      <div className="AppContent">
        <Pages />
        <div className="PersonalPicture relative justify-self-start">
          <img src={`../${background.src}`} className={background.css} alt="profile" />
        </div>
        {/* END: routes */}
      </div>
    </div>
  );
}

export default App;
