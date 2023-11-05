import Question from "../assets/Question";

export default function NavBar(){
    return <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold">HouseWise</h1>
        <h2 className="text-xl font-semibold flex items-center gap-1">Faq<Question/></h2>
    </div>
}