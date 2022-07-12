const {Router}=require("express")
const fileMiddleware=require("../multer/file")
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
router.post('/create',fileMiddleware.single('avatar'), async(req,res)=>{
console.log("Подключение к серверу прошло успешно")
console.log(req.body)
console.log(req.file)

const todo = new Todo({
    kandziword:req.body,
    photo:req.file
})
await todo.save()
res.json(req.body)

})
module.exports=router