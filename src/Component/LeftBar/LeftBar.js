import React from 'react'
import "./LeftStyle.css"
import { HeartOutlined, HomeOutlined, AlertOutlined, PushpinOutlined, UserOutlined } from '@ant-design/icons';
function LeftBar() {
  return (
    <div>
      <div className="leffConAll">
        <br />
        <br />
        <br />

        <div>
          <UserOutlined className="iconConNav" />
        </div>
        <br />
        <div>
          <HeartOutlined

            className="iconConNav"

          />
        </div>
        <br />
        <div>
          <HomeOutlined
            className="iconConNav"

          />
        </div>
        <br />

        <div>
          <AlertOutlined
            className="iconConNav"
          />
        </div>
        <br />
        <div>
          <PushpinOutlined
            className="iconConNav"
          />
        </div>




      </div>
    </div>
  )
}

export default LeftBar
