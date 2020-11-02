function PropsExample(props){
    const color = props.match.params.color;
    return <div>
            <h1>Hello, this is the color you passed through: <label style={{color:color}}>{color}</label></h1>
        </div>
}

export default PropsExample;