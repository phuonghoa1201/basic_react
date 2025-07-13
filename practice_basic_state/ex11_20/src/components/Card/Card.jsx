function Card({children}){
    return(
        <div style={{padding:"16px", border:"solid 2px #000000 ",  width:"400px"}}>
            {children}
        </div>
    );
}
export default Card;