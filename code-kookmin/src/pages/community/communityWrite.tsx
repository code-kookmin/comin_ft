import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { RangeStatic } from "quill";
import { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";

function CommunityWrite() {

  // interface Category {
  //   id: number;
  //   name: string;
  //   sub?: { name: string }[];
  // }

  let category = [{
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

  // let [category, setCategory] = useState<Category[]>(categoryEx);

  // function getCategory() {
  //   axios.get('/community/category')
  //     .then((result) => {
  //       setCategory(result.data);
  //     });
  // }

  //quill
  const inputRef = useRef<HTMLInputElement>(null);
  const quillRef = useRef<ReactQuill | null>(null);
  const [textValue, setTextValue] = useState<string>('');
  const [username, setUsername] = useState<string>('유저네임');

  const imageHandler = () => {
    console.log('에디터에서 이미지 버튼을 클릭하면 핸들러가 시작됩니다!');

    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', async () => {
      console.log('온체인지');
      const file = input.files?.[0];

      if (file) {
        const formData = new FormData();
        formData.append('img', file);

        try {
          const result = await axios.post<{ url: string }>('/community/img', formData);
          console.log('성공 시, 백엔드가 보내주는 데이터', result.data.url);
          const IMG_URL = result.data.url;

          const editor = quillRef.current?.getEditor();

          if (editor) {
            const range = editor.getSelection() as RangeStatic;
            editor.insertEmbed(range.index, 'image', IMG_URL);
          }
        } catch (error) {
          console.log('실패했어요ㅠ', error);
        }
      }
    });
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ['image'],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'image',
  ];

  let today = new Date();
  let year: number = today.getFullYear();
  let month: string | number = today.getMonth() + 1;
  if (month < 10) { month = 0 + String(month) };
  let date: string | number = today.getDate();
  if (date < 10) { date = '0' + String(date) };

  const checkTextLength = () => {
    if (textValue.trim().length === 0) {
      setTextValue('내용이 없습니다');
      // length가 0이면 POST 막기
    }
  };


  return (
    <div className="community-body">

      {/* 글 작성하기 */}
      <main className='community-main'>
        <div className='community-write-zone'>
          <div className="write-zone">
            <h1>게시글 작성</h1>
            <form className="write-zone-form" method="POST" action="/community">
              <select name="category">
                <option key="none" value="none">카테고리 없음</option>
                {
                  category.map((value, index) => {
                    return (
                      <>
                        <option key="123" value={value.name}>{value.name}</option>
                        {
                          value.sub?.map((a, i) => {
                            return (
                              <option key="123" value={a.name}>- {a.name}</option>
                            )
                          })
                        }
                      </>
                    )
                  })
                }
              </select>
              <input
                type="text"
                className="write-title"
                placeholder="제목"
                name="title"
              />
              <div className='write-contents-main'>
                <ReactQuill
                  className="write-contents"
                  ref={quillRef}
                  theme="snow"
                  placeholder="내용을 입력해주세요"
                  value={textValue}
                  onChange={setTextValue}
                  modules={modules}
                  formats={formats}
                />
                <textarea
                  className="write-contents-invisible"
                  value={textValue}
                  name="contents"
                />
              </div>

              <div className="write-contents-footer">
                <div className='write-contents-footer-detail'>
                  <div>
                    <FontAwesomeIcon icon={faUser} />
                    <input type="text" className="write-note-writer" name="writer" value={username} readOnly />
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCalendar} />
                    <input type="text" className="write-note-write-date" name="writeDate" value={year + '.' + month + '.' + date} readOnly />
                  </div>
                </div>
                <button className="write-contents-submit community-click" type='submit' onClick={() => { checkTextLength(); }}>발행</button>
              </div>

            </form>
          </div>

        </div>

      </main>
      {/* 글 작성하기 끝 */}
    </div >
  );
}

export default CommunityWrite;