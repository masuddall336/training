import Display from "./Display"
import { data } from "react-router"

let datas = fetch('pricing.json')
    .then(res => res.json())

export default function Pricing() {

    return (
        <div>
            <Display key={data.id} datas={datas}></Display>
        </div>
    )
}