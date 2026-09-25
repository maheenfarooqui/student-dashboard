import { ThemeProvider } from "./context/Theme";
import { UserProvider } from "./context/User";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Setting from "./components/Setting";


function App() {
  return (
    <>
      <ThemeProvider>
        <UserProvider>
          <div>
            <Navbar />
            <Setting />
            <Profile/>
          </div>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
