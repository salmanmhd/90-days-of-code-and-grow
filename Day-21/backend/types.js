const zod = require('zod');
const todoSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateSchema = zod.object({
  id: zod.string(),
});

module.exports = {
  todoSchema,
  updateSchema,
};
