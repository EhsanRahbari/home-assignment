import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export default prisma;

// async function main() {
//    await prisma.product.create({
//         data:{
//             id:0,
//             name:"something",
//             quantity:30,
//             price_per_unit:20000,
//             orderId:0
//         }
//     })
// }