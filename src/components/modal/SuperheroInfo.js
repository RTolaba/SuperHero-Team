/*import React, {useState} from 'react'
import {Button, Modal, ModalHeader, ModalBody, FormGroup, Label} from 'reactstrap'




export default function SuperheroInfo({name, fullname, appearance, work, }){
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(!modal)
    }

    return(
        <div>
            <div>

            </div>
            <Modal isOpen={modal} >
            <ModalHeader>
                Informacion confidencial del Superheroe
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label>Alias: {name}</Label>
                    <Label>Nombre Real: {fullname}</Label>
                    <Label>Peso en kg: {appearance.weight[1]}, y en lb: {appearance.weight[0]} </Label>
                    <Label>Altura en cm: {appearance.height[1]}, y en pulgadas: {appearance.height[0]}</Label>
                    <Label>Color de ojos: {appearance["eye-color"]} </Label>
                    <Label>Color de cabello: {appearance["hair-color"]} </Label>
                    <Label>Lugar de trabajo: {work.base} </Label>
                    <Button color="secondary" onClick={openModal}>Cerrar</Button>

                </FormGroup>
            </ModalBody>
            </Modal>

        </div>

    )

}*/