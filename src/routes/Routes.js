import { Routes, Route } from 'react-router-dom'

function RouterView({ routes }) { 
    return (
        <Routes>
            {routes.map((item, index) => (
                <Route exact key={ index } path={ item.linkTo } element={<item.component />} />
            ))}
        </Routes>
    )
}

export default RouterView