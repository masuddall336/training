import { use } from "react"
import Show from "./Show";

export default function Display({ datas }) {
    let takeAlldatas = use(datas);
    return (
        <div className="flex justify-between mx-2">
            {
                takeAlldatas.map(data=> <Show data={data}></Show>)
            }
        </div>
    )
}