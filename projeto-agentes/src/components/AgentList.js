import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AgentCard from './AgentCard';

function AgentList() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/Andreprogamador/apiAgentes/main/agentes.json')
      .then((response) => {
        setAgents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {agents.map((agent, index) => (
        <AgentCard key={index} agent={agent} />
      ))}
    </div>
  );
}

export default AgentList;
