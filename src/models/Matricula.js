/* const { DataTypes, ForeignKeyConstraintError } = require('sequelize')
const { connection } = require('../database/connection')

const matricula = connection.define('matriculas', {
    nome: {
        type: DataTypes.STRING,
    },
    aluno_id: {
        type: DataTypes.INTEGER
    }
})

matricula.belongsToMany(Aluno)
matricula.belongsToMany(Curso)
Aluno.hasMany( matricula, { ForeignKey: 'id '})

module.exports = Curso
 */