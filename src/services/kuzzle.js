import Kuzzle from 'kuzzle-sdk'
import Config from '../../config/index'

const DEFAULT_INDEX = 'cheezr'
const KUZZLE_URL = `http://${Config.backend.host}:${Config.backend.port}`

var kuzzle = new Kuzzle(KUZZLE_URL, {defaultIndex: DEFAULT_INDEX});

export default kuzzle;
