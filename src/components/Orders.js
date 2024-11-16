import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        let serverUrl = process.env.REACT_APP_SERVER_URL;
        axios.get(`${serverUrl}/allOrders`).then((res) => {
            setAllOrders(res.data);
        });
    }, []);

    return (
        <>
            <h3 className="title">Orders ({allOrders.length})</h3>

            <div className="order-table">
                <table>
                    <tr>
                        <th>Instrument</th>
                        <th>Qty.</th>
                        <th>Price</th>
                        <th>Mode</th>
                    </tr>

                    <tbody>
                        {allOrders.map((stock, index) => {
                            return (
                                <tr key={index} className="">
                                    <td>{stock.name}</td>
                                    <td>{stock.qty}</td>
                                    <td>{stock.price.toFixed(2)}</td>
                                    <td>{stock.mode}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {!allOrders.length && (
                <div className="orders">
                    <div className="no-orders">
                        <p>You haven't placed any orders today</p>

                        <Link to={"/"} className="btn">
                            Get started
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Orders;
