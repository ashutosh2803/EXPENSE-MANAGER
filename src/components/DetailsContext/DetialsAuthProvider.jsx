import React from 'react'

export const DetailsProvider = React.createContext();

const DetialsAuthProvider = ({ children }) => {
    const [details, setDetails] = React.useState([]);

    const changeDetails = (payload) => {
        setDetails([...details, payload]);
    }
    const value = {
        details,
        changeDetails
    }
    return (
        <DetailsProvider.Provider value={value}>{children}</DetailsProvider.Provider>
    )
}

export { DetialsAuthProvider };
