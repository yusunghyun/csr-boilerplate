// @ts-nocheck
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Ready, Game, Result, Ranking } from 'pages';

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Ready />} />
        <Route path='/game' element={<Game />} />
        <Route path='/result' element={<Result />} />
        <Route path='/ranking' element={<Ranking />} />
      </Routes>
    </BrowserRouter>
  );
};
