import React, { useState, useContext, useEffect } from 'react';
import Button from '../components/Button'
import Text from '../components/Text'
import { GlobalContext } from '../context/GlobalState';
import { useHistory, Link } from "react-router-dom";

export const Viewemployee = (route) => {
    let history = useHistory();
    const { employees } = useContext(GlobalContext);
    const [selectedUser, setSeletedUser] = useState({ token: null, id: null, name: '', email: '', designation: '', location: '', evaluation: '', evaluationComment: '' });
    const currentUserId = route.match.params.id;
    const currentUserToken = route.match.params.token;

    useEffect(() => {
        const employeeId = currentUserId;
        const employeeToken = currentUserToken;
        const selectedUser = employees.find(emp => emp.token === employeeToken);
        setSeletedUser(selectedUser);
        // eslint-disable-next-line
    }, []);


    if (!selectedUser || !selectedUser.token) {
        return (
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <Text element="h1" variant="displayL" className="page-title">Avaliação não encontrada.</Text>
                <Link to='/'>
                    <Button label="Voltar" variant="secondary" className="text-center mt-4 text-gray-500" />
                </Link>

            </div>
        )
    }

    return (
        <>
            <main className="w-full max-w-sm container mt-20 mx-auto">
                <Text element="h1" variant="displayL" className="page-title" >Olá, {selectedUser.name}! </Text>
                <Text element="p" variant="bodyM">Temos uma avaliação disponível sobre você.</Text>
                <section className="colab-data">
                    <Text element="h2" variant="displayM" className="page-inner-title">Seus dados:</Text>
                    <Text element="p" variant="bodyM" className="colab-paragrah">Nome: {selectedUser.name}</Text>
                    <Text element="p" variant="bodyM" className="colab-paragrah">Email: {selectedUser.email}</Text>
                    <Text element="p" variant="bodyM" className="colab-paragrah">Localização: {selectedUser.location}</Text>
                    <Text element="p" variant="bodyM" className="colab-paragrah">Cargo: {selectedUser.designation}</Text>
                </section>
                <section className="colab-evaluation">
                    <Text element="h2" variant="displayM" className="page-inner-title">Sua avaliação mais recente:</Text>
                    <Text element="p" variant="bodyM" className="colab-paragrah">
                        Nota: {selectedUser.evaluation}</Text>
                    <Text element="p" variant="bodyM" className="">
                        Comentário da nota: {selectedUser.evaluationComment}</Text>
                </section>
                <Link to='/'className="flex flex-right" >
                    <Button label="Voltar" variant="secondary" />
                </Link>
            </main>
        </>
    )
}