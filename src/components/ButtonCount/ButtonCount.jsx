export const ButtonCount= ({handleExchange, onAdd})=> {

    const wrapperFunc = () => {
        handleExchange();
        onAdd();
    }

    return (

        <button onClick={wrapperFunc} >
            Add To Cart
        </button> 
    )
}