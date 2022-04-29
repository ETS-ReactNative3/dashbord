import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledTooltip } from 'reactstrap';
import s from './Widget.module.scss';
import classNames from 'classnames';
import Loader from '../Loader'; // eslint-disable-line css-modules/no-unused-class
import AnimateHeight from 'react-animate-height';
import uuidv4 from 'uuid/v4'
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import dropdownImg from '../../images/widget-menu.svg'
import { getTransactions } from "../../controller/transactions";
import { getAccounts} from "../../controller/accounts";
import { getUsers } from "../../controller/users";

var sommeDepot = 0, nbdepot = 0, montantTransaction = 0, sommeAchat = 0, nbVente = 0, sommeVente = 0, nbAchat = 0, nbretrait = 0, nbtrans = 0, sommeTrans = 0, sommeRetrait = 0, nbUser = 0, sommeTranfer = 0, nbComptClassic = 0, nbComptPro = 0;
var typeTransaction = {
  1: "Dépot",
  2: "Transfert",
  3: "Achat",
  4: "Vente"
}

class Widget extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    close: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    fullscreen: PropTypes.bool,
    collapse: PropTypes.bool,
    refresh: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    settings: PropTypes.bool,
    settingsInverse: PropTypes.bool,
    tooltipPlacement: PropTypes.string,
    showTooltip: PropTypes.bool,
    bodyClass: PropTypes.string,
    customControls: PropTypes.bool,
    options: PropTypes.object, //eslint-disable-line,
    fetchingData: PropTypes.bool,
  };

  static defaultProps = {
    title: null,
    className: '',
    children: [],
    close: false,
    fullscreen: false,
    collapse: false,
    refresh: false,
    settings: false,
    settingsInverse: false,
    tooltipPlacement: 'bottom',
    showTooltip: false,
    bodyClass: '',
    customControls: false,
    customClose: null,
    customExpand: null,
    customCollapse: null,
    customFullscreen: null,
    customReload: null,
    customDropDown: null,
    prompt: false,
    collapsed: false,
    options: {},
    fetchingData: false,
    widgetType: "",
  };

  constructor(props) {
    super(props);

    this.state = {
      randomId: uuidv4(),
      hideWidget: false,
      collapseWidget: !!props.collapsed,
      height:  props.collapsed ? 0 : 'auto',
      fullscreened: false,
      reloading: false,
      modal: false,
      apiData: ''
    }

  }

  transactions = getTransactions();
  accounts = getAccounts();
  users = getUsers();

 

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  }

  handleClose = () => {
    this.setState({ hideWidget: !this.state.hideWidget})
  }

  handleCollapse = () => {
    let heightValue = this.state.collapseWidget ? 'auto' : 0
    this.setState({
      height: heightValue,
      collapseWidget: !this.state.collapseWidget,
      reloading: false
    });

  };

  closeWithModal = () => {
    this.toggleModal();
    this.handleClose();
  }

  handleExpand = () => {
    
    this.setState({
      height: 'auto',
      collapseWidget: false
    });

  };

  handleQuotidient = () => {

  }
  handleReload = () => {
    const { widgetType, updateWidgetData } = this.props;
    const type = widgetType;
    if(type) {
      updateWidgetData(type)
    }
    this.setState({ reloading: true });
    let endpoint = false;
    if(!endpoint) {
      setTimeout(() => this.setState({ reloading: false }),2000);
    } else {
      this.setState({ reloading: true });
      fetch('https://yourapi.com')
        .then(response => response.json())
        .then(json => this.setState({ apiData: json.title}))
        .then(setTimeout(() => this.setState({ reloading: false }), 1000))
    }
  }

  handleFullscreen = () => {
    this.setState({ fullscreened: !this.state.fullscreened });
  }
  
  render() {

    this.transactions.then((value) => {
      localStorage.setItem('transactions', JSON.stringify(value));
      
    });
    const response = JSON.parse(localStorage.getItem('transactions'));

      nbdepot = 0;
      sommeDepot = 0;
      nbtrans = 0;
      sommeTrans = 0;
      nbAchat = 0;
      montantTransaction = 0;
      sommeAchat = 0;
      nbAchat = 0;
      sommeVente = 0;
     

      response && response.map((transaction, index) => {
        var date1 = new Date((transaction.creation_date));
        var date2 = date1.getTime();
          // console.log(date1, date2);
          // console.log('............Date du jour.....................');
          var today = new Date();
          // console.log(today.getTime());
          // console.log('.............................................');
       if( date2 === today.getTime())
       console.log('Hello bienvenue au test');
       {
        montantTransaction = parseFloat(montantTransaction) + parseFloat(transaction.amount);

        if (typeTransaction[transaction.transaction_type_id] === "Dépot") {
          nbdepot++;
          sommeDepot = parseFloat(sommeDepot) + parseFloat(transaction.amount);
        } else if (typeTransaction[transaction.transaction_type_id] === "Transfert") {
          nbtrans++;
          sommeTrans = parseFloat(sommeTranfer) + parseFloat(transaction.amount);
        } else if (typeTransaction[transaction.transaction_type_id] === "Achat") {
          nbAchat++;
          sommeAchat = parseFloat(sommeAchat) + parseFloat(transaction.amount);
        } else {
          nbVente++;
          sommeVente = parseFloat(sommeVente) + parseFloat(transaction.amount);
        }
       }   
       
      })

      console.log('..................Les donnés journaliers...................');
      console.log(montantTransaction);
      console.log(sommeDepot);
      console.log(sommeTrans);
      console.log(nbVente);
      console.log(sommeAchat); 
      console.log(sommeVente);
  
    const {
      title,
      className,
      children,
      close,
      fullscreen,
      collapse,
      refresh,
      settings,
      settingsInverse,
      tooltipPlacement,
      showTooltip,
      bodyClass,
      customControls,
      customClose,
      customExpand,
      customCollapse,
      customFullscreen,
      customReload,
      fetchingData,
      customDropDown,
      customBody,
      prompt,
      collapsed,
      widgetType,
      updateWidgetData,
      options, //eslint-disable-line
      ...attributes
    } = this.props;
    const mainControls = !!(close || fullscreen || collapse || refresh || settings || settingsInverse);

    const {
      reloading,
      fullscreened,
      randomId,
      height,
      hideWidget,
      collapseWidget,
      modal,
    } = this.state;

    
    
    return (
    <React.Fragment>
      <section
        style={{display: hideWidget ? 'none' : ''}}  
        className={
          classNames('widget', {'fullscreened' : !!fullscreened, 'collapsed' : !!collapseWidget}, s.widget, className, (reloading || fetchingData) ? s.reloading : '')
        } {...attributes}
        >
        {
          title && (
            typeof title === 'string'
              ? <h5 className={s.title}>{title}</h5>
              : <header className={s.title}>{title}</header>
          )
        }
        
        {
          !customControls && mainControls && (
            <div className={`${s.widgetControls} widget-controls`}>
              {settings && (
                <button><i className="la la-cog" /></button>
              )}
              {settingsInverse && (
                <button className={`bg-gray-transparent ${s.inverse}`}><i
                  className="la la-cog text-white"
                /></button>
              )}
              {refresh && (
                <button onClick={this.handleReload} id={`reloadId-${randomId}`}>
                  {typeof refresh === 'string' ?
                    <strong className="text-gray-light">{refresh}</strong> :
                    <i className="la la-refresh" />}
                  {showTooltip && (
                    <UncontrolledTooltip
                      placement={tooltipPlacement}
                      target={`reloadId-${randomId}`}
                    >Reload</UncontrolledTooltip>
                  )}
                </button>
              )}
              {fullscreen && (
                <button onClick={this.handleFullscreen} id={`fullscreenId-${randomId}`}>
                  <i className={`glyphicon glyphicon-resize-${fullscreened ? 'small' : 'full'}`} />
                  {showTooltip && (
                    <UncontrolledTooltip
                      placement={tooltipPlacement}
                      target={`fullscreenId-${randomId}`}
                    >Fullscreen</UncontrolledTooltip>
                  )}
                </button>
              )}
              {!fullscreened && 
                collapse && (
                  <span>
                    <button onClick={this.handleCollapse} id={`collapseId-${randomId}`}>
                    <i className={`la la-angle-${!collapseWidget ? 'down' : 'up'}`} />
                      {showTooltip && (
                        <UncontrolledTooltip
                          placement={tooltipPlacement}
                          target={`collapseId-${randomId}`}
                        >Collapse</UncontrolledTooltip>
                      )}
                    </button>
                  </span>
                )
              }
              {!fullscreened && (
                (close && !prompt) ? (
                <button onClick={this.handleClose} id={`closeId-${randomId}`}>
                  {typeof close === 'string' ?
                    <strong className="text-gray-light">{close}</strong> :
                    <i className="la la-remove" />}
                  {showTooltip && (
                    <UncontrolledTooltip
                      placement={tooltipPlacement}
                      target={`closeId-${randomId}`}
                    >Close</UncontrolledTooltip>
                  )}
                </button>
              ) : (
                <button onClick={this.toggleModal} id={`closeId-${randomId}`}>
                {typeof close === 'string' ?
                  <strong className="text-gray-light">{close}</strong> :
                  <i className="la la-remove" />}
                {showTooltip && (
                  <UncontrolledTooltip
                    placement={tooltipPlacement}
                    target={`closeId-${randomId}`}
                  >Modal</UncontrolledTooltip>
                )}
              </button>
              ))}
            </div>
          )}
          {customDropDown && (
            <div className={`${s.widgetControls} widget-controls`}>
              
            <UncontrolledDropdown>
              <DropdownToggle
                tag="span"
                data-toggle="dropdown"

              >
                <img src={dropdownImg} alt="dropdown"/>
              </DropdownToggle>
              <DropdownMenu className="bg-widget-transparent" right style={{padding: 10}}>
                <DropdownItem onClick={this.handleReload} title="Reload">
                  Reload &nbsp;&nbsp;
                  <span className="badge badge-pill badge-success animated bounceIn">
                    <strong>9</strong>
                  </span>
                </DropdownItem>

                <DropdownItem onClick={this.handleReload} title="Reload">
                  Quotidien &nbsp;&nbsp;
                </DropdownItem>

                <DropdownItem onClick={this.handleReload} title="Reload">
                  Hebdomadaire &nbsp;&nbsp;
                </DropdownItem>

                <DropdownItem onClick={this.handleReload} title="Reload">
                  Semestre &nbsp;&nbsp;
                </DropdownItem>

                <DropdownItem onClick={this.handleReload} title="Reload">
                  Trimestre &nbsp;&nbsp;
                </DropdownItem>

                <DropdownItem onClick={this.handleReload} title="Reload">
                  Annee &nbsp;&nbsp;
                </DropdownItem>

                {/* <DropdownItem onClick={this.handleReload} title="Reload">
                  Autre &nbsp;&nbsp;
                </DropdownItem> */}

                
                <DropdownItem onClick={this.handleFullscreen} title={!fullscreened ? "Full Screen" : "Restore"}>{!fullscreened ? "Fullscreen" : "Restore"} </DropdownItem>
                
                <DropdownItem divider />
                {!fullscreened && (!prompt ? <DropdownItem onClick={this.handleClose} title="Close">Close</DropdownItem>
                : <DropdownItem onClick={this.toggleModal} title="Close">Close</DropdownItem>)}
              </DropdownMenu>
            </UncontrolledDropdown>


            </div>
          )}
        {
          customControls && (
            <div className={`${s.widgetControls} widget-controls`}>
              {!fullscreened && ((customClose && !prompt) ? (
                <button onClick={this.handleClose} id={`closeId-${randomId}`} className={s.customControlItem}><i title="Close" className="glyphicon glyphicon-remove"/></button>
              ) : (
                  <button onClick={this.toggleModal} id={`closeId-${randomId}`} className={s.customControlItem}><i title="Close" className="glyphicon glyphicon-remove"/></button>
              ))}
              {!fullscreened && (customCollapse && (
                  <button onClick={this.handleCollapse} id={`closeId-${randomId}`} className={s.customControlItem}><i title="Collapse" className={`glyphicon glyphicon-chevron-${!collapseWidget ? 'down' : 'up'}`}/></button>
              ))}
              {customFullscreen && (
                  <button onClick={this.handleFullscreen} id={`closeId-${randomId}`} className={s.customControlItem}><i title="Fullscreen" className={`glyphicon glyphicon-resize-${fullscreened ? 'small' : 'full'}`} /></button>
              )}
              {customReload && (
                  <button onClick={this.handleReload} id={`closeId-${randomId}`} className={s.customControlItem}><i title="I am spinning!" className="fa fa-refresh" /></button>
              )}
            </div>
          )
        }
        <AnimateHeight
          duration={ 500 }
          height={ height }
        >
          <div className={`${s.widgetBody} widget-body ${bodyClass}`}>
            {reloading || fetchingData ?  <Loader className={s.widgetLoader} size={40}/> : customBody ? (
                <div className="jumbotron handle bg-inverse text-white mb-0">
                <div className="container">
                  <h1>Draggable story!</h1>
                  <p className="lead">
                    <em>Build</em> your own
                    interfaces! Sit back and relax.
                  </p>
                  <p className="text-center">
                    <button onClick={this.handleFullscreen} className="btn btn-danger btn-lg">
                      {!fullscreened ? 
                        <React.Fragment>Fullscreen me! &nbsp;
                          <i className="fa fa-check" />
                        </React.Fragment>
                        : 'Go Back'
                      }
                    </button>
                  </p>
                </div>
              </div>
            ) : children}
          </div>
    
       </AnimateHeight>
       
      </section>
      {prompt && (
        <Modal isOpen={modal} toggle={this.toggleModal} id="news-close-modal">
        <ModalHeader toggle={this.toggleModal} id="news-close-modal-label">Sure?</ModalHeader>
        <ModalBody className="bg-white">
          Do you really want to unrevertably remove this super news widget?
        </ModalBody>
        <ModalFooter>
          <Button color="default" onClick={this.toggleModal} data-dismiss="modal">No</Button>{' '}
          <Button color="danger" onClick={this.closeWithModal} id="news-widget-remove">Yes,
            remove widget</Button>
        </ModalFooter>
      </Modal> 
      )}
      <div style={{display: fullscreened ? 'block'  : 'none'}} className={s.widgetBackground}></div>
      </React.Fragment>
    );
  }
}

export default Widget;
