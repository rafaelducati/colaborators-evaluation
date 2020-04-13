import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    employees: [
        {
            id: 223823,
            createdAt: "2020-04-05T08:19:45.111Z",
            name: "Aletha Skiles",
            rating: 5,
            evaluation: 10,
            evaluationComment: "Lorem ipsum sit amet, lorem sit ipsum amet ipsum. Sit, ipsum amet.",
            email: "Katheryn91@hotmail.com",
            token: "Ck52gj6t_Q4J81y",
            location: "North Bellton",
            designation: "Regional Functionality Supervisor"
        },
        {
            id: 320825,
            createdAt: "2020-04-05T11:55:06.645Z",
            name: "Maggie Olson",
            rating: 5,
            evaluation: 7,
            evaluationComment: "Lorem ipsum sit amet, lorem sit ipsum amet ipsum. Sit, ipsum amet.",
            email: "Bernard41@yahoo.com",
            token: "PhBiXpeg9XRtb43",
            location: "South Royce",
            designation: "Future Applications Consultant"
        },
        {
            id: 398638,
            createdAt: "2020-04-04T20:39:36.640Z",
            name: "Anderson Kuphal",
            rating: 5,
            evaluation: 5,
            evaluationComment: "Lorem ipsum sit amet, lorem sit ipsum amet ipsum. Sit, ipsum amet.",
            email: "Abner.Wisozk@hotmail.com",
            token: "5hVTHNFM1VVyyta",
            location: "South Jalynshire",
            designation: "Human Quality Engineer"
        },
        {
            id: 209383,
            createdAt: "2020-04-05T13:39:42.431Z",
            name: "Burnice Zulauf",
            rating: 5,
            evaluation: 5,
            evaluationComment: "Lorem ipsum sit amet, lorem sit ipsum amet ipsum. Sit, ipsum amet.",
            email: "Larue_Waelchi5@yahoo.com",
            token: "b5UtVNdKze4pWgL",
            location: "South Jevonfurt",
            designation: "Central Communications Representative"
        },
        {
            id: 938838,
            createdAt: "2020-04-05T13:14:29.719Z",
            name: "Jonatan Jacobi",
            rating: 5,
            evaluation: 8,
            evaluationComment: "Lorem ipsum sit amet, lorem sit ipsum amet ipsum. Sit, ipsum amet.",
            email: "Justice3@yahoo.com",
            token: "vVNRFzBHNVSn6Au",
            location: "Soniashire",
            designation: "Direct Metrics Architect"
        }
    ]
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function removeEmployee(id) {
        dispatch({
            type: 'REMOVE_EMPLOYEE',
            payload: id
        });
    };

    function addEmployee(employees) {
        dispatch({
            type: 'ADD_EMPLOYEES',
            payload: employees
        });
    };

    function editEmployee(employees) {
        dispatch({
            type: 'EDIT_EMPLOYEE',
            payload: employees
        });
    };

    function viewEmployee(employees) {
        dispatch({
            type: 'VIEW_EMPLOYEE',
            payload: employees
        });
    };

    return (<GlobalContext.Provider value={{
        employees: state.employees,
        removeEmployee,
        addEmployee,
        editEmployee,
        viewEmployee
    }}>
        {children}
    </GlobalContext.Provider>);
}