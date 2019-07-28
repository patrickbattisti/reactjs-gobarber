import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <nav>
          <img
            src="https://api.adorable.io/avatars/50/abott@adorable.png"
            alt="GoBarber"
          />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Patrick Battisti</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="PAtrick"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
