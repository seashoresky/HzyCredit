// 引入react hook及路由
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// 引入Ant Design的表格、进度条、弹窗组件，以及用来引用背景图片的CSS模块
import { Table, Progress, Modal } from 'antd';
import 'antd/dist/antd.css'
import styles from '../../styles/lesson.module.css'

//引入axios用于get post请求, js-cookie用于get当前cookie，以便验证cookie是否已经过期
import axios from 'axios'
import Cookies from 'js-cookie'

//配置axios，允许服务器访问cookie
axios.defaults.withCredentials = true

const lesson = () => {
	//lessonData state用于存储get的绩点数据
	const [lessonData, setLessonData] = useState()
	const { Column } = Table;
	const { confirm } = Modal;
	const router = useRouter()

	function showConfirm() {
		confirm({
			title: '啊哦，你的cookie过期了唉',
			content: '要不重新登录下？',
			onOk() {
				router.push('/')
			},
			onCancel() {},
		});
	}
	
	const getCredit = async () => {
		//如果cookies之中没有fakeUser属性说明cookies已经失效
		if(Cookies.get().fakeUser === undefined) {
			showConfirm() //失效后弹出antd库的确认框框，跳转回首页
			return //跳转回首页，不再继续发送绩点获取的请求
		}
		try {	//如果cookie没有失效，则请求绩点数据
			const res = await axios.get(
				`http://localhost:9999/credit`
			)	
			setLessonData(res.data.data)
		} catch {
			err => {
				console.log(err)
			}
		}
	}
	//初次渲染lesson页时获取一次绩点数据
	useEffect(() => {
		getCredit()
	},[])
	
	return (
		<div className="h-screen grid place-content-center" id={styles.bgimp}>
			{/* 使用antd Table组件渲染绩点数据 */}
			<Table 
				dataSource={lessonData} 
				className='w-[60rem] rounded-xl p-3 backdrop-blur-3xl bg-white/20 backdrop-opacity-90'
				size='middle'
			>
				<Column title="课程" dataIndex="name" key="name" width={150}/>
				<Column title="绩点" dataIndex="credit" key="score" width={100}/>
    		<Column title="分数条" dataIndex="credit" key="credit"
					width={200}
					render={(_, credit) => {
						//因为antd进度条只能读取百分数，因此将绩点换算为百分制
						const per = Number(parseInt((Number(credit.credit) / 5) * 100));
						return (
							<Progress 
								percent={per} 
								size="small" 
								//进度条的渐变色
								strokeColor={{
									'0%': '#108ee9',
									'100%': '#87d068',
								}}
								//去除进度条的数字标签
								format={(score) => `${''}`}
							/>
						)
					}}	
				/>
			</Table>
			{/* 点击刷新button之后会重新获取一次绩点数据 */}
			<button 
				className='shadow bg-blue-500 hover:bg-blue-700 transition ease-in-out delay-200
				focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer w-1/2
				h-10 mt-5 mx-auto'	
				onClick={() => getCredit()}	
			>
				刷新绩点数据
			</button>
		</div>
	)
}

export default lesson