'use client';

import {useState, useEffect} from 'react';

import {Toaster} from 'react-hot-toast'

const ToastProvider = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        setLoaded(true);
    }, []);

    if(!loaded) {
        return null
    }

    return <Toaster/>
}


export default Toaster