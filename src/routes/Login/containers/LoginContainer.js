import { connect } from 'react-redux'
import { setSessionID, validateLogin } from 'REDUCER/login'
import LoginView from '../components/LoginView'

const mapDispatchToProps = {
  setSessionID,
  validateLogin
}

const mapStateToProps = (state) => ({
  vcodeSrc : state.login.checkCodeSrc
})

// 将 mapDispatchToProps 和 mapStateToProps 连接到组件
export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
