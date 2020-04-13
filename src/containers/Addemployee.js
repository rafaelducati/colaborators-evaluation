import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Button  from '../components/Button'
import Text  from '../components/Text'
import FieldText from '../components/FieldText'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

export const Addemployee = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [location, setLocation] = useState('');
    const [designation, setDesignation] = useState('');
    const [evaluation, setEvaluation] = useState('');
    const [evaluationComment, setEvaluationComment] = useState('');
    const {addEmployee, employees} = useContext(GlobalContext);
    let history = useHistory();

    const onSubmit = e => {
        e.preventDefault();
        const newEmployee = {
            id: employees.length + 1,
            name,
            email,
            token,
            location,
            designation,
            evaluation,
            evaluationComment
        }
        addEmployee(newEmployee);
        history.push("/");
    }

    return (
        <>
            <div className="w-full max-w-sm container mx-auto">
                <Text element="h1" variant="displayL" className="page-title">Adicionar colaborador</Text>
                <form onSubmit={onSubmit}>
                    <FieldText
                        name="name-1"
                        label="Nome"
                        hint="Digite o nome completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <FieldText
                        name="location-1"
                        label="Localização"
                        hint="Digite a localização"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />

                    <FieldText
                        name="designation-1"
                        label="Cargo"
                        hint="Digite o cargo"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        required
                    />
                    <FieldText
                        name="email-1"
                        label="Email"
                        hint="Digite o email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                     <FieldText
                        name="token-1"
                        label="Token"
                        hint="Digite o token"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                        required
                    />
                    <FieldText
                        name="evaluation-1"
                        label="Nota"
                        hint="Digite a nota"
                        value={evaluation}
                        onChange={(e) => setEvaluation(e.target.value)}
                        required
                    />
                    <FieldText
                        textarea
                        name="evaluationComment-1"
                        label="Comentário da nota"
                        hint="Digite um comentário sobre a nota"
                        value={evaluationComment}
                        onChange={(e) => setEvaluationComment(e.target.value)}
                        required
                    />

                    <nav className="flex flex-row-reverse">
                        <Button label="Adicionar colaborador" className="button-primary" />
                        <Link to='/'>
                            <Button label="Cancelar" variant="secondary" className="button-secondary" />
                        </Link>
                    </nav>

                </form>
            </div>
        </>
    )
}