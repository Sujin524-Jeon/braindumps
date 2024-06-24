import "./LoginContent.css";
import Button from "../_shared/Button";

const LoginContent = () => {
    return (
        // <div className="parent">
            <div className="LoginConent">
                <section className="left_section">
                    <img src=""/>
                </section>
                <section className="right_section">
                    <img src=".././public/logo-text.svg"/>
                    <div className="right_id">
                        <div>아이디</div>
                        <input type="text" />
                    </div>
                    <div className="right_pwd">
                        <div>비밀번호</div>
                        <input type="text" />
                    </div>
                    <div className="right_button">
                        <Button text="로그인"/>
                    </div>
                </section>
            </div>
        // </div>
    )
}

export default LoginContent;