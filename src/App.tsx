import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Card } from './components/Card/Card';
import { InfoCardPage } from './components/InfoCardPage/InfoCardPage';
import { CardBottomPanel } from './components/CardBottomPanel/CardBottomPanel';
import { Like } from './components/Like/Like';
import { ButtonDelete } from './components/ButtonDelete/ButtonDelete';
function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <Card>
                            <CardBottomPanel>
                                <Like />
                                <ButtonDelete />
                            </CardBottomPanel>
                        </Card>
                    }
                />
                <Route path="/infoCardPage" element={<InfoCardPage />} />
            </Routes>
        </div>
    );
}

export default App;
