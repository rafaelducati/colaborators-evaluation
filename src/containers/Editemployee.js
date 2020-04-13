import React, { useState, useContext, useEffect } from 'react';
import Button from '../components/Button'
import Text from '../components/Text'
import FieldText from '../components/FieldText'
import { GlobalContext } from '../context/GlobalState';
import { useHistory, Link } from "react-router-dom";

export const Editemployee = (route) => {
    let history = useHistory();
    const { employees, editEmployee } = useContext(GlobalContext);
    const [selectedUser, setSeletedUser] = useState({ token: null, id: null, name: '', email: '', designation: '', location: '', evaluation: '', evaluationComment: '' });
    const currentUserId = route.match.params.id;

    useEffect(() => {
        const employeeId = currentUserId;
        const selectedUser = employees.find(emp => emp.id === parseInt(employeeId));
        setSeletedUser(selectedUser);
        // eslint-disable-next-line
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        editEmployee(selectedUser);
        history.push('/');
    }

    const handleOnChange = (userKey, value) => setSeletedUser({ ...selectedUser, [userKey]: value })

    if (!selectedUser || !selectedUser.id) {
        return (
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <Text element="h1" variant="displayL" className="page-title">Colaborador não encontrado.</Text>
                <Link to='/'>
                    <Button label="Voltar" variant="secondary" className="text-center mt-4 text-gray-500" />
                </Link>

            </div>
            )
    }

    return (
        <>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <Text element="h1" variant="displayL" className="page-title">Editar dados do colaborador</Text>
                <form onSubmit={onSubmit}>

                    <FieldText
                        name="name-1"
                        label="Nome"
                        hint="Digite o nome completo"
                        value={selectedUser.name}
                        onChange={(e) => handleOnChange('name', e.target.value)}
                        required
                    />

                    <FieldText
                        name="email-1"
                        label="Email"
                        hint="Digite o email"
                        value={selectedUser.email}
                        onChange={(e) => handleOnChange('email', e.target.value)}
                        required
                    />

                    <FieldText
                        name="location-1"
                        label="Localização"
                        hint="Digite a localização"
                        value={selectedUser.location}
                        onChange={(e) => handleOnChange('location', e.target.value)}
                        required
                    />

                    <FieldText
                        name="designation-1"
                        label="Cargo"
                        hint="Digite o cargo"
                        value={selectedUser.designation}
                        onChange={(e) => handleOnChange('designation', e.target.value)}
                        required
                    />

                    <FieldText
                        name="token-1"
                        label="Token"
                        value={selectedUser.token}
                        onChange={(e) => handleOnChange('token', e.target.value)}
                        disabled
                    />

                    <FieldText
                        name="evaluation-1"
                        label="Nota"
                        hint="Digite a nota"
                        value={selectedUser.evaluation}
                        onChange={(e) => handleOnChange('evaluation', e.target.value)}
                        required
                    />

                    <FieldText
                        textarea
                        name="evaluationComment-1"
                        label="Comentário da nota"
                        hint="Digite o comentário da nota"
                        value={selectedUser.evaluationComment}
                        onChange={(e) => handleOnChange('evaluationComment', e.target.value)}
                        required
                    />

                    <nav className="flex flex-row-reverse">
                        <Button label="Salvar" className="button-primary flex-right" />

                        <Link to='/'>
                            <Button label="Cancelar" variant="secondary" className="button-secondary" />
                        </Link>
                    </nav>
                </form>
            </div>
        </>
    )
}