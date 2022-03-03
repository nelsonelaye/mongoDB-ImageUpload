const express = require( 'express' )
const { createUser } = require( './controller' )
const imageUploader = require( './multer')

const router = express.Router()
// METHOD ONE
// ROUTERS
// router.post( '/fuelStation', createFuel )
// router.get('/fuelStation', getAll)
// router.get('/fuelStation/:id', getOne)
// router.patch( '/fuelStation/:id', updateOne )
// router.delete( '/fuelStation/:id', deleteOne )


// METHOD TWO
// ROUTE WITHOUT ID
router
    .route( '/create' )
    // .get( getAll )
    .post( imageUploader, createUser)

// ROUTE WITH ID
// router
//     .route( '/fuelStation/:id' )
//     .get( getOne )
//     .patch( imageUploader, updateOne )
//     .delete( deleteOne )

module.exports = router
