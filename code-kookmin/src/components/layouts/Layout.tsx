import Header from "./Header";
import Footer from "./Footer";
import { prototype } from "events";

const Layout = (props: {children: React.ReactNode}) => {
    return(
        <>
        <Header/>

        <main>{props.children}</main>

        <Footer/>
        </>
    )
}

export default Layout