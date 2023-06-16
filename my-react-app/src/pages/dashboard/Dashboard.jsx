import { StyleContainerDash } from "../../components/containerDash/StyleContainerDash";
import { Header } from "../../components/header/Header";
import { MainSectionDash } from "../../components/containerDash/mainSectionDash/MainSectionDash";
import { useEffect, useState } from "react";
import { api } from "../../services/Api";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
    const [user, setUser] = useState([])
    const token = JSON.parse(localStorage.getItem("@TOKEN"))
    const navFromHome = useNavigate()

    useEffect(() =>{
        async function infoPerfil() {
            try {
                const { data } = await api.get(`/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
            } catch (error) {
                console.error(error);
            }
        }
        infoPerfil()
    }, [])


    function returnHome() {
        localStorage.clear()
        navFromHome("/")
    }

    return(
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
    )
} 