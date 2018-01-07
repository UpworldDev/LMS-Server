module.exports = (sequelize, DataTypes) => {
	var Contact = sequelize.define(
		"Contact",
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			  },

			contactType: {
				type: DataTypes.INTEGER,
				allowNull: false
			},

			// revist this later for failure cases:
			// fail gracefully when contact type
			// goes inactive
			value: {
				type: DataTypes.STRING,
				allowNull: false
			}
		},
		{
			timestamps: true
		},
		{
			personId: {
				type: DataTypes.INTEGER
			}
		}
	);

	Contact.associate = models => {
		Contact.belongsTo(models.Person, {
			foreignKey: 'personId',
			onDelete: 'CASCADE',
			allowNull: false
		});
	};

	return Contact;
};
