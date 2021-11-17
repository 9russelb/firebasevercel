import Image from 'next/image'

import {ProviderButton} from './../../ui/button/styles'
import apple from './../../../public/apple.png'

function AppleProvider(props) {
    //  Authentication with Apple
    return(
        <ProviderButton>
            <Image
            src={apple}
            alt="apple logo"
            layout="fixed"
            width={20}
            height={20}
            />
            <span>Sign up with Apple</span>
        </ProviderButton>
    )
}

export default AppleProvider