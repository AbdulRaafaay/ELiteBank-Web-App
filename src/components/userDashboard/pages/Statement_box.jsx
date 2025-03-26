import "./Statement.css";
import React from "react";

export default function Statement_box(props) {
    return (
        <main>
            <div className="state_box">
                <h2 className="heading">{props.heading} </h2>
                <ul className="box_list">
                    <li>Total Deposits: {props.deposit} </li>
                    <li>Total Withdrawals: {props.withdraw} </li>
                    <li>Current Balance: {props.balance} </li>
                    <li>Download PDF: [Download {props.download} Statement]</li>
                </ul>
            </div>
        </main>
    )
}