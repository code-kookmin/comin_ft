import { Route, Routes } from "react-router-dom";
import "../styles/recommend.css"
import SmallList from "./smallList";
import PageTitle from "./pageTitle";
import SmallListDetail from "./smallListDetail";



const RecommendRouter = () => {
    return (
        <>
            <PageTitle
                pagename='문제 추천'
                url='/recommend'
                sort1="전체 보기"
                sort2="티어 매기기"
                url_sort2="notiers"
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