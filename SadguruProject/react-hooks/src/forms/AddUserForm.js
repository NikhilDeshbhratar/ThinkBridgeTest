import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = {"image":null,"name":"","price":"","description":""};
	const [ user, setUser ] = useState(initialFormState);

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	const handleChange = event => {
		const myfile = event.target.files[0];
		user.image = myfile;
	};


	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				props.addUser(user)
				setUser(initialFormState)
				
			}}

			>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} required/>
			<label>Price</label>
			<input type="number" name="price" value={user.price} onChange={handleInputChange} required/>
			<label>Description</label>
			<input type="text" name="description" value={user.description} onChange={handleInputChange} required/>
			<label>Image</label>
			<input type="file" accept="image/png, image/jpeg" name="image" onChange={handleChange} />
			<br></br>
			<br></br>
			<div class="vertical-center">
			<button style={{ alignContent: 'center' }}>Add Item</button>
			</div>
		</form>
	)
}

export default AddUserForm
