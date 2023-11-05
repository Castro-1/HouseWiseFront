export default function Select({id, children, ...props}){
    return <div>
    <label for={id} class="block mb-2 text-sm font-medium text-gray-900">{id}</label>
    <select id={id} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5">
      <option selected>Select an option</option>
      {children}
    </select>
    </div>
}