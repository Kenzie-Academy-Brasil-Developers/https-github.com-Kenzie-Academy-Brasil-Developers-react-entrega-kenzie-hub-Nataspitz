import { useContext } from "react"
import { TechContext } from "../../../../providers/TechContext"

export function Card({ tech }) {
    const { setIsOpen, setModalType, setCard } = useContext(TechContext)

    return(
        <li onClick={() => {
            setModalType("edit")
            setIsOpen(true)
            setCard(tech)
             }}>
            <h3>{tech.title}</h3>
            <span>{tech.status}</span>
        </li>
    )
}