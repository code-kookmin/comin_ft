import React, { useState } from 'react';
import MainButton from '../common/MainButton';
import '../../styles/myPage.css';

interface MyInfoFormProps {
    initialValues: {
        nickname: string;
        id: string;
        baekjoonId: string;
        birthdate: string;
        email: string;
        externalLink: string;
        affiliation: string;
        profileMessage: string;
    };
    onSubmit: (values: MyInfoFormValues) => void;
}

//수정 전 유저 정보
interface MyInfoFormValues {
    nickname: string;
    id: string;
    baekjoonId: string;
    birthdate: string;
    email: string;
    externalLink: string;
    affiliation: string;
    profileMessage: string;
}

const MyInfoForm: React.FC<MyInfoFormProps> = ({ initialValues, onSubmit }) => {
    const [values, setValues] = useState<MyInfoFormValues>(initialValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(values);
    };

    return (
        <form onSubmit={handleSubmit} className="resetPW-form">
            <div>
                <label htmlFor="nickname">닉네임</label>
                <input type="text" id="nickname" name="nickname" onChange={handleChange} value={values.nickname} />
            </div>

            <div>
                <label htmlFor="id">아이디</label>
                <input type="text" id="id" name="id" value={values.id} disabled />
            </div>

            <div>
                <label htmlFor="baekjoonId">백준 아이디</label>
                <input type="text" id="baekjoonId" name="baekjoonId" value={values.baekjoonId} disabled />
            </div>

            <div>
                <label htmlFor="birthdate">생년월일</label>
                <input type="text" id="birthdate" name="birthdate" onChange={handleChange} value={values.birthdate} />
            </div>

            <div>
                <label htmlFor="email">이메일</label>
                <input type="text" id="email" name="email" onChange={handleChange} value={values.email} />
            </div>

            <div>
                <label htmlFor="externalLink">외부 링크</label>
                <input
                    type="text"
                    id="externalLink"
                    name="externalLink"
                    onChange={handleChange}
                    value={values.externalLink}
                />
            </div>

            <div>
                <label htmlFor="affiliation">소속</label>
                <input
                    type="text"
                    id="affiliation"
                    name="affiliation"
                    onChange={handleChange}
                    value={values.affiliation}
                />
            </div>

            <div>
                <label htmlFor="profileMessage">프로필 메시지</label>
                <input
                    id="profileMessage"
                    name="profileMessage"
                    onChange={handleChange}
                    value={values.profileMessage}
                />
            </div>

            <MainButton type="submit">수정하기</MainButton>
        </form>
    );
};

export default MyInfoForm;
