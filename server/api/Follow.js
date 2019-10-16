module.exports = [
  {
    url: '/get',
    method: 'get',
    do: async function (ctx) {
      console.log(ctx.params);
      ctx.body = '123';
    }
  },
  {
    url: '/post',
    method: 'post',
    do: async function (ctx) {
      ctx.body = 'post';
      console.log(ctx.params);
    }
  }
]