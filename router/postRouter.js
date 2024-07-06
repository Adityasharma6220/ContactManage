const {Router}=require("express")
const { addPost, fetchpost,fetchOne, updatePosts, deletePosts} = require("../controller/postController")

// const {authenticate} =require("../middleware/auth")
const router =Router()

router.post("/add",addPost)
router.get("/all",fetchpost) 
router.get("/one/:id",fetchOne)
router.patch("/update/:id",updatePosts)
router.delete("/delete/:id",deletePosts)
module.exports = router;