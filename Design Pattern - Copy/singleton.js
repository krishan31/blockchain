  
  
  // ***  SINGLETON ***//
const Singleton = ( () =>{
    let course;
    const assigncourse = () =>{
        const course = new Object('java');
        return course;
    }
    return{
        getinstance: ()=>{
            if (!course){
                course = assigncourse;
            }
            return course;
        }
    }
})();

const first = Singleton.getinstance();
const second = Singleton.getinstance();

if(first === second){
    console.log('Done');
}










// router.post('/login',(req, res, next) =>{
//     User.find({email: req.body.email})
//     .exec()
//     .then((user) =>{
//         if (user.length < 1) {
//             return res.status(401).json({
//                 message: "mail not found"
//             })
//         }
//         bcrypt.compare(req.body.password, user[0].password, (err,result) =>{
//             if(err) {
//                 return res.status(401).json({
//                     meassage: "Auth Failed"
//                 })
//             }
//             if (result) {
//               const token = jwt.sign(
//                   {
//                     email: user[0].email,
//                     userId: user[0]._id
//                   }
//                   , secret_Key, 
//                 {
//                     expiresIn:"1hr"
//                 }
//                 );
//                 return res.status(200).json({
//                     meassage: " Auth succesfull",
//                     token: token
//                 })
//             }
//             res.status(404).json({
//                 meassage: "failed"
//             })
//         })
//     })
//     .catch((err =>{
//         console.log(err);
//         res.status(505).json({
//             error :"message not found"
//         })
//     }));
// })









//protected routes ---create a middleware approach to check valid tokens
// const jwt = require('jsonwebtoken');


// module.exports = (req, res, next) => {
//     try{
//         const token = req.header.authorization.split(" ")[1];
//         const decoded = jwt.verify(token, process.env.JWT_KEY);
//         req.userData = decoded;
//         next();
//     }
//     catch(error) {
//         return res.status(401).json({
//             message: "auth failed"
//         });
//     }
    
    

// };


// const checkAuth = require("../models/auth/checkauth")