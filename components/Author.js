import {Avatar,Divider} from 'antd'
import '../styles/components/author.css'
import {WechatOutlined, GithubOutlined, QqOutlined} from '@ant-design/icons'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://avatars1.githubusercontent.com/u/20514794?s=400&u=c10939ae57149de301bbca7c86744106fa8b44ee&v=4"  /></div>
            <div className="author-introduction">Web程序员，专注于WEB和移动前端开发。青春奋斗的日子，触摸理想的岁月。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className="account"  />
                <Avatar size={28} icon={<QqOutlined />}  className="account" />
                <Avatar size={28} icon={<WechatOutlined/>}  className="account"  />

            </div>
        </div>
    )

}

export default Author
