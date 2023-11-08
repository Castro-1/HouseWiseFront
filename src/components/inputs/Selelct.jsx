export default function Select({id, children, ...props}){
    return <div>
    <label htmlFor={id} className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">{id}</label>
    <select id={id} className="border text-sm rounded-lg p-2.5 w-full bg-[#090916] text-white focus:ring-blue-500 focus:border-blue-500" {...props}>
      <option value={""}>Select an option</option>
      {children}
    </select>
    </div>
}