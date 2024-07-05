import React from 'react';
import '../styles/ImportantItems.css';

const ImportantItems = () => {
    const importantItemsData = [{ task: "High Priority Cases", number: 2 },
        { task: "Unassigned Cases", number: 5 },
        { task: "SLA breached or due today", number: 2 }
    ];
    return (
        <div className='important-section'>
            <header>
                <h4>Important Items</h4>
                <div>Check these metrics to see the most important tasks to work on</div>
            </header>
            <div className="important-items">
                {importantItemsData.map((item, index) => (
                    <div className="item align-left" key={index}>
                        <div className="task">{item.task}</div>
                        <div className="number">{item.number}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImportantItems;
