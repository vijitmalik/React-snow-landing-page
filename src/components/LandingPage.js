import React from 'react';
import Header from './Header';
import WelcomeMessage from './WelcomeMessage';
import ImportantItems from './ImportantItems';
import CasesTable from './CasesTable';
import casesData from '../data/casesData.json';

const LandingPage = () => {
    return (
        <div>
            <Header />
            <WelcomeMessage />
            <ImportantItems />
            <div className="table-box">
                <CasesTable data={casesData.myActiveCases} />
                <CasesTable data={casesData.myTeamsCases} />
            </div>
        </div>
    );
}

export default LandingPage;
