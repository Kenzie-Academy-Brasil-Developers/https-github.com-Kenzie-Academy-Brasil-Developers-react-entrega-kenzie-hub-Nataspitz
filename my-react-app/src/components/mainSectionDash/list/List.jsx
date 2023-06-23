import { useContext } from "react";
import { StyleList } from "./StyleList";
import { Card } from "./card/Card";
import { TechContext } from "../../../providers/TechContext";

export function List() {
    const { techs } = useContext(TechContext)
    
    return(
        <StyleList>
            {
                techs.map( tech =>{
                    return(
                        <Card key={tech.id} tech={tech} />
                    )
                })
            }
        </StyleList>
    )
}