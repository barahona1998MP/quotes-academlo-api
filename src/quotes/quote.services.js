const quoteControllers = require('./quote.controllers')

const getAllQuotes = (req, res) => {
/*     try {
        const data = quoteControllers.findAllQuotes()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({message: error.message})
    } */
    quoteControllers.findAllQuotes()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status.json({message: err.message})
        })
}

const getQuotesById = (req, res) => {
    const id = req.params.id
    quoteControllers.findQuotesById(id)
        .then((data) => {
            if(data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const postQuote = (req, res) => {
    const {quote, author, year} = req.body
    quoteControllers.createQuote({quote, author, year})
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const patchQuote = (req, res) => {
    const id = req.params.id
    const {quote, author, year} = req.body
    quoteControllers.updateQuote(id, {quote, author, year})
        .then(data => {
            if(data) {
                res.status(200).json({message: 'Quote modified succesfully' + id})
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const deleteQuote = (req, res) => {
    const id = req.params.id
    quoteControllers.deleteQuote(id)
        .then((data) => {
            if(data) {
                res.status(204).json({message: 'Quote Deleted Succesfully' + id})
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllQuotes,
    getQuotesById,
    postQuote,
    patchQuote, 
    deleteQuote
}