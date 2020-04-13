import React from 'react';
import Button from '../components/Button'
import Text from  '../components/Text'
import { Link } from 'react-router-dom';


export const Heading = () => {
    return (
        <div>
            <div className="colab-header flex flex-auto items-center">
                <div className="flex">
                    <Text element="h3" variant="displayL" className="page-title">Lista de colaboradores</Text>
                </div>
                <div className="flex  flex-auto flex-right ">
                    <Link to="/add">
                        <Button label="Adicionar colaborador"  />
                    </Link>
                </div>
            </div>
        </div>
    )
}
