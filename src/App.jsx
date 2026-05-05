import './App.css'
import ControlledField from './components/ControlledField/ControlledField'
import FormAction from './components/FormAction/FormAction'
import HookForm from './components/hooks/HookForm'
import HookForm2 from './components/hooks/HookForm2'
import SimpleForm from './components/SimpleForm/SimpleForm'
import UnControlledField from './components/UnControlledField/UnControlledField'

function App() {

  return (
    <>
       <h1>Explore React Form</h1>
       {/* <SimpleForm></SimpleForm> */}
       {/* <FormAction></FormAction> */}
       {/* <ControlledField></ControlledField> */}
       {/* <UnControlledField></UnControlledField> */}
       <HookForm></HookForm>
       <HookForm2/>
    </>
  )
}

export default App
