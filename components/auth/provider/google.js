import Image from 'next/image'

import {ProviderButton} from './../../ui/button/styles'
import google from './../../../public/google.png'

function GoogleProvider(props) {
    //  Authentication with Google
    return(
        <ProviderButton>
            <Image
            src={google}
            alt="google logo"
            layout="fixed"
            width={20}
            height={20}
            />
            <span>Sign up with Google</span>
        </ProviderButton>
    )
}

export default GoogleProvider