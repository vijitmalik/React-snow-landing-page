import React from 'react';
import '../styles/Table.css';

const CasesTable = ({ data }) => {
    return (
        <div className="cases-table">
            <header>
                <h4>{data.title}</h4>
                <small>Last updated 2 min. ago</small>
            </header>
            <table>
                <thead>
                    <tr>
                        <th className='number'>Number</th>
                        <th className='description'>Short Description</th>
                        <th className='account'>Account</th>
                        <th className='priority'>Priority</th>
                        <th className='state'>State</th>
                        {data.type === 'team' ? <th className='status'>Assigned To</th> : <th>Action Status</th>}
                        <th>Updated Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.cases.map((caseItem, index) => (
                        <tr key={index}>
                            <td className='number'>{caseItem.number}</td>
                            <td className='description'>{caseItem.shortDescription}</td>
                            <td className='account'>{caseItem.account}</td>
                            <td className='priority'>{caseItem.priority}</td>
                            <td className='state'>{caseItem.state}</td>
                            <td className='status'>{data.type === 'team' ? caseItem.assignedTo : caseItem.actionStatus}</td>
                            <td>{caseItem.updatedDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CasesTable;
