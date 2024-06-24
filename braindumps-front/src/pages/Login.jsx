import { useParams } from "react-router-dom";
import Header from "../components/Header";
import LoginContent from "../components/login/LoginContent";

const Login = () => {
    const params = useParams();
    console.log(params);

    return (
        <div>
            <Header />
            <LoginContent />
        </div>
    )
}

export default Login;