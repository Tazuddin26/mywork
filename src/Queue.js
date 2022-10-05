import { useState } from "react";
function Queue() {
    const [serial, setSerial] = useState(0);
    const [name, setName] = useState(0);
    const [people, setPeople] = useState(["mohammad","Abdullah","Rahman"]);
    return (
        <div className="w-full h-screen flex justify-center mt-28">
            <div className="flex flex-col w-[50%] h-[90%] hover:bg-blue-400 border bg-red-300">
                <div>
                    <input
                        className="h-[10%] w-[60%] border p-5 m-5 border-2 rounded-md m-3 mr-10"
                        value={name}
                        onChange={e => setName(e.target.value)}/> {people[serial]}
                </div>
                <div>
                    <button
                        type="button"
                        className="w-3/12 hover:bg-yellow-300 border-2 rounded-full"
                        onClick={() => setPeople([...people, name])}>Submit
                    </button>
                    <button
                        type="button"
                        className="bg-red-600 border-2 w-3/12 rounded-full flex justify-center "
                        onClick={() => setSerial(serial + 1)}>Next
                    </button>
                </div>
               
            </div>
        </div>
    )
};
export default Queue;