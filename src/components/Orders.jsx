import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useStateValue } from '../StateProvider';
import Order from './Order';
import "./orders.css";

const Orders = () => {
    const [{cart,user},dispatch] =useStateValue();
    const [order,setOrder]=useState();

    useEffect(()=>{
        if(user){
            db.collection("users").doc(user?.uid)
            .collection("orders")
            .orderBy("created","desc")
            .onSnapshot(snapShot=>(setOrder(
                snapShot.docs.map(doc=>({
                    id : doc.id,
                    data : doc.data()
                }))
            )))
        }else{
            setOrder([])
        }
    },[user])
    return (
        <div className="orders">
            <h1>your Orders</h1>
        <div className="orders_order">
            {order?.map(order=>(
                <Order order={order}/>
            ))}
        </div>
        </div>
    );
};

export default Orders;