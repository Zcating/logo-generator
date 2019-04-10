// import {CanvasController} from "./modules/CanvasController";
import * as React from 'react';
import './App.css';
import AppTextInput from './components/AppTextInput';
import AppNumberInput from './components/AppNumberInput';
import {LogoCanvas} from './components/LogoCanvas';
import * as html2Canvas from 'html2canvas';

interface IAppState {
    leftText: string,
    rightText: string,
    title: string,
    height: number,
    width: number
}

class App extends React.Component<any, IAppState> {


    constructor (props: any) {

        super(props);
        this.state = {
            leftText: 'Porn',
            rightText: 'Hub',
            title: 'PornHub',
            height: 600,
            width: 600
        };
        this.handleLeftTextChange = this.handleLeftTextChange.bind(this);
        this.handleRightTextChange = this.handleRightTextChange.bind(this);
        this.handleWidthChange = this.handleWidthChange.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.createCanvas = this.createCanvas.bind(this);
        document.title = "Logo Genterator";
    }


    /**
     * handleTextChange
     */
    public handleLeftTextChange(event: React.ChangeEvent) {
        this.setState({
            leftText: (event.target as HTMLInputElement).value
        });
    }
    public handleRightTextChange(event: React.ChangeEvent) {
        this.setState({
            rightText: (event.target as HTMLInputElement).value
        });
    }
    public handleWidthChange(event: React.ChangeEvent) {
        this.setState({
            width: (event.target as HTMLInputElement).valueAsNumber
        });
    }
    /**
     * handleHeightChange
     */
    public handleHeightChange(event: React.ChangeEvent) {
        this.setState({
            height: (event.target as HTMLInputElement).valueAsNumber
        });
    }

    /**
     * createCanvas
     */
    public createCanvas() {
        html2Canvas(document.getElementById('LogoCanvas') as HTMLElement).then((value:HTMLCanvasElement) => {

            const link = document.createElement('a');
            link.download = 'downImg';
            link.href = `${value.toDataURL()}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    public render() {
        return (
        <div className="App">
            <div className="AppContent">
                <header className="AppHeader">LOGO Generator</header>
                <label>自定义您的 {this.state.title} 风格Logo</label>
                <div className="FirstInputs">
                    <AppTextInput title="左侧文字" text={this.state.leftText} onchange={this.handleLeftTextChange}/>
                    <AppTextInput title="右侧文字" text={this.state.rightText} onchange={this.handleRightTextChange}/>
                </div>

                <div className="FirstInputs">
                    <AppNumberInput title="左侧文字" value={this.state.width} onchange={this.handleWidthChange}/>
                    <AppNumberInput title="右侧文字" value={this.state.height} onchange={this.handleHeightChange}/>
                </div>

                <LogoCanvas id="LogoCanvas" leftText={this.state.leftText} rightText={this.state.rightText} width={this.state.width} height={this.state.height}/>
            </div>
            <button className="AppDownloadButton" onClick={this.createCanvas}>下载LOGO</button>
        </div>
        
        );
    }
}

export default App;
