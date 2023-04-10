import './App.css';
import LandingPage from "./components/LandingPage/LandingPage";
import ChatPage from "./components/ChatPage/ChatPage";
import {useState} from "react";

function App() {
    const [page, setPage] = useState(0);

    const onSubmit = () => {
        setPage(1);
    }

  return (
    <div className="App">
        {page === 0 && <LandingPage onSubmit={onSubmit}/>}
        {page === 1 && <ChatPage/>}
    </div>
  );
}

export default App;
