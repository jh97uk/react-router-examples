function Home(props){
    console.log(props);
    return <div style={{width:'50%', margin:'0px auto'}}>
        <h1>Hello world! This is my home route.</h1>
        <h2 style={{color:'#4d4d4d'}}>Take a look at the available routes!</h2>
        
        <h3>Props sample: <a href='/props-sample/green'><b>(/props-sample/*put-color-here*)</b></a></h3>
        <p>This shows how URL parameters work in React Router. This is the props-sample route, which then takes a color parameter and displays it on the page.</p>

        <h3>Nested routes sample: <a href='/nested-example/'><b>(/nested-example/*put-two-here*)</b></a></h3>
        <p>This shows how URL parameters work in React Router. This is the props-sample route, which then takes a color parameter and displays it on the page.</p>

        <h3>Programatic route change example</h3>
        <p>Obviously, sometimes you just want to change the route through code rather than through links. This can be achieved through a button onclick.
        <br/><button onClick={()=>props.history.push('/props-sample/red')}>Navigate to props sample (red)</button>
        </p>
    </div>
}

export default Home;
