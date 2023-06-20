import { StyleHeader } from "./StyleHeader";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export function Header({ text, logout }) {
    const { returnHome } = useContext(UserContext)
    return(
        <StyleHeader>
            <img src={ logo } alt="Logo da KenzieHub" />
            {
                logout === true
                ? <button onClick={returnHome} >{text}</button>
                :  <Link to={"/"}>{ text }</Link>
            }
        </StyleHeader>
    )
}