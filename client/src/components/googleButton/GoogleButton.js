import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = "944746663312-sts14os6j3qdove15ea6pu75vqk9686b.apps.googleusercontent.com";
console.log(clientId);

export default function GoogleButton({ onSocial }){
    const onSuccess = async(response) => {
    	console.log(response);
    
        const { googleId, profileObj : { email, name } } = response;
        
        await onSocial({
            socialId : googleId,
            socialType : 'google',
            email,
            nickname : name
        });
    }

    const onFailure = (error) => {
        console.log(error);
    }
    
    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                responseType={200}
                onSuccess={onSuccess}
                onFailure={onFailure}
                isSignedIn="true"
            />
        </div>
    )
}