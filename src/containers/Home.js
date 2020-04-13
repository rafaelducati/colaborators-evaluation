import React from 'react';
import { Heading } from './Heading';
import Text from '../components/Text'
import { Employeelist } from './Employeelist';

export const Home = () => {
    return (
        <>
            <div>
                <div className="w-full max-w-sm container mx-auto">
                    <Text element="h3" variant="displayXL" className="page-title">Avaliação de colaboradores</Text>
                    <Heading />
                    <Employeelist />
                </div>
            </div>
        </>
    )
}