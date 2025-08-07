import {useParams, Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import User from '../components/User';

function Users(){
    const {id} = useParams({})
    const [user, setUser] = useState({});
    async function fetchUserData() {
        const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        setUser(data);
        // console.log(data)
    }
    useEffect(() => {
        fetchUserData();
    }, []);


    return (
        <div style={{border: '5px solid green', color:'red', backgroundColor: 'black'}}>
                    
                    <User
                        id={user.id}
                        name={user.name}
                        username={user.username}
                    />
                    <Link style={{color:'white'}} to={'/'}>Back to Home</Link>
        </div>
    )
}

export default Users