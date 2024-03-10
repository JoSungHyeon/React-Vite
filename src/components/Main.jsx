import "./Main.css"

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 가능
// 2. 숫자, 문자열, 배열 값만 랜더링 함
// 3. 모든 태그는 닫혀 있어야함
// 4. 최상위 태그는 반드시 하나여야만 함

function Main() {
    const user = {
        name: "조성현",
        isLogin: true,
    };

    if(user.isLogin){
        return <div className="logout">로그아웃</div>
    } else {
        return <div>로그인</div> 
    }

    // return (
    //     <>
    //         {user.isLogin ? (
    //             <div>로그아웃</div>
    //         ) : (
    //         <div>로그인</div>
    //         )}
    //     </>
    // )
}

export default Main;