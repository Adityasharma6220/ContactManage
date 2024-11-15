const{Router}=require("express")
const {addUser,fetchUsers, fetchOne, updateUser, deleteUser, loginUser}=require("../controller/userController");
const {auth} =require("../middleware/auth")
const router =Router()
router.post("/add",addUser)
router.get("/all",fetchUsers)
router.get("/one/:id",fetchOne)

router.patch("/update/:id",updateUser)
router.delete("/delete/:id",deleteUser)
router.post("/login",loginUser)
module.exports= router;