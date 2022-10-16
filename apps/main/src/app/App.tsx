import { Navbar } from './components/navbar';
import { Pages } from './components/pages';
import './App.scss';

const styles = {
  appWrapper: "px-4 md:px-8 max-h-full overflow-y-auto z-[20] bg-gray-100 dark:bg-zinc-800",
  appContent: "relative grid grid-cols-6 gap-8 md:gap-0 h-app-content",
  profileWrapper: "hidden md:block relative justify-self-start self-center md:col-span-2 md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem] xl:w-[25rem] xl:h-[25rem]",
  profileImage: "absolute right-0 w-inherit h-inherit rounded-full lg:rounded-br-none lg:rounded-bl-[15rem] lg:rounded-tr-[12rem] lg:rounded-tl-none lg:rounded-bl-[18rem] lg:rounded-tr-[15rem] lg:rounded-tl-none",
}

export function App() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />
      <div className={styles.appContent}>
        <Pages />
        <div className={styles.profileWrapper}>
          <img
            alt="profile"
            src="../assets/personal-pic.jpeg"
            className={styles.profileImage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
