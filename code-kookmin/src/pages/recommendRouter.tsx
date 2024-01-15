import { Route, Routes } from "react-router-dom";
import "../styles/recommend.css"
import axios from "axios";
import SmallList from "./smallList";
import PageTitle from "./pageTitle";
import SmallListDetail from "./smallListDetail";



const RecommendRouter = () => {
    return (
        <>
            <PageTitle
                pagename='문제 추천'
                url='/recommend'
            />
            <div className="recommend-body">
                <Routes>
                    <Route path='/' >
                        <Route index element={<SmallList />} />
                        <Route path='notiers' element={<SmallListDetail />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default RecommendRouter;