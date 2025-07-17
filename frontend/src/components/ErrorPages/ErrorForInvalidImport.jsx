import React from 'react';

export default function ErrorForInvalidImport({ error }){
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-xl p-8">
          {/* Error Icon and Title */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-6">
              <svg
                className="w-24 h-24 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              We encountered an error while loading this component.
            </p>
          </div>

          {/* Error Details */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Error Details
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="text-red-700">
                  {error?.message || 'Failed to load the component'}
                </p>
              </div>
              <div className="text-sm text-gray-600">
                <p className="mb-2">This might have happened because:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>The component failed to load properly</li>
                  <li>There was a network connectivity issue</li>
                  <li>The imported module contains errors</li>
                  <li>The lazy-loaded component is not available</li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Reload Page
              </button>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            If this problem persists, please contact support or try again later.
          </p>
        </div>
      </div>
    </div>
  );
};

