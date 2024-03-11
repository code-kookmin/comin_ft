import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { category } from "./communityProps";

function CommunitySidebar() {

  return (
    <div className='community-left'>
      <div className='community-sidebar'>
        {category?.map((value, i) => {
          return (
            <div className='sidebar-menu ' key={i}>
              <a className='sidebar-title' href={`/community/${value.urlName}`}>
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