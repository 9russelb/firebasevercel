import Image from 'next/image'

import {ProviderButton} from './../../ui/button/styles'
import facebook from './../../../public/facebook.png'

function FacebookProvider(props) {
    //  Authentication with Facebook
    return(
        <ProviderButton>
            <Image
            src={facebook}
            alt="facebook logo"
            layout="fixed"
            width={20}
            height={20}
            />
            <span>Sign up with Facebook</span>
        </ProviderButton>
    )
}

export default FacebookProvider