import { Suspense } from "react"
import Display from "./Display"

let datas = fetch('pricing.json')
    .then(res => res.json())
export default function Pricing() {

    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
                <Display datas={datas}></Display>
            </Suspense>
        </div>
    )
}