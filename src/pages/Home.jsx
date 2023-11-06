import { useState } from "react";
import Button from "../components/Button";
import RoomCanvas from "../components/Room";
import Input from "../components/inputs/Input";
import Select from "../components/inputs/Selelct";
import axios from "axios";

export default function Home() {
  const [ligthIntensity, setLightIntensity] = useState(0.2);
  const [values, setValues] = useState({
    status: "",
    bed: "",
    bath: "",
    acre_lot: "",
    city: "",
    state: "",
    zip_code: "",
    house_size: "",
    prev_sold_date: ""
  });
  const [result, setResult] = useState(null);

  const handleValues = (ev) =>{
    if(values[ev.target.name] === ""){
      setLightIntensity(prev=>prev+=0.1);
    }
    if (ev.target.value === ""){
      setLightIntensity(prev=>prev-=0.1);
    }
    setValues(prev=>({
      ...prev, [ev.target.name]: ev.target.value,
    }))
  }

  const handleSubmit = async () =>{
    const data = {
      status: values.status,
      bed: parseFloat(values.bed),
      bath: parseFloat(values.bath),
      acre_lot: parseFloat(values.acre_lot),
      city: values.city,
      state: values.state,
      zip_code: parseFloat(values.zip_code),
      house_size: parseFloat(values.house_size),
      prev_sold_date: values.prev_sold_date
    }
    console.log(data);
    const response = await axios.post("http://127.0.0.1:8000", data);
    console.log(response);
  }

  return <div className="grid grid-cols-3">
    <h2 className="text-xl mb-5">Fill the form to know the price of your house, as you progress the room will start to light up!</h2>
    <div className="col-span-2 text-center text-4xl font-bold">Price: {result ? 30000:"?"}</div>
    <div className="grid grid-cols-2 gap-3">
      <Select id={"Status"} name="status" onChange={handleValues} value={values.status}>
        <option value={0}>For sale</option>
        <option value={1}>Ready to build</option>
      </Select>
      <Input placeholder="3" id={"Bedrooms"} name="bed" onChange={handleValues} value={values.bed}/>
      <Input placeholder="2" id={"Bathrooms"} name="bath" onChange={handleValues} value={values.bath}/>
      <Input placeholder="0.12" id={"Land size (acres)"} name="acre_lot" onChange={handleValues} value={values.acre_lot}/>
      <Select id={"City"} name="city" onChange={handleValues} value={values.city}>
        <option value={0}>Miami</option>
        <option value={1}>LA</option>
      </Select>
      <Select id={"State"} name="state" onChange={handleValues} value={values.state}>
        <option value={0}>
          Florida
        </option>
        <option value={1}>
          California
        </option>
      </Select>
      <Input placeholder="601.0" id={"Zip code"} name="zip_code" onChange={handleValues} value={values.zip_code}/>
      <Input placeholder="920.0" id={"House size"} name="house_size" onChange={handleValues} value={values.house_size}/>
      <Select id={"Previously sold date"} name="prev_sold_date" onChange={handleValues} value={values.prev_sold_date}>
        <option value={0}>
          today
        </option>
        <option value={1}>
          yesterday
        </option>
      </Select>
      <div className="flex items-end w-full [&>button]:m-0 [&>button]:w-full [&>button]:font-semibold">
        <Button onClick={handleSubmit}>Calculate</Button>
      </div>
    </div>
    <div className="col-span-2"><RoomCanvas ligthIntensity={ligthIntensity}/></div>
  </div>;
}
