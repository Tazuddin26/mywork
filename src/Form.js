import { useState } from "react";
import data from "./data";
function Form1() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhoneNo] = useState("");
    const [users, setUsers] = useState(data);
    const submit = () => {
        const user = {
            name: name,
            email: email,
            password: password,
            phone: phone,
        };
        setUsers([...users, user]);
    };
    return (
        <div className="w-full h-screen flex justify-center mt-6" >

            <div className="w-[50%] h-[80%] hover:bg-blue-400 border bg-green-300 ">
                <div className=" ml-2 ">User Name :
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="h-[10%] w-[60%] border p-5 m-5 border-blue-300 rounded-md m-3" />
                </div>
                <div className="mr-4 ">E-mail Address :
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="h-[10%] w-[60%] border p-5 m-5 border-blue-300 rounded-md m-3" />
                </div>
                <div className=" ml-3">Password :
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.password)}
                        className="h-[10%] w-[60%] border p-5 m-5 border-blue-300 rounded-md m-3" />
                </div>
                <div className=""> Phone No :
                    <input
                        type="text"
                        value={phone}
                        onChange={e => setPhoneNo(e.target.phone)}
                        className="h-[10%] w-[60%] border p-5 m-5 border-blue-300 rounded-md m-3" />
                </div>
                <button
                    onClick={submit}
                    type="button"
                    className="w-[20%] h-[10%] hover:bg-red-400 bg-yellow-400 border rounded-md m-3">Submit</button>
                <p>{JSON.stringify(users)}</p>
            </div>

        </div>
    )
};
export default Form1;