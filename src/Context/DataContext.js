import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'

const DataContext = React.createContext()
const RefreshDataContext = React.createContext()


export const useData = () => {
    return useContext(DataContext)
}

export const useRefreshData = () => {
    return useContext(RefreshDataContext)
}


export const DataProvider = ({ children }) => {
    const [snowboard, setSnowboards] = useState([])
    let data = {
        snowboard: snowboard,
    }

    const refreshData = () => {
        axios.get('https://out-cold.herokuapp.com/snowboards')
            .then(response => {
              setSnowboards(response.data);
            })
    }


    useEffect(() => {
        refreshData();
    }, [])

    return (
        <DataContext.Provider value={data}>
            <RefreshDataContext.Provider value={refreshData}>
                {children}
            </RefreshDataContext.Provider>
        </DataContext.Provider>
    )
}
