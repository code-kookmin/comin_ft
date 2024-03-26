import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { RangeStatic } from "quill";
import { FormEvent, SetStateAction, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { category } from "../../components/community/communityProps";

function CommunityWrite() {
  //quill
  const inputRef = useRef<HTMLInputElement>(null);
  const quillRef = useRef<ReactQuill | null>(null);
  const [textValue, setTextValue] = useState<string>('');
  const [username, setUsername] = useState<string>('유저네임');
  const [title, setTitle] = useState<string>('');
  const handleTitleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    // 입력 필드의 새로운 값으로 'title' 상태를 업데이트합니다.
    setTitle(event.target.value);
  };

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
  const timestamp = today.getTime();
  const formatDate = (timestamp: number): string => {
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해주고, 2자리 수를 유지
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  const checkTextLength = () => {
    if (textValue.trim().length === 0) {
      setTextValue('내용이 없습니다');
      // length가 0이면 POST 막기
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 페이지 새로고침 방지

    // form 데이터 로깅
    const formData = new FormData(event.currentTarget); // FormData 인스턴스 생성
    console.log("카테고리:", formData.get('category'));
    console.log("제목:", formData.get('title'));
    console.log("내용:", textValue); // ReactQuill에서 관리하는 상태
    console.log("작성자:", formData.get('writer'));
    console.log("작성일:", formData.get('writeDate'));
  };

  return (
    <div className="community-body">

      {/* 글 작성하기 */}
      <main className='community-main'>
        <div className='community-write-zone'>
          <div className="write-zone">
            <h1>게시글 작성</h1>
            <form className="write-zone-form" method="POST" action="/community" onSubmit={handleSubmit}>
              <select name="category">
                <option key="none" value="none">카테고리 없음</option>

                {
                  category.map((value, index) => {
                    return (
                      <>
                        <option value={value.id} disabled>{value.name}</option>
                        {
                          value.sub?.map((a, i) => {
                            return (
                              <option value={a.id}>- {a.name}</option>
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
                value={title}
                onChange={handleTitleChange}
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
                    <input type="text" className="write-note-write-date" name="writeDate" value={formatDate(timestamp)} readOnly />
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