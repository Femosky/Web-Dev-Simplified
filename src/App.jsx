import { useState } from "react";
import "./styles.css";

export default function App() {
    const [newItem, setNewItem] = useState("");

    return (
        <>
            <form className="new-item-form">
                <div className="form-row">
                    <label htmlFor="item">New Item</label>
                    <input value={newItem} onChange={(e) => setNewItem(e.target.value)} type="text" id="item" />
                </div>
                <btn className="btn">Add</btn>
            </form>

            <h1 className="header">Todo List</h1>
            <ul className="list">
                <li>
                    <label>
                        <input type="checkbox" />
                        Item 1
                    </label>
                    <btn className="btn btn-danger">Delete</btn>
                </li>
            </ul>
        </>
    );
}
