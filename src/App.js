import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import CadastroPage from "./components/CadastroPage";
import HabitosPage from "./components/HabitosPage";
import HojePage from "./components/HojePage";
import HistoricoPage from "./components/HistoricoPage";
import TokenContext from "./contexts/TokenContext";
import NameContext from "./contexts/NameContext";
import ImageContext from "./contexts/ImageContext";
import PorcentContext from "./contexts/PorcentContext";

export default function App() {
    const [token, setToken] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [porcent, setPorcent] = useState(0);
  return (
    <TokenContext.Provider value={{token, setToken}}>
        <NameContext.Provider value={{name, setName}}>
            <ImageContext.Provider value={{image, setImage}}>
                <PorcentContext.Provider value={{porcent, setPorcent}}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<LoginPage/>} />
                            <Route path="/cadastro" element={<CadastroPage/>} />
                            <Route path="/habitos" element={<HabitosPage/>} />
                            <Route path="/hoje" element={<HojePage/>} />
                            <Route path="/historico" element={<HistoricoPage/>} />
                        </Routes>
                    </BrowserRouter>
                </PorcentContext.Provider>
            </ImageContext.Provider>
        </NameContext.Provider>
    </TokenContext.Provider>
  );
}