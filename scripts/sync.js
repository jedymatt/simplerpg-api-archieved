const { sequelize } = require('../db/models');



(async () => {
    await sequelize.sync({ force: true });
})();