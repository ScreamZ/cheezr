import Kuzzle from 'kuzzle-sdk/dist/kuzzle'
import 'kuzzle-sdk-login-oauth-popup'
// import Config from '../../config/index'

const DEFAULT_INDEX = 'cheezr'
const KUZZLE_HOST = 'localhost'

window.kuzzle = new Kuzzle(KUZZLE_HOST, {
  defaultIndex: DEFAULT_INDEX,
  ioPort: 7512,
  wsPort: 7513
})

export default window.kuzzle
