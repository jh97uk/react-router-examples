import {Route} from 'react-router-dom';

import One from './One';
import Two from './Two';

function NestedExample(props){
    const style = {width:'50%', height:'100%', float:'left'};
    return <div>
            <div style={style}>
                <One/>
            </div>
            <div style={style}>
                <Route exact path={props.match.path+"two"} render={(props)=><Two {...props}/>}/>
                <Route exact path={props.match.path+"two"+"/:text"} render={(props)=><Two {...props}/>}/>
            </div>
        </div>
}

export default NestedExample;