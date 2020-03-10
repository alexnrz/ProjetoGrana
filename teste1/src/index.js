import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';


const alpha = require('alphavantage')({ key: 'qweqweqwe' });

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
          <body>
              
            <script src="path/to/alphavantage/dist/bundle.js"></script> 
            <script type="application/javascript">
                const alpha = alphavantage( key: 'MJY493SN8RGL3G0U' );
            </script> 
            <div>  
                <form onSubmit={this.handleSubmit}>
                <label>
                    Nome:
                    <input type="text" pattern="[A-Z\s]+$" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Pesquisar" />
                </form>
            </div>

            <div class = "bigBox">
                Gráfico
                alpha.data.intraday(`msft`).then(data => {
                    console.log(data)
                });
            </div>
        </body>
      );
    }
  }
  
  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );
serviceWorker.unregister();
