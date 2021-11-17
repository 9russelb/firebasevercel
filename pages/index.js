import Button from "./../components/ui/button";
import GoogleProvider from "../components/auth/provider/google";
import AppleProvider from "../components/auth/provider/apple";
import FacebookProvider from "../components/auth/provider/facebook";
import GithubProvider from "../components/auth/provider/github";

function Home() {

    return (
        <div>
            <GoogleProvider/>
            <AppleProvider/>
            <FacebookProvider/>
            <GithubProvider/>
            {/* <Button bgcolor="tomato" color="white">sign up with firebase</Button> */}

        </div>
    );
}

export default Home