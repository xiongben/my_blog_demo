import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import "../styles/pages/index.css"
import Header from "../components/Header";
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from "../components/Footer";
import {Row, Col, List, Icon} from "antd";
import React,{useState} from 'react'
import axios from 'axios'
import servicePath from "../config/apiUrl"


export default function Home(data) {
    var listData = data.data.data;
    console.log(listData)
    const [ mylist , setMylist ] = useState(listData)

  return (
    <>
        <Head>Home</Head>
        <Header></Header>
        <Row className="comm-main" type="flex" justify="center">
            <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
                <div>
                    <List
                        header={<div>最新日志</div>}
                        itemLayout="vertical"
                        dataSource={mylist}
                        renderItem={item => (
                            <List.Item>
                                <div className="list-title">
                                    <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                                        <a>{item.title}</a>
                                    </Link>
                                </div>
                                <div className="list-icon">
                                    <span><Icon type="calendar" /> 2019-06-28</span>
                                    <span><Icon type="folder" /> {item.typeName}</span>
                                    <span><Icon type="fire" /> {item.view_count}</span>
                                </div>
                                <div className="list-context">{item.context}</div>
                            </List.Item>
                        )}
                    />
                </div>
            </Col>

            <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
               <Author></Author>
                <Advert />
            </Col>
        </Row>
        <Footer/>
    </>
  )
}


Home.getInitialProps = async ()=>{
    var res = await axios(servicePath.getArticleList);
    return {data: res.data}
}
