import React, { Component } from 'react'
import { API } from 'CONSTANT/globals'
import avatarImg from 'IMAGE/avatar.png'
import * as CK from 'UTIL/cookie' 
import './Account.scss'

export default class AccountView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showCard: false
    }
  }

  handleMouseover() {
    clearTimeout(this.avatarTimer)
    this.setState({
      showCard: true
    })
  }

  handleMouseout() {
    let self = this
    this.avatarTimer = setTimeout(function() {
      self.setState({
        showCard: false
      })
    }, 300)
  }

  handleLogout() {
    this.props.LOGONOUT_OP()
    this.props.logout()
    this.props.router.replace(API.CONTENTNAME)
    this.props.updateChangePasswordVisible(false)
  }

  updatePassword() {
    this.props.updateChangePasswordVisible(true)
  }

  render() {
    let userName = CK.getCookie('cstName')
    return (
      <div className="app-account">
        <div 
          className="avatar-s" 
          onMouseEnter={(e) => this.handleMouseover(e)}
          onMouseLeave={(e) => this.handleMouseout(e)}
        >
          <img alt="avatar" src={avatarImg}/>
        </div>
        <span className="welcome">欢迎回来，{userName}</span>
        <span className="cancel" onClick={(e) => this.handleLogout(e)}>退出登录</span>
        <div 
          className={this.state.showCard ? "card show" : "card"}
          onMouseEnter={(e) => this.handleMouseover(e)}
          onMouseLeave={(e) => this.handleMouseout(e)}
        >
          <div className="up">
            <div className="avatar-m"><img alt="avatar" src={avatarImg}/></div>
            {userName}
          </div>
          <div className="down">
            <div className="item" onClick={(e) => this.updatePassword(e)}>修改密码</div>
            <div className="item" onClick={(e) => this.handleLogout(e)}>退出登录</div>
          </div>
        </div>
      </div>
    )
  }

}