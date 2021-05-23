/* eslint-disable no-unused-vars */
import React from 'react'

const Book = ({name,title, img, auth, children}) => {
	
	
	return (
	<article className="book">
		<img style={{width: '80%'}} src={img} alt="" />
		<h3 onClick={() => { console.log(title)}}>{title}</h3>
		<h4>Trang: {auth || 'null'}</h4>
		<h4>{name || 'show null'}</h4>
		<p style={{fontWeight:'bold', color: 'white', background:'red', padding:'.5rem', borderRadius:'10px'}}> {price}</p>
		children: {children ?? 'null'}
		<button onClick={(e) => {clickHandle(auth, e)}}>click</button>
	</article>)
}

const clickHandle = (attr, e) => { 
	alert(attr)
	console.log(e)
}
const urlImg = 'https://cf.shopee.vn/file/3b1f42e67d7248551d7a881dea6d7071_tn'
const auth = 'Shoppe'
const Img = () => <img style={{width: '80%'}} src={urlImg} alt="" />
const Title = () => <h3>[Mã 6% đơn 3TR] Máy Tay Huawei D14 R7(8+512G)</h3>
const price = '100.000vnd' 
const Person = () =>  <h2>john doe</h2>
const Message = () => { return <p> this is message</p> }

export default Book
