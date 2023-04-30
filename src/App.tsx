import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainMenuPage from 'pages/MainMenuPage';
import SearchResultPage from 'pages/SearchResultPage';
import QrCodeReaderPage from 'pages/QrCodeReaderPage';
import ManualAddressPage from 'pages/ManualAddressPage';
import { AppProvider } from 'state/App/Index';

//@ts-ignore
window.web3 = null;

const App = () => {
  return <AppProvider>
    <Router>
      <Routes>
        <Route path="/" element={<MainMenuPage />}></Route>
        <Route path="text-input" element={<ManualAddressPage />}></Route>
        <Route path="qr-code" element={<QrCodeReaderPage />}></Route>
        <Route path="search" element={<SearchResultPage />}>
          <Route path=':productId' element={<SearchResultPage />} />
        </Route>
      </Routes>
    </Router>
  </AppProvider>
}
export default App;
