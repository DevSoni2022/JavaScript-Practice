import React, { useState } from 'react'

export const FeatureFlag = React.createContext({});

export const FeatureFlagProvider = ({children})=>{

    const [feature,setFeature] = useState({isGooglePlayEnabled: true,isAmazonPayEnabled:false})
    return <FeatureFlag.Provider        value= {{feature}}
    >
    </FeatureFlag.Provider>
}