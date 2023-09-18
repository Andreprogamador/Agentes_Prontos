import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  padding: 6px;
  margin: 106px;
  border-radius: 50px;
  background: linear-gradient(180deg, rgba(133, 118, 193, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), #241775;
  color: #ffffff;
`;

function AgentCard({ agent }) {
  return (
    <Card>
      <h2>{agent.nome}</h2>
      <p>Classe: {agent.classe}</p>
      <p>Bio: {agent.bio}</p>
    </Card>
  );
}

export default AgentCard;
