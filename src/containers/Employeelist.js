import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Button from '../components/Button'
import Text from '../components/Text'
import { Link } from 'react-router-dom';

export const Employeelist = () => {
    const { employees, removeEmployee, editEmployee, viewEmployee } = useContext(GlobalContext);
    return (
        <>
            {employees.length > 0 ? <>
                {employees.map(employee => (
                    <div className="colab-card flex items-center" key={employee.id}>
                        <div className="flex-auto">
                            <Text element="p" variant="displayS">{employee.name}</Text>
                            <Text element="p" variant="bodyM" >{employee.designation}</Text>
                            <Text element="p" variant="bodyS" >{employee.location}</Text>
                        </div>
                        <div className="flex flex-auto flex-right">
                            <Link to={`/edit/${employee.id}`}>
                                <Button label="Editar" variant="primary" display="inline" onClick={() => editEmployee(employee.id)} className="button-inline" />
                            </Link>
                            <Link to={`/view/${employee.token}`}>
                                <Button label="Visualizar" variant="secondary" display="inline" onClick={() => viewEmployee(employee.token)} className="button-inline" />
                            </Link>
                            <Button label="Excluir" variant="tertiary" display="inline" onClick={() => removeEmployee(employee.id)} className="button-inline" />
                        </div>
                    </div>
                ))}
            </> : <Text className="">Nenhum colaborador cadastrado.</Text>}
        </>
    )
}