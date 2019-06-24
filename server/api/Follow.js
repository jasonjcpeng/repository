module.exports = {
    '/follow':{
        method:'get',
        do: async function(ctx,next){
            ctx.body = '123';
        }
    }
}