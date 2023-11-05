export default function Input({id, placeholder}){
    return (<div>
        <label for={id} class="block mb-2 text-sm font-medium text-gray-900">{id}</label>
        <input type="text" id={id} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required></input>
    </div>)
}