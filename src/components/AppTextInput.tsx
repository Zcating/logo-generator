import * as React from 'react';
import './AppTextInput.css';
interface AppTextInputProps {
    title: string,
    text: string,
    onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class AppTextInput extends React.Component<AppTextInputProps, any> {
    constructor(props: AppTextInputProps) {
        super(props);
    }
    public render() {
        return (
        <div className="AppTextInput">
            <label>{this.props.title}</label>
            <input type="text" value={this.props.text} onChange={this.props.onchange}/>
        </div>
        );
    }
}
export default AppTextInput;