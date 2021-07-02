import React from 'react'
import "./SearchMenu.css"
import { Input } from 'antd';
import { StarOutlined, MenuOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Button } from 'antd'

function SearchMenu() {
  return (
    <div
      className="allSearch"
    >
      <div className="burgerCon">
        <MenuOutlined
          style={{
            fontSize: "25px",
            color: "#D66325"
          }}
        />

      </div>
      <div className="mainCon">
        <div className="iconHolder">
          <SearchOutlined

            style={{
              color: "#E7E7E7 "
            }}

            className="iconCon"
          />
        </div>
        <div className="inputHolder">
          <Input placeholder="What Do You Want To Eat?"

            style={{
              background: "#F0F0F0",
              border: "none"

            }}

            className="inputCon"
          />
        </div>
        <div>
          <Button>
            Search
          </Button>

        </div>

      </div>
    </div>
  )
}

export default SearchMenu
