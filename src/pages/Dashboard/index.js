import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Time } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft color="#fff" size={36} />
        </button>
        <strong>hoje</strong>
        <button type="button">
          <MdChevronRight color="#fff" size={36} />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Patrick Battisti</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Em Aberto</span>
        </Time>
        <Time>
          <strong>08:00</strong>
          <span>Patrick Battisti</span>
        </Time>
        <Time>
          <strong>08:00</strong>
          <span>Patrick Battisti</span>
        </Time>
      </ul>
    </Container>
  );
};

export default Dashboard;
