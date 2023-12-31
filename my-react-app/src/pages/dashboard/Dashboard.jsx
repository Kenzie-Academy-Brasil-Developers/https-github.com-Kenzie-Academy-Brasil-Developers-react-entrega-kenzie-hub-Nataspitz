import { StyleContainerDash } from "../../components/containerDash/StyleContainerDash";
import { Header } from "../../components/header/Header";
import { MainSectionDash } from "../../components/mainSectionDash/MainSectionDash";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Modal } from "../../components/modal/Modal";
import { TechContext, } from "../../providers/TechContext";
import { ModalCreate } from "../../components/modal/formModal/modalCreate/ModalCreate";
import { ModalEdit } from "../../components/modal/formModal/modalEdit/ModalEdit";

export function Dashboard() {
    const { user, returnHome } = useContext(UserContext)
    const { isOpen, modalType } = useContext(TechContext)
    
    return(

      <>
        {isOpen ?
            <Modal >
                {
                    modalType === "create" &&    <ModalCreate />
                }
                 {
                    modalType === "edit"  &&    <ModalEdit/>
                }
            </Modal>
            :null
        }
            <StyleContainerDash>
                <Header text={"Sair"} logout={true}  returnHome={ returnHome }/>
            </StyleContainerDash>
            <main>
                <section className="subHeader">
                    <StyleContainerDash>
                        <div>
                            <h1>{`Ola, ${user.name}`}</h1>
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