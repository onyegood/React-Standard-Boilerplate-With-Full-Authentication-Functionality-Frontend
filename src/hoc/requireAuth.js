import React, {Component} from 'react'
import {connect} from 'react-redux';
export default ChildComponent => {
  class ComposedComponent extends Component {

    componentDidMount=() => {
        this.handlePageProtection();
    }

    componentDidUpdate=()=> {
        this.handlePageProtection();
    }

    handlePageProtection=()=> {
        const {auth} = this.props;
        if (!auth) {
            this.props.history.push('/signin');
        }
    }

      render(){
          return <ChildComponent {...this.props}/>
      }
  }

 const mapStateToProps=state=>{
        return {
            auth: state.auth.isAuthenticated
        }
    }

  return connect(mapStateToProps)(ComposedComponent);
}
