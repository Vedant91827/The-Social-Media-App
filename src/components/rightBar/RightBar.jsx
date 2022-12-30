import React from 'react';
import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestions for You</span>

            <div className='user'>
                <div className="userInfo">
                  <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="userImage"/>
                  <span>Other Man</span>
                </div>
                <div className='buttons'>
                      <button>Follow</button>
                      <button>Dismiss</button>
                </div>
            </div>

            <div className='user'>
                <div className="userInfo">
                  <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="userImage"/>
                  <span>Other Man</span>
                </div>
                <div className='buttons'>
                      <button>Follow</button>
                      <button>Dismiss</button>
                </div>
            </div>
        </div>


        <div className="item">
          <span>Latest Activities</span>
          <div className='user'>
                <div className="userInfo">
                  <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="userImage"/>
                  <p>
                   <span>Other Man </span> changed cover picture
                  </p>
                </div>
                <span>1 min ago</span>
            </div>
            <div className='user'>
                <div className="userInfo">
                  <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="userImage"/>
                  <p>
                   <span>Other Man </span> changed cover picture
                  </p>
                </div>
                <span>1 min ago</span>
            </div>
            <div className='user'>
                <div className="userInfo">
                  <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="userImage"/>
                  <p>
                   <span>Other Man </span> changed cover picture
                  </p>
                </div>
                <span>1 min ago</span>
            </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className='user'>
                <div className="userInfo">
                  <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="userImage"/>
                  <div className="online"/>
                   <span>Other Man </span>
                </div>
            </div>
            <div className='user'>
                <div className="userInfo">
                  <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="userImage"/>
                  <div className="online"/>
                   <span>Other Man </span>
                </div>
            </div>
            <div className='user'>
                <div className="userInfo">
                  <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="userImage"/>
                  <div className="online"/>
                   <span>Other Man </span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar