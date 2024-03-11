export interface Category {
    name: string;
    urlName: string;
    sub: {
        id: number;
        name: string;
    }[]
}

export interface PostListProps {
    id: number;
    post: {
        title: string,
        category_id: number,
        user_id: string,
        date: string, //나중에 Date형식으로 변환
        like: number,
        comments: number
    };
}

export interface PostDetailProps {
    id: number;
    post: {
        title: string,
        category_id: number,
        date: string,//나중에 Date형식으로 변환
        user_id: string,
        views: number,
        detail: string,
        like: number,
        comments: {
            user_id: string,
            date: string,
            detail: string,
            like: number,
        }[],
    };
}

export let category = [{
    name: '정보',
    urlName: 'info',
    id: 0,
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
    urlName: 'coding',
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
    urlName: 'promotion',
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
    urlName: 'question',
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

export let postlistEx = [
    {
        id: 123,
        post: {
            title: '제목111',
            category_id: 3,
            user_id: "유저아이디1",
            date: '23.09.24',
            like: 3,
            comments: 12
        },
    },
    {
        id: 124,
        post: {
            title: '제목2',
            category_id: 2,
            user_id: "유저아이디2",
            date: '23.09.25',
            like: 5,
            comments: 19
        },
    },
]

export let postEx = [{
    id: 123,
    post: {
        title: '아니 이거 머임?',
        category_id: 3,
        date: '23.09.24',
        user_id: "유저아이디1",
        views: 30,
        detail: "이코드어케짜냐고 100번물었다",
        like: 4,
        comments: [{
            user_id: "댓글작성자1",
            date: '23.09.24',
            detail: "이케이케하면댐",
            like: 123
        },
        {
            user_id: "댓글작성자2",
            date: '23.09.26',
            detail: "그걸왜못함ㅋㅋ",
            like: 126
        }]
    }
}]


// function getCategoryName(categoryId: number) {
//     let categoryName;
//     if (categoryId >= 0 && categoryId < 3) {
//         categoryName = 'info';
//     } else if (categoryId >= 3 && categoryId < 8) {
//         categoryName = 'coding';
//     } else if (categoryId >= 8 && categoryId < 10) {
//         categoryName = 'promotion';
//     } else {
//         categoryName = 'question';
//     }
//     return categoryName;
// }