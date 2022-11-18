import './App.css';
import {useTelegram} from "./hooks/useTelegram";
import {useEffect} from "react";
import Header from "./Headers/Header";

function App() {

    const {tg, onToggleButton} = useTelegram()

    useEffect(()=>{
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
