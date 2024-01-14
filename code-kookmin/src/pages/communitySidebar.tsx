import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";

function CommunitySidebar() {

    interface Category {
      id: number;
      name: string;
      sub?: { name: string }[];
    }
  
    let categoryEx = [{
      id: 0o00,
      name: '정보',
      sub: [
        {
          name: '문제추천',
        },
        {
          name: '코딩 뉴스',
        },
        {
          name: '팁과 노하우',
        }
      ]
    }, {
      id: 0o01,
      name: '코딩 게시판',
      sub: [
        {
          name: 'Q&A',
        },
        {
          name: '자유',
        },
        {
          name: '언어',
        },
        {
          name: '프로젝트',
        },
        {
          name: '학부생 공부비법',
        }
      ]
    }, {
      id: 0o02,
      name: '홍보 게시판',
      sub: [
        {
          name: '대회',
        },
        {
          name: '내 문제 홍보',
        },
      ]
    }, {
      id: 0o03,
      name: '문의 게시판',
      sub: [
        {
          name: '문의하기',
        },
        {
          name: '내 문의',
        }
      ]
    },
    ]
  
    let [category, setCategory] = useState<Category[]>(categoryEx);
  
    function getCategory() {
      axios.get('/community/category')
        .then((result) => {
          setCategory(result.data);
        });
    }
    // useEffect(() => {
    //   getCategory();
    // }, [])
  
    return (
      <div className='community-left'>
        <div className='community-sidebar'>
          {category?.map((value, i) => {
            return (
              <div className='sidebar-menu ' key={i}>
                <a className='sidebar-title' href={`/community/${value.name}`}>
                  <strong>{value.name}</strong>
                  <FontAwesomeIcon icon={faAngleRight} />
                </a>
                {
                  value.sub?.map((subvalue, index) => {
                    return (
                      <a className='sidebar-subtitle'>&nbsp;-&nbsp;&nbsp;&nbsp;{subvalue.name}</a>
                    )
                  })
                }
              </div>
            )
          })
          }
  
        </div>
        <div className='community-sidebar-space'></div>
      </div>
  
    )
  }

  export default CommunitySidebar;