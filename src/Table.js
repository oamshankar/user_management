import React, { useEffect, useState } from "react";
import "./Table.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import data from "./db.json";

export default function Table() {

    const [userData, setUserData] = useState([]);
    const [search, setSearch] = useState('');
    
    const handleSearch=(e)=>{
        setSearch(e.target.value);
    }
    const FilteredUser=userData.filter((user) =>{
        const searchTerm = search.toLowerCase();
        return (
            user.id.toString().includes(searchTerm) ||
            user.username.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm) ||
            user.mobile.toString().includes(searchTerm)
        );
    }
    );
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/posts');
                console.log('Response:', response.data);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }

        }
        fetchData();
    }, []);
    return (
        <main className="main">
            <div className="table-box">
                <div className="table-search-bar">
                    <input className='table-search' type='text' placeholder="Search" value={search} onChange={handleSearch} />
                    <div className="table-butts">
                        <button className="table-butt" type="submit"><Link to='/createuser'>+ Add</Link></button>
                    </div>
                </div>
                <div className="user-table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone number</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                {FilteredUser.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobile}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>

                </div>


            </div>
        </main>
    )

}
