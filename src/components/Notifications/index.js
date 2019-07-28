import React from 'react';
import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

const Notifications = () => {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>Voce possuir xxx</p>
            <time>há dis dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Voce possuir xxx</p>
            <time>há dis dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Voce possuir xxx</p>
            <time>há dis dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification unread>
            <p>Voce possuir xxx</p>
            <time>há dis dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Voce possuir xxx</p>
            <time>há dis dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Voce possuir xxx</p>
            <time>há dis dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification unread>
            <p>Voce possuir xxx</p>
            <time>há dis dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Voce possuir xxx</p>
            <time>há dis dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Voce possuir xxx</p>
            <time>há dis dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
};

export default Notifications;
