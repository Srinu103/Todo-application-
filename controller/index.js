const date = require("../date.js");

var items = []; // Variables serving as local database instead of an actual database
var workÃ­tems = [];

async function getTodoList (req, res) {
    const today = date.getDate();
    const pageData = {
        listTitle: today,
        newListItems: items
      };

  res.render("list", pageData); //render from the list of view folder
}

async function createTodoItem (req, res) {
    const item = req.body.newItem;
    if (req.body.list && req.body.list === "Work") {
        workÃ­tems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

}

async function getWorkList (req, res) {
    const pageData = {
        listTitle: "Work List",
        newListItems: workÃ­tems
    };

    res.render("list", pageData);
}

module.exports = {getTodoList, getWorkList, createTodoItem};
