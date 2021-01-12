import { Component } from "react"
class ContentCard extends Component{
    render(){
    return <div>
        <br/>
        <label>Name: {this.props.name} </label>
        <br/>
        <label>Phone Number: {this.props.number}</label>
        <br/>
        <label>Email: {this.props.email}</label>
        <br/>
        </div>

    }
}
export default ContentCard