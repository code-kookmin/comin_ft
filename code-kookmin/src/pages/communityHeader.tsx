import '../styles/community.css';

function CommunityHeader() {

    return (
      <div className='community-header'>
        <div className='community-header-contents'>
          <div className='community-logo-name'>
            <div className="community-logo" />
            <div className='community-names'>
              <a className='community-name1' href="/community">CODE
                {/* <img src={logo}></img> */}
              </a>
              <a className='community-name2' href="/community">KOOKMIN</a>
              <a className='community-name2' href="/community"> 커뮤니티</a>
            </div>
          </div>
          <div className='community-detail'>백준 및 코딩 전반적인 내용을 올리는 게시판입니다.<br />건전한 커뮤니티 이용을 위한 가이드라인을 참고해주시길 바라며, 이를 크게 위반한 게시물에 대해선 경고 없이 삭제됨을 알려드립니다.</div>
        </div>
      </div>
    )
  }

  export default CommunityHeader;