const Button = () => {
    return (
        <>
            <h1>My First Button On React + Vite</h1>
            <MyButton/>
            <MyButton/>
            <MyButton/>
    </>);
};

export default Button;

const MyButton = () => {
    return (
      <>
        <button>I am a button</button>
      </>
    );
};
