import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;
    console.log('Fetching from:', url);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const items = data.results || data;
        setData(items);
        console.log('Fetched data:', items);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Activities</h1>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{JSON.stringify(item)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Activities;