import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IUser } from '../../utils/interfaces';

import { Container, Title } from './styles';

function Home() {
  const [userName, setUserName] = React.useState('');
  const { name } = useSelector((state: IUser) => state.user);

  useEffect(() => {
    setUserName(name);
  }, [name]);

  return (
    <Container>
      <Title>{userName}</Title>
    </Container>
  );
}

export default Home;
