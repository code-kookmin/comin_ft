import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { RangeStatic } from "quill";
import { SetStateAction, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { category, PostUpdateProps } from "../../components/community/communityProps";

function CommunityUpdate({ post }: { post: PostUpdateProps }) {

  //quill
  const inputRef = useRef<HTMLInputElement>(null);
  const quillRef = useRef<ReactQuill | null>(null);
  const [textValue, setTextValue] = useState<string>(post.post.detail);
  const [title, setTitle] = useState<string>(post.post.title);
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
          alert('이미지 업로드에 실패했습니다. 다시 시도해주세요.');
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
  let year = today.getFullYear();
  let month = `${today.getMonth() + 1}`.padStart(2, '0'); // padStart를 사용하여 두 자리수 유지
  let date = `${today.getDate()}`.padStart(2, '0');

  const checkTextLength = () => {
    if (textValue.trim().length === 0) {
      setTextValue('내용이 없습니다');
    }
  };

  return (
    <div className="community-body">

      {/* 글 작성하기 */}
      <main className='community-main'>
        <div className='community-write-zone'>
          <div className="write-zone">
            <h1>게시글 수정</h1>
            <form className="write-zone-form" method="POST" action="/community">
              <select name="category">
                {
                  category.map((value, index) => {
                    return (
                      <>
                        <option key="123" value={value.id} disabled>{value.name}</option>
                        {
                          value.sub?.map((a, i) => {
                            return (
                              a.id === post.post.category_id
                                ? <option key="123" value={a.id} selected>- {a.name}</option>
                                : <option key="123" value={a.id}>- {a.name}</option>
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
                    <input type="text" className="write-note-writer" name="writer" value={post.post.user_id} readOnly />
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCalendar} />
                    <input type="text" className="write-note-write-date" name="writeDate" value={post.post.date} readOnly />
                  </div>
                </div>
                <button className="write-contents-submit community-click" type='submit' onClick={() => { checkTextLength(); }}>수정</button>
              </div>

            </form>
          </div>

        </div>

      </main>
      {/* 글 작성하기 끝 */}
    </div >
  );
}

export default CommunityUpdate;