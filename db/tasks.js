var client = require('./connection')

module.exports = {
    async getTaksFromUserName(userName) {
        let result
        try {
            console.log("Getting user tasks from name")
            id = await client.query("SELECT pk_utilisateur_id FROM utilisateur WHERE nom = ($1) ", [userName])
            result = await client.query("SELECT pk_task_id, task_title, isdone FROM task WHERE fk_utilisateur_id = ($1)", [id.rows[0].pk_utilisateur_id])
        } catch(e) {
            console.log(e)
        } finally {
            return result
        }
    },

    async getAllTasks() {
        let result
        try {
            console.log("Getting all tasks")
            result = await client.query("SELECT * FROM task")            
        } catch(e) {
            console.log(e)
        } finally {
            return result
        }
    },

    async addTask(userName, taskTitle) {
        let result
        try {
            console.log("Add a task to database")
            idUser = await client.query("SELECT pk_utilisateur_id FROM utilisateur WHERE nom = ($1)", [userName])
            result = await client.query("INSERT INTO task(fk_utilisateur_id, task_title, isdone) VALUES ( ($1), ($2), ($3) )", [idUser.rows[0].pk_utilisateur_id, taskTitle, false]) 
            } catch(e) {
            console.log(e)
        } finally {
            return result
        }
    },

    async deleteTask(idTask) {
        let result
        try {
            console.log("Delete a task from database")            
            result = await client.query("DELETE FROM task WHERE pk_task_id = ($1)", [idTask])            
        } catch(e) {
            console.log(e)
        } finally {
            return result
        }
    },

    async editTask(taskTitle, pk_task_id) {
        let result
        try {
            console.log("Edit a task from database")            
            result = await client.query("UPDATE task SET task_title = ($1) WHERE pk_task_id = ($2)", [taskTitle, pk_task_id])            
        } catch(e) {
            console.log(e)
        } finally {
            return result
        }
    },

    async doneTask(pk_task_id) {
        let result
        try {
            console.log("Done a task from database")
            console.log(pk_task_id)            
            result = await client.query("UPDATE task SET isdone = ($1) WHERE pk_task_id = ($2)", [true, pk_task_id])            
        } catch(e) {
            console.log(e)
        } finally {
            return result
        }
    },

    async unDoneTask(pk_task_id) {
        let result
        try {
            console.log("unDone a task from database")
            console.log(pk_task_id)            
            result = await client.query("UPDATE task SET isdone = ($1) WHERE pk_task_id = ($2)", [false, pk_task_id])            
        } catch(e) {
            console.log(e)
        } finally {
            return result
        }
    }


}