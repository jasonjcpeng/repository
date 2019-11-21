module.exports = [
  {
    url: '/get',
    method: 'get',
    do: async function (ctx) {
      const { args1 } = ctx.query;
      ctx.body = { result: `${args1} World` };
    }
  },
  {
    url: '/post',
    method: 'post',
    do: async function (ctx) {
      const { args1 } = ctx.request.body;
      ctx.body = { result: `${args1} World` };
    }
  }
]