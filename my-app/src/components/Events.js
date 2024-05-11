import React, { useState, useEffect } from 'react';
import PageLoading from './PageLoading';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchNASAEvents = async () => {
      try {
        const response = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events?status=open&limit=10');
        const data = await response.json();
        setEvents(data.events);
      } catch (error) {
        console.error('Error fetching NASA events:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };

    fetchNASAEvents();
  }, []);

  return (
    <div className="w-full h-800 bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">News and Events</h2>
        {loading ? (
          <PageLoading /> 
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.length > 0 ? (
              events.map(event => (
                <div key={event.id} className="bg-gray-800 w-full h-800 rounded-lg overflow-hidden shadow-lg">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-sm mb-4">{event.description || 'No description available'}</p>
                    <a href={event.sources[0]?.url || '#'} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      {event.sources[0]?.url ? 'See More' : 'No Further Details Available'}
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No events available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
