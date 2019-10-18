module.exports = [
  {
    url: '/get',
    method: 'get',
    do: async function (ctx) {
      ctx.body = '123';
    }
  },
  {
    url: '/post',
    method: 'post',
    do: async function (ctx) {
      ctx.body = { cc: 123 };
    }
  }
]