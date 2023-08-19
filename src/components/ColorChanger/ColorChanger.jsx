import { Component } from "react";
import { ChangeColorBtn } from "./ColorChanger.styled";

export class ColorChanger extends Component{

    static defaultProps = {
        defBg: 'green',
    };

    state = {
        backgroundColor: this.props.defBg,
    }

    changeColor = () => {
        this.setState({
            backgroundColor: `#${Math.random().toString(16).slice(3, 9)}`
            
        })
      
    }

    render() {
      return ( <ChangeColorBtn onClick={this.changeColor} style={{backgroundColor: this.state.backgroundColor}} type='button'>Click :3</ChangeColorBtn>)
    }
}