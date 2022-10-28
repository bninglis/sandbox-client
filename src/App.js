import "./App.scss";
import CreateForm from "./components/CreateForm/CreateForm";
import Background from "./components/Background/Background";
import Recommendations from "./components/Recommendations/Recommendations";
import Preferences from "./components/Preferences/Preferences"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./components/SignupPage/SignupPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Background />} />
                    <Route path="/background-info" element={<Background />} />
                    {/* <Route path="/interests" element={<Interests />} /> */}
                    <Route path="/preferences" element={<Preferences />} />
                    <Route path="/recommendations" element={<Recommendations />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
