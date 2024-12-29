import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/home';
import VariablesHome from './components/VariablesHome';
import ConditionalHome from './components/ConditionalHome';
import ListHome from './components/ListHome';
import VariablesText from './components/VariablesText';
import ConditionalText from './components/ConditionalText';
import AuthProvider from './components/context/AuthContext';
import VariablesVideo from './components/VariablesVideo';
import VariablesQuiz from './components/VariablesQuize';
import ListText from './components/ListText';
import ListVideo from './components/ListVideo';
import ListQuiz from './components/ListQuize';
import SetHome from './components/SetHome';
import SetText from './components/SetText';
import SetQuiz from './components/SetQuize';
import SetVideo from './components/SetVideo';
import DictionaryHome from './components/DictionaryHome';
import DictionaryText from './components/DictionaryText';
import DictionaryVideo from './components/DictionaryVideo';
import DictionaryQuiz from './components/DictionaryQuize';
import FunctionHome from './components/FunctionHome';
import FunctionText from './components/FunctionText';
import FunctionVideo from './components/FunctionVideo';
import FunctionQuiz from './components/FunctionQuize';
import ConditionalVideo from './components/ConditionalVideo';
import ConditionalQuiz from './components/ConditionalQuize';


function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/variables-home" element={<VariablesHome />} />
                    <Route path="/variables/text" element={<VariablesText />} />
                    <Route path="/variables/video" element={<VariablesVideo />} />
                    <Route path="/conditional-home" element={<ConditionalHome />} />
                    <Route path="/conditional/text" element={<ConditionalText />} />
                    <Route path="/conditional/video" element={<ConditionalVideo />} />
                    <Route path="/conditional/test" element={<ConditionalQuiz />} />
                    <Route path="/variables/test" element={<VariablesQuiz />} />
                    <Route path="/list-home" element={<ListHome />} />
                    <Route path="/list/text" element={<ListText />} />
                    <Route path="/list/video" element={<ListVideo />} />
                    <Route path="/list/test" element={<ListQuiz />} />
                    <Route path="/set-home" element={<SetHome />} />
                    <Route path="/set/text" element={<SetText />} />
                    <Route path="/set/video" element={<SetVideo />} />
                    <Route path="/set/test" element={<SetQuiz />} />
                    <Route path="/list/test" element={<ListQuiz />} />
                    <Route path="/dictionary-home" element={<DictionaryHome />} />
                    <Route path="/dictionary/text" element={<DictionaryText />} />
                    <Route path="/dictionary/video" element={<DictionaryVideo />} />
                    <Route path="/dictionary/test" element={<DictionaryQuiz />} />
                    <Route path="/function-home" element={<FunctionHome />} />
                    <Route path="/function/text" element={<FunctionText />} />
                    <Route path="/function/video" element={<FunctionVideo />} />
                    <Route path="/function/test" element={<FunctionQuiz />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
