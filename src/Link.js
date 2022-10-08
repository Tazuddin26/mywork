import { Link } from "react-router-dom";
function Links() {
    return (
        <div className="w-full h-screen flex justify-center mt-12">
            <div className="w-[5%] h-full"></div>
            <div className="flex flex-col justify-center w-[50%] h-[90%] hover:bg-blue-400 border bg-red-300">
                <Link to="/form" className="border p-2 m-2 text-3xl hover:text-blue-600 text-white">Form</Link>
                <Link to="/counter" className="border p-2 m-2 text-3xl hover:text-blue-600 text-white">Counter</Link>
                <Link to="/time" className="border p-2 m-2 text-3xl hover:text-blue-600 text-white">Current-DateTime</Link>
                <Link to="/queue" className="border p-2 m-2 text-3xl hover:text-blue-600 text-white">Queue</Link>
                <Link to="/colorChange" className="border p-2 m-2 text-3xl hover:text-blue-600 text-white">ColorChange</Link>
                <Link to="/effect" className="border p-2 m-2 text-3xl hover:text-blue-600 text-white">useEffect</Link>
                <Link to="/timer" className="border p-2 m-2 text-3xl hover:text-blue-600 text-white">Timer</Link>
            
            </div>
        </div>
    )
};
export default Links;