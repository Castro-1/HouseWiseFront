import Input from "./components/inputs/Input";
import Select from "./components/inputs/Selelct";

export default function Home() {
  return <div>
    <div>3D House</div>
    <div className="flex gap-2">
      <Select id={"status"}>
        <option>For sale</option>
        <option>Ready to build</option>
      </Select>
      <Input placeholder="3.0" id={"bed"} value={"bed"}/>
      <Input placeholder="2.0" id={"bath"} value={"bath"}/>
      <Input placeholder="0.12" id={"acre lot"} value={"acre lot"}/>
      <Select id={"city"}>
        <option>blank</option>
      </Select>
      <Select id={"state"}>
        <option>
          blank
        </option>
      </Select>
      <Input placeholder="601.0" id={"zip code"} value={"zip code"}/>
      <Input placeholder="920.0" id={"house size"} value={"house size"}/>
      <Select id={"prev sold date"}>
        <option>
          blank
        </option>
      </Select>
    </div>
  </div>;
}
