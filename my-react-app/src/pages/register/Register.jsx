import { StyleContainerForm } from "../../components/containerForm/StyleContainerForm";
import { FormRegister } from "../../components/form/register/FormRegister";
import { Header } from "../../components/header/Header";
import { SectionForm } from "../../components/sectionForm/SectionForm";
import { UserProvider } from "../../providers/UserContext";


export function Register() {
    return(
        <>
            <StyleContainerForm>
                <Header  text={"Voltar"}/>
                <main>
                    <SectionForm title={"Crie sua conta"} text={"Rápido e grátis, vamos nessa"}>
                            <FormRegister />                        
                    </SectionForm>
                </main>
            </StyleContainerForm>
        </>
    )
}