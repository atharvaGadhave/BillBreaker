const mongoose = require('mongoose');
const logger = require('../helper/logger');

const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://Anaya:anayagore8@anayagore.tgrsygc.mongodb.net/?retryWrites=true&w=majority&appName=AnayaGore';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    logger.info('DB Connection Established');
    console.log("DB Connected");
})
.catch(err => {
    logger.error(`DB Connection Fail | ${err.stack}`);
    console.log(err);
});


//const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const groupSchema = new mongoose.Schema({
    groupName: {
        type: String,
        required: true
    },
    groupDescription: String,
    groupCurrency: {
        type: String,
        default: "INR"
    },
    groupOwner: {
        type: String,
        required: true
    },
    groupMembers: {
        type: Array,
        required: true
    },
    groupCategory: {
        type: String,
        default: "Others"
    },
    groupTotal: {
        type: Number,
        default: 0
    },
    split: {
        type: Array
    }
});

const expenseSchema = new mongoose.Schema({
    groupId: {
        type: String,
        required: true
    },
    expenseName: {
        type: String,
        required: true
    },
    expenseDescription: String,
    expenseAmount: {
        type: Number,
        required: true
    },
    expenseCategory: {
        type: String,
        default: "Others"
    },
    expenseCurrency: {
        type: String,
        default: "INR"
    },
    expenseDate: {
        type: Date,
        default: Date.now
    },
    expenseOwner: {
        type: String,
        required: true
    },
    expenseMembers: {
        type: Array,
        required: true
    },
    expensePerMember: {
        type: Number,
        required: true
    },
    expenseType: {
        type: String,
        default: "Cash"
    }
});

const settlementSchema = new mongoose.Schema({
    groupId: {
        type: String,
        required: true
    },
    settleTo: {
        type: String,
        required: true
    },
    settleFrom: {
        type: String,
        required: true
    },
    settleDate: {
        type: String,
        required: true
    },
    settleAmount: {
        type: Number,
        required: true
    }
});

module.exports.User = mongoose.model('Useranaya', userSchema);
module.exports.Group = mongoose.model('Group', groupSchema);
module.exports.Expense = mongoose.model('Expense', expenseSchema);
module.exports.Settlement = mongoose.model('Settlement', settlementSchema);
