import { StyleHeader } from "./StyleHeader";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export function Header({ text, logout, returnHome }) {
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