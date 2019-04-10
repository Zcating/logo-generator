import * as React from 'react';
import './AppNumberInput.css';
interface AppNumberInputProps {
    title: string,
    value: number,
    onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class AppNumberInput extends React.Component<AppNumberInputProps, any> {
    constructor(props: AppNumberInputProps) {
        super(props);
    }
    public render() {
        return (
        <div className="AppNumberInput">
            <label>{this.props.title}</label>
            <input type="number" value={this.props.value} onChange={this.props.onchange}/>
        </div>
        );
    }
}

export default AppNumberInput;