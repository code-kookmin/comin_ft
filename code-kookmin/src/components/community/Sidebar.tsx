import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";

export let category = [{
  name: '정보',
  sub: [
    {
      id: 0, 
      name: '문제추천',
    },
    {
      id: 1,
      name: '코딩 뉴스',
    },
    {
      id: 2,
      name: '팁과 노하우',
    }
  ]
}, {
  name: '코딩 게시판',
  sub: [
    {
      id: 3,
      name: 'Q&A',
    },
    {
      id: 4,
      name: '자유',
    },
    {
      id: 5,
      name: '언어',
    },
    {
      id: 6,
      name: '프로젝트',
    },
    {
      id: 7,
      name: '학부생 공부비법',
    }
  ]
}, {
  name: '홍보 게시판',
  sub: [
    {
      id: 8,
      name: '대회',
    },
    {
      id: 9,
      name: '내 문제 홍보',
    },
  ]
}, {
  name: '문의 게시판',
  sub: [
    {
      id: 10,
      name: '문의하기',
    },
    {
      id: 11,
      name: '내 문의',
    }
  ]
},
]

function CommunitySidebar() {

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