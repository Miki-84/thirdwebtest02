import React, {useRef} from 'react';
import {firestore} from '../firebase';
import { addDoc, collection } from "firebase/firestore"



function Home() {  
const messageRef = useRef();
const ref = collection(firestore,"messages");

const handleSendMethod = async(e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

    let data = {
        message: messageRef.current.value
    }

    try {
        addDoc(ref,data);
    } catch (error) {
        console.log(e);
    }
    

}

    return ( 
        <>
        <div>
            HOMEHOME
        </div>
        <form onSubmit={handleSendMethod}>
            <label>Enter a message</label>
            <input type='text' ref={messageRef} />
            <button type='submit'>SEND</button>
        </form>
        </>
     );
}

export default Home;