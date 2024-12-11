const express = require('express');
const expenseController = require('../controllers/expense')

const router = express.Router();

router.get('/',expenseController.getExpense);

router.post('/',expenseController.createExpense)

router.delete('/:id',expenseController.deleteExpense)

router.put('/:id',expenseController.editExpense)

router.get('/:id',expenseController.getExpenseById)

module.exports = router;