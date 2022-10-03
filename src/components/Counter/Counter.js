const Counter =() =>{
    let count = 0
    const sumar =()=>{
        count ++
        console.log(count)
    }
    const restar =()=>{
        count--
    }
    return(
        <div>
            <h1>Contador</h1>
            <h2>{count}</h2>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>restar</button>
        </div>
    )
}

export default Counter