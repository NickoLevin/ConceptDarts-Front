import {Routes, Route} from 'react-router-dom'
import Welcome from '../../pages/welcome/Welcome'
import SignIn from '../../pages/sign-in/SignIn'
import SignUp from '../../pages/sign-up/SignUp'

export default function MainComponent(props) {
  return (
    <Routes>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/" element={<Welcome/>}/>
    </Routes>
  )
}
