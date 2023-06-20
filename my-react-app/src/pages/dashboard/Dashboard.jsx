import { StyleContainerDash } from "../../components/containerDash/StyleContainerDash";
import { Header } from "../../components/header/Header";
import { MainSectionDash } from "../../components/containerDash/mainSectionDash/MainSectionDash";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export function Dashboard() {
    const { user } = useContext(UserContext)

    console.log(user);


    function returnHome() {
        localStorage.clear()
        navFromHome("/")
    }

    return(
        <>
            {user? (
                        <>
                        <StyleContainerDash>
                            <Header text={"Sair"} logout={true}  returnHome={ returnHome }/>
                        </StyleContainerDash>
                        <main>
                            <section className="subHeader">
                                <StyleContainerDash>
                                    <div>
                                        <h2>{`Ola, ${user.name}`}</h2>
                                        <p>{user.course_module}</p>
                                    </div>
                                </StyleContainerDash>
                            </section>
                            <StyleContainerDash>
                                <MainSectionDash />
                            </StyleContainerDash>
                        </main>
                    </>
            ) :( <h1>Carregando</h1>)}
        </>

    )
} 