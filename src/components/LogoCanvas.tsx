import * as React from 'react';
import './LogoCanvas.css';
interface LogoCanvasProps {
    id: string;
    leftText: string;
    rightText: string;
    height: number;
    width: number;
}

export class LogoCanvas extends React.Component<LogoCanvasProps, any> {
    constructor(props: LogoCanvasProps) {
        super(props);
    }
    public render() {
        const backgroundStyle = {
            height: `${this.props.height}px` ,
            width: `${this.props.width}px`
        }
        const leftTextStyle = {
            
        }
        const rightTextStyle = {
            
        }
        return (
        <div id={this.props.id} className="Background" style={backgroundStyle}>
            <div className="LeftText" style={leftTextStyle}>{this.props.leftText}</div>
            <div className="RightText" style={rightTextStyle}>{this.props.rightText}</div>
        </div>
        );
    }
}