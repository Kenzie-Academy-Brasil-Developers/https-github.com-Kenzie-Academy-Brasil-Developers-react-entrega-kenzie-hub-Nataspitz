import logo from "../../assets/logo.png";
import { StyleContainerForm } from "../../components/containerForm/StyleContainerForm";
import { FormLogin } from "../../components/form/login/FormLogin";
import { SectionForm } from "../../components/sectionForm/SectionForm";
import { GlobalStyles } from "../../style/GoblalStyles";


export function Login() {
    return(
        <>
            <StyleContainerForm>
                <header className="header">
                    <img src={ logo } alt="Logo do KeenzieHub" />
                </header>
                <main>
                    <SectionForm title={"Login"} span={"Ainda não possui uma conta?"} button={"Cadastre-se"} >
                        <FormLogin />
                    </SectionForm>
                </main>
            </StyleContainerForm>
        </>
    )
}