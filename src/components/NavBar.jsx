import { useNavigate } from "react-router-dom";
import Question from "../assets/Question";

export default function NavBar(){
    const navigate = useNavigate();
    return <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold cursor-pointer" onClick={()=>navigate("/")}>HouseWise</h1>
        <h2 className="text-xl font-semibold flex items-center gap-1 cursor-pointer" onClick={()=>navigate("/faqs")}>Faq<Question/></h2>
    </div>
}