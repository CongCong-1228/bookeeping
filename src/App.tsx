import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                {/*<Route index element={<Home/>}/>*/}
                {/*<Route path="teams" element={<Teams/>}>*/}
                {/*    <Route path=":teamId" element={<Team/>}/>*/}
                {/*    <Route path="new" element={<NewTeamForm/>}/>*/}
                {/*    <Route index element={<LeagueStandings/>}/>*/}
                {/*</Route>*/}
            </Routes>
        </Router>
    );
}

export default App;
