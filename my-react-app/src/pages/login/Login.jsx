import logo from "../../assets/logo.png";
import { StyleContainerForm } from "../../components/containerForm/StyleContainerForm";
import { FormLogin } from "../../components/form/login/FormLogin";
import { SectionForm } from "../../components/sectionForm/SectionForm";
import { LoginProvider } from "../../providers/loginContext/LoginContext";

export function Login() {
    return(
        <>
            <StyleContainerForm>
                <header className="header">
                    <img src={ logo } alt="Logo do KeenzieHub" />
                </header>
                <main>
                    <SectionForm title={"Login"} span={"Ainda não possui uma conta?"} buttonName={"Cadastre-se"} >
                        <LoginProvider>
                            <FormLogin  />
                        </LoginProvider>
                    </SectionForm>
                </main>
            </StyleContainerForm>
        </>
    )
}