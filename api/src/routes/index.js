const { Router } = require('express');
const testRoute = require('../../handlers/testRoute');

const router = Router();

router.get('/test', testRoute)

module.exports = router;
