import { Link } from "react-router";

export default function Links({ name, path }) {
    return (
        <div>
            <ul>
                <Link to={path}><li className="cursor-pointer">{name}</li></Link>

            </ul>
        </div>
    )
}