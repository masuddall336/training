import { use } from "react"
import Show from "./Show";

export default function Display({ datas }) {
    let takeAlldatas = use(datas);
    return (
        <div className="flex justify-between mx-2">
            {
                takeAlldatas.map((data, index)=> <Show key={index} data={data}></Show>)
            }
        </div>
    )
}