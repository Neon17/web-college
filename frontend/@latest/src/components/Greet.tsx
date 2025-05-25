const Greet = (props: {
        name: string,
    })=>{
    return (
        <>
            <p className="hello">{props.name}</p>
        </>
    )
}
export default Greet;