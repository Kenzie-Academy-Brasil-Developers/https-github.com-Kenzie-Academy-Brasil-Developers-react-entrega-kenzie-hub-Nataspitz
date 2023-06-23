import { useContext } from "react"
import { TechContext } from "../../../../providers/TechContext"

export function Card({ tech }) {
    const { setIsOpen, setModalType } = useContext(TechContext)

    return(
        <li onClick={() => {
            setModalType("edit")
            setIsOpen(true)
             }}>
            <h3>{tech.title}</h3>
            <span>{tech.status}</span>
        </li>
    )
}