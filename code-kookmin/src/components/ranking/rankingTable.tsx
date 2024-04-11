import { Ranking } from "./rankingSmallList";
import tier0 from "../../assets/티어아이콘/0.svg";
import tier1 from "../../assets/티어아이콘/1.svg";
import tier2 from "../../assets/티어아이콘/2.svg";
import tier3 from "../../assets/티어아이콘/3.svg";
import tier4 from "../../assets/티어아이콘/4.svg";
import tier5 from "../../assets/티어아이콘/5.svg";
import tier6 from "../../assets/티어아이콘/6.svg";
import tier7 from "../../assets/티어아이콘/7.svg";
import tier8 from "../../assets/티어아이콘/8.svg";
import tier9 from "../../assets/티어아이콘/9.svg";
import tier10 from "../../assets/티어아이콘/10.svg";
import tier11 from "../../assets/티어아이콘/11.svg";
import tier12 from "../../assets/티어아이콘/12.svg";
import tier13 from "../../assets/티어아이콘/13.svg";
import tier14 from "../../assets/티어아이콘/14.svg";
import tier15 from "../../assets/티어아이콘/15.svg";
import tier16 from "../../assets/티어아이콘/16.svg";
import tier17 from "../../assets/티어아이콘/17.svg";
import tier18 from "../../assets/티어아이콘/18.svg";
import tier19 from "../../assets/티어아이콘/19.svg";
import tier20 from "../../assets/티어아이콘/20.svg";
import tier21 from "../../assets/티어아이콘/21.svg";
import tier22 from "../../assets/티어아이콘/22.svg";
import tier23 from "../../assets/티어아이콘/23.svg";
import tier24 from "../../assets/티어아이콘/24.svg";
import tier25 from "../../assets/티어아이콘/25.svg";
import tier26 from "../../assets/티어아이콘/26.svg";
import tier27 from "../../assets/티어아이콘/27.svg";
import tier28 from "../../assets/티어아이콘/28.svg";
import tier29 from "../../assets/티어아이콘/29.svg";
import tier30 from "../../assets/티어아이콘/30.svg";
import tier31 from "../../assets/티어아이콘/31.svg";
import { Link } from "react-router-dom";

interface RankingListContentsProps {
  list: Ranking[];
}

interface TierSVGMap {
  [key: number]: string;
}
export const tierSVGMap: TierSVGMap = {
  0: tier0,
  1: tier1,
  2: tier2,
  3: tier3,
  4: tier4,
  5: tier5,
  6: tier6,
  7: tier7,
  8: tier8,
  9: tier9,
  10: tier10,
  11: tier11,
  12: tier12,
  13: tier13,
  14: tier14,
  15: tier15,
  16: tier16,
  17: tier17,
  18: tier18,
  19: tier19,
  20: tier20,
  21: tier21,
  22: tier22,
  23: tier23,
  24: tier24,
  25: tier25,
  26: tier26,
  27: tier27,
  28: tier28,
  29: tier29,
  30: tier30,
  31: tier31,
};

const RankingTable: React.FC<RankingListContentsProps> = ({ list }) => {
  return (
    <div className="ranking-table-main">
      <RankingTableTop />
      <RankingTableDetail list={list} />
      <div className="ranking-table ranking-table-bottom">
        <button>더보기</button>
      </div>
    </div>
  );
};

const RankingTableTop = (props: any) => {
  return (
    <div>
      <div className="ranking-table ranking-table-top">
        <div className="ranking-table__rank">
          <span>순위</span>
        </div>
        <div className="ranking-table__tier-id">
          <span>티어</span>
          <span className="ranking-table-top__id">아이디</span>
        </div>
        <div className="ranking-table-top__lp">
          <span>LP</span>
        </div>
        <div className="ranking-table-top__correct">
          <span>맞힌 문제</span>
        </div>
        <div className="ranking-table-top__correct">
          <span>소속</span>
        </div>
      </div>
    </div>
  );
};

const RankingTableDetail: React.FC<RankingListContentsProps> = ({ list }) => {
  return (
    <>
      {list.map((value, index) => (
        <div className="ranking-table ranking-table-detail">
          <div className="ranking-table__rank ranking-table-detail__div">
            <span>{index + 1}</span>
          </div>
          <div className="ranking-table__tier-id">
            <span className="ranking-tier-div">
              {value.tier ? (
                <img
                  className="tier-small"
                  src={tierSVGMap[value.tier]}
                  alt={`Tier ${value.tier}`}
                />
              ) : (
                <div>Tier Unknown</div>
              )}
            </span>
            <span className="ranking-table__id">
              <a
                href={`https://www.acmicpc.net/user/${value.userId}`}
                target="_blank"
              >
                {value.userId}
              </a>
            </span>
          </div>
          <div className="ranking-table-detail__div">
            <span>{value.totalSolvedWeight}</span>
          </div>
          <div className="ranking-table-detail__div">
            <span>{value.totalSolved}</span>
          </div>
          <div className="ranking-table-detail__div">
            <span>국민대학교</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default RankingTable;
