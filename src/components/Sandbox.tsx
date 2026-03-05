import { useEffect, useState } from 'react';

// // первый кастомный хук
// function useText() {
// 	const [text, setText] = useState('');

// 	useEffect(() => {
// 		const id = setTimeout(() => {
// 			setText('Hello');
// 			const _id = setTimeout(() => {
// 				setText(text => text + ' World');
// 				clearTimeout(_id);
// 			}, 1000);
// 		}, 1000);
// 		return () => {
// 			clearTimeout(id);
// 		};
// 	}, []);

// 	return text;
// }

// // второй кастомный хук
// function useCount() {
// 	const [count, setCount] = useState(0);

// 	useEffect(() => {
// 		const id = setInterval(() => {
// 			setCount(count => count + 1);
// 		}, 1000);
// 		return () => {
// 			clearInterval(id);
// 		};
// 	}, []);

// 	return count;
// }

// // компонент, в котором используется один из кастомных хуков в зависимости от условия
// const Content = ({ active }) => <p>{active ? useText() : useCount()}</p>;

function Sandbox() {}

export default Sandbox;
