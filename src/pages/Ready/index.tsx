import { MouseEventHandler } from 'react';
import { VFC } from 'Common/utils';
import { useInputs } from 'Common/hooks';
import { Button, Input, Layout } from 'Common/components';
import { useNavigate } from 'react-router/dist';

const INITIAL_FORMS = {
  row: '1',
  column: '1',
  mole: '1',
};

export const Ready: VFC = () => {
  const navigate = useNavigate();
  const { inputs, handleChange } = useInputs(INITIAL_FORMS);

  const handlePress: MouseEventHandler<HTMLButtonElement> = () => {
    navigate('./game');
  };

  return (
    <Layout>
      <Input
        type='text'
        value={inputs.row}
        label='행'
        placeholder='열'
        name='row'
        onChange={handleChange}
      />
      <Input
        type='text'
        value={inputs.column}
        label='열'
        placeholder='열'
        name='column'
        onChange={handleChange}
      />
      <Button onClick={handlePress}>시작</Button>
    </Layout>
  );
};
