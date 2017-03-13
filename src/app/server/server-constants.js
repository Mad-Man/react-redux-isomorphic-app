  const Constants = {
    ROOT_PATH: '../..',
    AUTHOR: {
      NAME: 'Juan Ignacio',
      LASTNAME: 'Aldama'
    },
    DIST_PATH: '/dist',
    DEFAULT_PORT: 1616,
    SERVER_PATH: 'server',
    VIEW_ENGINE_TYPE: 'ejs',
    SERVER_LISTENING_MESSAGE: "Listening on %j",
    INDEX_FILE: 'index',
    OBJECT_TYPE: 'object',
    REQ_DETAIL_ACTION_TYPE: 'REQUEST_DETAILS_SUCCESS',
    REQ_LIST_ACTION_TYPE: 'REQUEST_LIST_SUCCESS',
    FATAL_ERROR_MESSAGE: "Fatal error!",
    API_CONNECTION_MESSAGE: '[%s] - %s - list items response: %s',
    API_DETAILS_CONNECTION_MESSAGE: '[%s] - %s - item details response: %s',
    DEATAILS_API_URI: (id) => {
      return `https://api.mercadolibre.com/items/${id}`
    },
    DEATAILS_API_URI_DESC: '/description',
    LIST_API_URI: (query) => {
      return `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    }
  };
  module.exports = Constants;