import './App.css';
import React from 'react'
import { FeatureFlagProvider,FeatureFlag } from './Context/FeatureFlag';

const Example =()=>{
  const {feature} = React.useContext(FeatureFlag)
  debugger
console.log(feature,"#$$#%#$@")
  return<h1>"Hello World"</h1>
}
const App = () => {
  console.log("Hello World")
  return (
    <FeatureFlagProvider><Example/></FeatureFlagProvider>
  )
}

export default App