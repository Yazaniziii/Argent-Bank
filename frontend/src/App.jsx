import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";
import UserAccount from "./pages/UserAccount";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SignIn" element={<SignInPage />} />
                <Route path="/User" element={<UserAccount />} />
                <Route path="*" />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
