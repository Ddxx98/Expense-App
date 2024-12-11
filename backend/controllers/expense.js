const Expense = require('../models/expense')

module.exports.getExpense = (req,res)=>{
    Expense.findAll().then((expense)=>{
        //console.log(user)
        res.json(expense)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports.getExpenseById = (req,res)=>{
    Expense.findAll({where: {id:req.params.id}}).then((expense)=>{
        //console.log(user)
        res.json(expense[0])
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports.createExpense = (req,res)=>{
    const expense = JSON.parse(req.body.data)
    Expense.create({description:expense.description,category:expense.category,amount:expense.amount}).then((expense)=>{
        //console.log(user.dataValues)
        res.json(expense.dataValues)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports.deleteExpense = (req,res)=>{
    Expense.destroy({where:{id:req.params.id}}).then((expense)=>{
        //console.log(user)
        res.json(expense)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports.editExpense = (req,res)=>{
    Expense.create({where:{id:req.params.id}}).then((expense)=>{
        console.log(expense)
    }).catch((err)=>{
        console.log(err)
    })
}