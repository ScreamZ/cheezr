import Kuzzle from 'kuzzle-sdk'
import 'kuzzle-sdk-login-oauth-popup'
// import Config from '../../config/index'

const DEFAULT_INDEX = 'cheezr'
const KUZZLE_URL = `http://${BACKEND_HOST}:${BACKEND_PORT}`

var kuzzle = new Kuzzle(KUZZLE_URL, {defaultIndex: DEFAULT_INDEX});

export default kuzzle;
