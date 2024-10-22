import React, { useEffect, useState } from 'react';
import './App.css';

// Mock API response data
const apiData = {
  tickets: [
    { id: 'CAM-1', title: 'Update User Profile Page UI', userId: 'usr-1', status: 'Todo', priority: 4 },
    { id: 'CAM-2', title: 'Add Multi-Language Support', userId: 'usr-2', status: 'In progress', priority: 3 },
    { id: 'CAM-3', title: 'Optimize Database Queries for Performance', userId: 'usr-2', status: 'In progress', priority: 1 },
    { id: 'CAM-4', title: 'Implement Email Notification System', userId: 'usr-1', status: 'In progress', priority: 3 },
    { id: 'CAM-5', title: 'Enhance Search Functionality', userId: 'usr-5', status: 'In progress', priority: 0 },
    { id: 'CAM-6', title: 'Third-Party Payment Gateway', userId: 'usr-2', status: 'Todo', priority: 1 },
    { id: 'CAM-7', title: 'Create Onboarding Tutorial for New Users', userId: 'usr-1', status: 'Backlog', priority: 2 },
    { id: 'CAM-8', title: 'Implement Role-Based Access Control (RBAC)', userId: 'usr-3', status: 'In progress', priority: 3 },
    { id: 'CAM-9', title: 'Upgrade Server Infrastructure', userId: 'usr-5', status: 'Todo', priority: 2 },
    { id: 'CAM-10', title: 'Conduct Security Vulnerability Assessment', userId: 'usr-4', status: 'Backlog', priority: 1 },
  ],
  users: [
    { id: 'usr-1', name: 'Anoop Sharma' },
    { id: 'usr-2', name: 'Yogesh' },
    { id: 'usr-3', name: 'Shankar Kumar' },
    { id: 'usr-4', name: 'Ramesh' },
    { id: 'usr-5', name: 'Suresh' },
  ],
};

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [sortOrder, setSortOrder] = useState('priority');

  useEffect(() => {
    // Simulating API call
    setTickets(apiData.tickets);
  }, []);

  // Function to group tickets by priority
  const groupByPriority = () => {
    return tickets.reduce((groups, ticket) => {
      const priority = ticket.priority;
      if (!groups[priority]) {
        groups[priority] = [];
      }
      groups[priority].push(ticket);
      return groups;
    }, {});
  };

  // Function to sort tickets
  const sortTickets = (ticketsToSort) => {
    if (sortOrder === 'priority') {
      return ticketsToSort.sort((a, b) => b.priority - a.priority);
    } else if (sortOrder === 'title') {
      return ticketsToSort.sort((a, b) => a.title.localeCompare(b.title));
    }
    return ticketsToSort;
  };

  const groupedTickets = groupByPriority();

  return (
    <div className="kanban-board">
      <header>
        <h1>Kanban Board</h1>
        <div className="controls">
          <label>Sort by: 
            <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </label>
        </div>
      </header>
      
      <div className="board">
        {Object.keys(groupedTickets).map(priority => (
          <div key={priority} className="column">
            <h2>Priority {priority}</h2>
            <div className="tickets">
              {sortTickets(groupedTickets[priority]).map(ticket => (
                <div key={ticket.id} className="ticket">
                  <h3>{ticket.title}</h3>
                  <p><strong>Status:</strong> {ticket.status}</p>
                  <p><strong>Priority:</strong> {ticket.priority}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
