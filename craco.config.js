const path=require('path')
let resolveDir=(dir)=>path.resolve(__dirname,dir)
module.exports={
    webpack:{
        alias:{
            '@':resolveDir('src'),
            'component':resolveDir('src/components')

        }
    }
}