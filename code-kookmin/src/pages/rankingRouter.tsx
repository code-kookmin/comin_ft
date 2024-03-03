import { Route, Routes } from "react-router-dom";
import "../styles/ranking.css"
import PageTitle from "./pageTitle";
import SmallList from "./smallList";
import SmallListDetail from "./smallListDetail";
import RankingList from "../components/ranking/rankingSmallList";



const RankingRouter = () => {
    return (
        <>
            <PageTitle
                pagename='금주의 랭킹'
                url='/ranking'
                sort1="전체 보기"
            />
            <div className="recommend-body">
                <Routes>
                    <Route path='/' >
                        <Route index element={<RankingList />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default RankingRouter;