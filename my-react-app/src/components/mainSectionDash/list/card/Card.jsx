export function Card({ tech }) {
    return(
        <li>
            <h3>{tech.title}</h3>
            <span>{tech.status}</span>
        </li>
    )
}