module.exports = (sequelize, DataTypes) => {
	var Assessment = sequelize.define(
		"Assessment",
		{
			assessmentName: {
				type: DataTypes.STRING,
				allowNull: false
			},

			value: {
				type: DataTypes.INTEGER,
				allowNull: false
			}
		},
		{
			timestamps: true
		},
		{
			personId: {
				type: DataTypes.INTEGER,
				allowNull: false 
			}
		}
	);

	Assessment.associate = models => {
		Assessment.belongsTo(models.Person, {
			foreignKey: 'personId',
			onDelete: 'CASCADE',
			allowNull: false
		});
	};

	return Assessment;
};
