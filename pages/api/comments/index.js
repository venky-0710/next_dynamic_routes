import { comments } from "../../../data/comments";

export default function handler(req, res) {
   // switch(req.method){
   //     case 'GET':

   //     case 'POST':
   //         const {comment} = req.body;
   //         const commentObj = {
   //             id: Date.now(),
   //             text:comment
   //         }
   //         comments.push(commentObj);
   //         res.status(201).json(commentObj);

   //     default:
   //         res.status(404);
   // }

   if (req.method === "GET") {
      res.status(200).json(comments);
   } else if (req.method === "POST") {
      const { comment } = req.body;
      const commentObj = {
         id: Date.now(),
         text: comment,
      };
      comments.push(commentObj);
      res.status(201).json(commentObj);
   }
}
