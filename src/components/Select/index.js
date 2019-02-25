import React, { Component } from 'react';
import classnames from 'classnames';
import Preloader from '../../components/Preloader/';

import './style.scss';

export default class Select extends Component{
  state = {
    isOpen: false,
    selectedId: null,
    selectedLabel: ''
  };

  toggleHandler = () => {
    const { fetchStructure, isLoading, isLoaded } = this.props;
    if (!isLoading && !isLoaded) {
      fetchStructure();
    }
    this.setState({ isOpen: !this.state.isOpen })
  };

  chooseHandler = (ev) => {
    ev.stopPropagation();
    const selectedId = parseInt(ev.currentTarget.dataset.id);
    const selectedLabel = ev.currentTarget.dataset.label;
    this.setState({
      isOpen: false,
      selectedId,
      selectedLabel
    })
  };

  renderList = () => {
    if (!this.state.isOpen) {
      return null;
    }

    const getTree = (data, parentLabel = '') => {
      return data.map(item => {
        let children;
        if (item.children && item.children.length) {
          children = <ul>{getTree(item.children, `${parentLabel} ${item.name}`)}</ul>;
        }
        return (
          <li
            key={item.id}
            className={classnames('select-item', { active: this.state.selectedId === item.id})}
            onClick={this.chooseHandler}
            data-id={item.id}
            data-label={`${parentLabel} ${item.name}`}
          >
            <span>{item.name}</span>
            {children}
          </li>
        )
      });
    };

    return (
      <ul>
        {getTree(this.props.structure)}
      </ul>
    )
  };

  render() {
    const { isLoading } = this.props;
    const { isOpen, selectedId, selectedLabel } = this.state;
    let label = isOpen ? 'Скрыть' : 'Выбрать отдел';
    if (selectedId) {
      label = selectedLabel;
    }

    return (
      <div className={classnames('select-container', { isOpen })}>
        <div className='select-wrapper' >
          <div className='select-toggler' onClick={this.toggleHandler}>{label}</div>
          <div className='select-content'>
            <Preloader show={isLoading} />
            {this.renderList()}
          </div>
        </div>
      </div>
    )
  }
}
