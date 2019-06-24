module.exports = {
    getFollowStatus:{
        url:'/follow',
        method:'get',
        do: async function(ctx,next){
            console.log(1);
            ctx.body = '123';
        }
    }
}