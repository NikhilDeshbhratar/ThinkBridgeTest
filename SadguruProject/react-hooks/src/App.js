import React, { useState, Fragment, useEffect } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import axios from 'axios'
import { getList, createItem ,updateItem, deleteItem} from './apis/TeaApi'

const App = () => {
	const [apiData, setApidata] = useState();
	const [apiModifiedData, setApiModifiedData] = useState([]);
	const [processing, setProcessing] = useState(false);

	// useEffect(() => {
	// 	myApi()
	// }, []);


    useEffect(() => {
        fetchList();
    }, []);

	// const fetchList = () => {
	// 	axios.get("http://127.0.0.1:8000//api/tea/").then(
	// 		result => {
	// 			console.log('setApidata', result,"SET WALADATA")
	// 			setApidata(result.data)
	// 			{ result.data && modifyData(result.data) }

	// 		},
	// 		// Note: it's important to handle errors here
	// 		// instead of a catch() block so that we don't swallow
	// 		// exceptions from actual bugs in components.
	// 		error => {
	// 			console.log('errorrrr', error)
	// 			// this.setState({
	// 			// 	isLoaded: true,
	// 			// 	error
	// 			// });
	// 		}
	// 	);
	// }

    const fetchList = async () => {
        setProcessing(true);
        try {
			const resourceList = await getList();   
			setApidata(resourceList.data);
			{ resourceList.data && modifyData(resourceList.data) }
        } catch (error) {
            console.error(error);
        }
        
        setProcessing(false);
    }

	const createData = async (user) => {
		setProcessing(true);
        try {
			const createdData = await createItem(user);
			alert("Added Succesfully");  
			fetchList();
        } catch (error) {
            console.error(error);
        }
        
        setProcessing(false);

	}

	// const createImageData = (user) => {
	// 	fetch('http://127.0.0.1:8000/api/tea/', {
	// 		method: 'POST',
	// 		body: JSON.stringify(user)
	// 	  })
	// 	  .then( res => console.log(res))
	// 	  .catch(error => console.log(error))
	// }


	const updateData = async (id,user) => {
        setProcessing(true);
        try {
			const createdData = await updateItem(user,id);
			alert("Updated Succesfully");  
			fetchList();
        } catch (error) {
            console.error(error);
        }
        
        setProcessing(false);

	}

	const deleteData = async (id) => {
        setProcessing(true);
        try {
			const createdData = await deleteItem(id);  
			alert("Deleted Succesfully");
			fetchList();
        } catch (error) {
            console.error(error);
        }
        
        setProcessing(false);

	}

	// Data
	const modifyData = (value) => {
		const customData = [];
		value && value.map((e) => {
			let suggestionObj = {
				id: e.id,
				name: e.name,
				price: e.price,
				description: e.description,
				created_at: e.created_at,
				image_url: e.image_url
			}
			customData.push(suggestionObj);
		})

		setApiModifiedData(customData);

	}


	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState(apiModifiedData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	// const addUser = user => {
	// 	user.id = users.length + 1
	// 	setUsers([ ...users, user ])
	// }

	const addUser = user => {
		console.log("IN ADD USER",user)
		if (user.image && user.image instanceof File){
			// createImageData(user);
			user.image = null;
			createData(user)
		}
		else{
			createData(user);
		}
	}
	const deleteUser = id => {
		setEditing(false)
		// call api to delete from that id and set data in apiData
		deleteData(id);
		setApiModifiedData(apiModifiedData.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)
		updateData(id,updatedUser);
		setApiModifiedData(apiModifiedData.map(user => (user.id === id ? updatedUser : user)))
		// call api to update from that id and set data in apiData
	}

	const editRow = user => {
		setEditing(true)
		setCurrentUser(user);
	}

	return (
		<div className="container">
			<h1><b>Sadguru Tea Software</b></h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
							<Fragment>
								<h2><b>Add Tea Item</b></h2>
								<AddUserForm addUser={addUser} />
							</Fragment>
						)}
				</div>
				<div className="flex-large">
					<h2><b>Tea List</b></h2>
					<UserTable users={apiModifiedData} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App
