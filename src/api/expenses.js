const { Router } = require('express');
const expenseService = require('../services/expensesService');

const router = Router();

// GET /api/expenses
router.get('/', async (req, res) => {
    const expenses = await expenseService.getExpenses();
    res.send(expenses);
});

// GET /api/expenses/:id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const expense = await expenseService.getExpenseById(id);
    res.send(expense);
});

// POST /api/expenses
router.post('/', async (req, res) => {
    const { body } = req;
    const expense = await expenseService.createExpense(body);
    res.send({ id: expense.insertedId });
});

// PATCH /api/expenses/:id
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const expense = await expenseService.updateExpense(id, body);
    res.send(expense);
});

// DELETE /api/expenses/:id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await expenseService.deleteExpense(id);
    res.sendStatus(200);
});

module.exports = router;
