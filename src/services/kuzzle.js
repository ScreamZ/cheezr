import Kuzzle from 'kuzzle-sdk'
import 'kuzzle-sdk-login-oauth-popup'
// import Config from '../../config/index'

const DEFAULT_INDEX = 'cheezr'
const KUZZLE_URL = `http://localhost:${BACKEND_PORT}`

window.kuzzle = new Kuzzle(KUZZLE_URL, {defaultIndex: DEFAULT_INDEX});

export default window.kuzzle;
