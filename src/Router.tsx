// @ts-nocheck
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Feature3, Feature1, Feature4, Feature2 } from 'pages';

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Feature1 />} />
        <Route path='/feature2' element={<Feature2 />} />
        <Route path='/feature3' element={<Feature3 />} />
        <Route path='/feature4' element={<Feature4 />} />
      </Routes>
    </BrowserRouter>
  );
};
