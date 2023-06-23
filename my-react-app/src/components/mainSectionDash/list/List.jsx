import { useContext } from "react";
import { StyleList } from "./StyleList";
import { Card } from "./card/Card";
import { UserContext } from "../../../providers/UserContext";

export function List() {
    const { user } = useContext(UserContext)
    const techs = user.techs
    return(
        <StyleList>
            {
                techs.map( tech =>{
                    return(
                        <Card key={tech.id} tech={tech}/>
                    )
                })
            }
        </StyleList>
    )
}