// pages/api-status/Api1Status.js
"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

const Endpoint = () => {
    const [status, setStatus] = useState('');

    useEffect(() => {
        const checkApiStatus = async () => {
            
            try {
                await axios.head('https://teledeclaration.cnas.dz/',{
                    headers: {
                      "Access-Control-Allow-Origin": "*",
                    },
                  });
                setStatus('Online');
            } catch (error) {
                setStatus('Offline');
                console.log(error)
            }
        };
        checkApiStatus();
    }, []);

    return (
        <div>
            <h2>API 1 Status: {status}</h2>
        </div>
    );
};

export default Endpoint;
