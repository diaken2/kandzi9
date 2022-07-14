const {Router}=require("express")
const fileMiddleware=require("../multer/file")
const imgbbUploader = require("imgbb-uploader");
const router=Router()
const Todo=require("../schems/file")
const Kandji=require("../schems/file")
router.post("/temme",async(req,res)=>{
    console.log("Подключено к бэкэнду")
    const todos=await Todo.find({})
    res.json(todos)
    
    
})

// router.post('/create2',fileMiddleware.single('avatar'), (req,res)=>{
//     console.log("Файл", req.file)
//     res.json(req.file)
// })
router.post('/create',fileMiddleware.single('avatar'),(req,res)=>{
console.log("Подключение к серверу прошло успешно")
console.log(req.body)
console.log(req.file)

/* or use import in ESM projects:
import { imgbbUploader } from "imgbb-uploader"; 
*/

imgbbUploader("5e71f03e6521ab68c9a55e6b59526aa3", req.file.path)
  .then(async(response) => {
    const todo = new Todo({
        kandziword:req.body,
        photo:response.url
    })
    await todo.save()
  })
  .catch((error) => console.error(error));


res.json(req.body)

})
module.exports=router