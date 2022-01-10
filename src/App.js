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
    const [name, setName] = useState('');
    const [porcent, setPorcent] = useState(0);
    const tokenOnLocalStorage = localStorage.getItem("token");
    const imageOnLocalStorage = localStorage.getItem("image");
	const [token, setToken] = useState(tokenOnLocalStorage);
    const [image, setImage] = useState(imageOnLocalStorage);

	function setAndPersistToken(token) {
		setToken(token);
		localStorage.setItem("token", token);
    }
    function setAndPersistImage(image) {
		setImage(image);
		localStorage.setItem("image", image);
    }
  return (
    <TokenContext.Provider value={{token, setToken, setAndPersistToken}}>
        <NameContext.Provider value={{name, setName}}>
            <ImageContext.Provider value={{image, setImage, setAndPersistImage}}>
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