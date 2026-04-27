import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import AppView from './views/AppView'
import OtraView from './views/OtraView'
import ContactoView from './views/ContactoView'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/main" element={<AppView />} />
                    <Route path="/OtraView" element={<OtraView />} />
                    <Route path="/ContactoView" element={<ContactoView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}