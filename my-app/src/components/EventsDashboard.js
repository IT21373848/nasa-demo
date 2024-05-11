import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EventsDashboard = () => {
  const [recentEvents, setRecentEvents] = useState([]);

  useEffect(() => {
    const fetchRecentEvents = async () => {
      try {
        const response = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events?status=open&limit=4');
        const data = await response.json();
        setRecentEvents(data.events);
      } catch (error) {
        console.error('Error fetching recent NASA events:', error);
      }
    };

    fetchRecentEvents();
  }, []);

  return (
    <div className="w-full bg-white text-gray-900 py-12">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="">
          <h2 className="text-3xl font-bold text-center mb-8">Recent NASA Events</h2>
          {recentEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {recentEvents.map(event => (
                <div key={event.id} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                    <p className="text-lg mb-6">{event.description || 'No description available'}</p>
                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline block text-center">
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">Loading...</p>
          )}
          <div className="mt-8 text-center">
            <Link to="/events" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded inline-block">
              View More News and Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsDashboard;
