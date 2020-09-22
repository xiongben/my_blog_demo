import React from 'react'
import '../styles/components/header.css'
import {Row, Col, Menu} from 'antd'
import {DollarOutlined, VideoCameraOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

const Header = () => {
    return (<div className="header">
                <Row type="flex" justify="center">
                    <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                        <span className="header-logo">Xiong Ben</span>
                        <span className="header-txt">this is a react project</span>
                    </Col>
                    <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                        <Menu  mode="horizontal">
                            <Menu.Item key="home">
                                <MenuUnfoldOutlined />
                                首页
                            </Menu.Item>
                            <Menu.Item key="video">
                                <VideoCameraOutlined />
                                视频
                            </Menu.Item>
                            <Menu.Item key="life">
                                <DollarOutlined />
                                生活
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </div>)
}


export default Header