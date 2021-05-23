/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDom from 'react-dom'
import './css/style.css'
//import data from '

import {books} from './books'
import SpecificBook from './Book.js'
import {greeting} from './testing/testing'

console.log(greeting)

const dataTest = ['vuong', 'thuong', 'huong']
const newBook = dataTest.map(data => { 
	 return <h1 style={{width: '100%'}}>{data}</h1> })

function BookList() {
	return (
	<section className="ctn-book">
		{books.map((book, id)=>{ 
			if(id ===1 ){
				return <SpecificBook key={id} {...book}> <p style={{color: '#0062cc'}}>Day la children</p>  </SpecificBook>
			}
			return <SpecificBook key={id} {...book} /> })}
	</section>
	)
}



ReactDom.render(<BookList />, document.getElementById('root'))
