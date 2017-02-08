import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TopNavMenu from './components/TopNavMenu'
import TopBanner from './components/TopBanner';
import * as routePath from './constants/Route'
import './App.css';

import AuctionsList from './containers/AuctionsList';

class App extends Component {
    constructor(props){
        super(props);
        //const node = ReactDOM.findDOMNode(this);
        this.state = {
            hideHeader:false
        }
    }
    componentDidMount(){
        const node = ReactDOM.findDOMNode(this);
        document.addEventListener('scroll', this.handleScroll.bind(this,node));
    }
    componentWillUnmount() {

        document.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(node){
        //console.log(this.props.lo);
        if(this.props.location.pathname !== routePath.HOME){
            return;
        }
        const rectObject = node.getBoundingClientRect();
        const ifOffsetTop = -10;
        if((rectObject.top < ifOffsetTop) && !this.state.hideHeader){
            this.setState({hideHeader:true});
        }else if((rectObject.top > ifOffsetTop) && this.state.hideHeader){
            this.setState({hideHeader:false});
        }

    }
    render() {
        let children = this.props.children;
        if (!children) {
            children = (
                <div>
                    <div className="container-fluid">
                        {children || <AuctionsList/>}
                    </div>
                </div>
            )
        }
        return (
            <div className="App">
                <TopNavMenu hideHeader={this.state.hideHeader} />
                <TopBanner hideHeader={this.state.hideHeader}/>
                {children}
            </div>
        );
    }
}

export default App;
