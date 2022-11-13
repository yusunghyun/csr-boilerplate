import { Layout } from 'Common/components';
import { VFC } from 'Common/utils';
import { GameInformation } from 'pages/Shared';
import { useLocation } from 'react-router';
import { Cell } from './components/Cell';

export const Feature1: VFC = () => {
  const {
    state: { row, column, mole },
  } = useLocation<GameInformation>();

  return (
    <Layout>
      <Cell />
    </Layout>
  );
};
