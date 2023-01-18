import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import { RecoilRoot } from "recoil"
import { Form } from "../components/Form"

export const AppRoutes = () => {
    return (
        <Router>
            <RecoilRoot>
                <Routes>
                    <Route path="/" element={<Form/> } />
                </Routes>
            </RecoilRoot>
        </Router>
    )
}