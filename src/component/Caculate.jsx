const Caculate = () => {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    const btn = document.querySelectorAll('button');
    const result = document.getElementById("result");
    btn[0].addEventListener("click", () => {
        result.innerHTML=Sum();
    });
    btn[0].addEventListener("click", () => {
        result.innerHTML = Min();
    });
    btn[0].addEventListener("click", () => {
        result.innerHTML = Multi();
    });
    btn[0].addEventListener("click", () => {
        result.innerHTML = Div();
    });

    function Sum() {
        return num1 + num2;
    }
     function Min() {
       return num1 - num2;
    }
     function Multi() {
       return num1 * num2;
    }
     function Div() {
       return num1 / num2;
     }
    return (
        <>
            <h1 style={{ color: 'blue', fontSize: '3rem' }}>Caculator</h1>
            <input type="text" id="num1"/>
            <input type="text" id="num2"/>
            <input type="text" id="result"/>
            <MyButton/>
            <button>-</button>
            <button>*</button>
            <button>/</button>
        </>
    )
}
export default Caculate;
const MyButton = ()=>{
    return (
      <>
        <button>+</button>
      </>
    );
}