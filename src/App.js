import './App.css';
import {useTelegram} from "./hooks/useTelegram";
import {useEffect} from "react";
import Header from "./components/Headers/Header";

function App() {
    console.log('ss')

    const { tg , onToggleButton} = useTelegram()

    useEffect(() => {
        tg.ready()
    },[])

    return (
    <div className="App">
        <Header></Header>
        <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
