"use client";
import React, { useEffect, useState } from 'react';
import Datatable from '@/component/datatable/datatable';
import axios from 'axios';

const BaseUrl = "http://localhost:4000/user";

const User = () => {
    const [userData, setUserData] = useState([]);

    const columns = ["id", "username", "email", "password"];
    const options = {
        filterType: 'checkbox',
        selectableRows: "none",
    };

    console.log(userData);

    const fetchdata = () => {
        axios.get(BaseUrl)
            .then(response => {
                console.log('Data:', response.data);
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        fetchdata();
    }, []); // Only run on component mount

    return (
        <div>
            <Datatable
                data={userData}
                columns={columns}
                options={options}
            />
        </div>
    );
};

export default User;
