import Button from "./components/Button";
import House from "./components/House";
import Input from "./components/inputs/Input";
import Select from "./components/inputs/Selelct";

export default function Home() {
  return <div className="grid grid-cols-3">
    <div className="grid grid-cols-2 gap-3">
      <div className="col-span-2 text-lg">Fill the form to know the price of your house!</div>
      <Select id={"Status"}>
        <option>For sale</option>
        <option>Ready to build</option>
      </Select>
      <Input placeholder="3.0" id={"Bed"}/>
      <Input placeholder="2.0" id={"Bath"}/>
      <Input placeholder="0.12" id={"Acre lot"}/>
      <Select id={"City"}>
        <option>blank</option>
      </Select>
      <Select id={"State"}>
        <option>
          blank
        </option>
      </Select>
      <Input placeholder="601.0" id={"Zip code"}/>
      <Input placeholder="920.0" id={"House size"}/>
      <Select id={"Previously sold date"}>
        <option>
          blank
        </option>
      </Select>
      <div className="flex items-end w-full [&>button]:m-0 [&>button]:w-full [&>button]:font-semibold">
        <Button>Calculate</Button>
      </div>
    </div>
    {/* <div className="col-span-2"><House/></div> */}
    <div className="col-span-2"></div>
  </div>;
}
