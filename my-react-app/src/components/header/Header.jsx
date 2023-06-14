import { StyleHeader } from "./StyleHeader";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export function Header({ text }) {
    return(
        <StyleHeader>
            <img src={ logo } alt="Logo da KenzieHub" />
            <Link to={"/"}>{ text }</Link>
        </StyleHeader>
    )
}