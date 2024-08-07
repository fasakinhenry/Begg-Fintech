// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Left Column */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Welcome, <span className="text-blue-500">Henry</span></h1>
            <p className="text-gray-500">Access & manage your account and transactions efficiently.</p>
          </div>
          <button className="mt-4 lg:mt-0 bg-blue-500 text-white py-2 px-4 rounded-md">+ Add bank</button>
        </div>

        {/* Bank Accounts Overview */}
        <div className="bg-white p-6 rounded-lg mb-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">2 Bank Accounts</h2>
          <p className="text-3xl font-bold mb-2">$2,698.12</p>
          <p className="text-gray-500">Total Current Balance</p>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Recent Transactions</h2>
            <button className="text-blue-500">View all</button>
          </div>
          <div className="space-y-4">
            {/* Transactions Tabs */}
            <div className="flex space-x-4">
              <button className="text-blue-500 border-b-2 border-blue-500">Chase Bank</button>
              <button className="text-gray-500">Bank of America</button>
              <button className="text-gray-500">First Platypus Bank</button>
            </div>
            {/* Transactions List */}
            <div>
              {/* Individual Transaction */}
              <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center">
                  <img src="/img/bank-icon.svg" alt="Bank Icon" className="h-10 w-10 mr-4" />
                  <div>
                    <p className="font-bold">Chase Bank</p>
                    <p className="text-gray-500">Savings</p>
                  </div>
                </div>
                <p className="font-bold text-xl">$2,588.12</p>
              </div>
              {/* Add more transactions as needed */}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/3">
        <div className="bg-white p-6 rounded-lg mb-6 shadow-md">
          <div className="flex items-center mb-4">
            <img src="/img/profile-pic.png" alt="Profile" className="h-16 w-16 rounded-full mr-4" />
            <div>
              <h2 className="text-xl font-bold">Henry Fasakin</h2>
              <p className="text-gray-500">fasakinhenry@gmail.com</p>
            </div>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md w-full">+ Add bank</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">My Budgets</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-500">Subscriptions</p>
              <p className="font-bold">$25 left</p>
            </div>
            <div className="bg-blue-500 h-2 rounded-lg" style={{ width: '25%' }}></div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500">Food and booze</p>
              <p className="font-bold">$120 left</p>
            </div>
            <div className="bg-red-500 h-2 rounded-lg" style={{ width: '80%' }}></div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500">Savings</p>
              <p className="font-bold">$50 left</p>
            </div>
            <div className="bg-green-500 h-2 rounded-lg" style={{ width: '50%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
