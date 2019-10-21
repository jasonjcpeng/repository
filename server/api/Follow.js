module.exports = [
  {
    url: '/get',
    method: 'get',
    do: async function (ctx) {
      ctx.body = { cc: "get" };
    }
  },
  {
    url: '/post',
    method: 'post',
    do: async function (ctx) {
      ctx.body = { cc: 'post' };
    }
  }
]