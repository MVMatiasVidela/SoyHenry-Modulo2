const axios = require('axios')
const renderCards = require("./renderCards");

const getCards = async () => {
        const hola = 'hola'
        console.log(hola);

        try {
            const result = await axios.get("http://localhost:3000/movies")
            console.log(result.data);
          renderCards (result.data)
        } catch (error) {
            console.log(error.message);
        }
      }

      module.exports = getCards;