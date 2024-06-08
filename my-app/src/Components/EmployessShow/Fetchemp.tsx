import React, { useEffect, useState } from "react";
import "./Fetchemp.css"
import axios from "axios";
import { User } from "../interfacefile";
import { useNavigate } from "react-router-dom";

const Fetchemp: React.FC = () => {
    const cookie = (document.cookie);
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const fetchuser = async () => {
        const response = await axios.get(`http://localhost:3036/employees`);
        const alluser = (response.data);
        setData(await alluser);
    }
    useEffect(() => {
        fetchuser()
    }, []);
    if (cookie) {
        const updateuser = (id: number) => {
            console.log(id);
            navigate('/form', { state: { id: id } });
        }
        return (
            <div>
                <h2 id="update_form_h2">Update Form</h2>
                <table id="customers">
                    <thead>
                        <th>ID</th>
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>update</th>
                    </thead>
                    <tbody id="tbody">
                        {data.map((data: User) => {
                            return (<tr>
                                <td >{data.emp_id}</td>
                                <td>{data.fname}</td>
                                <td>{data.lname}</td>
                                <td><p onClick={() => updateuser(data.emp_id)} id="btn-update">Update</p></td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div >
        );
    } else {
        return (
            <div className="denied">
                <h1 >Access Denied!!</h1>
            </div>
        )
    }
}

export default Fetchemp;