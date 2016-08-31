import falcor from 'falcor/dist/falcor.browser'

window.model = new falcor.Model({source: new falcor.HttpDataSource('/model.json') });

export default window.model
