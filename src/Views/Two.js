function Two(props){
    console.log(props); 
    return <div style={{width:'100%', height:'100%', backgroundColor:'green'}}>
        TWO.<br/>
        {props.match.params.text}
    </div>
}

export default Two;
