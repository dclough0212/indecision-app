import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './addoption';
import Header from './header';
import Action from './action';
import Options from './options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.state = {
      options: [],
      selectedOption: undefined
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length)
      {
        const json = JSON.stringify(this.state.options);
        console.log(json);
        localStorage.setItem("options", json);
      }
  }
  componentDidMount(){
    try {
      const options = JSON.parse(localStorage.getItem("options"));

      if (options) {
        this.setState(() => ({options}));
      }
    }
    catch (e) {}

  }
  handleDeleteOptions() {
    this.setState(() => ({options: []}));
  }
  handleDeleteOption(option) {
    this.setState((prevState) => ({options: prevState.options.filter((ele) => ele != option)}));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({selectedOption: option}));
  }
  handleCloseModal() {
    this.setState(() => ({selectedOption: undefined}));
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) === -1)
    {
      this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }
    else {
      return 'Item already exists in list.';
    }
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return  <div>
    <Header title={title} subtitle={subtitle}/>
    <div className='container'>
      <Action hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}
      />
      <div className="widget">
        <Options options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions} 
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />    
      </div>
    </div>

    <OptionModal selectedOption={this.state.selectedOption} handleCloseModal={this.handleCloseModal}/>
  </div>
  }
}