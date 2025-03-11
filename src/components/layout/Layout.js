import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";


export default function Layout({children}){
    return (
        <Fragment>
            <Header />
                <div style={{minHeight : "700px"}}>
                    {children}
                </div>
            <Footer />
        </Fragment>
    )
}