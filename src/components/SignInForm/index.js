import React, { Component } from 'react';
import styles from './SignInForm.module.css';
import classNames from 'classnames';

const initialState = {
  email:'',
  password:'',
  emailIsValid: true,
  passwordIsValid: true,
  oblast: 'Khmelnytska'
}

class SingnInForm extends Component {
  constructor(props){
    super(props);
    this.state={
      ...initialState
      // email:'',
      // password:'',
      // emailIsValid: true,
      // passwordIsValid: true
    }
  }

  handlerForm = (event) => {
    event.preventDefault();
    // event.target.reset();
    this.setState(
      {
        ...initialState
        // email:'',
        // password:'',
        // emailIsValid: true,
        // passwordIsValid: true
      }
    )
    console.log(event);
  }

  // handlerEmail = ({ target: { value }}) => {
  //   const isInvalid = value.includes(' ');
  //   this.setState({
  //     email: value,
  //     emailIsValid: !isInvalid
  //   })
  // }

  // handlerPassword = ({ target: { value }}) => {
  //   const isInvalid = value.includes(' ');
  //   this.setState({
  //     password: value,
  //     passwordIsValid: !isInvalid
  //   })
  // }

  handlerInput = ({ target: { value, name }}) => {
    const isInvalid = value.includes(' ');
    this.setState({
      [name]: value,
      [`${name}IsValid`]: !isInvalid
    })
  }

  handlerInputSelect = ({ target: {value, name} }) => {
    console.log(value, name);
    this.setState({
      [name]: value
    })
  }

  // handlerInput = ({ target }) => {
  //   function input() {
  //     return this.setState({
  //       [target.name]: target.value,
  //       [`${target.name}IsValid`]: !target.value.includes(' ')
  //     })
  //   } 

  //   function select(){
  //     return this.setState({
  //       [target.name]: target.value,
  //     })
  //   } 

  //   target.type === 'select' ? select() : input();
  // }

  lowerCase = () => {
    this.setState(
      {
        email:this.state.email.toLowerCase(),
        password:this.state.password.toLowerCase()
      }
    )
  } 

  render(){
    const styleEmail = classNames(styles.input, { [styles.red]: !this.state.emailIsValid});
    const stylePassword = classNames(styles.input, { [styles.red]: !this.state.passwordIsValid});
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={this.handlerForm}> 
          <input 
            value={this.state.email}
            //Призводеть до довання непотрібного  класу .false
            // className={`${styles.input} ${!this.state.emailIsValid && styles.red}`}  
            className={styleEmail}
            type="text" 
            name="email"
            onChange={this.handlerInput}
            placeholder='e-mail'
          />

          <input 
            value={this.state.password}
            // className={`${styles.input} ${!this.state.passwordIsValid && styles.red}`} 
            className={stylePassword}
            type="password" 
            name="password"
            onChange={this.handlerInput}
            placeholder='password'
          />

          {/* https://zakon.rada.gov.ua/laws/show/z0957-14#Text */}
          <label for='regions' className={classNames(styles.input, styles.label)}>
            Оберіть область України:
          </label>

          <select 
            id='regions'
            className={styles.select} 
            name='oblast'
            value={this.state.oblast}
            onChange={this.handlerInputSelect}
            >
            <option value='	Avtonomna Respublika Krym'>Avtonomna Respublika Krym</option>
            <option value='Vinnytska'>Vinnytska</option>
            <option value='Volynska'>Volynska</option>
            <option value='Dnipropetrovska'>Dnipropetrovska</option>
            <option value='Donetska'>Donetska</option>
            <option value='Zhytomyrskа'>Zhytomyrskа</option>
            <option value='Zakarpatska'>Zakarpatska</option>
            <option value='Zaporizka'>Zaporizka</option>
            <option value='Ivano-Frankivska'>Ivano-Frankivska</option>
            <option value='Kyivska'>Kyivska</option>
            <option value='Kirovohradska'>Kirovohradska</option>
            <option value='Luhanska'>Luhanska</option>
            <option value='Lvivska'>Lvivska</option>
            <option value='Mykolaivska'>Mykolaivska</option>
            <option value='Odeska'>Odeska</option>
            <option value='Poltavska'>Poltavska</option>
            <option value='Rivnenska'>Rivnenska</option>
            <option value='Sumska'>Sumska</option>
            <option value='Ternopilska'>Ternopilska</option>
            <option value='Kharkivska'>Kharkivska</option>
            <option value='Khersonska'>Khersonska</option>
            <option value='Khmelnytska'>Khmelnytska</option>
            <option value='Cherkaska'>Cherkaska</option>
            <option value='Chernivetska'>Chernivetska</option>
            <option value='Chernihivska'>Chernihivska</option>
          </select>
          <input className={classNames(styles.input, styles.submit)} type="submit"/>
          
          
        </form>
        <button 
          className={classNames(styles.input, styles.lower)}
          onClick={this.lowerCase}
        >
          lower
        </button>
      </div>
    )
  }
  
}

export default SingnInForm;