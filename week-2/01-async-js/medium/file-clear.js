const fs = require('fs').promises;


var clean = async ()=>{
    try {
        const fleHldr = await fs.open("./test.txt","a+")
        var data = await fleHldr.readFile('utf-8')
        var clearing = fleHldr.truncate(0)
        mod=data.replace(/\s+/g, ' ')
        await clearing
        await fleHldr.write(mod)
    }
    catch (e){
        console.log(e)
    }
}



clean()

