import { Logs, X } from "lucide-react"
import Links from "../links/Links"
import { useState } from "react"

let links = [
    { name: "Home", path: "/", id: 1 },
    { name: "Cards", path: "/cards", id: 2 },
    { name: "Contact Us", path: "/contact", id: 3 },
    { name: "About Us", path: "/about", id: 4 }
]
export default function Header() {
    const [icon, setIcon] = useState(true);
    let allLinks = links.map(single_link => <Links key={single_link.id} path={single_link.path} name={single_link.name}></Links>)
    return (
        <>
            <div className="flex justify-center gap-5">
                <div className="cursor-pointer md:hidden " onClick={() => setIcon(!icon)}>
                    {
                        icon ? <Logs /> : <X />
                    }
                    <ul className={`
                            ${icon ? 'hidden' : 'visible'}
                        `}>
                        <li className="">
                            {
                                allLinks
                            }
                        </li>
                    </ul>

                </div>
                <ul className="hidden md:flex gap-5 justify-center self-center">
                    {
                        allLinks
                    }
                </ul>
            </div>
        </>
    )
}