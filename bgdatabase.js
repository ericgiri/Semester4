/**
 * Created by bgiri0706 on 2/29/2016.
 */

function store_default_Email(){
    var email = $("#txtEmail").val();
    localStorage.setItem("DefaultEmail", $("#txtEmail").val());
    alert("Default Reviewer Email Saved: "+email);
}


/*var db;
function errorHandler(tx, error) {
    console.error("SQL Error: " + tx + "(" + error.code + ")--" + error.message);
}

function successTransaction() {
    console.info("Success: Transaction successful");
}

var DB = {
    createDatabase: function () {
        var shortName = "BGReviewDB";
        var version = "1.0";
        var displayName = "DB for Review";
        var dbsize = 2 * 1024 * 1024;
        console.info("Creating Database....");
        db = openDatabase(shortName, version, displayName, dbsize, dbCreateSuccess);
        function dbCreateSuccess() {
            console.info("Success: Database creating successful");
        }
    },
    createTable: function () {
        function successCreateTable() {
            console.info("Success: Table creation successful");
        }

        function txFunction(tx) {
            var option = [];
            console.info("Creating Table: BGReview ");
            var sql = "CREATE TABLE IF NOT EXISTS BGReview(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "businessName VARCHAR(20) NOT NULL," +
                "type VARCHAR(20) NOT NULL," +
                "dob DATE NOT NULL," +
                "isFriend VARCHAR(1));";
            tx.executeSql(sql, option, successCreateTable, errorHandler);

        }

        db.transaction(txFunction, errorHandler, successTransaction);

    }
};*/
