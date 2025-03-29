import React, { useState } from 'react';
import { 
  FaSearch, 
  FaFilter
} from 'react-icons/fa';
import './Loan.css';

export default function LoanManagement() {
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [activeTab, setActiveTab] = useState('applications');

  const loanApplications = [
    {
      id: 'LN2023001',
      customer: 'John Doe (C1001)',
      type: 'Personal Loan',
      amount: 15000,
      term: '36 months',
      interestRate: '8.5%',
      status: 'Pending',
      applicationDate: '2023-08-15',
    },
    {
      id: 'LN2023002',
      customer: 'Sarah Lee (C1002)',
      type: 'Business Loan',
      amount: 50000,
      term: '60 months',
      interestRate: '6.9%',
      status: 'Pending',
      applicationDate: '2023-08-18',
    }
  ];

  const activeLoans = [
    {
      id: 'LN2023003',
      customer: 'Michael Brown (C1003)',
      type: 'Auto Loan',
      amount: 25000,
      term: '48 months',
      interestRate: '5.5%',
      status: 'Active',
      nextPaymentDate: '2023-09-01',
      paymentStatus: 'Current',
      remainingBalance: 247500
    }
  ];

  return (
    <div className="loan-management">
      <header className="loan-header">
        <h1>Loan Management</h1>
        <div className="controls">
          <div className="search-bar">
            <FaSearch />
            <input 
              type="text" 
              placeholder="Search loans..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-controls">
            <div className="filter-dropdown">
              <FaFilter />
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Active">Active</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <div className="loan-tabs">
        <button className={`tab-button ${activeTab === 'applications' ? 'active' : ''}`} onClick={() => setActiveTab('applications')}>
          Loan Applications
        </button>
        <button className={`tab-button ${activeTab === 'active' ? 'active' : ''}`} onClick={() => setActiveTab('active')}>
          Active Loans
        </button>
      </div>

      <div className="loan-table-container">
        {activeTab === 'applications' && (
          <table className="loan-table">
            <thead>
              <tr>
                <th>Loan ID</th>
                <th>Customer</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Term</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {loanApplications.map((loan) => (
                <tr key={loan.id} onClick={() => setSelectedLoan(loan)}>
                  <td>{loan.id}</td>
                  <td>{loan.customer}</td>
                  <td>{loan.type}</td>
                  <td>${loan.amount.toLocaleString()}</td>
                  <td>{loan.term}</td>
                  <td><span className={`status-badge ${loan.status.toLowerCase()}`}>{loan.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === 'active' && (
          <table className="loan-table">
            <thead>
              <tr>
                <th>Loan ID</th>
                <th>Customer</th>
                <th>Type</th>
                <th>Balance</th>
                <th>Next Payment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {activeLoans.map((loan) => (
                <tr key={loan.id} onClick={() => setSelectedLoan(loan)}>
                  <td>{loan.id}</td>
                  <td>{loan.customer}</td>
                  <td>{loan.type}</td>
                  <td>${loan.remainingBalance.toLocaleString()}</td>
                  <td>{loan.nextPaymentDate}</td>
                  <td><span className={`status-badge ${loan.paymentStatus.includes('Overdue') ? 'overdue' : loan.status.toLowerCase()}`}>{loan.paymentStatus}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {selectedLoan && (
        <div className="loan-detail-panel">
          <div className="panel-header">
            <h2>Loan Details</h2>
            <div className="loan-id">{selectedLoan.id}</div>
          </div>
          <div className="detail-grid">
            <div className="detail-item"><label>Customer</label><p>{selectedLoan.customer}</p></div>
            <div className="detail-item"><label>Type</label><p>{selectedLoan.type}</p></div>
            <div className="detail-item"><label>Amount</label><p>${selectedLoan.amount?.toLocaleString()}</p></div>
            {selectedLoan.term && <div className="detail-item"><label>Term</label><p>{selectedLoan.term}</p></div>}
            {selectedLoan.interestRate && <div className="detail-item"><label>Interest Rate</label><p>{selectedLoan.interestRate}</p></div>}
            {selectedLoan.status && <div className="detail-item"><label>Status</label><p className={`status-badge ${selectedLoan.status.toLowerCase()}`}>{selectedLoan.status}</p></div>}
            {selectedLoan.applicationDate && <div className="detail-item"><label>Application Date</label><p>{selectedLoan.applicationDate}</p></div>}
            {selectedLoan.nextPaymentDate && <div className="detail-item"><label>Next Payment</label><p>{selectedLoan.nextPaymentDate}</p></div>}
          </div>
        </div>
      )}
    </div>
  );
}
