import Image from 'next/image'

import {ProviderButton} from './../../ui/button/styles'
import github from './../../../public/github.png'

function GithubProvider(props) {
    //  Authentication with Github
    return(
        <ProviderButton>
            <Image
            src={github}
            alt="github logo"
            layout="fixed"
            width={20}
            height={20}
            />
            <span>Sign up with Github</span>
        </ProviderButton>
    )
}

export default GithubProvider