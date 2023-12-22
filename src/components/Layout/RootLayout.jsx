import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Wrapper from "../UI/Wrapper.jsx";

export default function RootLayout() {
    return (
        <>
            <Header />
            <Wrapper>
                <Outlet />
            </Wrapper>
            <Footer />
        </>
    );
}