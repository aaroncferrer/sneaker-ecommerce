import {Container} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import ItemCard from '../components/ItemCard'

export default function Catalog(){

	const [items, setItems] = useState([])

	useEffect(() => {
		fetch("http://localhost:4000/items/getAllActiveItems")
		.then(res => res.json())
		.then(data => {
			console.log(data)

			setItems(data.map(item => {
				return(
					<ItemCard key = {item._id} itemProp = {item}/>
				)
			}))
		})

	}, [])

	return(
	<div
      style={{
        backgroundColor: "#f2f2f2",
      }}
    >	
    
    <Container className="w-75">
	<h1 className="page-header text-dark py-3">Catalog</h1>
	{items}
	</Container>

	</div>		
	)
}
