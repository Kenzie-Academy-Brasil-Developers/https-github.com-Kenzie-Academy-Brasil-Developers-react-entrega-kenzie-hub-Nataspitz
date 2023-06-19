import { Link } from "react-router-dom";
import { StyleSectionForm } from "./StyleSectionForm";

export function SectionForm({ title, text, children, span, buttonName }) {
    return(
        <StyleSectionForm  >
            {
                text
                ? <div className="column">
                    <h2>{ title }</h2>
                    { text && <p>{ text }</p> }
                   </div>
                   : <div  className="row">
                        <h2>{ title }</h2>
                    </div>
            }
                { children }
                {
                    span 
                    ? <div className="container__login">
                        { span && <span>{ span }</span>}
                        { buttonName &&<Link to={"/cadastro"} className="buttonLogin"> { buttonName }</Link>}
                       </div>  
                    : null 

                }

        </StyleSectionForm>
    )
}