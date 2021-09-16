const { Modifier, Attribute } = require('./db/models');

// (async () => {
//     const strength = await Attribute.create({ name: 'Strength' });
//     const angry = await Modifier.create({ prefix: 'Angry', rewardMultiplier: 0.05 });
//     await angry.addAttribute(strength, { through: { value: 200 } });
//     console.log(angry);
// })();

// (async () => {
//   // const strength = await Attribute.findOne({ where: { name: 'Strength' } });
//   const angry = await Modifier.findOne({
//     where: { name: 'Angry' },
//     include: Attribute
//   });
//   angry.Attributes[0].ModifierAttribute.value = 150;
//   console.log(angry.Attributes[0].ModifierAttribute.toJSON());
//   angry.Attributes[0].ModifierAttribute.save();

// })();


const fs = require('fs');
const models = fs
  .readdirSync('./db/models')
  .filter(file => file !== 'index.js');

console.log(models);
console.log(models.length);
