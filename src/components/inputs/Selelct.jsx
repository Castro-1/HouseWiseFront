export default function Select({id, children, ...props}){
    return <div>
    <label htmlFor={id} className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">{id}</label>
    <select id={id} className="border text-sm rounded-lg p-2.5 w-full dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 [&>option]:bg-[#090916] [&>option]:border-gray-600 [&>option]:" {...props}>
      <option value={""}>Select an option</option>
      {children}
    </select>
    </div>
}