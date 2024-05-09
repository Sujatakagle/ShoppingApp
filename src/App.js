//App.js

import React, { useState } from 'react';
import './App.css';
import SearchComponent from './SearchComponent';
import ShowCourseComponent from './ShowCourseComponent';
import UserCartComponent from './UserCartComponent';

function App() {
	const [courses, setCourses] = useState([
		{
			id: 1,
			name: 'Apple iPhone 15 128GB',
			price: 70980,
			image:
				"https://assets.sangeethamobiles.com/product_img/14501/1694714797_wP3.jpg"
		},
		{
			id: 2,
			name: ' Bag',
			price: 390,
			image:
				'https://i.ebayimg.com/images/g/AcAAAOSwOf5kGDcv/s-l1200.jpg'
		},
		{
			id: 3,
			name: "Men'sHoodie",
			price: 799,
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGOKlho20ZlQLDZFUxUq73v6LioGVE9CQxp2sIVo71g&s'
		},

		{
			id: 4,
			name: ' Laptop Bag',
			price: 280,
			image:
				"https://massimiliano.in/wp-content/uploads/2020/10/0W8A9922-1-433x433.jpg"
		},
		{
			id: 5,
			name: "Women's Leather Jacket",
			price: 900,
			image:
				"https://t4.ftcdn.net/jpg/06/56/00/57/360_F_656005714_3Qmr7G9tWeef4ooEBdqtImRXC6n5eNYa.webp"
		}
		, {
			id: 6,
			name: "Men's Shoes",
			price: 650,
			image:
				"https://m.media-amazon.com/images/I/41etyTkRIoL._AC_UY1000_.jpg"
		},
		{
			id: 7,
			name: "Men's Shoes",
			price: 480,
			image:
				'https://slimages.macysassets.com/is/image/MCY/products/8/optimized/21030448_fpx.tif?$filterlrg$&wid=327'
		}, {
			id: 8,
			name: " Women's Shoes",
			price: 400,
			image:
				"https://doctorextrasoft.com/cdn/shop/products/fuschia.jpg?v=1656503277"
		},
		{
			id: 10,
			name: "Women's Bag",
			price: 350,
			image:
				"https://rukminim2.flixcart.com/image/832/832/krz97rk0/sling-bag/e/8/p/spt-women-sling-bag-050-grey-elegant-fancy-stylish-chain-strap-original-imag5naatgerjhzn.jpeg?q=70&crop=false"
		},
		{
			id: 11,
			name: ' HP Pavilion Laptop',
			price: 70880,
			image:
				"https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/0/c07991100_1.png"
		},
		{
			id: 12,
			name: 'Study Table',
			price: 280,
			image:
				"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8N0vSrE72pMQkjqiXggSFJQAtHdEbTuemZmOcOrjmZGeawkiL5oFkAd78fRepAqo8fFPkq9LbJP8gSGhfTHSOlVU7cjslbxL1gK3HRtGX&usqp=CAE"
		},
		{
			id: 13,
			name: 'Wireless HeadPhones',
			price: 1890,
			image:
				"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRifz1D999OmLxdZaxayCIyLuV0t37hWD-THEYKqK-iLSUwQUkSlBkzY2sFeeAFzvRBOUBLK2unw9F9yI7SETX8bUQ6osBfkk1ykvAfI8IvRatyTrZChb2mSg&usqp=CAE"
		},



	]);

	const [cartCourses, setCartCourses] = useState([]);
	const [searchCourse, setSearchCourse] = useState('');

	const addCourseToCartFunction = (GFGcourse) => {
		const alreadyCourses = cartCourses
			.find(item => item.product.id === GFGcourse.id);
		if (alreadyCourses) {
			const latestCartUpdate = cartCourses.map(item =>
				item.product.id === GFGcourse.id ? {
					...item, quantity: item.quantity + 1
				}
					: item
			);
			setCartCourses(latestCartUpdate);
		} else {
			setCartCourses([...cartCourses, { product: GFGcourse, quantity: 1 }]);
		}
	};

	const deleteCourseFromCartFunction = (GFGCourse) => {
		const updatedCart = cartCourses
			.filter(item => item.product.id !== GFGCourse.id);
		setCartCourses(updatedCart);
	};

	const totalAmountCalculationFunction = () => {
		return cartCourses
			.reduce((total, item) =>
				total + item.product.price * item.quantity, 0);
	};

	const courseSearchUserFunction = (event) => {
		setSearchCourse(event.target.value);
	};

	const filterCourseFunction = courses.filter((course) =>
		course.name.toLowerCase().includes(searchCourse.toLowerCase())
	);

	return (
		<div className="App">
		
			<SearchComponent searchCourse={searchCourse}
				courseSearchUserFunction=
				{courseSearchUserFunction} />
			<main className="App-main">
				<ShowCourseComponent
					courses={courses}
					filterCourseFunction={filterCourseFunction}
					addCourseToCartFunction={addCourseToCartFunction}
				/>

				<UserCartComponent
					cartCourses={cartCourses}
					deleteCourseFromCartFunction={deleteCourseFromCartFunction}
					totalAmountCalculationFunction={
						totalAmountCalculationFunction
					}
					setCartCourses={setCartCourses}
				/>
			</main>
		</div>
	);
}

export default App;
