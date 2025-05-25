const Quote = (props: {
    text: string,
    author: string
}) => {
    return (
        <>
           <p className="print">{props.author} says {props.text}</p> 
        </>
    )
}

export default Quote;